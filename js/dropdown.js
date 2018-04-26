
myApp.directive("dropdown", function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/dropdown.html',
        link: function(scope, element, attrs) {
            
            /*
            $scope.dropdownData 
            $scope.dropdownActiveElement 
            */
            
            scope.dropdownIsMultiple = true;
            scope.dropdownActiveData = [];
            
            scope.showDropdown = false;
            scope.toggleDropdown = function() {
               scope.showDropdown = (scope.showDropdown === true ? false : true); 
            };
            scope.selectDropdownElement = function(elem) {
                if (scope.dropdownIsMultiple) {
                    var ind = scope.dropdownActiveData.indexOf(elem);
                    if (ind === -1) {
                        scope.dropdownActiveData.push(elem);
                    } else {
                        scope.dropdownActiveData.splice(ind, 1);
                    }
                } else {
                    scope.dropdownActiveElement = elem;
                    scope.showDropdown = false;
                }
            };
            scope.getDropdownActiveElement = function() {
                if (scope.dropdownIsMultiple) {
                    var str = scope.dropdownActiveData.join(', ');
                    if (str) {
                        return str;
                    } else {
                        return "----";
                    }
                } else {
                    return scope.dropdownActiveElement;
                }
            };
            scope.dropdownElementIsActive = function(elem) {
                if (scope.dropdownIsMultiple) {
                    return (scope.dropdownActiveData.indexOf(elem) !== -1);
                } else {
                    return (elem === scope.dropdownActiveElement);
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

