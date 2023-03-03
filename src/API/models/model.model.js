const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema(
  {
    model: { type: String, required: true, trim: true },
    hp: { type: Number, required: true, trim: true },
    year: {
      type: Date,
      default: 2023,
      required: false,
      trim: true,
      validate: {
        validator: (v) =>
          v instanceof Date &&
          v.getFullYear() >= 1900 &&
          v.getFullYear() <= 2100,
        message: 'Year between 1900 & 2100',
      },
    },
  },
  {
    timestamps: true,
  }
);

const Model = mongoose.model('Model', ModelSchema);
module.exports = Model;
