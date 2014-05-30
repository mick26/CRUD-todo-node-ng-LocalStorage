'use strict';
/**
 * Module - for the Controllers
 */

angular.module('myApp.controllers', [])


/**
 * Controller - MainCtrl
 */
.controller('MainCtrl', function($scope, html5LocalStorage) {

	$scope.formData = {};

	/*================================================================
		READ - get  WORKS
	=================================================================*/
	var todos = $scope.todos = html5LocalStorage.get();
	var newTodo = '';

	/*================================================================
		CREATE
	=================================================================*/
	$scope.createTodo = function() 
	{
		var newTodo = $scope.formData.text;

		if (!newTodo.length) 
		{
			return;
		}

		//Add to todos
		todos.push(
		{
			text: newTodo,
			done: false
		});

		html5LocalStorage.put(todos);	//save todos to local storage
		newTodo = '';
	};

	/*================================================================
		UPDATE
	=================================================================*/
	$scope.editTodo = function (todo) 
	{		
		todos[todos.indexOf(todo)] = todo;		//update todo with changes
		html5LocalStorage.put(todos);			//save todos to local storage
	};

	/*================================================================
		DELETE
	=================================================================*/
	$scope.deleteTodo = function(todo) 
	{
		todos.splice(todos.indexOf(todo), 1); 	//delete todo
		html5LocalStorage.put(todos);			//save todos to local storage
	};
})
