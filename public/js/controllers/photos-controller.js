/*
  Para se criar um controller usa-se o module principal, dizemos que é um controller, depois
  definimos como parametros o nome do controller e a função que define nosso controller

  O $scope é uma injeção de dependencia, que diz para o angular procurar ou definir o escopo
  definido na view, para tenhamos acesso por ex. a variavel photo.
*/


angular.module('alurapic').controller('PhotosController', function ($scope, $http) {
  
  // Toda variavel declarada dentro de uma função é privada, ou seja apenas no escopo da função. 
  $scope.photos = []

  $http.get('v1/fotos').
  success(function(photos){
    $scope.photos = photos;
  }).error(function(error){
    console.log("Error: ", error);
  })
  /*
    $http é requisicao assincrona, ou seja voce nao sabe quando ela ira terminar...
    O max. que ele faz eh te devolver uma promessa, ou seja, entao se eu conseguir pegar os
    dados eu te retorno uma resposta.
    (funcao de callback promise.then)
  
    var promise = $http.get('v1/fotos');
    promise.then(function(response){
      $scope.photos = response.data;
    }).catch(function(error){
      console.log("Error: ", error);
    });

    Que pode ser feito de forma mais elegante e correta como esta acima desse bloco de comentario
  */
});