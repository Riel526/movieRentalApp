Ext.define('thirdClassicTest.store.masterDetailApiStore', {
    extend: 'Ext.data.Store',
    alias: 'store.masterDetailApiStore',

    model: 'thirdClassicTest.model.masterDetailModel',
    storeId: 'masterDetailApiStore',

    fields:[
        'masterDetailId',
        'customerId',
        'rentalDate',
        'referenceNumber'   
    ],

    proxy: {
        type:'rest',
       api:{
            read: 'https://localhost:44383/api/masterDetail',
            create: 'https://localhost:44383/api/masterDetail',
            update: 'https://localhost:44383/api/masterDetail',
            destroy: 'https://localhost:44383/api/masterDetail'
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

