(function () {
    'use strict';

    function imageService(data) {
        var albumsApiUrl = 'ImageGallery/Albums';

        //function addAlbum(album) {
        //    return data.post(albumsApiUrl, album);
        //}

        function getImages(albumId) {
            return data.get(albumsApiUrl + '/' + albumId + '/Images');
        }

        //function getAlbumsDetails(id) {
        //    return data.get(albumsApiUrl + '/' + id);
        //}

        //function updateAlbum(id, album) {
        //    return data.put(albumsApiUrl + '/' + id, album);
        //}

        return {
            getImages: getImages
        }
    }

    angular.module('myServerApp.services')
        .factory('images', ['data', imageService]);
}());