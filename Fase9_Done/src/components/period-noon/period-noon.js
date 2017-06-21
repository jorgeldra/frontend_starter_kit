(function() {
  angular  
    .module('RelojApp')
    .component('periodNoon', {
      controller: periodNoonController,
      controllerAs: 'periodNoon',
      bindToController: true,
      template: function(){
        return `<div class="clock-format">
                    <div ng-class="{'highlight': !periodNoon.isNoon}">AM</div>
                    <div ng-class="{'highlight': periodNoon.isNoon}">PM</div>
                </div>`;
      }
  });

  function periodNoonController() {
    vm = this;
    let date = new Date();

    vm.isNoon = (date.getHours() >= 12)? true: false;
  }
})();
