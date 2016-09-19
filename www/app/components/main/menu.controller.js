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
    };

    vm.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  }
})();
