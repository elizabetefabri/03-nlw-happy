import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'), // Caminho para a pasta uploads
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`; // Nome do arquivo
      cb(null, fileName); // Retorna o nome do arquivo
    }})
}