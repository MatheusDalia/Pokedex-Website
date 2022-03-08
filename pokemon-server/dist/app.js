"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _docs = _interopRequireDefault(require("./docs"));

var _middlewares = require("./middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_routes.default);
app.use('/docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_docs.default));
app.use(_middlewares.errorHandler);
app.use(_middlewares.requestHandler);
var _default = app;
exports.default = _default;