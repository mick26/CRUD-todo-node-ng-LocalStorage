'use strict';
/**
 * Module - Main Module
 */

angular.module( 'myApp', ['myApp.controllers', 'ngRoute', 'myApp.services'] )


.config(function ($routeProvider, $locationProvider) {
	$routeProvider
    
      .when('/', {
        templateUrl: 'views/main.tpl.html',
        controller: 'MainCtrl',
   //     reloadOnSearch: false
      })
    
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  
  });