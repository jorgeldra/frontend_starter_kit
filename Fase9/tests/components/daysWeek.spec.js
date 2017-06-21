'use strict';


describe('Component: days-week', function() {

  
  let element, scope;
  
  beforeEach(module('RelojApp'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    scope = _$rootScope_.$new();
    element = angular.element('<days-week></days-week>');
    element = _$compile_(element)(scope);
    scope.outside = '1.6.4';
    scope.$apply();

  }));


  it('days-week: pinta siete dias de la semana', function() {

    expect(element[0].querySelectorAll('.clock-weekdays').length)
      .toEqual(7);
  })

});
