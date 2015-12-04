'use strict';

function FooterController() {
  'ngInject';
	
  // ViewModel
  const var1 = this;

  var1.title = "AngularJS, Gulp, and Browserify! Written with keyboards and love!";
  var1.number = 1234;
}

export default {
  name: 'FooterController',
  fn: FooterController
};