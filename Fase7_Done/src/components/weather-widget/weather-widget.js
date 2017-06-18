(function() {
  angular  
    .module('RelojApp')
    .component('weatherWidget', {
      controller: weatherWidgetController,
      bindings:{
        city: '@?',
        country:'@?',
        unit:'@?'
      },
      template: [
        `<div class="weather-info highlight">
              <span >{{$ctrl.city}}</span>
              <span> - </span>
              <span>{{$ctrl.weatherDescription}}
              <div>
                <span class="hot">Max {{$ctrl.tempMax}}°</span>
                <span class="cold"> - Mín {{$ctrl.tempMin}}°</span>
              </div>
              <span class="temp">{{$ctrl.temp}}°</span>
              <div>
                <img src="http://openweathermap.org/img/w/{{$ctrl.icon}}.png">
              </div>
         </div>`
      ].join('')
  });

  function weatherWidgetController(weatherService, $scope, shareDataFactory) {
    let date = new Date();
    
    this.$onInit = function() {
      //bindings have been done
      let config = {
          city: this.city,
          country : this.country,
          unit: this.unit
      };
      
      weatherService.getWeather(config).then(data => {
        shareDataFactory.setWeather(data);
        this.city = data.data.name;
        this.weatherDescription =  data.data.weather[0].main;
        this.tempMax =  data.data.main.temp_max;
        this.tempMin =  data.data.main.temp_min;
        this.icon = data.data.weather[0].icon;
        this.temp = data.data.main.temp;

      });
    };
  }
})();