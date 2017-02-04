/**
 * Marcos Perira - 2017
 */


 angular
     .module('m2agro')
     .factory('Harvest', Harvest)
     .factory('Product', Product)
     .factory('Service', Service)
     /* .factory('PriceProduct', PriceProduct)
     .factory('UpdatePrices', UpdatePrices)*/


function Harvest($resource, BaseSettings) {
 		var url = BaseSettings.ApiURL + "harvest/";

 		return $resource(url, { }, {
      update: {
  			method: "PUT"
  		},
 			get: {
   				method: "GET",
          isArray: false,
   				transformResponse: function(data, headers){
   					data = JSON.parse(data);
   					return data;
   				}
 			},
      list: {
   				method: "GET",
          isArray: true,
   				transformResponse: function(data, headers){
   					data = JSON.parse(data);
   					return data;
   				}
 			}
 	  });
};


function Product($resource, BaseSettings) {
 		var url = BaseSettings.ApiURL + "product/";

 		return $resource(url, { }, {
      update: {
  			method: "PUT"
  		},
 			get: {
   				method: "GET",
          isArray: false,
   				transformResponse: function(data, headers){
   					data = JSON.parse(data);
   					return data;
   				}
 			},
      list: {
   				method: "GET",
          isArray: true,
   				transformResponse: function(data, headers){
   					data = JSON.parse(data);
   					return data;
   				}
 			}
 	  });
};


function Service($resource, BaseSettings) {
 		var url = BaseSettings.ApiURL + "service/";

 		return $resource(url, { }, {
      update: {
  			method: "PUT"
  		},
 			get: {
   				method: "GET",
          isArray: false,
   				transformResponse: function(data, headers){
   					data = JSON.parse(data);
   					return data;
   				}
 			},
      list: {
   				method: "GET",
          isArray: true,
   				transformResponse: function(data, headers){
   					data = JSON.parse(data);
   					return data;
   				}
 			}
 	  });
};
