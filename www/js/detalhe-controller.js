angular.module('starter')
.controller('DetalheController', function($scope, $stateParams){

    $scope.carro = angular.fromJson($stateParams.carro);
});