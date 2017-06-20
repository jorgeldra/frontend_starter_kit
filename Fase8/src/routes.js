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
                    template: "<city-info></city-info>"
            })
            .state("mapa", {
                    url: "/mapa",
                    template: "<map-info></map-info>"
            })
    }
   
    
       
})();