const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: [true, 'Todo is required']
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'User is required']
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
