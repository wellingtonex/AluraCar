angular.module('starter').controller('AgendamentoController', function($scope, DatabaseValues) {

    $scope.agendamentos = [];
    DatabaseValues.setup();
        DatabaseValues.bancoDeDados.transaction(function (transacao) {
        transacao.executeSql('SELECT * FROM agendamentos', [], function(transacao, resultado) {
            for(var i = 0; i < resultado.rows.length; i++){
                $scope.agendamentos.push(resultado.rows[i]);
            }
            console.log($scope.agendamentos);            
        });
    });
});