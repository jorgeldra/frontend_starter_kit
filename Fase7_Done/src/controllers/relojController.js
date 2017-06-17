(function() {
    function RelojController(){
        vm = this;
        function init(){
        	vm.configWeather = {
        		city: 'Madrid',
        		country: 'ES',
        		unit: 'metric'
        	};
        }

        init();     
    }
    angular
        .module("RelojApp")
        .controller("RelojController", RelojController);
})();