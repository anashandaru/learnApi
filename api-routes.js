const router = require("express").Router();
const messageController = require("./messageController");

router.get("/", (req, res) => {
  res.json({
    status: "API is Working",
    message: "Welcome to my simple API demo!",
  });
});

// message routes
router
  .route("/messages/:message_id")
  .get(messageController.view)
  .delete(messageController.delete)
  .patch(messageController.update);
  
router
  .route("/messages")
  .get(messageController.viewAll)
  .post(messageController.new);


// Export API routes
module.exports = router;
