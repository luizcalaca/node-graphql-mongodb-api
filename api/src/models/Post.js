const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: String,
  comments: {
    description: String,
  },
});

module.exports = mongoose.model("Post", PostSchema);
