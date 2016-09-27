/**
 * Created by usuario on 26/09/2016.
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
      password: null
    };

    vm.doLogin = function () {
      console.log("user: ",vm.user.username);
      console.log("password:",vm.user.password);

      $state.go("app.indexAdds");
    };
  }
})();
