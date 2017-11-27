'use strict';
(function(angular) {
    angular.module('ng-kit.weight-unit-input.example', [
        'ng-kit.weight-unit-input',
    ])
    .controller('IndexController', function($scope) {
        $scope.value = '';
        $scope.onChange = function() {
            console.log('Weight unit changed to ' + $scope.value);
        };
    });
})(angular);