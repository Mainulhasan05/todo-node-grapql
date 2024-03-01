const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
require('dotenv').config();
const db = require('./db_config/db');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

db.sync().then(() => {
    console.log("Database connected");
    }).catch((err) => {
    console.log("Error connecting to database", err);
    }
);



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