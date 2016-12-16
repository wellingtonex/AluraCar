angular.module('starter')
.controller('DetalheController', function($scope, $stateParams){

    $scope.carro = $stateParams.carro;
});