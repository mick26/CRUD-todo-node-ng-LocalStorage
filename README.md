## Synopsis
 
A Todo CRUD App using HTML5 Local Storage

- Built with NodeJS, ExpressJS, AngularJS and using HTML5 LocalStorage.

This is a continuation of the CRUD-Todo examples I have put together. This time the Todos are stored on the client in HTML5 LocalStorage and no data is transmitted to the server. The interaction with HTML5 Local-Storage is based on the [TodoMVC example](http://todomvc.com/architecture-examples/angularjs/)


The basic Todo App is based on a Node Todo Tutorial on [scotch.io](http://scotch.io/tutorials/javascript/creating-a-single-page-todo-app-with-node-and-angular).

You can interact with HTML5 LocalStorage:
* In Firefox using FireBug. Select the localstorage option under the DOM tab.
* In Google DevTools select the Local Storage option under Resources.
* Browser console commands 'localStorage' , 'localStorage.clear' etc...


You can find out the amount of HTML5 Local Storage available on your browser by going to:

https://arty.name/localstorage.html

My version of Firefox has over 5.2MB of local storage available.


# Requirements

* Node


## Installation

* Clone the Repository
* npm install - install all the node packages listed in the package.json file 
* bower install - installs the front end packages listed in the bower.json file
* node server.js - start up Node\Express server
* Browse to http://localhost:3080


## Motivation
 
On my journey learning Node and AngularJS.
Technologies used: Node, Express 4.2, Angular, Bower, HTML5 Local Storage


Michael Cullen
2014
