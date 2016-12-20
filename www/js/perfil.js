angular.module('starter').controller('PerfilController', function($rootScope, $scope) {

    $scope.usuario = $rootScope.usuario;
    $scope.editando = false;

    $scope.editar = function() {
        $scope.editando = true;
    }

    $scope.salvar = function() {
        console.log($scope.usuario);
        
        $scope.editando = false;
    }
})