'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, IdleProvider, KeepaliveProvider) {
  'ngInject';

  //$locationProvider.html5Mode(true).hashPrefix('!');
  
  IdleProvider.idle(20);
  IdleProvider.timeout(1800000);
  KeepaliveProvider.interval(10);

  $stateProvider
  
  //claim search
  .state('searchByPolicy', {
    url: '/search/policy',
    data: {
    	title: 'Claim Search',
        with_vertical_bar: false    
    },
    views: {
        'side-navigation': {
			url: '',
		    templateUrl: 'claimSearchSideNavigation.html'
        },
 	    'main': {
 	 	    url: '',
		    templateUrl: 'claimSearch.html'
	    },
 	    'searchByPolicy': {
 	 	    url: '',
		    templateUrl: 'claimSearchByPolicy.html',
		    controller: 'ClaimSearchController',
		    controllerAs: 'claimSearch'
	    }
    }
  })
  
  .state('searchByIW', {
    url: '/search/injuredWorker',
    data: {
    	title: 'Claim Search',
        with_vertical_bar: false    
    },
    views: {
        'side-navigation': {
			url: '',
		    templateUrl: 'claimSearchSideNavigation.html'
        },
 	    'main': {
 	 	    url: '',
		    templateUrl: 'claimSearch.html'
	    },
 	    'searchByIW': {
 	 	    url: '',
		    templateUrl: 'claimSearchByPolicy.html',
		    controller: 'ClaimSearchController',
		    controllerAs: 'claimSearch'
	    }
    }
  })

  .state('searchByCaseNumber', {
    url: '/search/caseNumber',
    data: {
    	title: 'Claim Search',
        with_vertical_bar: false    
    },
    views: {
        'side-navigation': {
			url: '',
		    templateUrl: 'claimSearchSideNavigation.html'
        },
 	    'main': {
 	 	    url: '',
		    templateUrl: 'claimSearch.html'
	    },
 	    'searchByCaseNumber': {
 	 	    url: '',
		    templateUrl: 'claimSearchByPolicy.html',
		    controller: 'ClaimSearchController',
		    controllerAs: 'claimSearch'
	    }
    }
  })

  .state('printLossRuns', {
    url: '/search/printLossRuns',
    data: {
    	title: 'Claim Search',
        with_vertical_bar: false    
    },
    views: {
        'side-navigation': {
			url: '',
		    templateUrl: 'claimSearchSideNavigation.html'
        },
 	    'main': {
 	 	    url: '',
		    templateUrl: 'claimSearch.html'
	    },
 	    'printLossRuns': {
 	 	    url: '',
		    templateUrl: 'claimSearchByPolicy.html',
		    controller: 'ClaimSearchController',
		    controllerAs: 'claimSearch'
	    }
    }
  })
  
  
  //search result
  .state('result', {
	url: '/result',
    views: {
        'side-navigation': {
			url: '',
		    templateUrl: 'claimSearchResultSideNavigation.html'
        },
        'main': {
			url: '',
		    templateUrl: 'home.html',
			controller: 'MainController',
			controllerAs: 'home'
        },
        'middle': {
			url: '',
		    templateUrl: 'home.html',
			controller: 'MainController',
			controllerAs: 'home'
        },
        'bottom': {
			url: '',
		    templateUrl: 'home.html',
			controller: 'MainController',
			controllerAs: 'home'
        }
    },
    
    data: {
    	title: 'Claim Search Result'
    },
    
    onEnter: function () {
        console.log("entered home state");
    }	
		  
  });

  $urlRouterProvider.otherwise('/search/policy');

}

export default OnConfig;