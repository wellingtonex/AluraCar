angular.module('starter')
.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/listagem');

  $stateProvider
  .state('listagem', {
    url: '/listagem',
    templateUrl: 'templates/listagem.html',
    controller: 'ListagemController'
  })
  .state('detalhe', {
    url: '/detalhe/:carro',
    templateUrl: 'templates/detalhe.html',
    controller: 'DetalheController'
  })
  .state('finalizaPedido', {
    url: '/finalizaPedido/:carro',
    templateUrl: 'templates/finalizaPedido.html',
    controller: 'FinalizaPedidoController'
  });
  
});