const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    description: String,
    category: String,
    tags: String,
    coverImage: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
// name of the model is Project
// collection name will always be plural - projects
