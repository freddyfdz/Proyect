//declaramos la variable 2celular" de tipo angular.module, que servira como modulador de nuestra aplicacion
var celulares = angular.module("celulares", ['ngRoute',"ngResource"]);
  

celulares.config(function($routeProvider) {
  $routeProvider
	.when("/nokia1", {
		controller:"nokiaC",
		templateUrl:"nokia/nokia.html"
		
    })

	.when("/motorola1", {
      controller:"motorolaC",
      templateUrl:"motorola.html"
    })

	.when("/samsung1", {
      controller:"samsungC",
      templateUrl:"samsung.html"
    })

	.otherwise({
      redirectTo:"nokia"
    })
})

celulares.controller("nokiaC", function($scope){
	$scope.imagen = "estoy en nokia";
});

celulares.controller("motorolaC", function($scope){
	$scope.imagen = "estoy en motorola";
});

celulares.controller("samsungC", function($scope){
	$scope.imagen = "estoy en samsung1";
});


//con dataResource inyectamos la factoría
celulares.controller("appController", function ($scope, $http, dataResource) {
    //hacemos uso de $http para obtener los datos del json
    $http.post('http://api-a.vime.com.co/login/').success(function (data) {
        //Convert data to array.
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.datos = data;
    });
    //datosResource lo tenemos disponible en la vista gracias a $scope
    $scope.datosResource = dataResource.post();
})
//de esta forma tan sencilla consumimos con $resource en AngularJS
celulares.factory("dataResource", function ($resource) {
    return $resource("http://api-a.vime.com.co/login/", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "POST", isArray: true }
    })
})
 
