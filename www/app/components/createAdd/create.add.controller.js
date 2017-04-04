/**
 * Created by apatty on 26/03/2017.
 */
(function () {
  'use strict';

  angular
    .module('bcMobile')
    .controller('CreateAddController', CreateAddController);

  function CreateAddController($ionicSideMenuDelegate, $state, $ionicPopup) {
    var vm = this;
    vm.buttons = {
      menuButton: menuButton,
      createAnuncio: createAnuncio
    };
    vm.view = {
      category: null,
      subCategory: null
    };
    vm.categoryList = [];

    function init() {
      vm.view = {
        category: null,
        subCategory: null
      };
      vm.categoryList = [];
      firebase.database().ref('categrias').on('value', function (response) {
        console.log("patomalo ---s",response.val());
        var category = response.val();
        for(var cat in category) {
          var list = {
            category: cat,
            subCategory: category[cat]
          };
          vm.categoryList.push(list);
        }
        console.log("patomalo ---t", vm.categoryList);
      });
    }

    function menuButton() {
      $ionicSideMenuDelegate.toggleLeft();
    }

    function createAnuncio() {
      console.log("to send", vm.view);
      var viewKey = firebase.database().ref().child('adds').push().key;
      firebase.database().ref('adds/' + viewKey).set(vm.view).then(function (response) {
        console.log("done", response);
        $ionicPopup.alert({
          title: 'Anuncio creado'
        }).then(function () {
          $state.go("app.indexAdds");
        });
      });
    }

    init();
  }
})();
