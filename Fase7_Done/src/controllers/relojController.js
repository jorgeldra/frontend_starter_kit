(function() {
    function RelojController(WEATHER_CONF){
        vm = this;
        function init(){
        	vm.configWeather = WEATHER_CONF;
        }

        init();     
    }
    angular
        .module("RelojApp")
        .controller("RelojController", RelojController);
})();