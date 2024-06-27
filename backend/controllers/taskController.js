// backend/controllers/taskController.js

let tasks = [];
let currentId = 1;

// Listar todas as tarefas
const getAllTasks = (req, res) => {
    res.json(tasks);
};

// Obter uma tarefa pelo ID
const getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(task => task.id === id);
    if (!task) {
        res.status(404).json({ error: 'Tarefa não encontrada' });
    } else {
        res.json(task);
    }
};

// Criar uma nova tarefa
const createTask = (req, res) => {
    const { descricao } = req.body;
    const newTask = {
        id: currentId++,
        descricao
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Atualizar uma tarefa pelo ID
const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const { descricao } = req.body;
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'Tarefa não encontrada' });
    } else {
        tasks[index].descricao = descricao;
        res.json(tasks[index]);
    }
};

// Deletar uma tarefa pelo ID
const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'Tarefa não encontrada' });
    } else {
        const deletedTask = tasks.splice(index, 1);
        res.json({ message: 'Tarefa deletada com sucesso', deletedTask });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
