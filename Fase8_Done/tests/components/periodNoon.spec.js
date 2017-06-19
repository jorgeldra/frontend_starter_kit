'use strict';


describe('Component: period-noon', function() {

  
  let element, scope;

  let date = new Date();
  
  beforeEach(module('RelojApp'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    scope = _$rootScope_.$new();
    element = angular.element('<period-noon></period-noon>');
    element = _$compile_(element)(scope);
    scope.$apply();

  }));


  it('period-noon: comprueba si es AM/PM', function() {
    (date.getHours() >= 12)? expect(element[0].querySelector('.highlight').innerText).toEqual("PM") : expect(element[0].querySelector('.highlight').innerText).toEqual("AM");
  })

});