Ext.define('thirdClassTest.store.historyApiStore', {
    extend: 'Ext.data.Store',
    alias: 'store.historyApiStore',
  
    model: 'thirdClassicTest.model.historyModel',
    storeId: 'historyApiStore',

  
    fields: [
        'historyId',
        'rentalId',
        'movieId',
        'customerId',
        'rentalBorrow',
        'rentalReturn'
      ],
  
      proxy: {
        type:'rest',
       api:{
            read: 'https://localhost:44383/api/rentalHistory',
            create: 'https://localhost:44383/api/rentalHistory',
            update: 'https://localhost:44383/api/rentalHistory',
            destroy: 'https://localhost:44383/api/rentalHistory'
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