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
        createAdd: createAdd,
        goToAddsDetail: goToAddsDetail
      },
      categories: [{
        name:'Inmuebles',
        icon: 'icon ion-ios-home',
        status: false,
        code: 'inmuebles',
        class: 'category-red',
        options: [
          [{id: 0, name: 'Casa Venta', icon: 'ion-ios-home'}, {id: 1, name: 'Casa Alquiler', icon: 'ion-ios-home'}],
          [{id: 2, name: 'Casa Anticretico', icon: 'ion-ios-home'}, {id: 3, name: 'Depto. Venta', icon: 'ion-ios-home-outline'}],
          [{id: 4, name: 'Depto. Alquiler', icon: 'ion-ios-home-outline'}, {id: 5, name: 'Depto. Anticretico', icon: 'ion-ios-home-outline'}]
        ]
      }, {
        name:'Automoviles',
        icon: 'icon ion-model-s',
        status: false,
        code: 'automiviles',
        class: 'category-yellow',
        options: [
          [{id: 0, name: 'Usados', icon: 'ion-ios-cart'}, {id: 1, name: 'Nuevos', icon: 'ion-ios-cart-outline'}],
          [{id: 2, name: 'Repuestos', icon: 'ion-model-s'}, {id: 3, name: 'Maquinas pesadas', icon: 'ion-android-car'}]
        ]
      }, {
        name:'Bolsa de Trabajo',
        icon: 'icon ion-ios-people',
        status: false,
        oode: 'bolsaDeTrabajo',
        class: 'category-green',
        options: [
          [{id: 0, name: 'Tiempo Completo', icon: 'ion-ios-star'}, {id: 1, name: 'Medio Tiempo', icon: 'ion-ios-star-half'}],
          [{id: 2, name: 'Contrato', icon: 'ion-ios-people'}, {id: 3, name: 'Servicios profesionales', icon: 'ion-social-usd'}]
        ]
      }, {
        name:'Variedades',
        icon: 'icon ion-bag',
        status: false,
        code: 'variedades',
        class: 'category-blue',
        options: [
          [{id: 0, name: 'Ofrece servicios', icon: 'ion-ios-chatboxes'}, {id: 1, name: 'Cursos', icon: 'ion-ios-bookmarks'}],
          [{id: 2, name: 'Bienes', icon: 'ion-social-usd'}, {id: 3, name: 'Intimidades', icon: 'ion-ios-heart'}]
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

    function goToAddsDetail(category, subCategory) {
      $state.go("app.detailAdd", {category: category, subId: subCategory});
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
