(function() {
    function MapaController(WEATHER_CONF){
        vm = this;
        function init(){
        	vm.configWeather = WEATHER_CONF;
        }

        init();     
    }
    angular
        .module("RelojApp")
        .controller("MapaController", MapaController);
})();