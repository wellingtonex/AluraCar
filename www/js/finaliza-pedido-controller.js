angular
    .module('starter')
    .controller('FinalizaPedidoController', function (
            $scope,
            $stateParams,
            $ionicPopup,
            $state,
            CarroService,
            $ionicHistory,
            ionicDatePicker,
            $filter) {
        $scope.carro = angular.fromJson($stateParams.carro);
        
        
        $scope.pedido = {};
        $scope.dataSelecionada;
         
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

        $scope.abrirPopupCalendario = function () {
            let configuracoes = {
                weeksList : ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
                monthsList: [
                        "Janeiro",
                        "Fevereiro",
                        "Março",
                        "Abril",
                        "Maio",
                        "Junho",
                        "Julho",
                        "Agosto",
                        "Setembro",
                        "Outubro",
                        "Novembro",
                        "Dezembro"],
                callback: function (data) {
                    $scope.dataSelecionada = new Date(data);
                    $scope.dataFormatada = $filter('date')($scope.dataSelecionada, 'dd/MM/yyyy');
                }
            }
            ionicDatePicker.openDatePicker(configuracoes)
        }
});