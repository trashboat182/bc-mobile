/**
 * Created by apatty on 13-10-16.
 */
(function () {
  'use strict';

  angular
    .module('bcMobile')
    .controller('RegisterController', RegisterController);

  function RegisterController($state) {
    var vm = this;

    vm.createUser = {
      username: null,
      email: null,
      password: null,
      confirmPassword: null
    };
    vm.view = {
      messageField: '',
      messagePassword: ''
    };

    function init() {
      console.log("Welcome to the registration");
    }

    vm.saveUser = function() {
      if(!vm.createUser.username || !vm.createUser.email || !vm.createUser.password || !vm.createUser.confirmPassword) {
        vm.view.messageField = 'Llena todo los campos requeridos !';
        return;
      }
      if(vm.createUser.password != vm.createUser.confirmPassword) {
        vm.view.messagePassword = 'password confirmation is different !';
      }
    };

    vm.closeMessage = function() {
      if(vm.createUser.username && vm.createUser.email && vm.createUser.password && vm.createUser.confirmPassword) {
        vm.view.messageField = '';
      }
      if(vm.createUser.password == vm.createUser.confirmPassword) {
        vm.view.messagePassword = '';
      }
    };

    init();
  }
})();
