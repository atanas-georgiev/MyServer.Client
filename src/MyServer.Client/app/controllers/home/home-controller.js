(function () {
    'use strict';

    function HomeController() {
        var vm = this;

        //cats.searchCats({ page: 1 })
        //    .then(function (initialCats) {
        //        vm.cats = initialCats;
        //    });
    }

    angular.module('myServerApp.controllers')
        .controller('HomeController', [HomeController]);
}());