/**
 * Created by apatty on 13-10-16.
 */
(function () {
  'use strict';

  angular
    .module('bcMobile')
    .controller('RegisterController', RegisterController);

  function RegisterController($state, $ionicPopup) {
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
      /*var database = firebase.database();
      //firebase.auth();
      console.log("patomalo awadawd", database);
      console.log("patomalo eeeeeee", firebase.auth());*/
      console.log("Welcome to the registration");
    }

    vm.saveUser = function() {
      if(!vm.createUser.username || !vm.createUser.email || !vm.createUser.password || !vm.createUser.confirmPassword) {
        //vm.view.messageField = 'Llena todo los campos requeridos !';
        vm.view.errorMessage = 'Llena todo los campos requeridos !';
        return;
      }
      if(vm.createUser.password != vm.createUser.confirmPassword) {
        //vm.view.messagePassword = 'Password confirmation is different !';
        vm.view.errorMessage = 'Password confirmation is different !';
        return;
      }
      if(vm.createUser.email && vm.createUser.password) {
        firebase.auth().createUserWithEmailAndPassword(vm.createUser.email, vm.createUser.password).then( function (response) {
          console.log("good Auth",response);
          var userKey = response.uid;
          var userSubmit = {
            userName: vm.createUser.username,
            email: vm.createUser.email,
            password: vm.createUser.password
          };
          firebase.database().ref('users/' + userKey).set(userSubmit).then( function () {
            console.log("good user Saved");
            $ionicPopup.alert({
              title: 'User created'
            }).then(function (response) {
              $state.go("app.login");
              console.log("done", response);
            });
          });
        }).catch( function (response) {
          console.log("bad", response);
          vm.view.errorMessage = response.message;
        });
      }
    };

    vm.closeMessage = function() {
      if(vm.createUser.username && vm.createUser.email && vm.createUser.password && vm.createUser.confirmPassword) {
        //vm.view.messageField = '';
        vm.view.errorMessage = '';
      }
      if(vm.createUser.password == vm.createUser.confirmPassword) {
        //vm.view.messagePassword = '';
        vm.view.errorMessage = '';
      }
    };

    init();
  }
})();
