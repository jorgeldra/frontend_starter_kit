(function() {
    angular
        .module("RelojApp")
        .controller("RelojController", RelojController);

    RelojController.$inject = ['WEATHER_CONF'];
    function RelojController(WEATHER_CONF){
        vm = this;
        function init(){
        	vm.configWeather = WEATHER_CONF;
        }

        init();     
    }
    
})();