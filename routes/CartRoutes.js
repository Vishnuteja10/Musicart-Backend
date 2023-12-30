const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCartItems,
  removeCartItems,
} = require("../Controllers/Cart");
const VerifyAuthentication = require("../Middlewares/VerifyAuthentication");

router.route("/add-to-cart").post(VerifyAuthentication, addToCart);

router.route("/get-cartitems").get(getCartItems);

router.route("/clear-cartitems").delete(removeCartItems);

module.exports = router;