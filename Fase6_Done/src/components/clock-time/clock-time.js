(function() {
  angular  
    .module('RelojApp')
    .component('clockTime', {
      controller: clockTimeController,
      controllerAs: 'clockTime',
      bindToController: true,
      template: function(){
        return  `<div class="clock-hoursbox">
                  <div class="clock-time">{{ clockTime.hours }}</div>
                  <div class="clock-time">:</div>
                  <div class="clock-time">{{ clockTime.minutes }}</div>
                  <div class="clock-time">:</div>
                  <div class="clock-time">{{ clockTime.seconds }}</div>
                </div>`;
      }
  });

  clockTimeController.$inject = ['$interval'];
  function clockTimeController($interval) {
    const INTERVAL = 1000;
    let vm = this;
    let date = new Date();
    
    $interval(() => {
        date = new Date();
        vm.hours = ("0" + date.getHours()).slice(-2);
        vm.minutes = ("0" + date.getMinutes()).slice(-2);
        vm.seconds = ("0" + date.getSeconds()).slice(-2);
    }, INTERVAL);
  }
})();
