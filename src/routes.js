const express = require('express');
const routes = express.Router();

const AppController = require("./controllers/AppController");

// Criando rotas
routes.post("/buscar", AppController.buscar);

module.exports = routes;