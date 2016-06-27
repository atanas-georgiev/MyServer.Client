(function () {
    'use strict';

    function albumService(data) {

        var ALBUMS_API_URL = 'ImageGallery/Album';

        function addAlbum(album) {
            return data.post(ALBUMS_API_URL, album);
        }

        function getAlbums() {
            return data.get(ALBUMS_API_URL);
        }

        function getAlbumsDetails(id) {
            return data.get(ALBUMS_API_URL + '/' + id);
        }

        function updateAlbum(id, album) {
            return data.put(ALBUMS_API_URL + '/' + id, album);
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