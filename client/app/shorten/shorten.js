angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links,  Auth) {
  $scope.link = {};
  
  $scope.signout = function () {
    console.log('Auth out');
    Auth.signout();
  };

  $scope.addLink = function() {
    console.log($scope.link);
    console.log('shorten addLink called');
    Links.addOne($scope.link);
  };
});
