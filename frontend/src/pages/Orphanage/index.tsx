

import {FaWhatsapp} from "react-icons/fa";
import {FiClock, FiInfo} from "react-icons/fi";
import {Marker} from "react-leaflet";

import mapMarkerImg from '../../assets/images/map-marker.svg';
import Map from "../../Components/Map";
import L from "leaflet";

import './styles.css';
import PrimaryButton from "../../Components/PrimaryButton";
import {Link} from "react-router-dom";
import Sidebar from "../../Components/Sidebar";

const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default function Orphanage() {
    return (
        <div id="page-orphanage">
            <Sidebar />
            <main>
                <div className="orphanage-details">
                    <img src="https://i.imgur.com/0c4yU4P.png" alt="Lar das meninas" />

                    <div className="images">
                        <button className="active" type="button">
                            <img src="https://i.imgur.com/FLau5i8.png" alt="Lar das meninas" />
                        </button>
                        <button type="button">
                            <img src="https://i.imgur.com/0c4yU4P.png" alt="Lar das meninas" />
                        </button>
                        <button type="button">
                            <img src="https://i.imgur.com/qF0iWkr.png" alt="Lar das meninas" />
                        </button>
                        <button type="button">
                            <img src="https://i.imgur.com/7e5dDEr.png" alt="Lar das meninas" />
                        </button>

                    </div>

                    <div className="orphanage-details-content">
                        <h1>Associação das Senhoras Cristãs Nosso Lar</h1>
                        <p>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</p>

                        <div className="map-container">
                            <Map
                                interactive={false}
                                center={[-22.2774768,-48.5684985]}
                                zoom={16}
                                style={{ width: '100%', height: 280 }}
                            >
                                <Marker interactive={false} icon={happyMapIcon} position={[-22.2774768,-48.5684985]} />
                            </Map>

                            <footer>
                                <Link to="">Ver rotas no Google Maps</Link>
                            </footer>
                        </div>

                        <hr />

                        <h2>Instruções para visita</h2>
                        <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

                        <div className="open-details">
                            <div className="hour">
                                <FiClock size={32} color="#15B6D6" />
                                Segunda à Sexta <br />
                                8h às 18h
                            </div>
                            <div className="open-on-weekends">
                                <FiInfo size={32} color="#39CC83" />
                                Atendemos <br />
                                fim de semana
                            </div>
                        </div>

                        <PrimaryButton type="button">
                            <FaWhatsapp size={20} color="#FFF" />
                            Entrar em contato
                        </PrimaryButton>
                    </div>
                </div>
            </main>
        </div>
    );
}