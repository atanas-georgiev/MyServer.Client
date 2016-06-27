(function () {
    'use strict';

    function ListAlbumController($location, auth, albums, baseUrl) {
        var ALBUMS_API_URL = 'ImageGallery/Album/';
        var vm = this;
        vm.albumsDb = {};
        vm.server = baseUrl;

        (function() { // init
            albums.getAlbums()
                .then(function (albumsResponse) {
                    vm.albumsDb = albumsResponse;
                });
        })();

        
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
        .controller('ListAlbumController', ['$location', 'auth', 'albums', 'baseUrl', ListAlbumController]);
}());