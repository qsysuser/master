'use strict';

function ClaimSearchByPolicyCrtl($state, $stateParams, $route, ClaimSearchByPolicyService) {
  'ngInject';
  
  $route.reload();
  
  const vm = this;
  
  vm.number = $stateParams.number;
  
  vm.periods = [
	   {value: 'all', name: 'All Years'},
	   {value: '5yr', name: '5 Years'},
	   {value: '3yr', name: '3 Years'},
	   {value: '1yr', name: '1 Year'}
  ];
  
  vm.years = [
 	   {year: '2015'},
 	   {year: '2014'},
 	   {year: '2013'},
 	   {year: '2012'},
 	   {year: '2010'}
  ];
  
  vm.onFormSubmit = function(searchByPolicy) {

	  ClaimSearchByPolicyService.setData(searchByPolicy);
	  
	  $state.go('searchResult');
  };
}

export default {
  name: 'ClaimSearchByPolicyCrtl',
  fn: ClaimSearchByPolicyCrtl
};