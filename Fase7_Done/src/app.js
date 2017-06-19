(function() {
    angular
        .module("RelojApp",['ui.router'])
        .run(runConfigApp)

        runConfigApp.$inject = ['$rootScope', '$state'];
        function runConfigApp($rootScope, $state){
        	 $rootScope.$state = $state;
        }
})();