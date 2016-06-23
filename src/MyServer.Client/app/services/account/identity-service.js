(function () {
    'use strict';

    var identityService = function identityService($q, $cookies) {
        var USER_KEY = 'authentication_data';

        var currentUser = {}; // current user if any property exists
        var deferred = $q.defer();

        return {
            getUser: function () {
                if (this.isAuthenticated()) {
                    var userCookie = $cookies.get(USER_KEY);
                    if (userCookie) {
                        currentUser = JSON.parse($cookies.get(USER_KEY));
                    }
                    
                    return $q.resolve(currentUser);
                }

                return deferred.promise;
            },
            isAuthenticated: function () {
                var userCookie = $cookies.get(USER_KEY);
                return !!userCookie;
            },
            setUser: function (user) {
                currentUser = user;
                deferred.resolve(user);
            },
            removeUser: function () {
                currentUser = {};
                deferred = $q.defer();
            }
        };
    };

    angular
        .module('myServerApp.services')
        .factory('identity', ['$q', '$cookies', identityService]);
}());