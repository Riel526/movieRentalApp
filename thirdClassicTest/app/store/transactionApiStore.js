Ext.define('thirdClassTest.store.transactionApiStore', {
    extend: 'Ext.data.Store',
    alias: 'store.transactionApiStore',
  
    model: 'thirdClassicTest.model.transactionModel',
    storeId: 'transactionApiStore',
  
    fields: [
        'rentalId',
        'movieId',
        'customerId',
        'rentalDate',
        'referenceNumber'
      ],
  
      proxy: {
        type:'rest',
       api:{
            read: 'https://localhost:44383/api/rentalTransaction',
            create: 'https://localhost:44383/api/rentalTransaction',
            update: 'https://localhost:44383/api/rentalTransaction',
            destroy: 'https://localhost:44383/api/rentalTransaction'
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