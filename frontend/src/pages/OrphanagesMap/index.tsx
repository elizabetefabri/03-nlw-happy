
import mapMarkerImg from '../../assets/images/map-marker.svg';

import {Link} from "react-router-dom";
import {FiPlus} from "react-icons/fi";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './styles.css';
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

            <MapContainer
                center={[-22.2938275,-48.5579453]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>

            <Link to="/" className="create-orphanage">
                <FiPlus size={26} color="#fff"/>
            </Link>

        </div>
    )
}