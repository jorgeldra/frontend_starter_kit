(function() {
    angular
        .module("RelojApp",[])
        .controller("RelojController", RelojController);
        
    RelojController.$inject = ['weatherService']; 
    function RelojController(weatherService){
        //now this is more clean
        vm = this;
        function init(){

        }

        init();     
    }
    
})();