'use strict';


describe('Component: clock-time', function() {

  
  let element, scope;
  
  beforeEach(module('RelojApp'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    scope = _$rootScope_.$new();
    element = angular.element('<clock-time></clock-time>');
    element = _$compile_(element)(scope);
    scope.$apply();

  }));


  it('clock-time: comprueba que recibe y pinta horas, minutos y segundos', function() {
  
    let elemHour = parseInt(element[0].querySelectorAll('.clock-time')[0].innerText);
    let elemTwoDots = element[0].querySelectorAll('.clock-time')[1].innerText;
    let elemMinutes = parseInt(element[0].querySelectorAll('.clock-time')[2].innerText);
    let elemSeconds = parseInt(element[0].querySelectorAll('.clock-time')[4].innerText);
   
    expect(elemTwoDots).toEqual(":");

    expect(elemHour >= 0).toBeTruthy();
    expect(elemHour).toBeLessThan(25);

    expect(elemMinutes >= 0).toBeTruthy();
    expect(elemMinutes).toBeLessThan(60);

    expect(elemSeconds >= 0).toBeTruthy();
    expect(elemSeconds).toBeLessThan(60);
  
  })

});