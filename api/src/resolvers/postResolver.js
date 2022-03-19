const Post = require("../models/Post");

const postResolver = {
  Query: {
    posts() {
      return Post.find();
    },
    post(_, { id }) {
      return Post.findById(id);
    },
  },
  Mutation: {
    createPost(_, { post }) {
      const newPost = new Post(post);
      return newPost.save();
    },
    updatePost(_, { id, post }) {
      return Post.findByIdAndUpdate(id, post, {
        new: true,
      });
    },
    deletePost(_, { id }) {
      return Post.findByIdAndRemove(id);
    },
  },
};

module.exports = postResolver;
