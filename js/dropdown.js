
myApp.directive("dropdown", function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/dropdown.html',
        link: function(scope, element, attrs) {
            
            /*
            $scope.dropdownData 
            $scope.dropdownActiveElement 
            */
            
            scope.dropdownIsMultiple = false;
            scope.dropdownActiveElementsArray = [];
            
            scope.showDropdown = false;
            scope.toggleDropdown = function() {
               scope.showDropdown = (scope.showDropdown === true ? false : true); 
            };
            scope.selectDropdownElement = function(elem) {
                if (scope.dropdownIsMultiple) {
                    var ind = scope.dropdownActiveElementsArray.indexOf(elem);
                    if (ind === -1) {
                        scope.dropdownActiveElementsArray.push(elem);
                    } else {
                        scope.dropdownActiveElementsArray.slice(ind, 1);
                    }
                } else {
                    scope.dropdownActiveElement = elem;
                    scope.showDropdown = false;
                }
            };
            
            document.addEventListener('click', function(e) {
                var target = e.target;
                var insideElement = false;
                if (target.classList.contains('wrapper-dropdown')) {
                    insideElement = true;
                }
                var parent = target.parentNode;
                while (parent !== null) {
                    if (parent.classList && parent.classList.contains('wrapper-dropdown')) {
                        insideElement = true;
                        break;
                    }
                    parent = parent.parentNode;
                }
                
                if (!insideElement) {
                    scope.showDropdown = false;
                    scope.$apply();
                }
            });
            
            scope.$on('demoEvent', function() {
                scope.showDropdown = true;
            });
        }
    };
});

