const { gql } = require("apollo-server");

const query = gql`
  type Query {
    posts: [Post]
    post(id: ID!): Post
  }
`;

module.exports = query;
