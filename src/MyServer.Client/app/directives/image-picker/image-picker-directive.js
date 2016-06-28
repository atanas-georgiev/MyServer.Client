(function () {
    'use strict';

    function ImagePicker($timeout) {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                $timeout(function() {
                    ImageListUpdate();
                }, 200);
            }
        }
    }

    angular.module('myServerApp.directives')
        .directive('imagePicker', ['$timeout', ImagePicker]);
}());