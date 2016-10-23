module.exports = du;

var du = {};

du.extend = function(origin, add){
  if(add === null || typeof add !== 'object') {
    return origin;
  }

  var keys = Object.keys(add);
  var i = keys.length;
  while(i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}
