(function () {
    'use strict';

    function AddAlbumController($location, auth, albums) {
        var vm = this;
        var album = {};

        vm.addAlbum = function (album, albumForm) {
            if (albumForm.$valid) {
                albums.addAlbum(album)
                    .then(function (catId) {
                        $location.path('/cats/details/' + catId);
                    });
            }
        }
    }

    angular.module('myServerApp.controllers')
        .controller('AddAlbumController', ['$location', 'auth', 'albums', AddAlbumController]);
}());