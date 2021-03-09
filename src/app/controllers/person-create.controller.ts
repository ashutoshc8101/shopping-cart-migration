import * as angular from 'angular';
angular
  .module("codecraft")
  .controller("PersonCreateController", function(
    $scope,
    $state,
    ContactService
  ) {
    $scope.contacts = ContactService;
    $scope.person = {};

    $scope.save = function() {
      $scope.contacts.createContact($scope.person).then(function() {
        $state.go("list");
      });
    };
  });