(function() {
  angular  
    .module('RelojApp')
    .component('daysWeek', {
      controller: daysWeekController,
      template: [
        `<div class="clock-weekdaysbox">
          <div class="clock-weekdays" ng-repeat="day in $ctrl.daysArray" ng-class="{'highlight': $index === $ctrl.weekday}">
              {{::day}}
          </div>
         </div>`
      ].join('')
  });

  function daysWeekController() {
    let date = new Date();
    this.daysArray = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    this.weekday = (date.getDay() > 0)? date.getDay() - 1 : 6;
  }
})();
