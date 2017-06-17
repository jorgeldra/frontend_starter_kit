(function() {

    function configRoute($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/reloj");

        $stateProvider
            .state('reloj', {
                    url: "/reloj",
                    templateUrl: "views/reloj.html",
                    controller: 'RelojController',
                    controllerAs: 'ctrlViewReloj'
            })
            .state('mapa', {
                    url: "/mapa",
                    templateUrl: "views/mapa.html",
            })
    }
   
    angular
        .module("RelojApp")
        .config(configRoute)
       
})();