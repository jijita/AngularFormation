angular.module("app", ["ngRoute", "ngMaterial"])
.controller("mainController", function($scope, $route, $routeParams) {
    $scope.$route = $route;
    $scope.$routeParams = $routeParams;
  })

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', { templateUrl: 'app/components/montreal/montreal.html', controller: 'montrealController' }).
        when('/city', { templateUrl: 'app/components/city/city.html', controller: 'cityController' }).
        otherwise({ redirectTo: '/', controller: 'showMontrealController' });
      $locationProvider.html5Mode(true);
    }])

.controller('cityController', function ($scope, $http) {

      // Initialization of the scope variables. 
    
      $scope.cityName = "Your City";
      $scope.tmp = 0;
      $scope.minTemp = 0;
      $scope.maxTemp = 0;
    
      // Logic for the On-Click event.
    
      $scope.funGetCity = function () {
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.cityName + "&APPID=602069103349fb71ec61fece71d05371";
        $http.get(url)
          .success(function (response) {
            $scope.imgWidth = 150;
            $scope.imgHeight = 150;
            $scope.wtData = response.coord;
            $scope.ct = response.name;
            $scope.tmp = response.main.temp - 272.15;
            $scope.minTemp = response.main.temp_min - 272.15;
            $scope.maxTemp = response.main.temp_max - 272.15;
            $scope.hmdy = response.main.humidity;
            $scope.imgCode = response.weather[0].icon;
          });
      }
    })
  
.controller("montrealController", function($scope, $http) {
      // Initialization of the scope variables.
      $scope.tmp = 0;
      $scope.minTemp = 0;
      $scope.maxTemp = 0;
  
      // Logic for the Init event.
      $scope.init = function() {
        var url =
          "http://api.openweathermap.org/data/2.5/weather?q=Montreal&APPID=602069103349fb71ec61fece71d05371";
        $http.get(url).success(function(response) {
          $scope.imgWidth = 150;
          $scope.imgHeight = 150;
          $scope.wtData = response.coord;
          $scope.ct = response.name;
          $scope.tmp = response.main.temp - 272.15;
          $scope.minTemp = response.main.temp_min - 272.15;
          $scope.maxTemp = response.main.temp_max - 272.15;
          $scope.hmdy = response.main.humidity;
          $scope.imgCode = response.weather[0].icon;
        });
      };
    })
  