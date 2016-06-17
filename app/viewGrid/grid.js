'use strict';

angular.module('myApp.viewGrid', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/Grid', {
        templateUrl: 'viewGrid/grid.html',
        controller: 'ViewGridCtrl'
      });
    }])

    .controller('ViewGridCtrl', function($scope){
        /*�������� ������� �������� ������������ � ����������� ������� � ���������
            � ����������� �� ������������� ���������� �������� �������
         */
        $scope.appNs.user.testUserPermission();
        if($scope.appNs.currentUserStatus === 'user'){
            $scope.appNs.data.getDbCustomers();
        }
        });