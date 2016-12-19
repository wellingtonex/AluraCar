angular.module('starter')
.controller('LoginController', function($scope, CarroService, $ionicPopup, $state, $rootScope){

	$scope.usuario = {};

	$scope.login = function(){
        
        let dadosDoLogin = {
			params : {
				email : $scope.usuario.email,
				senha : $scope.usuario.senha
			}
		}
        
        CarroService.login(dadosDoLogin).then(function(dados) {
            console.log(dados.data.usuario);
            
            $rootScope.usuario = dados.data.usuario;
            $state.go('app.listagem');
        }, function(error) {
            $ionicPopup.alert({
                title: 'Opa',
                template: 'Email ou senha invalidos.'
                });
        });
	}

});