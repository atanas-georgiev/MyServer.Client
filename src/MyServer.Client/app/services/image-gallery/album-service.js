(function () {
    'use strict';

    function albumService(data) {

        var ALBUMS_API_URL = 'ImageGallery/Album';

        function addAlbum(album) {
            return data.post(ALBUMS_API_URL, album);
        }

        function searchCats(request) {
            return data.get(ALBUMS_API_URL, request);
        }

        return {
            addAlbum: addAlbum,
            searchCats: searchCats
        }
    }

    angular.module('myServerApp.services')
        .factory('albums', ['data', albumService]);
}());