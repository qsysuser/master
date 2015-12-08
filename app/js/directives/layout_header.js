'use strict';

function headerDirective($http) {
  'ngInject';

  return {
    restrict: 'EA',
    templateUrl: 'directives/layout_header.html',
    scope: true,
    link: (scope, element) => {
    	scope.isLoggedIn = function(){
    		return false;
    	};
    }
  };
}

export default {
  name: 'headerDirective',
  fn: headerDirective
};
