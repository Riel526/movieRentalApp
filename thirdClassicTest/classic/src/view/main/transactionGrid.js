Ext.define('thirdClassicTest.view.main.transactionGrid', {

  
    extend: 'Ext.grid.Panel',
    xtype: 'transactionGridView',

    alias: 'transactionGridView',

    
  
    viewModel: {
      type: 'transactionViewModel'
    },
    bind: {
      store: '{transactionApiStore}'
    },
  

    columns: 
    [
      { text: 'ID', dataIndex: 'rentalId', flex: 1},
      { text: 'Movie', dataIndex: 'movieId', flex: 1,
        renderer: function (value){
          var movieRecord = Ext.getStore('movieApiStore').findRecord('movieId', value);
          return movieRecord.get('movieName');
        }
      },
      { text: 'Customer', dataIndex: 'customerId', flex: 1,
        renderer: function(value){
          var customerStore = Ext.getStore('customerApiStore');
          var customerRecord = customerStore.findRecord('customerId', value);
          var customerFullName = '';

          var firstName = customerRecord.get('customerFirstName');
          var lastName = customerRecord.get('customerLastName');
          customerFullName = firstName + ' ' + lastName;

          return customerFullName;
        } 
      },
      { text: 'Rented Date', dataIndex: 'rentalDate', flex: 1 },
      { text: 'Reference Number', dataIndex: 'referenceNumber', flex: 1}
    ],



  

  
  
    height: 800,
    width: 200,
  

  });

