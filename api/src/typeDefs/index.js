const query = require("./query");
const mutation = require("./mutation");
const types = require("./types");

const typeDefs = [query, mutation, types];

module.exports = typeDefs;
