(function() {
    function RelojController(weatherService){
        //now this is more clean
        weatherService.getWeather.then(data => {
        	console.log(data)
		});
    }
    angular
        .module("RelojApp",[])
        .controller("RelojController", RelojController);
})();