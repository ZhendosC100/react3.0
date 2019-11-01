"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _calc = require("./parts/calc");

var _employers = require("./parts/employers");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness(_ref) {
    var _ref$owner = _ref.owner,
        owner = _ref$owner === void 0 ? null : _ref$owner,
        _ref$director = _ref.director,
        director = _ref$director === void 0 ? 'Victor' : _ref$director,
        _ref$cash = _ref.cash,
        cash = _ref$cash === void 0 ? 10000 : _ref$cash,
        _ref$emp = _ref.emp,
        emp = _ref$emp === void 0 ? '' : _ref$emp,
        _ref$eu = _ref.eu,
        eu = _ref$eu === void 0 ? ['us'] : _ref$eu;

    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
    this.eu = eu;
  }

  _createClass(MakeBusiness, [{
    key: "showResult",
    value: function showResult() {
      var sumSponsors = [].concat(_toConsumableArray(this.eu), ['unexpected sponsor']);
      console.log("We have a buisness. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our emplouers: ").concat(this.emp, " \n And we have a sponsors:\n ").concat((null, sumSponsors), " \n Note. Be careful with ").concat(this.eu[0], ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

var makeBusiness = new MakeBusiness({
  owner: 'Sam',
  cash: _calc.money,
  eu: _calc.eu,
  emp: _employers.employersNames
});
makeBusiness.showResult();