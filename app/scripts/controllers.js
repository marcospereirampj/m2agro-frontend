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
     .controller('UpdatePricesProductsCtrl', UpdatePricesProductsCtrl)


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
function HarvestCtrl(Harvest) {
    var vm = this;

    vm.harvests = Harvest.list();
};


/**
 * ProductCtrl - controller
 */
function ProductCtrl(Product) {
    var vm = this;

    vm.products = Product.list();
};

/**
 * ServiceCtrl - controller
 */
function ServiceCtrl(Service) {
    var vm = this;

    vm.services = Service.list();
};

/**
 * PriceProductCtrl - controller
 */
function PriceProductCtrl(PriceProduct) {
    var vm = this;

    vm.prices = PriceProduct.list();
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
