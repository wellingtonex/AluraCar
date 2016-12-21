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
            $filter,
            DatabaseValues) {
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

            //desabilita o botão de voltar da proxima tela
            $ionicHistory.nextViewOptions({
                disableBack : true
            })
            
            
            CarroService.salvarPedido(pedidoFinalizado).then(
                function(dados){

                    $scope.salvarDadosNoBancoDeDados(true);                


                    $ionicPopup.alert({
                        title: 'Parabéns',
                        template: 'Você acaba de comprar um carro.'
                        }).then(function(){
                            $state.go('app.listagem')});   
                }, function(error) {
                    $scope.salvarDadosNoBancoDeDados(false);
                    console.log(error);
                    $ionicPopup.alert({
                    title: 'Deu erro',
                    template: 'Campos obrigatórios'
                    }).then(function() {
                        $state.go('app.listagem')});
                });
        }

        $scope.salvarDadosNoBancoDeDados = function(confirmado) {
            DatabaseValues.setup();
                DatabaseValues.bancoDeDados.transaction(function (transacao) {
                transacao.executeSql('INSERT INTO agendamentos(nome, endereco, email, dataAgendamento, modelo, preco, confirmado) VALUES (?,?,?,?,?,?,?)', [$scope.pedido.nome, $scope.pedido.endereco, $scope.pedido.email, $scope.dataSelecionada, $scope.carro.nome, $scope.carro.preco, confirmado]);
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