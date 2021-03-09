import * as angular from 'angular';
angular.module("codecraft").filter("defaultImage", function() {
  return function(input, param) {
    if (!param) {
      param = "src/img/avatar.png";
    }
    if (!input) {
      return param;
    }
    return input;
  };
});
