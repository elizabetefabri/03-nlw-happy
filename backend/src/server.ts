import express from "express";
import path from "path";
import cors from "cors";

import "express-async-errors";

import "./database/connection";

import rotas from "./rotas";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors(
  // origin: 'http://localhost:3000'
  
));
app.use(express.json());
app.use(rotas);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);