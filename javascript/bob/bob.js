//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

var silent= function (input) {
  return /^\s*$/.test(input);
};

var shout= function (input) {
  return input.toUpperCase() === input && input.toLowerCase() !== input;
};

var question = function (input) {
  return input.charAt(input.length -1) === '?';
};

this.hey = function (input) {
  if (shout(input)) {
    return 'Whoa, chill out!';
  }

  if (silent(input)) {
    return 'Fine. Be that way!';
  }

  if (question(input)) {
    return 'Sure.';
  }

  return 'Whatever.';
  };
};

module.exports = Bob;
