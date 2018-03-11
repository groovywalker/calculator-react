var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_React$Component) {
  _inherits(Screen, _React$Component);

  function Screen() {
    _classCallCheck(this, Screen);

    return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).apply(this, arguments));
  }

  _createClass(Screen, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'h1',
          { className: 'col card text-right numScreen' },
          '0'
        )
      );
    }
  }]);

  return Screen;
}(React.Component);

var Buttons = function (_React$Component2) {
  _inherits(Buttons, _React$Component2);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  _createClass(Buttons, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'row text-center' },
          React.createElement(
            'div',
            { className: 'col' },
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'nine' },
              '9'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'eight' },
              '8'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'seven' },
              '7'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'add' },
              '+'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row text-center' },
          React.createElement(
            'div',
            { className: 'col' },
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'six' },
              '6'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'five' },
              '5'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'four' },
              '4'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'subtract' },
              '-'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row text-center' },
          React.createElement(
            'div',
            { className: 'col' },
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'three' },
              '3'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'two' },
              '2'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'one' },
              '1'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'multiply' },
              'x'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row text-center' },
          React.createElement(
            'div',
            { className: 'col' },
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'zero' },
              '0'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'clear' },
              'clear'
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'equal' },
              '='
            ),
            React.createElement(
              'button',
              { className: 'btn btn-outline-primary btn-lg', id: 'divide' },
              '/'
            )
          )
        )
      );
    }
  }]);

  return Buttons;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container jumbotron' },
        React.createElement(Screen, null),
        React.createElement(Buttons, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

/*
Simple Calculator that can add, subtract, multiply, and divide two numbers, but can mostly chain operations together "num operator num equals result...result operator num equals result...etc"
*/

var main = function main() {

  var numbersLeft = [];
  var numbersRight = [];

  var numRight = 0;
  var numLeft = 0;
  // var result = 0

  var nine = 9;
  var eight = 8;
  var seven = 7;
  var six = 6;
  var five = 5;
  var four = 4;
  var three = 3;
  var two = 2;
  var one = 1;
  var zero = 0;

  var adding = false;
  var subtract = false;
  var multiply = false;
  var divide = false;

  // Number Presses
  $("#nine").click(function () {
    if (adding == true || subtract == true || multiply == true || divide == true) {
      numbersRight.push(nine);
      numRight = +numbersRight.join('');
      $(".numScreen").text(numRight);
    } else {
      numbersLeft.push(nine);
      numLeft = +numbersLeft.join('');
      $(".numScreen").text(numLeft);
    }
  });
  $("#eight").click(function () {
    if (adding == true || subtract == true || multiply == true || divide == true) {
      numbersRight.push(eight);
      numRight = +numbersRight.join('');
      $(".numScreen").text(numRight);
    } else {
      numbersLeft.push(eight);
      numLeft = +numbersLeft.join('');
      $(".numScreen").text(numLeft);
    }
  });
  $("#seven").click(function () {
    if (adding == true || subtract == true || multiply == true || divide == true) {
      numbersRight.push(seven);
      numRight = +numbersRight.join('');
      $(".numScreen").text(numRight);
    } else {
      numbersLeft.push(seven);
      numLeft = +numbersLeft.join('');
      $(".numScreen").text(numLeft);
    }
  });

  $("#six").click(function () {
    if (adding == true || subtract == true || multiply == true || divide == true) {
      numbersRight.push(six);
      numRight = +numbersRight.join('');
      $(".numScreen").text(numRight);
    } else {
      numbersLeft.push(six);
      numLeft = +numbersLeft.join('');
      $(".numScreen").text(numLeft);
    }
  });
  $("#five").click(function () {
    if (adding == true || subtract == true || multiply == true || divide == true) {
      numbersRight.push(five);
      numRight = +numbersRight.join('');
      $(".numScreen").text(numRight);
    } else {
      numbersLeft.push(five);
      numLeft = +numbersLeft.join('');
      $(".numScreen").text(numLeft);
    }
  });
  $("#four").click(function () {
    if (adding == true || subtract == true || multiply == true || divide == true) {
      numbersRight.push(four);
      numRight = +numbersRight.join('');
      $(".numScreen").text(numRight);
    } else {
      numbersLeft.push(four);
      numLeft = +numbersLeft.join('');
      $(".numScreen").text(numLeft);
    }
  });
  $("#three").click(function () {
    if (adding == true || subtract == true || multiply == true || divide == true) {
      numbersRight.push(three);
      numRight = +numbersRight.join('');
      $(".numScreen").text(numRight);
    } else {
      numbersLeft.push(three);
      numLeft = +numbersLeft.join('');
      $(".numScreen").text(numLeft);
    }
  });
  $("#two").click(function () {
    if (adding == true || subtract == true || multiply == true || divide == true) {
      numbersRight.push(two);
      numRight = +numbersRight.join('');
      $(".numScreen").text(numRight);
    } else {
      numbersLeft.push(two);
      numLeft = +numbersLeft.join('');
      $(".numScreen").text(numLeft);
    }
  });
  $("#one").click(function () {
    if (adding == true || subtract == true || multiply == true || divide == true) {
      numbersRight.push(one);
      numRight = +numbersRight.join('');
      $(".numScreen").text(numRight);
    } else {
      numbersLeft.push(one);
      numLeft = +numbersLeft.join('');
      $(".numScreen").text(numLeft);
    }
  });
  $("#zero").click(function () {
    if (adding == true || subtract == true || multiply == true || divide == true) {
      numbersRight.push(zero);
      numRight = +numbersRight.join('');
      $(".numScreen").text(numRight);
    } else {
      numbersLeft.push(zero);
      numLeft = +numbersLeft.join('');
      $(".numScreen").text(numLeft);
    }
  });

  // + - x / Operator Presses
  $("#add").click(function () {
    if (adding !== true) {
      adding = true;
      subtract = false;
      multiply = false;
      divide = false;
    } else {
      numLeft += numRight;
      numRight = 0;
      numbersLeft = [];
      numbersRight = [];
      $(".numScreen").text(numLeft);
    }
  });

  $("#subtract").click(function () {
    if (subtract !== true) {
      subtract = true;
      adding = false;
      multiply = false;
      divide = false;
    } else {
      numLeft -= numRight;
      numRight = 0;
      numbersLeft = [];
      numbersRight = [];
      $(".numScreen").text(numLeft);
    }
  });

  $("#multiply").click(function () {
    if (multiply !== true) {
      multiply = true;
      adding = false;
      subtract = false;
      divide = false;
    } else {
      numLeft *= numRight;
      numRight = 0;
      numbersLeft = [];
      numbersRight = [];
      $(".numScreen").text(numLeft);
    }
  });

  $("#divide").click(function () {
    if (divide !== true) {
      divide = true;
      adding = false;
      subtract = false;
      multiply = false;
    } else {
      numLeft /= numRight;
      numRight = 0;
      numbersLeft = [];
      numbersRight = [];
      $(".numScreen").text(numLeft);
    }
  });

  // Equals Operation
  $("#equal").click(function () {
    if (adding == true) {
      // result = numRight + numLeft;
      numLeft += numRight;
      $(".numScreen").text(numLeft);
      numbersLeft = [];
      numbersRight = [];
      adding = false;
    } else if (subtract == true) {
      numLeft -= numRight;
      $(".numScreen").text(numLeft);
      numbersLeft = [];
      numbersRight = [];
      subtract = false;
    } else if (multiply == true) {
      // result = numRight * numLeft;
      numLeft *= numRight;
      $(".numScreen").text(numLeft);
      numbersLeft = [];
      numbersRight = [];
      multiply = false;
    } else if (divide == true) {
      // result = numLeft / numRight;
      numLeft /= numRight;
      $(".numScreen").text(numLeft);
      numbersLeft = [];
      numbersRight = [];
      divide = false;
    }
  });

  // Clear operation
  $("#clear").click(function () {
    $(".numScreen").text(0);
    adding = false;
    subtract = false;
    multiply = false;
    divide = false;
    numRight = 0;
    numLeft = 0;
    // result = 0;
    numbersLeft = [];
    numbersRight = [];
  });
};

$(document).ready(main);