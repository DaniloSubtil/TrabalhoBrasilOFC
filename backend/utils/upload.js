// backend/utils/upload.js

const multer = require('multer');
const AWS = require('aws-sdk');

// Configuração do SDK da AWS para S3
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Configuração do Multer para armazenar os arquivos no S3
const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        // Lógica para filtro de tipo de arquivo, se necessário
        cb(null, true);
    },
});

module.exports = upload;
