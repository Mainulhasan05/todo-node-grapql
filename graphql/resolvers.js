const {getUsers} =require('../controllers/userControllers');
const resolvers = {
    Query: {
      hello: () => "world",
      books: () => books,
      users: async () => {
        const users = await getUsers();
        return users;
      },
      vungChung: async (parent, args, context, info) => {
        
        const { author } = args;
        const result = books.filter((book) => book.author === author);
        return result;
      }
    },
  };

module.exports = resolvers;