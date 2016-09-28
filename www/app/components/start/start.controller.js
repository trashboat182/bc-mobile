/**
 * Created by alvaro on 26/09/2016.
 */
(function () {
  'use strict';
  angular
    .module('bcMobile')
    .controller('StartController',StartController);

  function StartController($q, $ionicSlideBoxDelegate, $state) {
    var vm = this;
    var count = 0;

    vm.next = function () {
      var slideIndex = $ionicSlideBoxDelegate.currentIndex();
      $ionicSlideBoxDelegate.next();
      if(slideIndex == 2) {
        $ionicSlideBoxDelegate.slide(0);
      }
    };

    vm.previous = function () {
      var slideIndex = $ionicSlideBoxDelegate.currentIndex();
      $ionicSlideBoxDelegate.previous();
    };

    vm.login = function () {
     $state.go("app.login");
    };

    function slideNext(mil) {
      var deferred = $q.defer();
      setTimeout(function () {
        vm.next();
        count += 1;
        deferred.resolve(count);
      }, mil);
      return deferred.promise;
    }
    function slideMove() {
      slideNext(4000).then(function (resolve) {
        console.log(resolve);
        if(resolve != 9){slideMove();}
        else {return;}
      });
    }

    function _init() {
      console.log("Welcome to the app");
      slideMove();
    }
    _init();
  }
})();
