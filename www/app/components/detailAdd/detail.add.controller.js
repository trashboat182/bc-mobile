/**
 * Created by apatty-laptop on 4/4/2017.
 */
(function () {
  'use strict';

  angular
    .module('bcMobile')
    .controller('DetailAddController', DetailAddController);

  function DetailAddController() {
    var vm = this;
    vm.buttons = {
      menuButton: menuButton
    };

    function init() {
    }

    function menuButton() {
      $ionicSideMenuDelegate.toggleLeft();
    }

    init();
  }
})();
