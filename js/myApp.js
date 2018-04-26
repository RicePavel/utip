/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module("myApp", ["ngRoute"]).config(function($routeProvider, $locationProvider) {
    /*
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    */
    $routeProvider.when('/dropdown', {
        templateUrl: 'views/dropdown.html',
        controller: function() {
  
        }
    });
    $routeProvider.when('/password', {
        templateUrl: 'views/password.html',
        controller: function() {
            
        }
    });
    $routeProvider.when('/checkbox', {
        templateUrl: 'views/checkbox.html',
        controller: function() {
            
        }
    });
});

//var myApp = angular.module("myApp", []);
