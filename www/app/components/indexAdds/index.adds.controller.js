/**
 * Created by usuario on 27/09/2016.
 */
(function () {
  'use strict';

  angular
    .module('bcMobile')
    .controller('IndexAddsController', IndexAddsController);
  function IndexAddsController($state, $ionicSideMenuDelegate) {
    var vm = this;
    var ref = firebase.database().ref();

    vm.view = {
      buttons:  {
        menuButton: menuButton,
        openCategory: openCategory,
        createAdd: createAdd
      },
      categories: [{
        name:'Inmuebles',
        icon: 'icon ion-ios-home',
        status: false,
        options: [
          [{name: 'Casa Venta', icon: 'ion-ios-home'}, {name: 'Casa Alquiler', icon: 'ion-ios-home'}],
          [{name: 'Casa Anticretico', icon: 'ion-ios-home'}, {name: 'Depto. Venta', icon: 'ion-ios-home-outline'}],
          [{name: 'Depto. Alquiler', icon: 'ion-ios-home-outline'}, {name: 'Depto. Anticretico', icon: 'ion-ios-home-outline'}]
        ]
      }, {
        name:'Automoviles',
        icon: 'icon ion-model-s',
        status: false,
        options: [
          [{name: 'Camiones', icon: 'ion-model-s'}, {name: 'Vagonetas', icon: 'ion-android-car'}],
          [{name: 'Usados', icon: 'ion-ios-cart'}, {name: 'Nuevos', icon: 'ion-ios-cart-outline'}]
        ]
      }, {
        name:'Bolsa de Trabajo',
        icon: 'icon ion-ios-people',
        status: false,
        options: [
          [{name: 'Tiempo Completo', icon: 'ion-ios-star'}, {name: 'Medio Tiempo', icon: 'ion-ios-star-half'}],
          [{name: 'Docentes', icon: 'ion-ios-people'}, {name: 'Buen sueldo', icon: 'ion-social-usd'}]
        ]
      }, {
        name:'Variedades',
        icon: 'icon ion-bag',
        status: false,
        options: [
          [{name: 'Ofrece servicios', icon: 'ion-ios-chatboxes'}, {name: 'Cursos', icon: 'ion-ios-bookmarks'}],
          [{name: 'Bienes', icon: 'ion-social-usd'}, {name: 'Intimidades', icon: 'ion-ios-heart'}]
        ]
      }],
      variable: {}
    };

    function init() {
      console.log("Starting anuncio");
    }

    function menuButton() {
      $ionicSideMenuDelegate.toggleLeft();
    }

    function openCategory(index) {
      for(var key = 0; key < vm.view.categories.length; key++) {
        var cat = vm.view.categories[key];
        if(index === key && !cat.status) {
          cat.status = true;
        } else {
          cat.status = false;
        }
      }
    }

    function createAdd() {
      console.log('go to crate');
      $state.go("app.createAdd");
    }

    /**
     * CREATE A USER
     */
    /*$firebaseAuth().$createUserWithEmailAndPassword('alpattycruz@gmail.com','patomalo').then(function(firebaseUser) {
      console.log("Success: ",firebaseUser);
      //$scope.message = "User created with uid: " + firebaseUser.uid;
    }).catch(function(error) {
      console.log("error!!. ", error);
    });*/

    init();
  }
})();
