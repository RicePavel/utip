
myApp.controller('demoController', function($scope, $http) {
    
    /*
    $scope.dropdownData = ["Автомобиль", "Автобус", "Метро", "Самолет"];
    $scope.dropdownIsMultiple = true;
    $scope.dropdownActiveData = ["Автомобиль"];
    */
   $scope.dropdownData = [
       {
           id: 1,
           value: "Автомобиль"},
       {
           id: 4,
           value: "Автобус"}, 
       {
           id: 2,
           value: "Метро"}, 
       {
           id: 3,
           value: "Самолет"
       }
   ];
    $scope.dropdownIsMultiple = false;
    $scope.dropdownActiveElement = 1;
    //$scope.dropdownActiveData = [1];
    
    $scope.checkboxText = "текст текст текст";
    $scope.checkboxId = "toggle";
    
    $scope.runEvent = function() {
        $scope.$broadcast('demoEvent');
    };
    
});


