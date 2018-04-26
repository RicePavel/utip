
myApp.controller('demoController', function($scope, $http) {
    $scope.dropdownData = ["Автомобиль", "Метро", "Самолет"];
    $scope.dropdownActiveElement = "Автомобиль";
    
    $scope.checkboxText = "текст текст текст";
    $scope.checkboxId = "toggle";
    
    $scope.runEvent = function() {
        $scope.$broadcast('demoEvent');
    };
    
});


