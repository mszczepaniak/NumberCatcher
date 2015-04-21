'use strict';

window.addEventListener("load", function() {
	var app = angular.module('Binged', []);

	var html = document.querySelector('html');
	html.setAttribute('ng-app', '');
	html.setAttribute('ng-csp', '');

	var viewport = document.getElementById('viewport');
	viewport.setAttribute('ng-controller', 'MainController');
	app.controller('MainController', function ($scope) {});

	app.myDirective = document.createElement('div');
	myDirective.setAttribute('my-directive','');
	viewport.appendChild(myDirective);

	angular.bootstrap(html, ['Binged'], []);
});

