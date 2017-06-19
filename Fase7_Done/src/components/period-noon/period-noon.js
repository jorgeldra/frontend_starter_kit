(function() {
  angular  
    .module('RelojApp')
    .component('periodNoon', {
      controller: periodNoonController,
      template: [
        `<div class="clock-format">
            <div ng-class="{'highlight': !$ctrl.isNoon}">AM</div>
            <div ng-class="{'highlight': $ctrl.isNoon}">PM</div>
        </div>`
      ].join('')
  });

  function periodNoonController() {
    vm = this;
    let date = new Date();

    vm.isNoon = (date.getHours() >= 12)? true: false;
  }
})();
