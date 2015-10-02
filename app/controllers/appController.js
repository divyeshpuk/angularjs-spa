'use strict'; 

(function() { 

    var appController = function($scope) {

        $scope.bodyStyle = false;

        $scope.$on('bodyStyle' , function(evt, data) {
            $scope.bodyStyle = data;
        });
        
    };

    appController.$inject = [ '$scope' ];

    angular.module('lenderApp')
        .controller( 'appController' , appController );

}());
