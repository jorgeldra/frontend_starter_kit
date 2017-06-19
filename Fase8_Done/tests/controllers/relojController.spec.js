'use strict';


describe('RelojController', function() {

  const WEATHER_CONF = {
                city: 'Madrid',
                country: 'ES',
                unit: 'metric'
  };
  let ctrl;
  
  beforeEach(module('RelojApp'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {
    let scope = _$rootScope_.$new();
   
    ctrl = _$controller_('RelojController as relojCtrl', {
      $scope: scope
    });

  }));


  it('RelojController: inicia configuración widget weather ', function() {

    expect(WEATHER_CONF)
      .toEqual(ctrl.configWeather);
  })

});
