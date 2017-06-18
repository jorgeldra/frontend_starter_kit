(function() {
  angular  
    .module('RelojApp')
    .component('googleMaps', {
      controller: googleMapsController,
      bindings:{
        coord: '='
      },
      template: [
        `<div id="map"></div>`
      ].join('')
  });

  function googleMapsController(weatherService) {    
    this.$onInit = function() {
      //bindings have been done
      var poi = {lat: this.coord.lat, lng: this.coord.lon};
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: poi
      });
      var marker = new google.maps.Marker({
          position: poi,
          map: map
      });
      
    };
  }
})();