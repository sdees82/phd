(function(){

'use strict';

function routerConfig($stateProvider, $urlRouterProvider){

     $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        

      });
}


angular.module('phdApp')
        .config(routerConfig);








})();
