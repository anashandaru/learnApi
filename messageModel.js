const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  username: String,
  post_date: Date,
  content: String,
});

const Message = (module.exports = mongoose.model("message", messageSchema));
module.exports.get = (callback, limit) => {
  Message.find(callback).limit(limit);
};