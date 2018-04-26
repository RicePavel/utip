
myApp.directive("checkbox", function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/checkbox.html',
        link: function(scope, elements, attrs) {
           scope.$on('demoEvent', function() {
               scope.checkboxOn = (scope.checkboxOn === true ? false : true);
           });
        }
    };
});




