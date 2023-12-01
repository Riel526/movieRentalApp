Ext.define('thirdClassicTest.model.historyModel', {
    extend: 'Ext.data.Model',

    alias: 'model.historyModel',

    fields: [
       'historyId', 'rentalId',  'movieId',  'customerId', 'rentalBorrow', 'rentalReturn'
    ],

});
