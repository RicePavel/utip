
myApp.directive("dropdown", function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/dropdown.html',
        link: function(scope, element, attrs) {
            
            /*
            параметры:
             
            $scope.dropdownData : array - данные для выпадающего списка
            $scope.dropdownIsMultiple : boolean - включен ли множественный выбор
            $scope.dropdownActiveElement : int - ID активного элемента, если выключен множественный выбор
            $scope.dropdownActiveData : array - массив ID активных элементов, если есть множественный выбор
            */
            
            scope.showDropdown = false;
            scope.toggleDropdown = function() {
               scope.showDropdown = (scope.showDropdown === true ? false : true); 
            };
            var demoEventExecute = false;
            
            if (scope.dropdownIsMultiple) {
                scope.selectDropdownElement = function(id) {
                    var ind = scope.dropdownActiveData.indexOf(id);
                    if (ind === -1) {
                        scope.dropdownActiveData.push(id);
                    } else {
                        scope.dropdownActiveData.splice(ind, 1);
                    }
                };
                scope.getDropdownActiveElement = function() {
                    var resultArray = [];
                    for (var i = 0; i < scope.dropdownData.length; i++) {
                        var elem = scope.dropdownData[i];
                        if (scope.dropdownActiveData.indexOf(elem.id) !== -1) {
                            resultArray.push(elem.value);
                        }
                    }
                    var str = resultArray.join(', ');
                    if (str) {
                        return str;
                    } else {
                        return "----";
                    }
                };
                scope.dropdownElementIsActive = function(id) {
                    return (scope.dropdownActiveData.indexOf(id) !== -1);
                };
            } else if (!scope.dropdownIsMultiple) {
                scope.selectDropdownElement = function(id) {
                    scope.dropdownActiveElement = id;
                    scope.showDropdown = false;
                };
                scope.getDropdownActiveElement = function() {
                    for (var i = 0; i < scope.dropdownData.length; i++) {
                        var elem = scope.dropdownData[i];
                        if (elem.id === scope.dropdownActiveElement) {
                            return elem.value;
                        }
                    }
                    return "----";        
                };
                scope.dropdownElementIsActive = function(id) {
                    return (id === scope.dropdownActiveElement);
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

