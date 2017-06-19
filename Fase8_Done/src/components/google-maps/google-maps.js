(function() {
  angular  
    .module('RelojApp')
    .component('googleMaps', {
      controller: googleMapsController,
      bindings:{
        coord: '='
      },
      template: function(){
        return `<div id="map"></div>`;
      }
  });

  googleMapsController.$inject = ['weatherService'];
  function googleMapsController(weatherService) {    
    let vm = this;

    vm.$onInit = function() {
      //bindings have been done
      var poi = {lat: vm.coord.lat, lng: vm.coord.lon};
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