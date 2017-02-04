/**
 * Marcos Perira - 2017
 */


 angular
     .module('m2agro')
     .config(config)
     .config(function($resourceProvider) {
       $resourceProvider.defaults.stripTrailingSlashes = false;
     })
     .run(function($rootScope, $state) {
         $rootScope.$state = $state;
     });

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Main Page' }
        })
        .state('index.harvests', {
            url: "/harvests",
            templateUrl: "views/harvests.html",
            data: { pageTitle: 'Lista de Safras' }
        })
        .state('index.produtcs', {
            url: "/produtcs",
            templateUrl: "views/products.html",
            data: { pageTitle: 'Lista de Produtos' }
        })
        .state('index.services', {
            url: "/services",
            templateUrl: "views/services.html",
            data: { pageTitle: 'Lista de Serviços' }
        })
}
