import * as angular from 'angular'

angular.module("codecraft")
    .directive('appRoot', appRootDirective);

function appRootDirective(){
    return {
        templateUrl: './app-root.directive.html',
        controller: ng1AppController,
        scope: {},
    };
}

ng1AppController.$inject = ['$scope'];
function ng1AppController($scope){
    $scope.onInit = onInit;
    $scope.initialized = false;

    function onInit(){
        $scope.initialized = true;
    }
}
