
myApp.controller('demoController', function($scope, $http) {
    $scope.dropdownData = ["Автомобиль", "Автобус", "Метро", "Самолет"];
    //$scope.dropdownActiveElement = "Автомобиль";
    $scope.dropdownIsMultiple = true;
    $scope.dropdownActiveData = ["Автомобиль"];
    
    $scope.checkboxText = "текст текст текст";
    $scope.checkboxId = "toggle";
    
    $scope.runEvent = function() {
        $scope.$broadcast('demoEvent');
    };
    
});


