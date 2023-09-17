const ToDoModels = require("../models/ToDoModels");

module.exports.getToDos = async (req, res) => {
    const toDos = await ToDoModel.find();
    res.send(toDos);
  };