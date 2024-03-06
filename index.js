const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const {expressMiddleware} = require('@apollo/server/express4');
const express = require('express');
require('dotenv').config();
const cors=require('cors');
const db = require('./db_config/db');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();

db.sync().then(() => {
    console.log("Database connected");
    }).catch((err) => {
    console.log("Error connecting to database", err);
    }
);


app.get('/', (req, res) => {
  res.send('Welcome to the Apollo Server');
});


const server = new ApolloServer({
  typeDefs,
  resolvers,
});



const startServer=async()=>{
  await server.start();
  app.use('/graphql',cors(),express.json(),expressMiddleware(server));

  app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    )
  );
  // const { url } = await startStandaloneServer(server, {
  //   listen: { port: process.env.PORT || 4000},
  // });
  
  // console.log(`Server ready at: ${url}`);
}

startServer();