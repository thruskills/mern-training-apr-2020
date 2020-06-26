const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const projectSchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    description: String,
    category: String,
    tags: String,
    coverImage: { data: Buffer, contentType: String },
    category: {
      type: ObjectId,
      ref: 'Category',
      required: true,
    },
    tags: [
      {
        type: ObjectId,
        ref: 'Tag',
        required: true,
      },
    ],
    createdBy: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
