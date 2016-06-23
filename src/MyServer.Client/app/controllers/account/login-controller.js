(function () {
    'use strict';

    function LoginController($location, auth) {
        var vm = this;

        vm.login = function (user, loginForm) {
            if (loginForm.$valid) {
                auth.login(user)
                    .then(function () {
                        $location.path('/');
                    }, function (response) {
                        //vm.message = response.statusText + "\r\n";

                        //if (response.data.modelState) {
                        //    for (var key in response.data.modelState) {
                        //        vm.message += response.data.modelState[key] + "\r\n";
                        //    }
                        //}

                        if (response.error_description)
                            vm.message = response.error_description;
                    });
            }
        }
    }

    angular.module('myServerApp.controllers')
        .controller('LoginController', ['$location', 'auth', LoginController]);
}());