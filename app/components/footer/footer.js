"use strict";





function footerFactory(){
    var links = [{
        name: "About",
        component: "#!/about"
    },{
        name: "Services",
        component: "#!/services"
},{
        name: "Get Involved",
        component: "#!/getInvolved"
}];
    var clinks = [{
        name: "248-871-PHD2 (248-871-7432) ",
    },{
        name: "ParentshaveDreams@gmail.com",
}];
    var factory = {};
    factory.links = function(){
        return links;
    }
    factory.contactLinks = function(){
        return clinks;
    }
    return factory;
}



angular.module("phdApp")
    .controller("footerController", function(footerFactory){
          var vm = this;
          vm.links = footerFactory.links();
          vm.contactLinks = footerFactory.contactLinks();
    })
    .component("appFooter",{
                    templateUrl: "components/footer/footer.html"

    })
    .factory('footerFactory', footerFactory);