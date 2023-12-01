Ext.define('thirdClassTest.store.customerApiStore', {
  extend: 'Ext.data.Store',
  alias: 'store.customerApiStore',

  model: 'thirdClassicTest.model.customerModel',
  storeId: 'customerApiStore',

  fields: [
      'customerId',
      'customerFirstName',
      'customerLastName',
      'customerRentedMovies'
    ],

    proxy: {
      type:'rest',
     api:{
          read: 'https://localhost:44383/api/customer',
          create: 'https://localhost:44383/api/customer',
          update: 'https://localhost:44383/api/customer',
          destroy: 'https://localhost:44383/api/customer'
      },

      writer: {
          type: 'json',
          writeAllFields: true
      },

      actionMethods:{
          read: 'GET',
          create: 'POST',
          update: 'PUT',
          destroy: 'DELETE'
      },

      reader: {
          type:'json',
          rootProperty: 'data'
      }
  },


})
  