const Router=require("express");
const { getToDos } = require("../controller/ToDoController");

const router=Router();
//grt all the todos

router.get("/get",getToDos);
// router.post("/save",saveToDo);


module.exports = router;