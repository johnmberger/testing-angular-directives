// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'myApp.config',
      'myApp.components.main'
    ])
    .directive('materialIcon', function() {
      return {
        scope: {
          name: '@'
        },
        restrict: 'E',
        template: '<i class="material-icons">{{name}}<i>'
      }
    });

})();
