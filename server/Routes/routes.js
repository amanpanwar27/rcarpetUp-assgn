const express = require('express');
const taskcontroller = require('../controllers/taskcontroller');
const Route = express.Router();
Route.post("/addtask",taskcontroller.addtaskcontroller);
Route.post("/addlist",taskcontroller.addlistcontroller);
module.exports = Route;