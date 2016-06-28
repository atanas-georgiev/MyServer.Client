(function () {
    'use strict';

    function ListAlbumController($location, auth, albums, baseUrl) {
        var ALBUMS_API_URL = 'ImageGallery/Albums/';
        var vm = this;
        vm.albumsDb = {};
        vm.server = baseUrl;

        (function() { // init
            albums.getAlbums()
                .then(function (albumsResponse) {
                    vm.albumsDb = albumsResponse;
                });
        })();
    }

    angular.module('myServerApp.controllers')
        .controller('ListAlbumController', ['$location', 'auth', 'albums', 'baseUrl', ListAlbumController]);
}());