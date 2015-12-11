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
    url: '/search/policy?number',
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
		    templateUrl: 'claimSearch.html',
		    controller: 'ClaimSearchController',
			controllerAs: 'claimSearch'
	    },
 	    'claimSearch@View': {
 	 	    url: '',
		    templateUrl: 'claimSearchByPolicy.html',
		    controller: 'ClaimSearchByPolicyCrtl',
		    controllerAs: 'claimSrcByPol'
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
 	    'claimSearch@View': {
 	 	    url: '',
 	 	    templateUrl: 'claimSearchByInjuredWorker.html',
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
 	    'claimSearch@View': {
 	 	    url: '',
 	 	    templateUrl: 'claimSearchByCaseNumber.html',
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
 	    'claimSearch@View': {
 	 	    url: '',
		    templateUrl: 'printLossRuns.html',
		    controller: 'ClaimSearchController',
		    controllerAs: 'claimSearch'
	    }
    }
  })
  
  
  //search result
  .state('searchResult', {
	url: '/search/result',
    views: {
        'side-navigation': {
			url: '',
		    templateUrl: 'claimSearchResultSideNavigation.html'
        },
        'main': {
			url: '',
		    templateUrl: 'claimSearchResult.html',
			controller: 'ClaimSearchResultCrtl',
			controllerAs: 'claimSrcResult'
        }
    },
    
    data: {
    	title: 'Claim Search Result'
    },
    
    onEnter: function () {
        console.log("entered home state");
    }	
		  
  });

  //window.alert(window.location);
  $urlRouterProvider.otherwise('/search/policy');

}

export default OnConfig;