/**
 * Created by alvaro on 26/09/2016.
 */
(function () {
  'use strict';
  angular
    .module('bcMobile')
    .controller('StartController',StartController);

  function StartController($scope, $ionicSlideBoxDelegate) {
    var vm = this;

    vm.next = function () {
      var slideIndex = $ionicSlideBoxDelegate.currentIndex();
      $ionicSlideBoxDelegate.next();
    };

    vm.previous = function () {
      var slideIndex = $ionicSlideBoxDelegate.currentIndex();
      $ionicSlideBoxDelegate.previous();
    };
  }
})();
