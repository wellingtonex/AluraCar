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
            
            $rootScope.usuario = dados.data.usuario;
            $state.go('app.listagem');
        }, function(error) {
            console.log(error);
            
            $ionicPopup.alert({
                title: 'Opa',
                template: 'Message: ' + error.data.mensagem + '\n Status: ' + error.status 
                });
        });
	}

});