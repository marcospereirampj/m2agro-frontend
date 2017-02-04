/**
 * Marcos Perira - 2017
 */

 angular
     .module('m2agro')
     .controller('MainCtrl', MainCtrl)
     .controller('HarvestCtrl', HarvestCtrl)
     .controller('ProductCtrl', ProductCtrl)
     .controller('ServiceCtrl', ServiceCtrl)


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
 * Product - controller
 */
function ProductCtrl(Product) {
    var vm = this;

    vm.products = Product.list();
};

/**
 * Service - controller
 */
function ServiceCtrl(Service) {
    var vm = this;

    vm.services = Service.list();
};
