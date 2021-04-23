const mongoose = require('mongoose');
const { Schema } = mongoose;

const stockSchema = new Schema(
  {
    Open: {type: Number, default: 0},
    Close: { type: Number, default: null},
    Date: { type: Date, default: Date.now() },
  },
  { versionKey: false },
);


const Stock = mongoose.model('stockRecord', stockSchema);

module.exports = Stock;
