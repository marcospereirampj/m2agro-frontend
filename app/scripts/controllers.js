/**
 * Marcos Perira - 2017
 */

 angular
     .module('m2agro')
     .controller('MainCtrl', MainCtrl)
     .controller('HarvestCtrl', HarvestCtrl)
     .controller('ProductCtrl', ProductCtrl)
     .controller('ServiceCtrl', ServiceCtrl)
     .controller('PriceProductCtrl', PriceProductCtrl)
     .controller('ProductServiceCtrl', ProductServiceCtrl)
     .controller('UpdatePricesProductsCtrl', UpdatePricesProductsCtrl)
     .controller('HarvestModalCtrl', HarvestModalCtrl)
     .controller('ProductModalCtrl', ProductModalCtrl)
     .controller('ServiceModalCtrl', ServiceModalCtrl)
     .controller('ProductServiceModalCtrl', ProductServiceModalCtrl)

/**
 * MainCtrl - controller
 */
function MainCtrl() {
    var vm = this;

    vm.helloText = 'Welcome!';
    vm.descriptionText = 'Demo application for m2agro API.';
};

/**
 * Harvest - controller
 */
function HarvestCtrl(Harvest, $scope) {
    var vm = this;

    vm.harvests = Harvest.list();

    $scope.$on("updateListHarvest",function(){
        vm.harvests = Harvest.list();
    });
};


/**
 * ProductCtrl - controller
 */
function ProductCtrl(Product, $scope) {
    var vm = this;

    vm.products = Product.list();

    $scope.$on("updateListProduct",function(){
        vm.products = Product.list();
    });

};

/**
 * ServiceCtrl - controller
 */
function ServiceCtrl(Service, $scope) {
    var vm = this;

    vm.services = Service.list();

    $scope.$on("updateListService",function(){
        vm.services = Service.list();
    });

};

/**
 * PriceProductCtrl - controller
 */
function PriceProductCtrl(PriceProduct) {
    var vm = this;

    vm.prices = PriceProduct.list();
};


/**
 * ProductServiceCtrl - controller
 */
function ProductServiceCtrl(ProductService, $scope) {
    var vm = this;

    vm.products_services = ProductService.list();

    $scope.$on("updateListProductService",function(){
        vm.products_services = ProductService.list();
    });

};

/**
 * UpdatePricesProductsCtrl - controller
 */
function UpdatePricesProductsCtrl(UpdatePricesProducts, Product) {
    var vm = this;
    vm.message_return = "";
    vm.products = Product.list();

    vm.run_update = function(memberId){
      vm.products = UpdatePricesProducts.run(
        function(data){
            vm.message_return = "Rotina executada com sucesso";
        }, function(err){
            vm.message_return = "Rotina não pode ser executada.";
        }
      );
    }
};


/**
 * HarvestModalCtrl - controller
 */
function HarvestModalCtrl($scope, $modal, $log, Harvest) {
    var vm = this;

    vm.showForm = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/modals/new_harvest.html',
            controller: HarvestModalInstanceCtrl,
            scope: $scope,
                  resolve: {
                        harvestForm: function () {
                            return this.harvestForm;
                        }
                    }
            });
    };
};


/**
 * HarvestModalInstanceCtrl - controller
 */
function HarvestModalInstanceCtrl($rootScope, $scope, $modalInstance, $location, harvestForm, Harvest) {
    $scope.form = {}
    $scope.harvest = new Harvest();

    $scope.submitForm = function () {
        if ($scope.form.harvestForm.$valid) {
            $scope.harvest.$save();
            $modalInstance.close('closed');
            $rootScope.$broadcast('updateListHarvest');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};


/**
 * ProductModalCtrl - controller
 */
function ProductModalCtrl($scope, $modal, $log, Product) {
    var vm = this;

    vm.showForm = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/modals/new_product.html',
            controller: ProductModalInstanceCtrl,
            scope: $scope,
                  resolve: {
                        productForm: function () {
                            return this.productForm;
                        }
                    }
            });
    };
};


/**
 * ProductModalInstanceCtrl - controller
 */
function ProductModalInstanceCtrl($rootScope, $scope, $modalInstance, $location, productForm, Product) {
    $scope.form = {}
    $scope.product = new Product();

    $scope.submitForm = function () {
        if ($scope.form.productForm.$valid) {
            $scope.product.$save();
            $modalInstance.close('closed');
            $rootScope.$broadcast('updateListProduct');
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};


/**
 * ServiceModalCtrl - controller
 */
function ServiceModalCtrl($scope, $modal, $log, Service) {
    var vm = this;

    vm.showForm = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/modals/new_service.html',
            controller: ServiceModalInstanceCtrl,
            scope: $scope,
                  resolve: {
                        serviceForm: function () {
                            return this.serviceForm;
                        }
                    }
            });
    };
};


/**
 * ServiceModalInstanceCtrl - controller
 */
function ServiceModalInstanceCtrl($rootScope, $scope, $modalInstance, $location, serviceForm, Service) {
    $scope.form = {}
    $scope.service = new Service();

    $scope.submitForm = function () {
        if ($scope.form.serviceForm.$valid) {
            $scope.service.$save();
            $rootScope.$broadcast('updateListService');
            $modalInstance.close('closed');

        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};


/**
 * ProductServiceModalCtrl - controller
 */
function ProductServiceModalCtrl($scope, $modal, $log, ProductService) {
    var vm = this;

    vm.showForm = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/modals/new_product_service.html',
            controller: ProductServiceModalInstanceCtrl,
            scope: $scope,
                  resolve: {
                        productServiceForm: function () {
                            return this.productServiceForm;
                        }
                    }
            });
    };
};


/**
 * ProductServiceModalInstanceCtrl - controller
 */
function ProductServiceModalInstanceCtrl($rootScope, $scope, $modalInstance, $location, productServiceForm, ProductService) {
    $scope.form = {}
    $scope.product_service = new ProductService();

    $scope.submitForm = function () {
        if ($scope.form.productServiceForm.$valid) {
            $scope.product_service.$save();
            $rootScope.$broadcast('updateListProductService');
            $modalInstance.close('closed');

        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
