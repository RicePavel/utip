
myApp.directive("checkbox", function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/checkbox.html',
        link: function(scope, elements, attrs) {
           scope.$on('demoEvent', function() {
               scope.checkboxOn = (scope.checkboxOn === true ? false : true);
           });
           
           scope.$on('showTooltips', function() {
               scope.showCheckboxTooltip = (scope.showCheckboxTooltip === true ? false : true);
           });
           scope.hideCheckboxTooltip = function() {
               scope.showCheckboxTooltip = false;
           };
        }
    };
});




