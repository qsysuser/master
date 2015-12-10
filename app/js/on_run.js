'use strict';

function OnRun($rootScope, $state, $stateParams, Idle, AppSettings) {
  'ngInject';

  Idle.watch();
  $rootScope.$on('IdleTimeout', function() {
	  window.alert('Your session has ended due to inactivity.');
	  window.location.reload();
  });
  //$timeout(function() {
  //window.alert('Your session has ended due to inactivity.');
  //window.location.reload();
  //}, 1800000);
  
  //window.alert($state.current.name);
  //$rootScope.previousState = fromState.name.name;
  //$rootScope.$state = $state;
  
  
  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';
    $rootScope.with_vertical_bar = '';

    if(toState.data.title)
    {
      $rootScope.pageTitle += toState.data.title;
      $rootScope.pageTitle += ' - ';
    }
    $rootScope.pageTitle += AppSettings.appTitle;
    
    if(toState.data.with_vertical_bar)
    {
      $rootScope.with_vertical_bar = 'with_vertical_bar';
    }
    
    $rootScope.summitholdings = AppSettings.summitholdings;
  });

}

export default OnRun;