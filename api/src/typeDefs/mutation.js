const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createPost(post: PostInput): Post
    updatePost(id: String, post: PostInput): Post
    deletePost(id: String): Post
  }

  input PostInput {
    name: String
    comments: CommentsInput
  }

  input CommentsInput {
    description: String
  }
`;

module.exports = mutation;
