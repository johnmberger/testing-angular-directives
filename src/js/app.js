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
        template: '<i class="material-icons">favorite<i>'
      }
    });

})();
