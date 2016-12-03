angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};

  $scope.signout = function () {
    console.log('Auth out');
    Auth.signout();
  };

  Links.getAll().then(function(links) {
    console.log(links);
    $scope.data.links = links;
  });
});
