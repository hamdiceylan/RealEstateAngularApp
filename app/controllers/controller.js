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

        $scope.refreshList = function(){
            $http.get(serviceDomain + '/company/get').
                then(function(response) {
                    $scope.companies = response.data[0];
                }, function(response) {
                });
        }
        $scope.refreshList();


        $scope.addCompany = function (newCompany) {
            console.log(newCompany);
            var data = { "Name": "3", "Phone": "Test", "Address": "User"};
            $http.post(serviceDomain +'/company/post',
                JSON.stringify(newCompany),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).success(function (data) {
                    console.log(data);
                    if(data == "Success"){
                        $scope.message = "Firma Başarılı bir şekilde eklendi.";
                    }
                    $scope.refreshList();
                });

        }

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

