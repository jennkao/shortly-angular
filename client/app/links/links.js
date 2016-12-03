angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};

  $scope.signout = function () {
    Auth.signout();
  };

  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });
});
