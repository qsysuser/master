'use strict';

function sidebarDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/layout_sidebar.html',
	scope: true
  };
}

export default {
  name: 'sidebarDirective',
  fn: sidebarDirective
};