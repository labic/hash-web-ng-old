app.directive('noticias', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'src/directives/noticias.html' 
  }; 
});