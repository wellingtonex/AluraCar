angular
    .module('starter')
    .controller('FinalizaPedidoController', function ($scope, $stateParams, $ionicPopup, $state, CarroService) {
        $scope.carro = angular.fromJson($stateParams.carro);
        console.log($scope.carro);
        
        $scope.pedido = {};
         
        $scope.finalizarPedido = function (){
            var pedidoFinalizado = {
                params : {
                    carro : $scope.carro.nome,
                    preco: $scope.carro.preco,
                    nome : $scope.pedido.nome,
                    endereco : $scope.pedido.endereco,
                    email : $scope.pedido.email
                }
            }

            console.log(pedidoFinalizado);
            
            CarroService.salvarPedido(pedidoFinalizado).then(function(dados){
                $ionicPopup.alert({
                    title: 'Parabéns',
                    template: 'Você acaba de comprar um carro.'
                }).then(function(){
                    $state.go('listagem')
            }, function() {
                $ionicPopup.alert({
                title: 'Deu erro',
                template: 'Campos obrigatórios'
                });
            });   
            });
        }
});