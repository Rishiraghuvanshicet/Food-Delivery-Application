const mongoose =require('mongoose');
const Schema = mongoose.Schema

const foodSchema = new Schema(
  {
    title: {
      type: String,
      requir: true,
    },
    content: {
      type: String,
      required: true,
    },
    shopOwner: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    file:{
      type:String,
    }
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
