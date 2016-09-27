/**
 * Created by alvaro on 26/09/2016.
 */
(function () {
  'use strict';
  angular
    .module('bcMobile')
    .controller('StartController',StartController);

  function StartController($ionicSlideBoxDelegate, $state) {
    var vm = this;

    vm.next = function () {
      var slideIndex = $ionicSlideBoxDelegate.currentIndex();
      $ionicSlideBoxDelegate.next();
      if(slideIndex == 2) {
        $ionicSlideBoxDelegate.slide(0,2000);
      }
    };

    vm.previous = function () {
      var slideIndex = $ionicSlideBoxDelegate.currentIndex();
      $ionicSlideBoxDelegate.previous();
    };

    vm.login = function () {
     $state.go("app.login");
    };

    function _init() {
      setTimeout(function () {
        vm.next();
      }, 3000);
    }
    _init();
  }
})();
