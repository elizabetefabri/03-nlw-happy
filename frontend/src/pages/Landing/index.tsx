import {Link} from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import {FiArrowRight} from "react-icons/fi";

import './styles.css';

export function Landing(){
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Logo Happy" />
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>
                <div className="location">
                    <strong>São Paulo</strong>
                    <span>Jaú</span>
                </div>
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </Link>
            </div>
        </div>
    )
}