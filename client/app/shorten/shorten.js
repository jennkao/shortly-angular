angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    console.log($scope.link);
    console.log('shorten addLink called');
    Links.addOne($scope.link);
  };
});
