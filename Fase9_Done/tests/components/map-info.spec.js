'use strict';


describe('Component: map-info', function() {

  const mockGetWeather = {data:{"coord":{"lon":-3.7,"lat":40.42},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":34.66,"pressure":1013,"humidity":19,"temp_min":34,"temp_max":35},"visibility":10000,"wind":{"speed":3.6,"deg":120},"clouds":{"all":20},"dt":1497816000,"sys":{"type":1,"id":5488,"message":0.0045,"country":"ES","sunrise":1497761062,"sunset":1497815281},"id":3117735,"name":"Madrid","cod":200}};
  
  
  let element, scope, ctrl;
  
  beforeEach(module('RelojApp'));

  beforeEach(inject(function(_$rootScope_, _$compile_, _shareDataFactory_) {
    scope = _$rootScope_.$new();
    _shareDataFactory_.setWeather(mockGetWeather);
    element = angular.element('<map-info></map-info>');
    element = _$compile_(element)(scope);
    ctrl = element.controller("mapInfo");
    scope.$apply();
    
  }));


  it('map-info: obtiene coordenadas de servicio factoria', function() {
    expect(mockGetWeather.data.coord)
      .toEqual(ctrl.coords);
  })

});