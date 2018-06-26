/*
  Quando eu crio o modulo de diretivas por ex. eu preciso adiciona-lo tambem no index, no srcript, 
  para ele esteja no escopo principal do projeto.

  Nesse projeto, iremos criar todas as diretivas aqui mesmo.
*/

angular.module('Directives', [])
.directive('myPanel', function(){
  // Precisamos retornar um objeto (directive definition object), entao criamos a variavel ddo.
  var ddo = {};

  /*
    Precisamos definir o tipo de restricao da diretiva, nesse caso sera de attributes e element AE.
    Como elemento, podemos usar a diretiva como tag html.
    Como atributo, podemos usar a diretiva como atributo de uma tag html.
  */
  ddo.restrict = "AE";

  /*
    Agora precisamos que essa diretiva tenha um escopo privado, para que n interfira em outras partes
    do projeto, de forma que seja usado em lugares diferentes e de forma independente.

    Para isso iremos isolar o scopo dessa diretiva.

    O scope usado abaixo é apenas para o scope dessa diretiva, totalmente diferente do scope
    usado no controller.

    o @ referencia ao valor passado para a interface de comunicacao com a diretiva, com o atributo,
    por ex. o title. se o nome da interface de comunicacao (attributo title) for igual a propriedade
    de scopo passada, basta apenas colocar o @, pois o mesmo ja interpretara como sendo a msm.
  */
  ddo.scope = {
    titulo: '@'
  }

  /*
    Agora precisamos definir a marcação, o html da diretiva ou seja seu template.

    Precisamos nesse caso, tambm dizer que o panel devera manter os elementos filhos
    no caso, a imagem. Para isso é necessario dizer que o objeto ira aceitar transclusion.

    No template (marcacao html), tambem sera necessario dizer onde sera o elemento filho
    usando a diretiva ng-transclude.
  */

  ddo.transclude = true;

  ddo.templateUrl = 'js/directives/my-panel.html';
      
  return ddo;

}).directive('myPhoto', function(){
  var ddo = {};

  ddo.restrict = 'AE';

  ddo.scope = {
    titulo: '@',
    url: '@'
  }

  ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';

  return ddo;
})