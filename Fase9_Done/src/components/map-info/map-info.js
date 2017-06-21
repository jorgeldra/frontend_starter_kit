(function() {
  angular  
    .module('RelojApp')
    .component('mapInfo', {
      controller: mapInfoController,
      controllerAs: 'mapInfo',
      bindToController: true,
      template: function(){
        return `<google-maps coord="mapInfo.coords"><google-maps>`;
      }
  });

  mapInfoController.$inject = ['shareDataFactory'];
  function mapInfoController(shareDataFactory) {
    vm = this;
    vm.coords = shareDataFactory.getWeather().data.coord;
  }
})();
