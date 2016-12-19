angular.module('starter')
.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('app', {
    url : '/app',
    templateUrl : 'templates/menu.html',
    abstract: true
  })
  .state('app.listagem', {
    url: '/listagem',
    views : {
      'menuContent': {
        templateUrl: 'templates/listagem.html',
        controller: 'ListagemController'
      }
    }
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
  })
  .state('login', {
    url : '/login',
    templateUrl : 'templates/login.html',
    controller : 'LoginController'
  })  
});