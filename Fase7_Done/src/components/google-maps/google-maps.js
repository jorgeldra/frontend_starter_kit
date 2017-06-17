(function() {
  angular  
    .module('RelojApp')
    .component('googleMaps', {
      controller: googleMapsController,
      bindings:{
        configMap: '='
      },
      template: [
        `<div id="map"></div>`
      ].join('')
  });

  function googleMapsController(weatherService) {    
    this.$onInit = function() {
      //bindings have been done
      let config = {
          city: this.configMap.city,
          country : this.configMap.country,
          unit: this.configMap.unit
      };
      
      weatherService.getWeather(config).then(data => {
        this.coords = data.data.city.coord;
        var poi = {lat: this.coords.lat, lng: this.coords.lon};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: poi
        });
        var marker = new google.maps.Marker({
          position: poi,
          map: map
        });

      });
    };
  }
})();