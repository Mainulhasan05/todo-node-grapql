const TodoModel=require('../models/TodoModel');
const UserModel=require('../models/UserModel');
// Get all todos
exports.getAllTodos = async (req, res) => {
    try {
      const todos = await Todo.findAll();
      res.json(todos);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Create a new todo
  exports.createTodo = async (req, res) => {
    const { taskTitle, activeStatus, progress, priority, createdBy } = req.body;
    try {
      const newTodo = await Todo.create({
        taskTitle,
        activeStatus,
        progress,
        priority,
        createdBy
      });
      res.status(201).json(newTodo);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Get a single todo by ID
  exports.getTodoById = async (req, res) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.json(todo);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Update a todo by ID
  exports.updateTodoById = async (req, res) => {
    const { id } = req.params;
    const { taskTitle, activeStatus, progress, priority, createdBy } = req.body;
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      todo.taskTitle = taskTitle;
      todo.activeStatus = activeStatus;
      todo.progress = progress;
      todo.priority = priority;
      todo.createdBy = createdBy;
      await todo.save();
      res.json(todo);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Delete a todo by ID
  exports.deleteTodoById = async (req, res) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      await todo.destroy();
      res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  