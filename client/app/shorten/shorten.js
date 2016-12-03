angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  
  $scope.signout = function () {
    Auth.signout();
  };

  $scope.addLink = function(valid) {
    if (valid) {
      Links.addOne($scope.link);
    }
  };
});
