const Food = require("../model/foodSchema");

const foodSave = async (req, res) => {
  const { title, content, time, shopOwner, file } = req.body;
  try {
    if (!time || !content || !title || !shopOwner) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const find = await Food.findOne({ shopOwner });
    if (find) {
      return res
        .status(409)
        .json({ message: "Food already register with this title" });
    }

    const food = new Food({
      title,
      content,
      time,
      shopOwner,
      file,
    });
    await food.save();
    return res.status(200).json({ message: "Food Saved in Db Successfully" });
  } catch (error) {
    return res.status(500).json({ message: `server error ${error}` });
  }
};

const getFood = async (req, res) => {
    try {
      const findFood = await Food.find();
      if (!findFood) {
        return res
          .status(409)
          .json({ message: "Problem in fecthing food" });
      }
      return res.status(200).json(findFood);
    } catch (error) {
      return res.status(500).json({ message: `server error ${error}` });
    }
  };

module.exports={ getFood, foodSave}