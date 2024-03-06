const router=require('express').Router();
const {getUsers,getUserById} =require('../controllers/userControllers');
const {createUser,updateUser,deleteUser} =require('../controllers/userControllers');
const {getTodos,getTodoById} =require('../controllers/todoControllers');
const {createTodo,updateTodo,deleteTodo} =require('../controllers/todoControllers');

router.get('/users',getUsers);
router.get('/user/:id',getUserById);

router.post('/user',createUser);
router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);

router.get('/todos',getTodos);
router.get('/todo/:id',getTodoById);

router.post('/todo',createTodo);
router.put('/todo/:id',updateTodo);
router.delete('/todo/:id',deleteTodo);

module.exports=router;