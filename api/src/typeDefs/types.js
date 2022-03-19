const { gql } = require("apollo-server");

const types = gql`
  type Post {
    id: ID!
    name: String
    comments: Comments
  }

  type Comments {
    description: String
  }
`;

module.exports = types;
