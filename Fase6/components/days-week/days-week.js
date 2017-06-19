(function() {
  angular  
    .module('RelojApp')
    .component('daysWeek', {
      controller: daysWeekController,
      template: function(){
        return `<div class="clock-weekdaysbox">
                  <div class="clock-weekdays" ng-repeat="day in $ctrl.daysArray" ng-class="{'highlight': $index === $ctrl.weekday}">
                      {{::day}}
                  </div>
                </div>`;
      }
  });

  function daysWeekController() {
    let vm = this;
    let date = new Date();

    vm.daysArray = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    vm.weekday = (date.getDay() > 0)? date.getDay() - 1 : 6;
  }
})();
