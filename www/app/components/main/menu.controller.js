/**
 * Created by apatty on 15/09/2016.
 */
(function () {
  'use strict';
  
  angular
    .module('bcMobile')
    .controller('MenuController',MenuController);
  
  function MenuController() {
    var vm = this;
    
    vm.login = function () {
      console.log("start patomalo");
    }
  }
})();
