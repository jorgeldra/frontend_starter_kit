(function(){

   const WEATHER_CONF = {
                city: 'Madrid',
                country: 'ES',
                unit: 'metric'
    };
   
    angular
        .module("RelojApp")
        .constant('WEATHER_CONF', WEATHER_CONF)
       
})();