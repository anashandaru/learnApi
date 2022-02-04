Message = require("./messageModel");

exports.new = (req, res) => {
  var message = new Message();
  message.username = req.body.username;
  message.content = req.body.content;
  message.post_date = Date.now();

  message.save((err) => {
    if (err) res.json(err);
    else res.json({ message: "New Message created", data: message });
  });
};

exports.viewAll = (req, res) => {
  Message.get((err, messages) => {
    if (err) res.json(err);
    else
      res.json({
        status: "Messages retrieved successfully",
        data: messages,
      });
  });
};

exports.view = (req, res) => {
  Message.findById(req.params.message_id, (err, message) => {
    if (err) res.json(err);
    else res.json({ status: "Sending message detail", data: message });
  });
};

exports.delete = (req, res) => {
  Message.remove({ _id: req.params.message_id }, (err, message) => {
    if (err) res.json(err);
    else res.json({ status: "contact deleted" });
  });
};

exports.update = (req, res) => {
  Message.findById(req.params.message_id, (err, message) => {
    if (err) res.json(err);
    else {
      message.username = req.body.username;
      message.content = req.body.content;
      message.save((err) => {
        if (err) res.json(err);
        else {
          res.json({ status: "Message updated", data: message });
        }
      });
    }
  });
};
