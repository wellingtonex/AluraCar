angular.module('starter')
.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('app', {
    url : '/app',
    templateUrl : 'templates/menu.html',
    abstract: true,
    controller: 'MenuController'
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
  .state('app.detalhe', {
    url: '/detalhe/:carro',
    views : {
      'menuContent': {
        templateUrl: 'templates/detalhe.html',
        controller: 'DetalheController'
      }
    }
  })
  .state('app.finalizaPedido', {
    url: '/finalizaPedido/:carro',
    views : {
      'menuContent': {
        templateUrl: 'templates/finalizaPedido.html',
        controller: 'FinalizaPedidoController'
      }
    }    
  })
  .state('login', {
    url : '/login',
    templateUrl : 'templates/login.html',
    controller : 'LoginController'
  }).state('app.perfil', {
    url: '/perfil',
    views : {
      'menuContent': {
        templateUrl: 'templates/perfil.html',
        controller: 'PerfilController'
      }
    }
  }).state('app.agendamentos', {
    url : '/agendamentos',
    views : {
        'menuContent' : {
            templateUrl : 'templates/agendamentos.html',
            controller : 'AgendamentoController'
        }
    }
  })
});