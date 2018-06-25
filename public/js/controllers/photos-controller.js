/*
  Para se criar um controller usa-se o module principal, dizemos que é um controller, depois
  definimos como parametros o nome do controller (Camel case com primeira letra maiuscula) 
  e a função que define nosso controller

  O $scope é uma injeção de dependencia, que diz para o angular procurar ou definir o escopo
  definido na view, para tenhamos acesso por ex. a variavel photo.

  O $scope é um POJO (Plain Old Javascript Object), que pode adicionar propriedades dinamicamente
  como é feito qnd é adicionado por ex. $scope.photos = []
*/


angular.module('alurapic').controller('PhotosController', function ($scope, $http) {
  
  // Toda variavel declarada dentro de uma função é privada, ou seja apenas no escopo da função. 
  $scope.photos = []

  // Sera nosso filtro de acordo com que o usuario digitar na busca.
  $scope.find = ""

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

    ** Toda variavel declarada dentro de uma função é privada.
  */
});