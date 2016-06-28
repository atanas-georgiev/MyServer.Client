(function () {
    'use strict';

    function albumService(data) {
        var albumsApiUrl = 'ImageGallery/Albums';

        function addAlbum(album) {
            return data.post(albumsApiUrl, album);
        }

        function getAlbums() {
            return data.get(albumsApiUrl);
        }

        function getAlbumsDetails(id) {
            return data.get(albumsApiUrl + '/' + id);
        }

        function updateAlbum(id, album) {
            return data.put(albumsApiUrl + '/' + id, album);
        }

        return {
            addAlbum: addAlbum,
            getAlbums: getAlbums,
            getAlbumsDetails: getAlbumsDetails,
            updateAlbum: updateAlbum
        }
    }

    angular.module('myServerApp.services')
        .factory('albums', ['data', albumService]);
}());