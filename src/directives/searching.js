var app = angular.module('angularApp');

app.directive('searching', function() { 
  return { 
    restrict: 'E',
    templateUrl: '/src/directives/searching.html',
    link: function(scope, element, attrs) {
        scope.buttonIMG = "/public/icons/lupa.PNG",
        scope.hide = true,

        scope.pesquisar = function() {
          if(scope.hide){
            document.getElementById('taggy').style.display = 'block';
            document.getElementById('taggy').focus();
            scope.hide = false;
          }
          else {
            document.getElementById('taggy').style.display = 'none';
            scope.hide = true;
          }


        }
      }
  }; 
});