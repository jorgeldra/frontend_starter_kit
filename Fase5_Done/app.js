(function() {
    function RelojController(weatherService){
        //now this is more clean
        vm = this;
        function init(){

        }

        init();     
    }
    angular
        .module("RelojApp",[])
        .controller("RelojController", RelojController);
})();