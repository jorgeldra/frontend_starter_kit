(function() {
  angular  
    .module('RelojApp')
    .component('weatherWidget', {
      controller: weatherWidgetController,
      controllerAs: 'weatherWidget',
      bindToController: true,
      bindings:{
        city: '@?',
        country:'@?',
        unit:'@?'
      },
      template: function(){
        return `<div class="weather-info highlight">
                      <span >{{weatherWidget.city}}</span>
                      <span> - </span>
                      <span>{{weatherWidget.weatherDescription}}
                      <div>
                        <span class="hot">Max {{weatherWidget.tempMax}}°</span>
                        <span class="cold"> - Mín {{weatherWidget.tempMin}}°</span>
                      </div>
                      <span class="temp">{{weatherWidget.temp}}°</span>
                      <div>
                        <img src="http://openweathermap.org/img/w/{{weatherWidget.icon}}.png">
                      </div>
                 </div>`;
      }
  });

  weatherWidgetController.$inject = ['weatherService'];
  function weatherWidgetController(weatherService) {
    let vm = this;
    let date = new Date();

    vm.$onInit = function() {
      //bindings have been done
      let config = {
          city: vm.city,
          country : vm.country,
          unit: vm.unit
      };
      
      weatherService.getWeather(config).then(data => {
        vm.city = data.data.name;
        vm.weatherDescription =  data.data.weather[0].main;
        vm.tempMax =  data.data.main.temp_max;
        vm.tempMin =  data.data.main.temp_min;
        vm.icon = data.data.weather[0].icon;
        vm.temp = data.data.main.temp;
      });
    };
  }
})();