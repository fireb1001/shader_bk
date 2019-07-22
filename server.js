import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import faker from "faker";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static("public"));

db.sequelize.sync().then(async () => {
  /**@type {import('sequelize').ModelType} */
  /*
  const users = require('./models').users
  const body = {
    username: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.name.firstName()
  }
  let newUser = await users.create(body)
  */
  app.listen({ port: 8083 }, () =>
    console.log(`🚀 Server ready at http://localhost:8083${server.graphqlPath}`)
  );
});