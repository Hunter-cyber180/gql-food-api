// * ---- Packages ----
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

// * ---- Resolvers ----
const rootResolvers = require("./graphql/index.resolver");

// * ---- Schema ----
const schema = require("./graphql/index.schema");

// ** ---- DotEnv ----
require("dotenv").config();

// * Create App
const app = express();

// * ---- Mongoose Connection ----
mongoose.connect("mongodb://127.0.0.1/graphql-food-api");
mongoose.connection.once("open", () => {
    console.log(`Connect to DB successfully`);
});

const run = async () => {
  const server = new ApolloServer({ typeDefs: schema, rootResolvers });
  await server.start();

  server.applyMiddleware({ app });
};

run();

// * ---- Listening ----
app.listen(8000, "127.0.0.1", () => console.log(`Server running on localhost:8000`));
