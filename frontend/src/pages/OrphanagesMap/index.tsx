import {Link} from "react-router-dom";
import {FiArrowRight, FiPlus} from "react-icons/fi";
import { Marker, Popup} from 'react-leaflet';
//import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../../assets/images/map-marker.svg';

import Map from "../../Components/Map";

import './styles.css';
import mapIcon from "../../utils/mapIcon.ts";
import {useEffect, useState} from "react";
import api from "../../services/api.ts";

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

export function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    },[]);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>Jahu</span>
                </footer>
            </aside>

            <Map>
                {orphanages.map(orphanage => {
                    return(
                        <Marker
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude,orphanage.longitude]}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff"/>
                                </Link>
                            </Popup>
                        </Marker>
                    )

                })}
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={26} color="#fff"/>
            </Link>

        </div>
    )
}