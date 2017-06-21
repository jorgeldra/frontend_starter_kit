'use strict';

describe('weatherService', function() {

  beforeEach(module('RelojApp'));

  let weatherService, $httpBackend;
  const urlWeather = "http://api.openweathermap.org/data/2.5/weather?appId=4959fc6b1ef0524303ca10b5e45771e2&q=Madrid,ES&units=metric";
  const mockGetWeather = {"coord":{"lon":-3.7,"lat":40.42},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":34.66,"pressure":1013,"humidity":19,"temp_min":34,"temp_max":35},"visibility":10000,"wind":{"speed":3.6,"deg":120},"clouds":{"all":20},"dt":1497816000,"sys":{"type":1,"id":5488,"message":0.0045,"country":"ES","sunrise":1497761062,"sunset":1497815281},"id":3117735,"name":"Madrid","cod":200};
  const WEATHER_CONF = {
                city: 'Madrid',
                country: 'ES',
                unit: 'metric'
  };
  beforeEach(inject(function(_weatherService_, _$httpBackend_) {
    weatherService = _weatherService_;
    $httpBackend = _$httpBackend_;
  }));


  it(`weatherService:  llama al servicio y recibe la información apropiada`, () => {
      let hayRespuesta = false;
      $httpBackend.whenGET(urlWeather).respond(mockGetWeather);
      let promise = weatherService.getWeather(WEATHER_CONF);
      promise.then(data => {
        hayRespuesta = true;
      })
      $httpBackend.flush();
      expect(true).toEqual(hayRespuesta);

  });

  afterEach(function(){
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  })

});
