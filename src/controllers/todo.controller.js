const Todo = require("../models/todo.model");
const Io = require("../utils/io");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

const todosDB = new Io(`${process.cwd()}/database/todos.json`);