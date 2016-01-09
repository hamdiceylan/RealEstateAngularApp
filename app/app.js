angular.module('realEstate',['ui.router','app.controllers','app.directives','app.factories'])

    .run(['$http', function ($http) {
        //cfpLoadingBar.start();
    }])

    .config(function($stateProvider, $urlRouterProvider,$httpProvider) {

        $httpProvider.interceptors.push(function($q,$rootScope,$log){
            return {
                request :  function(config){
                    $rootScope.$broadcast('loading-started');
                    //console.log(config);
                    return config || $q.when(config);
                },
                response : function(response){
                    $rootScope.$broadcast('loading-complete');
                    $log.info("response received");
                    return response || $q.when(response);
                },
                responseError : function(rejection){
                    $rootScope.$broadcast('loading-complete');
                    $log.error(rejection.status);
                    return $q.reject(rejection);
                }
            }
        });
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/views/home.html',
                controller: 'AppCtrl'
            })
            .state('property', {
                url: '/property',
                templateUrl: 'app/views/property.html',
                controller: 'PropertyCtrl'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'app/views/settings.html',
                controller: 'SettingsCtrl'
            })
            .state('company', {
                url: '/company',
                templateUrl: 'app/views/company.html',
                controller: 'CompanyCtrl'
            })
            .state('users', {
                url: '/users',
                templateUrl: 'app/views/users.html',
                controller: 'UsersCtrl'
            })
            .state('passwordSettings', {
                url: '/passwordSettings',
                templateUrl: 'app/views/passwordSettings.html'
            })
            .state('propertySettings', {
                url: '/propertySettings',
                templateUrl: 'app/views/propertySettings.html',
                controller:'PropertySettingsCtrl'
            })

        $urlRouterProvider.otherwise('/home');
    });