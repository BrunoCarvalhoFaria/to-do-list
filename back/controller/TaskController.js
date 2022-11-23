const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try{
    const tasksList = await Task.find();    
    return res.send(tasksList);
  } catch (err) {
    res.status(500).send({error: err.message});
  }  
};

const createTask = async (req, res) => {
  const task = req.body;
  console.log(task)
  if(!task.name){       
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({error: err.message});
  }
};

const getById = async (req, res) => {
  try {
    const task = await Task.findOne({_id: req.params.id});
    const tasksList = await Task.find();

    res.status(200).send({task, tasksList});
  } catch (err) { 
    res.status(500).send({error: err.message});
  }
}

const updateTask = async (req, res) => {
  try{
    const task = req.body;

    await Task.updateOne({_id: req.params.id}, task);
    res.redirect("/");
  } catch  (err) {
    res.status(500).send({error: err.message});
  }
}

const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({_id: req.params.id});
    res.redirect("/");
  }catch (err) {
    res.status(500).send({error: err.message});
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateTask,
  deleteTask
};