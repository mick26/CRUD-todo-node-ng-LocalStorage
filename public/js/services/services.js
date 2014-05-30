

/*
http://www.w3.org/TR/webstorage/
*/

'use strict';

angular.module('myApp.services', [] )

.factory('html5LocalStorage', function () {

	var STORAGE_ID = 'LocalStorage_KEY';		//the Local storage Key

	return {
		//Get the localstorage value
		get: function () 
		{
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		//Set the localstorage Value
		put: function (values) 
		{
			localStorage.setItem(STORAGE_ID, JSON.stringify(values));
		}
	};
});