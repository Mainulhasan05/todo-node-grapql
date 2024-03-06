const {getUsers,getUserById} =require('../controllers/userControllers');
const TodoModel=require('../models/TodoModel');
const resolvers = {
    Query: {
      hello: () => "world",
      books: () => books,
      users: async () => {
        const users = await getUsers();
        return users;
      },
      user: async (parent, args, context, info) => {
        const { id } = args;
        const user = await getUserById(id);
        return user;
      },
      todos: async () => {
        try {
          const todos = await TodoModel.findAll();
          return todos;
        } catch (error) {
          throw new Error('Could not fetch todos');
        }
      },
      todo: async (_, { id }) => {
        try {
          const todo = await TodoModel.findByPk(id);
          if (!todo) {
            throw new Error('Todo not found');
          }
          return todo;
        } catch (error) {
          throw new Error('Could not fetch todo');
        }
      }
      
    },
    Mutation: {
      createTodo: async (_, { input }) => {
        try {
          
          const todo = await TodoModel.create(input);
          return todo;
        } catch (error) {
          throw new Error('Could not create todo');
        }
      },
      updateTodo: async (_, { input }) => {
        try {
          const { id, ...updateData } = input;
          const todo = await TodoModel.findByPk(id);
          if (!todo) {
            throw new Error('Todo not found');
          }
          await todo.update(updateData);
          return todo;
        } catch (error) {
          throw new Error('Could not update todo');
        }
      },
      deleteTodo: async (_, { id }) => {
        try {
          const todo = await TodoModel.findByPk(id);
          if (!todo) {
            throw new Error('Todo not found');
          }
          await todo.destroy();
          return todo;
        } catch (error) {
          throw new Error('Could not delete todo');
        }
      }
    }

  };

module.exports = resolvers;