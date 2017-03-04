/**
 * Created by apatty on 14/09/2016.
 */
(function() {
  'use strict';

  angular
    .module('bcMobile', [
      'ionic', 'app.routes','ngAnimate', 'restangular', 'firebase'
    ])
    .config(function(RestangularProvider, appConfig) {
      //set the base url for api calls on our RESTful services
      var newBaseUrl = "";
      if (window.location.hostname == appConfig.host) {
        newBaseUrl = appConfig.host+"riot-core-services/api/";
      } else {
        //var deployedAt = window.location.href.substring(0, window.location.href);
        var deployedAt = appConfig.host;
        newBaseUrl = deployedAt + "/riot-core-services/api/";
        //newBaseUrl = 'http://retailtasks.riotplatform.com:8080' + "/riot-core-services/api/";
      }

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAFn3v-YDIHS5k3w9tMVyC-Bu4EBAFZJ_U",
        authDomain: "qualia-379e2.firebaseapp.com",
        databaseURL: "https://qualia-379e2.firebaseio.com",
        storageBucket: "qualia-379e2.appspot.com",
        messagingSenderId: "596372653299"
      };
      firebase.initializeApp(config);

      //  Initialize Restangular
      RestangularProvider.setBaseUrl(newBaseUrl);
      RestangularProvider.setDefaultHeaders({token:appConfig.token, 'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'});

      // add a response interceptor
      RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
        //var extractedData;
        // .. to look for getList operations
        if (operation === "getList") {
          var newResponse = data.results;
          newResponse.total = data.total;
          //newResponse.results = response.results;
          return newResponse;
        }
        return data;
      });


    });

})();
