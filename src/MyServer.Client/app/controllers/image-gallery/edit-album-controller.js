(function () {
    'use strict';

    function EditAlbumController($location, auth, albums) {
        var ALBUMS_API_URL = 'ImageGallery/Album/';

        //var vm = this;
        //var album = {};

        //vm.addAlbum = function (album, albumForm) {
        //    if (albumForm.$valid) {
        //        albums.addAlbum(album)
        //            .then(function (albumResponse) {
        //                $location.path(ALBUMS_API_URL + albumResponse.id);
        //            },
        //            function (response) {
        //                vm.message = response.statusText + "\r\n";
        //                if (response.data.modelState) {
        //                    for (var key in response.data.modelState) {
        //                        vm.message += response.data.modelState[key] + "\r\n";
        //                    }
        //                }
        //                if (response.data.exceptionMessage)
        //                    vm.message += response.data.exceptionMessage;
        //            });
        //    }
        //}
    }

    angular.module('myServerApp.controllers')
        .controller('EditAlbumController', ['$location', 'auth', 'albums', EditAlbumController]);
}());