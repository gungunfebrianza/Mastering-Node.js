/**
 * @fileOverview Javascript high precision calculate
 * @author GGF (gungunfebrianza@gmail.com)
 * @version 0.1
 *
 * 0.05 + 0.01  //0.060000000000000005
 * 1.0 - 0.42  //0.5800000000000001
 * 4.015 * 100  //401.49999999999994
 * 123.3 / 100 //1.2329999999999999
 *
 * calc.add(0.05, 0.01) //0.06
 * calc.sub(1.0, 0.42)  //0.58
 * calc.mul(4.015, 100) //401.5
 * calc.div(123.3, 100) //1.233
 */

/**
 *@namespace calc
 */

(function(exports) {
  /**
   * Addition
   * @param {Number} num1
   * @param {Number} num2
   * @return {Number} result
   */
  exports.add = function(num1, num2) {
    var baseNum, baseNum1, baseNum2;
    try {
      baseNum1 = num1.toString().split('.')[1].length;
    } catch (e) {
      baseNum1 = 0;
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length;
    } catch (e) {
      baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
  };

  /**
   * Subtraction
   * @param {Number} num1
   * @param {Number} num2
   * @return {Number} result
   */
  exports.sub = function(num1, num2) {
    var baseNum, baseNum1, baseNum2;
    var precision;
    try {
      baseNum1 = num1.toString().split('.')[1].length;
    } catch (e) {
      baseNum1 = 0;
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length;
    } catch (e) {
      baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
    return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
  };

  /**
   * Multiplication
   * @param {Number} num1
   * @param {Number} num2
   * @return {Number} result
   */
  exports.mul = function(num1, num2) {
    var baseNum = 0;
    try {
      baseNum += num1.toString().split('.')[1].length;
    } catch (e) {}
    try {
      baseNum += num2.toString().split('.')[1].length;
    } catch (e) {}
    return (
      (Number(num1.toString().replace('.', '')) *
        Number(num2.toString().replace('.', ''))) /
      Math.pow(10, baseNum)
    );
  };
  /**
   * Division
   * @param {Number} num1
   * @param {Number} num2
   * @return {Number} result
   */
  exports.div = function(num1, num2) {
    var baseNum1 = 0,
      baseNum2 = 0;
    var baseNum3, baseNum4;
    try {
      baseNum1 = num1.toString().split('.')[1].length;
    } catch (e) {
      baseNum1 = 0;
    }
    try {
      baseNum2 = num2.toString().split('.')[1].length;
    } catch (e) {
      baseNum2 = 0;
    }
    baseNum3 = Number(num1.toString().replace('.', ''));
    baseNum4 = Number(num2.toString().replace('.', ''));
    return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
  };
})(typeof exports === 'undefined' ? (this.calc = {}) : exports);
