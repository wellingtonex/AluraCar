angular.module('starter').controller('PerfilController', function($rootScope, $scope, $cordovaCamera) {

    $scope.usuario = $rootScope.usuario;
    $scope.editando = false;

    $scope.editar = function() {
        $scope.editando = true;
    }

    $scope.salvar = function() {
        console.log($scope.usuario);
        
        $scope.editando = false;
    }

    $scope.tirarFoto = function() {
        let opcoes = {
            correctOrientation:true,
            quality: 70 
        };

        $cordovaCamera.getPicture(opcoes).then(function(foto) {
            $scope.caminhoFoto = foto;
        }, function(error) {

        });
    }
})