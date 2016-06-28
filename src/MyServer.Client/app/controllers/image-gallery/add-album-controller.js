(function () {
    'use strict';

    function AddAlbumController($location, auth, albums) {
        var vm = this;

        vm.addAlbum = function (album, albumForm) {
            if (albumForm.$valid) {
                albums.addAlbum(album)
                    .then(function (albumResponse) {
                        $location.path('/gallery/albums/' + albumResponse.id);
                    },
                    function (response) {
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
        .controller('AddAlbumController', ['$location', 'auth', 'albums', AddAlbumController]);
}());