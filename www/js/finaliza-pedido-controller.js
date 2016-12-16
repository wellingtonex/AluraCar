angular
    .module('starter')
    .controller('FinalizaPedidoController', function ($scope, $stateParams) {
         $scope.carro = angular.fromJson($stateParams.carro);
         console.log($scope.carro);
         
    });