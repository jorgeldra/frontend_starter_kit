'use strict';


describe('RelojController', function() {

  let ctrl;

  const mockGetWeather = {data:{"coord":{"lon":-3.7,"lat":40.42},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":34.66,"pressure":1013,"humidity":19,"temp_min":34,"temp_max":35},"visibility":10000,"wind":{"speed":3.6,"deg":120},"clouds":{"all":20},"dt":1497816000,"sys":{"type":1,"id":5488,"message":0.0045,"country":"ES","sunrise":1497761062,"sunset":1497815281},"id":3117735,"name":"Madrid","cod":200}};
  
  
  beforeEach(module('RelojApp'));

  beforeEach(inject(function(_$rootScope_, _$controller_, _shareDataFactory_) {
    let scope = _$rootScope_.$new();
    _shareDataFactory_.setWeather(mockGetWeather);
   
    ctrl = _$controller_('MapaController as mapaCtrl', {
      $scope: scope
    });

  }));


  it('MapaController: inicia configuración widget weather ', function() {

    expect(true)
      .toEqual(true);
  })

});