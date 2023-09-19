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
    .catch((err)=>{
      console.log(err);
    res.send({error:err,msg:"somthing went wrong"});
  });
  };


  module.exports.updateToDo = (req, res) => {
    const { id } = req.params;
    const { toDo } = req.body;
  
    ToDoModels.findByIdAndUpdate(id, { toDo })
      .then(() => {
        res.send("Updated Successfully....");
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
      });
  };
  
  module.exports.deleteToDo = (req, res) => {
    const { id } = req.params;
  
    ToDoModels.findByIdAndDelete(id)
      .then(() => {
        res.send("Deleted Successfully....");
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went wrong!" });
      });
  };