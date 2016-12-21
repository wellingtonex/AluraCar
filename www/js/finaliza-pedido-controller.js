angular
    .module('starter')
    .controller('FinalizaPedidoController', function ($scope, $stateParams, $ionicPopup, $state, CarroService, $ionicHistory) {
        $scope.carro = angular.fromJson($stateParams.carro);
        
        
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

            //console.log(pedidoFinalizado);
            
            CarroService.salvarPedido(pedidoFinalizado).then(
                function(dados){

                    $ionicHistory.nextViewOptions({
                        disableBack : true
                    })

                    $ionicPopup.alert({
                        title: 'Parabéns',
                        template: 'Você acaba de comprar um carro.'
                        }).then(function(){
                            $state.go('app.listagem')});   
                }, function(error) {
                    console.log(error);
                    $ionicPopup.alert({
                    title: 'Deu erro',
                    template: 'Campos obrigatórios'
                    });
                });
        }
});