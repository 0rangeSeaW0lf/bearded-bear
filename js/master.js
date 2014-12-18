angular.module('multiplyApp', [])
    .controller('MultiplicationCtrl', function($scope, $attrs) {
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
    });