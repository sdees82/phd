(function(){
'use strict';


function jumbotronController(){
    var vm = this;

}


angular.module("phdApp")
        .controller('jumbotronController', jumbotronController)
        .component('appJumbo',{
            templateUrl: 'components/jumbotron/jumbotron.html',
            bindings: {
                zid: "=",
                klass: "@"
        }
        });
})();