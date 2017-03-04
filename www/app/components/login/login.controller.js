/**
 * Created by apatty on 26/09/2016.
 */
(function () {
  'use strict';

  angular
    .module('bcMobile')
    .controller('LoginController', LoginController);

  function LoginController($state) {
    var vm = this;
    vm.user = {
      username: null,
      password: null,
      errorMessage: ''
    };

    vm.doLogin = function () {
      console.log("user: ",vm.user.username);
      console.log("password:",vm.user.password);
      if(vm.user.username && vm.user.password ) {
        firebase.auth().signInWithEmailAndPassword(vm.user.username, vm.user.password).then(function (response) {
          console.log("good", response);
          $state.go("app.indexAdds");
        }).catch(function (response) {
          console.log("bad", response);
          setTimeout(function () {
            vm.user.errorMessage = response.message;
          }, 50);
        });
      } else {
        vm.user.errorMessage = 'Fill all the fields.';
      }

    };
  }
})();
