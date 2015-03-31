/*global angular*/

(function () {
  "use strict";

  var app = angular.module('strengths', []);
  
  app.controller('StrengthsCtrl', ['StrengthsApi', '$scope', function (StrengthsApi, $scope) {
    var vm = $scope;
    
    // initial population of data
    StrengthsApi.list().then(
      function (r) {
        vm.list = r.data;
      }
    );
    
    vm.get = function (t) {
      StrengthsApi.view(t).then(
        function (r) {
          vm.title = r.data.title;
          vm.description = r.data.description;
        }
      );
    };
  }]);

  app.service('StrengthsApi', ['$http', function ($http) {
    this.list = function () { return $http.get('/strengths'); };
    this.view = function (title) { return $http.get('/strength/' + title); };
  }]);

}());
