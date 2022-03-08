"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _controllers = require("../controllers");

const userRouter = (0, _express.Router)();
userRouter.route('/').post(_controllers.PokemonController.create);
userRouter.route('/:userId').get(_controllers.PokemonController.read).delete(_controllers.PokemonController.delete).patch(_controllers.PokemonController.patch);
var _default = userRouter;
exports.default = _default;