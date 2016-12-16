angular.module('starter')
.controller('ListagemController', function($scope){

	$scope.carros =  [
		{nome:"BMW 120i",preco:50000},
		{nome:"Onix 1.6",preco:29000},
		{nome:"Fiesta 2.0",preco:42000},
		{nome:"C3 1.0",preco:47000},
		{nome:"Uno Fire",preco:25000},
		{nome:"Sentra 2.0",preco:36000},
		{nome:"Astra Sedan",preco:18000},
		{nome:"Vectra 2.0 Turbo",preco:28000},
		{nome:"Hilux 4x4",preco:59000},
		{nome:"Montana Cabine dupla",preco:34000},
		{nome:"Outlander 2.4",preco:60000},
		{nome:"Fusca 1500",preco:12000}];

});