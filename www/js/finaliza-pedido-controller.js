angular
    .module('starter')
    .controller('FinalizaPedidoController', function ($scope, $stateParams, $ionicPopup, $state) {
         $scope.carro = angular.fromJson($stateParams.carro);
         console.log($scope.carro);
         
         $scope.finalizarPedido = function() {
            $ionicPopup.alert({
                title: 'Parabéns',
                template: 'Você acaba de comprar um carro.'
            }).then(function() {
                $state.go('listagem');
            })
         }
    });