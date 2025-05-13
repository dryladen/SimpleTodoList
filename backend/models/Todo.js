const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: [true, 'Todo is required']
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
