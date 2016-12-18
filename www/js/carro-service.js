angular.module('starter')
.service('CarroService', function($http){

    var url= 'http://aluracar.herokuapp.com/';

    return{
      obterCarros : function (error, sucesses){
          return $http.get(url).then(function(response){
              sucesses(response.data);
            }, function(error) {
                error(error);
            });
      }
    }

});