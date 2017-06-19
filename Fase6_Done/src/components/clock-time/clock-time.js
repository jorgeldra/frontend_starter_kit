(function() {
  angular  
    .module('RelojApp')
    .component('clockTime', {
      controller: clockTimeController,
      template: [
        `<div class="clock-hoursbox">
            <div class="clock-time">{{ $ctrl.hours }}</div>
            <div class="clock-time">:</div>
            <div class="clock-time">{{ $ctrl.minutes }}</div>
            <div class="clock-time">:</div>
            <div class="clock-time">{{ $ctrl.seconds }}</div>
          </div>`
      ].join('')
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
