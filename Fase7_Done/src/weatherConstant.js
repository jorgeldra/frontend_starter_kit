(function(){

   let weather_conf = {
                city: 'Madrid',
                country: 'ES',
                unit: 'metric'
    };
   
    angular
        .module("RelojApp")
        .constant('WEATHER_CONF', weather_conf)
       
})();