'use strict';

function MainController() {
  'ngInject';
	
  // ViewModel
  const var1 = this;

  //var1.title = AppSettings.appTitle;
  var1.title = "AngularJS, Gulp, and Browserify! Written with keyboards and love!";

  var1.number = 1234;
}

export default {
  name: 'MainController',
  fn: MainController
};