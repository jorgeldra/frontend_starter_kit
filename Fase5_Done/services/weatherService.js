(function(){
	
	let API_WEATHER = {
		API_KEY: "4959fc6b1ef0524303ca10b5e45771e2",
		API_URL: "http://api.openweathermap.org/data/2.5/forecast/daily"
	}
	
	function weatherService($q, $http, API_WEATHER){

		function _getWeather(callbackFunc){
			
			$http({
				method: 'GET',
	            url: API_WEATHER.API_URL,
	            params: {
	            	q:'Madrid,ES',
	            	appId:API_WEATHER.API_KEY,
	            	units: 'metric'
	            },
			}).then(function (data){
				callbackFunc(data);
			},function (error){
				console.log(error)
			});
		}
	
		return {
			getWeather: _getWeather()	
		}
	}

	angular
		.module('RelojApp')
		.constant('API_WEATHER', API_WEATHER)
		.service('weatherService', weatherService);

})();