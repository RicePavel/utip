
myApp.directive("dropdown", function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/dropdown.html',
        link: function(scope, element, attrs) {
            
            /*
            параметры:
             
            $scope.dropdownData : array - данные для выпадающего списка
            $scope.dropdownIsMultiple : boolean - включен ли множественный выбор
            $scope.dropdownActiveElement : string - активный элемент, если выключен множественный выбор
            $scope.dropdownActiveData : array - массив активных элементов, если есть множественный выбор
            */
            
            scope.showDropdown = false;
            scope.toggleDropdown = function() {
               scope.showDropdown = (scope.showDropdown === true ? false : true); 
            };
            var demoEventExecute = false;
            
            if (scope.dropdownIsMultiple) {
                scope.selectDropdownElement = function(elem) {
                    var ind = scope.dropdownActiveData.indexOf(elem);
                    if (ind === -1) {
                        scope.dropdownActiveData.push(elem);
                    } else {
                        scope.dropdownActiveData.splice(ind, 1);
                    }
                };
                scope.getDropdownActiveElement = function() {
                    var resultArray = [];
                    for (var i = 0; i < scope.dropdownData.length; i++) {
                        var dataElement = scope.dropdownData[i];
                        if (scope.dropdownActiveData.indexOf(dataElement) !== -1) {
                            resultArray.push(dataElement);
                        }
                    }
                    var str = resultArray.join(', ');
                    if (str) {
                        return str;
                    } else {
                        return "----";
                    }
                };
                scope.dropdownElementIsActive = function(elem) {
                    return (scope.dropdownActiveData.indexOf(elem) !== -1);
                };
            } else {
                scope.selectDropdownElement = function(elem) {
                    scope.dropdownActiveElement = elem;
                    scope.showDropdown = false;
                };
                scope.getDropdownActiveElement = function() {
                    return scope.dropdownActiveElement;        
                };
                scope.dropdownElementIsActive = function(elem) {
                    return (elem === scope.dropdownActiveElement);
                };
            }
            
            document.addEventListener('click', function(e) {
                if (!demoEventExecute) {
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
                }
                demoEventExecute = false;
            });
            
            scope.$on('demoEvent', function() {
                scope.showDropdown = true;
                demoEventExecute = true;
            });
        }
    };
});

