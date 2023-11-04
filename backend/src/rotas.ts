import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";

const rotas = Router();
const upload = multer(uploadConfig);

rotas.get("/orphanages", OrphanagesController.index);
rotas.get("/orphanages/:id", OrphanagesController.show);
rotas.post("/orphanages", upload.array('images'), OrphanagesController.create);

export default rotas;