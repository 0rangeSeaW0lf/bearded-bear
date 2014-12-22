angular.module('multiplyApp', [])
    .controller('MultiplicationCtrl', function($scope, $attrs, $rootScope) {
        function populateNumbers(x) {
            var numbers = [];
            for(var i=0; i < x; i++) {
               numbers[i] = i + 1;
            }
            return numbers;
        }
        
        $scope.$watch('numberLimit', function(limit){
          $scope.numbers = populateNumbers(limit); 
        });
        
        $scope.numberLimit = $attrs.initialNumberLimit || 10;
        
        $scope.compute = function(x,y) {
            return x * y;
        };
        
        var activeFactorX, activeFactorY;
        
        $scope.setActiveFactors = function(x,y) {
            activeFactorX = x;
            activeFactorY = y;
        };
        
        $scope.matchesFactors = function(x,y) {
            return x === activeFactorX || y === activeFactorY;
        };
        
        $scope.clearActiveFactors = function () {
            activeFactorX = activeFactorY = null;
        };
        
        $scope.setActiveNumber = function(number){
            $rootScope.$broadcast('displayData', number);
        };
    })
    .controller('DisplayCtrl', function ($scope) {
        $scope.$on('displayData', function(event, data){
           $scope.content = data; 
        });
    });