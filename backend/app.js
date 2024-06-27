// backend/app.js

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para processar dados JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para servir a documentação Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas CRUD para gerenciamento de tarefas
app.use('/tasks', taskRoutes);

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
