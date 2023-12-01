Ext.define('App.store.customerStore', {
    extend: 'Ext.data.Store',
  
    alias: 'store.customerStore',
  
    fields: [
      'customerId',
      'customerFirstName',
      'customerLastName',
      'customerRentedMovies'
    ],
  
    proxy: {
      type: 'ajax',
      url: 'resources/customerData.json',
      reader: {
        type: 'json',
        rootProperty: ''
      }
    },
  
    autoLoad: true
  });
  