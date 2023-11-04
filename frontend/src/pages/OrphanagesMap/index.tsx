import {Link} from "react-router-dom";
import {FiArrowRight, FiPlus} from "react-icons/fi";
import { Marker, Popup } from 'react-leaflet';

import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import './styles.css';
import Map from "../../Components/Map";

const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

export function OrphanagesMap(){
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
                <Marker icon={happyMapIcon} position={[-22.2774768,-48.5684985]} >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Nosso Lar
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff"/>
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={26} color="#fff"/>
            </Link>

        </div>
    )
}