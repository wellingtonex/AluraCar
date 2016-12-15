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
    url: '/detalhe',
    templateUrl: 'templates/detalhe.html',
    controller: 'DetalheController'
  });
  
});