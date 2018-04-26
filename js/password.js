
myApp.directive("passwordinput", function($timeout) {
    return {
        restrict: 'E',
        templateUrl: 'templates/password.html',
        link: function(scope, element, attrs) {
            
            scope.showPasswordSymbols = function() {
                scope.showPassword = true;
            };
            scope.hidePasswordSymbols = function() {
                scope.showPassword = false;
            };
            scope.$on('demoEvent', function() {
                scope.showPassword = true;
                $timeout(function() {
                    scope.showPassword = false;
                }, 3000);
                /*
                setTimeout(function() {
                    scope.showPassword = false;
                }, 3000);
                */
            });
        }
    };
});


