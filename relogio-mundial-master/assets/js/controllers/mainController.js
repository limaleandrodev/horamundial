app.controller("inicioCtrl", ["$scope", "timeService", function($scope, timeService) {
    
    $scope.timezones = [];
    $scope.timezone = null;

    $scope.myTimezones = [];

    $scope.incluirTimezone = function(timezone) {
        $scope.myTimezones.push({
            timezone: timezone,
            dateTime: null
        });

        $scope.atualizarDataHora(timezone);
    }

    $scope.atualizarDataHora = function(timezone) {
        if(!timezone) return;
        
        timeService.getTime(timezone).then(function(result) {
            var tzObject = $scope.myTimezones.find(function(tz) {
                return tz.timezone === timezone;
            });

            if(!tzObject) return;

            tzObject.dateTime = result.data.datetime;
        });
    }

    timeService.getTimezones().then(function(result) {
        $scope.timezones = result.data;
    });

    timeService.currentTimezone().then(function(result) {
        $scope.timezone = result.data.timezone;

        $scope.atualizarDataHora();
    });
    
}]);