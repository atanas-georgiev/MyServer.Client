(function () {
    'use strict';

    function EditAlbumController($scope, $location, $routeParams, FileUploader, auth, albums, baseUrl) {
        var ALBUMS_API_URL = 'ImageGallery/Album/';

        var vm = this;
        var album = {};
        vm.base = baseUrl;

        $scope.uploader = new FileUploader({
            url: 'http://localhost:3763/ImageGallery/Image',
            headers: { 'Album-Id': $routeParams.id }
        });
        
        (function () { // init
            albums.getAlbumsDetails($routeParams.id)
                .then(function (albumsResponse) {
                    vm.album = albumsResponse;
                });
        })();


        vm.updateAlbum = function (album, albumForm) {
            if (albumForm.$valid) {
                albums.updateAlbum(album.id, album)
                    .then(function (albumResponse) {
                       // $location.path(ALBUMS_URL + albumResponse.id);
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
        //}
    }

    angular.module('myServerApp.controllers')
        .controller('EditAlbumController', ['$scope', '$location', '$routeParams', 'FileUploader', 'auth', 'albums', 'baseUrl', EditAlbumController]);
}());