'use strict';

function MainController($scope, AppSettings, ExampleService) {
  'ngInject';
	
  // ViewModel
  const var1 = this;

  var1.title = AppSettings.appTitle;
  var1.number = 456789;

  var promise = ExampleService.get();
  alert(promise.data);
};

export default {
  name: 'MainController',
  fn: MainController
};