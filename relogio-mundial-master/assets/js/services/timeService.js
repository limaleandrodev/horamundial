app.service("timeService", function($http) {

    this.getTime = function(timezone) {
        return $http.get("http://worldtimeapi.org/api/timezone/" + timezone);
    }

    this.getTimezones = function() {
        return $http.get("http://worldtimeapi.org/api/timezone");
    }

    this.currentTimezone = function() {
        return $http.get("http://worldtimeapi.org/api/ip");
    }

});