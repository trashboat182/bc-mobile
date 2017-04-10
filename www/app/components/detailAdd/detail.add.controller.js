/**
 * Created by apatty-laptop on 4/4/2017.
 */
(function () {
  'use strict';

  angular
    .module('bcMobile')
    .controller('DetailAddController', DetailAddController);

  function DetailAddController($scope, $stateParams, $ionicSideMenuDelegate, $state) {
    var vm = this;

    vm.view = {
      list: [],
      mainView: {
        category: {},
        description: null,
        detail: null,
        image: null,
        price: null,
        subCategory: null,
        title: null
      },
      image: 'img/profile-image.png',
      flagPosition: null
    };
    vm.buttons = {
      menuButton: menuButton,
      backDetail: backDetail,
      nextDetail: nextDetail,
      goBack: goBack
    };

    function init() {
      firebase.database().ref('adds').on('value', function (response) {
        var adds = response.val();
        vm.view.list = [];
        for(var key in adds) {
          var add = adds[key];
          if(add.category.category === $stateParams.category) {
          //if(add.category.category === $stateParams.category && add.category.subCategory[$stateParams.subId] === add.subCategory) {
            vm.view.list.push(add);
          }
        }
        console.log("Lista: ", vm.view.list);
        if(vm.view.list.length > 0) {
          vm.view.mainView = vm.view.list[0];
          vm.view.flagPosition = 0;
          firebase.storage().ref(vm.view.mainView.image).getDownloadURL().then(function (url) {
            vm.view.image = url;
            $scope.$apply();
          }).catch(function (error) {
            console.log("something is wrong", error);
            vm.view.image = 'img/profile-image.png';
          });
        }
      });
    }

    function menuButton() {
      $ionicSideMenuDelegate.toggleLeft();
    }

    function backDetail() {
      var size = vm.view.list.length;
      vm.view.flagPosition--;
      if(vm.view.flagPosition === -1) {
        vm.view.flagPosition = size - 1;
      }
      vm.view.mainView = vm.view.list[vm.view.flagPosition];
      firebase.storage().ref(vm.view.mainView.image).getDownloadURL().then(function (url) {
        vm.view.image = url;
        //$scope.$apply();
      }).catch(function (error) {
        console.log("something is wrong", error);
        vm.view.image = 'img/profile-image.png';
      });
    }

    function nextDetail() {
      var size = vm.view.list.length;
      vm.view.flagPosition++;
      if(vm.view.flagPosition === size) {
        vm.view.flagPosition = 0;
      }
      vm.view.mainView = vm.view.list[vm.view.flagPosition];
      firebase.storage().ref(vm.view.mainView.image).getDownloadURL().then(function (url) {
        vm.view.image = url;
        //$scope.$apply();
      }).catch(function (error) {
        console.log("something is wrong", error);
        vm.view.image = 'img/profile-image.png';
      });
    }

    function goBack() {
      $state.go("app.indexAdds");
    }

    init();
  }
})();
