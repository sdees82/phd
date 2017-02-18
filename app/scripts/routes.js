'use strict';

/**
 * @ngdoc function
 * @name phdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phdApp
 */

function routerConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        

      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',

      })
      .state('services', {
        url: '/services',
        templateUrl: 'views/services.html',

      })
      .state('getInvolved', {
        url: '/getInvolved',
        templateUrl: 'views/contact.html',

      });
}
angular.module('phdApp')
  .config(routerConfig);
