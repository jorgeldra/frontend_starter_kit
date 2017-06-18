(function() {
    function MapaController(shareDataFactory){
        vm = this;
        function init(){
        	vm.coords = shareDataFactory.getWeather().data.coord;
        }

        init();     
    }
    angular
        .module("RelojApp")
        .controller("MapaController", MapaController);
})();