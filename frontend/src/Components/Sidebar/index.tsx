import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import mapMarkerImg from "../../assets/images/map-marker.svg";

import './styles.css';

export default function Sidebar() {
    const navigate = useNavigate(); // Obtenha a função de navegação

    function voltar() {
        navigate(-1); // Use a função de navegação para navegar para a página anterior
    }

    return (
        <aside className="sidebar">
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
                <button type="button" onClick={voltar}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    );
}
