(function() {
  angular  
    .module('RelojApp')
    .component('daysWeek', {
      controller: daysWeekController,
      controllerAs: 'daysWeek',
      bindToController: true,
      template: function(){
        return `<div class="clock-weekdaysbox">
                  <div class="clock-weekdays" ng-repeat="day in daysWeek.daysArray" ng-class="{'highlight': $index === daysWeek.weekday}">
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
