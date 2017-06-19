(function() {
    angular
        .module("RelojApp")
        .config(configRoute)
        
    configRoute.$inject = ['$stateProvider','$urlRouterProvider'];
    function configRoute($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/reloj");

        $stateProvider
            .state("reloj", {
                    url: "/reloj",
                    templateUrl: "views/reloj.html",
                    controller: "RelojController",
                    controllerAs: "ctrlViewReloj"
            })
            .state("mapa", {
                    url: "/mapa",
                    templateUrl: "views/mapa.html",
                    controller: "MapaController",
                    controllerAs: "ctrlViewMap"
            })
    }
   
    
       
})();