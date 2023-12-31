import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Landing} from "./pages/Landing";
import {CreateOrphanage} from "./pages/CreateOrphanage";
import {Orphanage} from "./pages/Orphanage";
import {OrphanagesMap} from "./pages/OrphanagesMap";



export function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/app" element={<OrphanagesMap />} />

                <Route path="/orphanages/create" element={<CreateOrphanage />} />
                <Route path="/orphanages/:id" element={<Orphanage />} />
            </Routes>
        </BrowserRouter>
    )
}