'use strict'; 

(function() { 

    var initApp = function ($routeProvider) {
        $routeProvider
            .when('/invest',
                {
                    controller: 'investController',
                    templateUrl: 'app/partials/invest.html'
                })
            .when('/portfolio',
                {
                    controller: 'portfolioController',
                    templateUrl: 'app/partials/portfolio.html'
                })
            .when('/wallet',
                {
                    controller: 'walletController',
                    templateUrl: 'app/partials/wallet.html'
                })
            .otherwise({ redirectTo: '/invest' });
    };

    initApp.$inject = [ '$routeProvider' ];

    var requires = [ 'ngRoute' , 'ngSanitize' ];

    angular.module( 'shellModule' ,  requires )
        .config(initApp);            

}());   

