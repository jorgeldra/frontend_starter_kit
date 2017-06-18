(function(){

	function shareDataFactory(){

		let dataInfo = {};

		function _getWeather(){
			return dataInfo.weather;
		}

		function _setWeather(weather){
			dataInfo.weather = weather;
		}

		return {
			getWeather: _getWeather,
			setWeather: _setWeather
		}
	}

	angular
		.module('RelojApp')
		.factory('shareDataFactory', shareDataFactory)
})();