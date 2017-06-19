(function() {
  angular  
    .module('RelojApp')
    .component('periodNoon', {
      controller: periodNoonController,
      template: function(){
        return `<div class="clock-format">
                    <div ng-class="{'highlight': !$ctrl.isNoon}">AM</div>
                    <div ng-class="{'highlight': $ctrl.isNoon}">PM</div>
                </div>`;
      }
  });

  function periodNoonController() {
    let vm = this;
    let date = new Date();
    
    vm.isNoon = (date.getHours() >= 12)? true: false;
  }
})();
