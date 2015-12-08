'use strict';

function footerDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/layout_footer.html',
	scope: true,
    link: (scope, element) => {
	    element.on('click', () => {
	      window.alert('Element clicked: ' + scope.message);
	    });
	}
  };
}

export default {
  name: 'footerDirective',
  fn: footerDirective
};
