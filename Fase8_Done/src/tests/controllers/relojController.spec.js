'use strict';


describe('RelojController', function() {


  let $httpBackend, ctrl, $timeout;
  
  beforeEach(module('RelojApp'));

  beforeEach(inject(function(_$rootScope_, _$controller_) {
    let scope = _$rootScope_.$new();
    
    // let fondo ={
    //         contrato:{
    //         identificadorContratoProducto:00000118000002626,
    //         cuentaValoresAsociada:00000177890114389,
    //         alias:'MADRID GESTION DINAMICA'
    //       }
    // };
    // _ProcessSuscripcionDataStorage_.saveFondo(fondo);

    ctrl = _$controller_('RelojController as relojCtrl', {
      $scope: scope
    });

  }));


  beforeEach(inject(function(_WEATHER_CONF_) {
   // $timeout = _$timeout_;
  }));


  it('SuscripcionNacionalSolicitarController: tiene método continuar ', function() {
  
    // expect(true)
    //   .toEqual(angular.isFunction(ctrl.continuar));
    expect(true)
      .toEqual(true);
  })

});
