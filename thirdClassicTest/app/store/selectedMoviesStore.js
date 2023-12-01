Ext.define('thirdClassicTest.store.selectedMoviesStore', {
    extend: 'Ext.data.Store',
    alias: 'store.selectedMoviesStore',
    fields: ['movieId', 'customerId', 'rentalDate'],
    data: [],
  });
  