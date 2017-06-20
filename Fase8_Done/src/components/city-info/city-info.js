(function() {
  angular  
    .module('RelojApp')
    .component('cityInfo', {
      controller: cityInfoController,
      controllerAs: 'cityInfo',
      bindToController: true,
      template: function(){
        return `<days-week></days-week>
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <clock-time ng-cloak></clock-time>
                <period-noon></period-noon>
                <weather-widget 
                    city="{{cityInfo.configWeather.city}}" 
                    country="{{cityInfo.configWeather.country}}" 
                    unit="{{cityInfo.configWeather.unit}}">
                </weather-widget>`;
      }
  });

  cityInfoController.$inject = ['WEATHER_CONF'];
  function cityInfoController(WEATHER_CONF) {
    vm = this;
    vm.configWeather = WEATHER_CONF;
  }
})();
