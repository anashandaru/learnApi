const Message = require("./messageModel");

exports.new = async (req, res, next) => {
  const newMessage = new Message({
    username: req.body.username,
    content: req.body.content,
    post_date: Date.now()
  });

  await newMessage.save((err) => {
    if (err) res.json(err);
    else res.json({ message: "New Message created", data: newMessage });
  });
};

exports.viewAll = async (req, res, next) => {
  const message = await Message.find().exec();
  res.json(message);
};

exports.view = async (req, res, next) => {
  let message;
  try {
    message = await Message.findById(req.params.message_id).exec();
  } catch (error) {
    res.json(error);
    return next(error);
  }
  res.json(message);
};

exports.delete = async (req, res, next) => {
  try {
    await Message.deleteOne({ _id: req.params.message_id }).exec();
  } catch (error) {
    res.json(error);
    return next(error);
  }
  res.json({ status: "message deleted" });
};

exports.update = async (req, res, next) => {
  let message;
  try {
    message = await Message.findById(req.params.message_id).exec();
    message.username = req.body.username ? req.body.username : message.username;
    message.content = req.body.content ? req.body.content : message.content;
    await message.save();
  } catch (error) {
    res.json(error);
    return next(error);
  }
  res.json({ status: "message updated", data: message });
};
