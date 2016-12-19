angular.module('starter')
.controller('LoginController', function($scope, CarroService, $ionicPopup, $state){

	$scope.usuario = {};

	$scope.login = function(){
        
        let dadosDoLogin = {
			params : {
				email : $scope.usuario.email,
				senha : $scope.usuario.senha
			}
		}
        
        console.log(dadosDoLogin);
        

        CarroService.login(dadosDoLogin).then(function(dados) {
            $state.go('listagem');
        }, function(error) {
            $ionicPopup.alert({
                title: 'Opa',
                template: 'Email ou senha invalidos.'
                });
        });
	}

});