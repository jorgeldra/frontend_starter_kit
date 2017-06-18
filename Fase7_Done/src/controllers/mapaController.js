(function() {
    function MapaController(shareDataFactory){
        vm = this;
        function init(){
        	vm.coords = shareDataFactory.getWeather().data.city.coord;
        }

        init();     
    }
    angular
        .module("RelojApp")
        .controller("MapaController", MapaController);
})();