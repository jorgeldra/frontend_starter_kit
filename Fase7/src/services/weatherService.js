(function(){
	
	let API_WEATHER = {
		API_KEY: "4959fc6b1ef0524303ca10b5e45771e2",
		API_URL: "http://api.openweathermap.org/data/2.5/weather"
	}
	
	function weatherService($q, $http, API_WEATHER){

		function _getWeather({city, country, unit}){
			let defered = $q.defer();  
			let promise = defered.promise; 

			let defaultSearch = {
				city: 'London',
				country: 'GB',
				units: 'imperial'
			};
			
			$http({
				method: 'GET',
	            url: API_WEATHER.API_URL,
	            params: {
	            	q: (city && country)? city +','+ country : defaultSearch.city + ',' + defaultSearch.country,
	            	appId: API_WEATHER.API_KEY,
	            	units: (unit)? unit : defaultSearch.units
	            },
			}).then(data => {
				defered.resolve(data);
			}, error => {
				defered.reject(error);
			});

			return promise
		}
	
		return {
			getWeather: _getWeather	
		}
	}

	angular
		.module('RelojApp')
		.constant('API_WEATHER', API_WEATHER)
		.service('weatherService', weatherService);

})();