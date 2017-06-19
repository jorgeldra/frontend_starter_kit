(function() {
    angular
        .module("RelojApp")
        .controller("MapaController", MapaController);

    MapaController.$inject = ['shareDataFactory'];
    function MapaController(shareDataFactory){
        vm = this;
        function init(){
        	vm.coords = shareDataFactory.getWeather().data.coord;
        }

        init();     
    }
    
})();