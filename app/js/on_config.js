'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, AppSettings) {
  'ngInject';

  //$locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
  .state('search', {
   url: '/search',
   views: {
 	   'search': {
		  url:"",
		  templateUrl: 'home.html',
		  controller: 'MainController as home',
		  title: 'HomePage'
	  }
  }
  })
  .state('result', {
	url: '/result',
    views: {
        'top1': {
			url: "",
		    templateUrl: 'home.html',
			controller: 'MainController as home'
        },
        'middle1': {
			url: "",
		    templateUrl: 'home.html',
			controller: 'MainController as home'
        },
        'bottom1': {
			url: "",
		    templateUrl: 'home.html',
			controller: 'MainController as home'
        }
    },
    onEnter: function () {
        console.log("entered home state");
    }	
		  
  });

  $urlRouterProvider.otherwise('/search');

}

export default OnConfig;