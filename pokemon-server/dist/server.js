"use strict";

require("dotenv/config");

var _app = _interopRequireDefault(require("./app"));

require("reflect-metadata");

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(process.env.PORT || 3001, () => {
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 3001}`);
});