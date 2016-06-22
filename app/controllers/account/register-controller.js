(function () {
    'use strict';

    function RegisterController($location, auth) {
        var vm = this;
        var user = {};

        vm.register = function (user, registerForm) {
            if (registerForm.$valid) {
                console.log(user);
                user.notificationMask = 0;
                auth.register(user)
                    .then(function () {
                        console.log('...User registered...');
                        $location.path('/identity/login');
                    }, function (response) {
                        vm.message = response.statusText + "\r\n";
                        if (response.data.modelState) {
                            for (var key in response.data.modelState) {
                                vm.message += response.data.modelState[key] + "\r\n";
                            }
                        }
                        if (response.data.exceptionMessage)
                            vm.message += response.data.exceptionMessage;
                    });
            }
        }
    }

    angular.module('myServerApp.controllers')
        .controller('RegisterController', ['$location', 'auth', RegisterController]);
}());