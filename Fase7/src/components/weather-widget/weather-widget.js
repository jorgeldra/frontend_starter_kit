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
      ].join('')(function() {
  angular  
    .module('RelojApp')
    .component('weatherWidget', {
      controller: weatherWidgetController,
      bindings:{
        city: '@?',
        country:'@?',
        unit:'@?'
      },
      template: function(){
        return `<div class="weather-info highlight">
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