'use strict';

describe('shareDataService', function() {

  beforeEach(module('RelojApp'));
  const weatherInfo = {
                city: 'Madrid',
                country: 'ES',
                unit: 'metric'
  };

  let service;

  beforeEach(inject(function(_shareDataFactory_) {
    service = _shareDataFactory_;
  }));


  it(`shareDataFactory:  guarda item y lo recupera`, () => {
      service.setWeather(weatherInfo);
      expect(service.getWeather()).toEqual(weatherInfo);
  });

});
