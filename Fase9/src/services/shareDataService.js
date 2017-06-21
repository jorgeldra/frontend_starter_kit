(function(){

	angular
		.module('RelojApp')
		.factory('shareDataFactory', shareDataFactory)

	function shareDataFactory(){
		let dataInfo = {};

		return {
			getWeather: _getWeather,
			setWeather: _setWeather
		}

		function _getWeather(){
			return dataInfo.weather;
		}

		function _setWeather(weather){
			dataInfo.weather = weather;
		}		
	}
})();