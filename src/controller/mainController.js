angular.module('angularApp')
    .controller('mainController', ['$scope', function($scope) {
  $scope.novidades = [ 
  { 
    icon: '/public/icons/img_not.jpg', 
    title: 'Título da notícia 1', 
    descricao: 'Aqui entra o resumo da notícia', 
    tags: [
    "política","alemanha","líder"] 
  }, 
  { 
    icon: '/public/icons/img_not.jpg', 
    title: 'Título da notícia 2', 
    descricao: 'Aqui entra o resumo da notícia', 
    tags: [
    "política","alemanha","líder"] 
  },
  { 
    icon: '/public/icons/img_not.jpg', 
    title: 'Título da notícia 3', 
    descricao: 'Aqui entra o resumo da notícia', 
    tags: [
    "política","alemanha","líder"] 
  } 
];

  $scope.outros = [ 
  { 
    icon: '/public/icons/img_not.jpg', 
    title: 'Título da notícia 4', 
    descricao: 'Aqui entra o resumo da notícia', 
    tags: [
    "política","alemanha","líder"] 
  },
  { 
    icon: '/public/icons/img_not.jpg', 
    title: 'Título da notícia 5', 
    descricao: 'Aqui entra o resumo da notícia', 
    tags: [
    "política","alemanha","líder"] 
  }, 
  { 
    icon: '/public/icons/img_not.jpg', 
    title: 'Título da notícia 6', 
    descricao: 'Aqui entra o resumo da notícia', 
    tags: [
    "política","alemanha","líder"] 
  }, 
  { 
    icon: '/public/icons/img_not.jpg', 
    title: 'Título da notícia 7', 
    descricao: 'Aqui entra o resumo da notícia', 
    tags: [
    "política","alemanha","líder"] 
  }, 
  { 
    icon: '/public/icons/img_not.jpg', 
    title: 'Título da notícia 8', 
    descricao: 'Aqui entra o resumo da notícia', 
    tags: [
    "política","alemanha","líder"] 
  }, 
  { 
    icon: '/public/icons/img_not.jpg', 
    title: 'Título da notícia 9', 
    descricao: 'Aqui entra o resumo da notícia', 
    tags: [
    "política","alemanha","líder"] 
  }
];
  
}]);