'use strict';


function navController(navFactory){
    var vm = this;

    this.menu = navFactory.menuItems();
    this.imageSource = navFactory.returnImage();
    this.imageClass = navFactory.returnClass();
    this.isActive = function(viewLocation){
        var active = (viewLocation == $location.path());
        return active;
    };
}

function navFactory(){
     var menu = [{
        name: "HOME",
        component: "#!/home",
        class: "active"
        }, {
         name: "ABOUT",
         component:"#!/about"
         },{
          name: "SERVICES",
          component:"#!/services"
         },{
          name: "GET INVOLVED",
         component:"#!/getInvolved"
       }];     
            var Klass = "img-responsive myimg";
            var imageSource = "images/phd-large.png";
            var factory = {};
            factory.menuItems = function(){
                return menu;
            };
            factory.returnImage = function(){
                return imageSource;
            }
            factory.returnClass = function(){
                
                return Klass;
                
            }
            return factory;
            
}
    
angular.module('phdApp')
        .component("navBar",{
            templateUrl: "components/navbar/navbar.html"
        })
        .controller('navController', navController)
        .factory('navFactory', navFactory);
