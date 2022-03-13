Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _express = require('express');

const _UserRoutes = _interopRequireDefault(require('./UserRoutes'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/user', _UserRoutes.default);
router.route('/').get((req, res) => {
  res.send('Made with 💚 and &lt; &#x0002F; &gt; by CITi');
});
const _default = router;
exports.default = _default;
