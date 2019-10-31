"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.rus = exports.eu = exports.cash = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
var cash = sponsors.cash,
    eu = sponsors.eu,
    rus = sponsors.rus;
exports.rus = rus;
exports.eu = eu;
exports.cash = cash;

var calcCash = function calcCash() {
  for (var _len = arguments.length, own = new Array(_len), _key = 0; _key < _len; _key++) {
    own[_key] = arguments[_key];
  }

  var total = own[1].reduce(function (firstVal, lastVal) {
    return firstVal + lastVal;
  }, own[0]);
  return total;
};

var money = calcCash(null, cash);
exports.money = money;