/**
 * Defines <ng-kit-weight-unit-input> directive
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.weight-unit-input').directive('ngKitWeightUnitInput', function() {
        return {
            restrict: 'E',
            templateUrl: 'weight-unit-input.directive.html',
            scope: {
                value: '=value',
                onChange: '&onChange',
            },
            controller: function($scope) {
                $scope.weightUnitOptions = [
                    {
                        'name': 'lb',
                        'value': 'L',
                    },
                    {
                        'name': 'kg',
                        'value': 'K',
                    },
                ];

                $scope.$watch('value', function(newValue, oldValue) {
                    if (newValue === oldValue) {
                        return;
                    }
                    $scope.onChange();
                });
            }
        };
    });
})(angular);
