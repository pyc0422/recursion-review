// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // get body;
  var body = document.body;
  var result = [];
  // check if classname in the classlist
  var getElements = function(item) {
    if (item.classList.contains(className)) {
      result.push(item);
    }
    //check if the children node contains className;
    if (item.children) {
      item.children.forEach(function(child) {
        getElements(child);
      });
    }
  };


  getElements(body);
  //console.log(body);
  return result;

};
