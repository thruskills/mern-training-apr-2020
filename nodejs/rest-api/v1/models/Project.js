const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: String,
    photo: { data: Buffer, contentType: String },

    coverImage: {},

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
