const mongoose = require("mongoose");
const schemaTarefa = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: Boolean,
    },
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model("Tarefa", schemaTarefa);
