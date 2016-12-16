angular.module('starter')
.controller('DetalheController', function($scope, $stateParams){

    $scope.carro = angular.fromJson($stateParams.carro);
    $scope.precoFinal = 0;

    $scope.acessorios = [
        {nome:'Freio ABS', preco:800},
        {nome:'Ar Condicionado', preco:1000},
        {nome:'MP3 Player', preco:500}
    ];

    $scope.changeItem = function(acessorio, isMarcado) {
        if(isMarcado) {
            $scope.carro.preco += acessorio.preco;
        } else {
            $scope.carro.preco -= acessorio.preco;
        }
    }
});