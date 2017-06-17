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
              <img class="icon" src="http://openweathermap.org/img/w/{{$ctrl.icon}}.png"
         </div>`
      ].join('')
  });

  function weatherWidgetController(weatherService, $scope) {
    let date = new Date();
    let weekday = date.getDay() - 1;
    
    this.$onInit = function() {
      //bindings have been done
      let config = {
          city: this.city,
          country : this.country,
          unit: this.unit
      };
      
      weatherService.getWeather(config).then(data => {
        let weatherCurrentDay = data.data.list[weekday];
        this.city = data.data.city.name;
        this.weatherDescription = weatherCurrentDay.weather[0].main;
        this.tempMax =  weatherCurrentDay.temp.max;
        this.tempMin =  weatherCurrentDay.temp.min;
        this.icon = weatherCurrentDay.weather[0].icon;

      });
    };
  }
})();