
myApp.controller('demoController', function($scope, $http) {
    
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
    
    $scope.dropdownTooltipText = "выбор значения";
    $scope.passwordTooltipText = "введите пароль";
    $scope.checkboxTooltipText = "чекбокс";
    
    $scope.runEvent = function() {
        $scope.$broadcast('demoEvent');
    };
    $scope.showTooltips = function() {
        $scope.$broadcast('showTooltips');  
    };
    
});


