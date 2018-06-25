/*
  angular. => Objeto global do Angular

  Criamos nosso modulo principal da aplicacao Angular, sem precisar passar as dependencias,
  sendo assim sera um array vazio.

  angular.module('module_name', []) => Criamos um novo modulo dessa forma.

  Ao criar o modulos de diretivas, eu preciso tambem informar ao modulo principal que eu preciso das
  diretivas.

*/
angular.module('alurapic', ['Directives', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){
  /* 
    Para deixar a url mais elegante sem o /#/, ativamos o html5mode, assim o angular deixa de
    trabalhar com # e passa a trabalhar normal, mas um detalhe importante precisa ser levado
    em consideração: o backend tb precisa estar preparado para isso.

    Outra coisa que será necessário, sera colocar tag base -> href = '/' no public/index.html.
    Se o navegador n suportar não tiver suporte, ele volta ao normal /#/...
  */

  $locationProvider.html5Mode(true);
  
  /*
    Quando a url tiver /#/photos ou /photos, o Angular entende qual o template e controller ele ira
    carregar na requisicao.

    Sendo assim, as partials da view serao injetadas dentro do ng-view
  */
  
  $routeProvider.when('/photos', {
    templateUrl: 'partials/main.html',
    controller: 'PhotosController'
  });

  $routeProvider.when('/photos/new', {
    templateUrl: 'partials/photo.html'
  });

  $routeProvider.otherwise({ redirectTo: '/photos'});
});