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
        apiKey: "AIzaSyDJdkqm9ZldGQDpDGkkoDIagqNeru4n7OE",
        authDomain: "ionictest-471dc.firebaseapp.com",
        databaseURL: "https://ionictest-471dc.firebaseio.com",
        storageBucket: "ionictest-471dc.appspot.com",
        messagingSenderId: "1093976214106"
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
