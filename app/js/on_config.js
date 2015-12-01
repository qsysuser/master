'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'MainController as home',
    templateUrl: 'home.html',
    title: 'HomePage'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;