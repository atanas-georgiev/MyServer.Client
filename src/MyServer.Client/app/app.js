(function () {
    'use strict';

    function config($routeProvider, $locationProvider) {

        var CONTROLLER_VIEW_MODEL_NAME = 'vm';

        $locationProvider.html5Mode(true);

        var routeResolvers = {
            authenticationRequired: {
                authenticate: ['$q', 'auth', function ($q, auth) {
                    if (auth.isAuthenticated()) {
                        return true;
                    }

                    return $q.reject('not authorized');
                }]
            }
        }

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/account/register', {
                templateUrl: 'app/views/account/register.html',
                controller: 'RegisterController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/account/login', {
                templateUrl: 'app/views/account/login.html',
                controller: 'LoginController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/gallery/albums/add', {
                templateUrl: 'app/views/image-gallery/add-album.html',
                controller: 'AddAlbumController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/gallery/albums', {
                templateUrl: 'app/views/image-gallery/list-album.html',
                controller: 'ListAlbumController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            .when('/gallery/albums/:id', {
                templateUrl: 'app/views/image-gallery/edit-album.html',
                controller: 'EditAlbumController',
                controllerAs: CONTROLLER_VIEW_MODEL_NAME
            })
            
            //.when('/cats/add', {
            //    templateUrl: 'partials/cats/add-cat.html',
            //    controller: 'AddCatController',
            //    controllerAs: CONTROLLER_VIEW_MODEL_NAME,
            //    resolve: routeResolvers.authenticationRequired
            //})
            //.when('/cats', {
            //    templateUrl: 'partials/cats/search-cats.html',
            //    controller: 'SearchCatsController',
            //    controllerAs: CONTROLLER_VIEW_MODEL_NAME
            //})
            .otherwise({ redirectTo: '/' });
    }

    function run($http, $cookies, $rootScope, $location) {
        //$rootScope.$on('$routeChangeError', function (ev, current, previous, rejection) {
        //    if (rejection === 'not authorized') {
        //        $location.path('/');
        //    }
        //});

        //if (auth.isAuthenticated()) {
        //    $http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get('authentication');
        //    auth.getIdentity();
        //}
    };

    angular.module('myServerApp.services', []);
    angular.module('myServerApp.directives', []);
    angular.module('myServerApp.controllers', ['myServerApp.services']);

    angular.module('myServerApp', ['ngRoute', 'ngCookies', 'myServerApp.controllers', 'myServerApp.directives'])
        .config(['$routeProvider', '$locationProvider', config])
        .run(['$http', '$cookies', '$rootScope', '$location', run])
        .constant('baseUrl', 'http://localhost:3763/');

}());