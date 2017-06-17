(function() {
    angular
        .module("RelojApp",['ui.router'])
        .run(['$rootScope', '$state',function ($rootScope, $state, $stateParams){                    
                $rootScope.$state = $state;
            }]
    );
})();