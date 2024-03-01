const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = `#graphql
  type Book {
    name: String
    author: String
  }
  type Query {
    hello: String
    books: [Book]
    vungChung(author:String): [Book]
  }
`;

const books = [
  {
    name: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    name: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const resolvers = {
  Query: {
    hello: () => "world",
    books: () => books,
    vungChung: async (parent, args, context, info) => {
      
      const { author } = args;
      const result = books.filter((book) => book.author === author);
      return result;
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const startServer=async()=>{
  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT || 4000},
  });
  
  console.log(`Server ready at: ${url}`);
}

startServer();