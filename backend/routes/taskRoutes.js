// backend/routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retorna todas as tarefas
 *     responses:
 *       '200':
 *         description: Lista de tarefas
 */
router.get('/', taskController.getAllTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Retorna uma tarefa específica pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Tarefa encontrada
 *       '404':
 *         description: Tarefa não encontrada
 */
router.get('/:id', taskController.getTaskById);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *             example:
 *               descricao: Tarefa exemplo
 *     responses:
 *       '201':
 *         description: Tarefa criada com sucesso
 */
router.post('/', taskController.createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualiza uma tarefa existente pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *             example:
 *               descricao: Tarefa atualizada
 *     responses:
 *       '200':
 *         description: Tarefa atualizada com sucesso
 *       '404':
 *         description: Tarefa não encontrada
 */
router.put('/:id', taskController.updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Deleta uma tarefa existente pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Tarefa deletada com sucesso
 *       '404':
 *         description: Tarefa não encontrada
 */
router.delete('/:id', taskController.deleteTask);

module.exports = router;
