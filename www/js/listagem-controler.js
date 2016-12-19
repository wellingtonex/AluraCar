angular.module('starter')
.controller('ListagemController', function($scope, CarroService){

	CarroService.obterCarros(function(error){
		console.log(error);
		
	}, function(dados) {
		$scope.carros = dados;
	});


});