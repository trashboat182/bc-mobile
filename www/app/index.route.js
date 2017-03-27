/**
 * Created by apatty on 14/09/2016.
 */
(function () {
  'use strict';

  angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/components/main/menu.html',
          controller: 'MenuController',
          controllerAs: 'vm'
        })
        .state('app.playlists', {
          url: '/playlists',
          views: {
            'menuContent': {
              templateUrl: 'templates/playlists.html',
              controller: 'MenuController',
              controllerAs: 'vm'
            }
          }
        })
        .state('app.start', {
          url: '/start',
          views: {
            'menuContent': {
              templateUrl: 'app/components/start/startView.html',
              controller: 'StartController',
              controllerAs: 'vm'
            }
          }
        })
        .state('app.login', {
          url: '/login',
          views: {
            'menuContent': {
              templateUrl: 'app/components/login/loginView.html',
              controller: 'LoginController',
              controllerAs: 'vm'
            }
          }
        })
        .state('app.indexAdds', {
          url:'/indexAdds',
          views: {
            'menuContent': {
              templateUrl: 'app/components/indexAdds/indexAddsView.html',
              controller: 'IndexAddsController',
              controllerAs: 'vm'
            }
          }
        })
        .state('app.register', {
          url:'/register',
          views: {
            'menuContent': {
              templateUrl: 'app/components/registration/registerView.html',
              controller: 'RegisterController',
              controllerAs: 'vm'
            }
          }
        })
        .state('app.createAdd', {
          url:'/create',
          views: {
            'menuContent': {
              templateUrl: 'app/components/createAdd/createAddView.html',
              controller: 'CreateAddController',
              controllerAs: 'vm'
            }
          }
        });
      $urlRouterProvider.otherwise('/app/start')


    });

})();
