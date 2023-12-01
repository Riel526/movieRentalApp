Ext.define('App.view.main.customerGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'customerGridView',

    alias: 'customerGridView',

    requires: [
        'App.store.customerStore'
    ],
  
  
    store: {
      type: 'customerStore'
    },
  
    columns: [
      { text: 'ID', dataIndex: 'customerId', flex: 1 },
      { text: 'First Name', dataIndex: 'customerFirstName', flex: 1 },
      { text: 'Last Name', dataIndex: 'customerLastName', flex: 1 },
      { text: 'Movies rented', dataIndex: 'customerRentedMovies', flex: 1 }
    ],
  
    height: 800,
    width: 800,
  
    renderTo: Ext.getBody()
  });
  