const ToDoModels = require("../models/ToDoModels");

module.exports.getToDos = async (req, res) => {
    const toDos = await ToDoModels.find();
    res.send(toDos);
  };

  module.exports.saveToDo =  (req, res) => {
    const {toDo}=req.body;
    ToDoModels.create({toDo})
    .then((data)=>{
      console.log("saved successfully");
      res.status(201).send(data);
    })
    .catch((err)=>console.log(err));
  };