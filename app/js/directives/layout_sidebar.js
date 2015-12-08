'use strict';

function sidebarDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/layout_sidebar.html',
	scope: true,
    link: (scope, element) => {
	    element.on('click', () => {
	      window.alert('Element clicked: ' + scope.message);
	    });
	}
  };
}

export default {
  name: 'sidebarDirective',
  fn: sidebarDirective
};