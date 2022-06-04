// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';

  if (obj === null) {
    return '' + obj;
  }
  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    _.each(obj, function(elem) {
      if (obj.indexOf(elem) === obj.length - 1) {
        result += stringifyJSON(elem);
      } else {
        result += stringifyJSON(elem) + ',';
      }
    });
    return '[' + result + ']';
  } else if (typeof obj === 'object') {
    _.each(obj, function(value, key) {
      if (key !== 'functions' && key !== 'undefined') {
        result += stringifyJSON(key) + ':' + stringifyJSON(value) + ',';
      }
    });
    // delete the last  ',' in result
    return '{' + result.slice(0, -1) + '}';
  }
  console.log(result);
  return result;
};
