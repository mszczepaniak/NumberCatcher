'use strict';

window.addEventListener("load", function() {
	var app = angular.module('Binged', []);

	var html = document.querySelector('html');
	html.setAttribute('ng-app', '');
	html.setAttribute('ng-csp', '');
})