const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  username: { type: String, required: true },
  post_date: Date,
  content: { type: String, required: true },
});

module.exports = mongoose.model('Message', messageSchema);
// const Message = (module.exports = mongoose.model("message", messageSchema));
// module.exports.get = (callback, limit) => {
//   Message.find(callback).limit(limit);
// };