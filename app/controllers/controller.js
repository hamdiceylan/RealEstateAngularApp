var serviceDomain = "http://realestatemobileapp.azurewebsites.net/api";
angular.module('app.controllers', [])
    .controller('AppCtrl',function($http,   $scope){
        $scope.adi = "Hamdi";
        $http.get(serviceDomain + '/stats/dashboard').
            then(function(response) {
                $scope.datas = response.data[0];
            }, function(response) {
        });
    })
    .controller('SettingsCtrl',function(){

    })
    .controller('PropertyCtrl',function($scope,$http){
        $http.get(serviceDomain + '/property/get').
            then(function(response) {
                $scope.properties = response.data[0];
            }, function(response) {
        });
    })
    .controller('CompanyCtrl', function ($http,$scope) {
        $http.get(serviceDomain + '/company').
            then(function(response) {
                $scope.companies = response.data[0];
            }, function(response) {
        });

    })
    .controller('UsersCtrl', function ($http,$scope) {
        $http.get(serviceDomain + '/userData/get').
            then(function(response) {
                $scope.users = response.data[0];
            }, function(response) {
         });
    })
    .controller('PropertySettingsCtrl', function ($http,$scope) {
        $http.get(serviceDomain + '/userData/getuserstat/1').
            then(function(response) {
                $scope.stats = response.data[0];
            }, function(response) {
            });
    });

