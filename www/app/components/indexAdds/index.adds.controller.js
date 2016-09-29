/**
 * Created by usuario on 27/09/2016.
 */
(function () {
  'use strict';

  angular
    .module('bcMobile')
    .controller('IndexAddsController', IndexAddsController);
  function IndexAddsController($firebaseAuth, $firebaseObject) {
    var vm = this;
    var ref = firebase.database().ref();

    /**
     * CREATE A USER
     */
    /*$firebaseAuth().$createUserWithEmailAndPassword('alpattycruz@gmail.com','patomalo').then(function(firebaseUser) {
      console.log("Success: ",firebaseUser);
      //$scope.message = "User created with uid: " + firebaseUser.uid;
    }).catch(function(error) {
      console.log("error!!. ", error);
    });*/
  }
})();
