'use strict';

function footerDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/footer.html',
    scope: {
        title: '@',
        message: '@exampleDirective'
      },
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
