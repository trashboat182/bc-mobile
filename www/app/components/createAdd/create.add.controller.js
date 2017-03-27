/**
 * Created by apatty on 26/03/2017.
 */
(function () {
  'use strict';

  angular
    .module('bcMobile')
    .controller('CreateAddController', CreateAddController);

  function CreateAddController() {
    var vm = this;
    vm.buttons = {
      menuButton: menuButton
    };

    function menuButton() {
      $ionicSideMenuDelegate.toggleLeft();
    }
  }
})();
