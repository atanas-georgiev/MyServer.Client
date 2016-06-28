(function () {
    'use strict';

    function EditAlbumController($scope, $location, $routeParams, FileUploader, auth, albums, images, baseUrl) {

        var vm = this;
        vm.base = baseUrl;

        $scope.uploader = new FileUploader({
            url: baseUrl + 'ImageGallery/Albums/' + $routeParams.id + '/Images',
            headers: { 'Authorization': 'Bearer ' + auth.getToken() }
        });

        // CALLBACKS

        $scope.uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        $scope.uploader.onAfterAddingFile = function (fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        $scope.uploader.onAfterAddingAll = function (addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        $scope.uploader.onBeforeUploadItem = function (item) {
            console.info('onBeforeUploadItem', item);
        };
        $scope.uploader.onProgressItem = function (fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        $scope.uploader.onProgressAll = function (progress) {
            console.info('onProgressAll', progress);
        };
        $scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        $scope.uploader.onErrorItem = function (fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        $scope.uploader.onCancelItem = function (fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        $scope.uploader.onCompleteItem = function (fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        $scope.uploader.onCompleteAll = function () {
            console.info('onCompleteAll');
            ImageListUpdate();
        };

        console.info('uploader', $scope.uploader);
        
        (function () { // init
            albums.getAlbumsDetails($routeParams.id)
                .then(function (albumsResponse) {
                    vm.album = albumsResponse;
                });
            images.getImages($routeParams.id)
                .then(function (imagesResponse) {
                    vm.album.images = imagesResponse;
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
        .controller('EditAlbumController', ['$scope', '$location', '$routeParams', 'FileUploader', 'auth', 'albums', 'images', 'baseUrl', EditAlbumController]);
}());