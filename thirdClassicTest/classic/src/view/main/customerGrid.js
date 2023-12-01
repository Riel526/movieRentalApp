Ext.define('thirdClassicTest.view.main.customerGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerGridView',

    alias: 'customerGridView',

    viewModel: {
      type: 'customerViewModel'
    },

    bind: {
      store: '{customerApiStore}'
    },
  
    columns: [
      { text: 'ID', dataIndex: 'customerId', flex: 1 },
      { text: 'First Name', dataIndex: 'customerFirstName', flex: 1 },
      { text: 'Last Name', dataIndex: 'customerLastName', flex: 1 },
      { text: 'Movies rented', dataIndex: 'customerRentedMovies', flex: 1 },

      {
        xtype: 'actioncolumn',
        width: 100,
        items: [
          {
            iconCls: 'x-fa fa-eye',
            tooltip: 'View Movies Rented',
            handler: function (grid, rowIndex) {
              var record = grid.getStore().getAt(rowIndex);
              var customerId = record.get('customerId');
              var transactionStore = Ext.getStore('transactionApiStore');
              
              var filteredCustomer = transactionStore.query('customerId', customerId).getRange();
              
              var filteredCustomerGrid = Ext.create('thirdClassicTest.view.main.filteredCustomerGrid', {
                store: {
                  fields: ['movieId', 'customerId', 'rentalDate'],
                  data: filteredCustomer,
                },
              });
              Ext.create('Ext.window.Window', {
                title: 'Movies Rented',
                height: 500,
                width: 600,
                layout: 'fit',
                items: [filteredCustomerGrid],
              }).show();
            },
          }
        ]
        }
    ],
  
  
    height: 800,
    width: 800,
  

    

  });
  