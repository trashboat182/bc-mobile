/**
 * Created by apatty on 14/09/2016.
 */
(function () {
  'use strict';

  angular
    .module('bcMobile').constant('appConfig', {
      host: 'http://retailtasks.riotplatform.com:8080/',
      token: 'efdd70ce8eba00c68e7e8a6c19552cde80e960fd697461098cd03cbc647db7cb',
      api_key: 'root',
      app_label: 'RIoT Control',
      device_label: 'Thing',
      role_label: 'Role',
      user_label: 'User',
      replenishReport: '413',
      sellThruReplenishReport:'414',
      dressingRoomReport:'415',
      rest_utils: {headers: {'Content-Type': 'application/json'}, header_text: {'Content-Type': 'text/plain'}}
    //Sample: appConfig.host + '/api/thing/?useDefaultValue=true';
  });

})();
