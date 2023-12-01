Ext.define('thirdClassicTest.view.main.selectedMoviesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'selectedMoviesGrid',
  
    title: 'Selected Movies',
    height: 200,
    width: 400,
    bind: {
      store: '{selectedMoviesStore}',
    },
  
    columns: [
      { text: 'Movie ID', dataIndex: 'movieId', flex: 1 },
      { text: 'Customer ID', dataIndex: 'customerId', flex: 1 },
      { text: 'Date Rented', dataIndex: 'rentalDate', flex: 1 },
    ],
  });