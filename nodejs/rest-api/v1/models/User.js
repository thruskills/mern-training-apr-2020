const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, index: true },
    hashedPassword: { type: String, required: true },
    role: { type: String, default: 'user' }, // default is user/admin
    username: String, // unique - randomly generate shortId
    apiKey: { type: String, required: true, index: true },

    createdBy: {
      type: ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
