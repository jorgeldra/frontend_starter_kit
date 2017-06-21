'use strict';


describe('Component: google-maps', function() {

  
  let element, scope;
  
  beforeEach(module('RelojApp'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    scope = _$rootScope_.$new();
    element = angular.element('<google-maps coord="{lat:12,lon:14}"></google-maps>');
    element = _$compile_(element)(scope);
    scope.$apply();

  }));

  it('google-maps:', function() {
  
    expect(true)
      .toEqual(true);
  
  })
});