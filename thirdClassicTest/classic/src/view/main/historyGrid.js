Ext.define('thirdClassicTest.view.main.historyGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'historyGridView',

    alias: 'historyGridView',

    viewModel: {
      type: 'historyViewModel'
    },

    bind: {
      store: '{historyStore}'
    },
  

    columns: [
        {text: 'ID', dataIndex: 'historyId', flex: 1},
        {text: 'Rental Id', dataIndex: 'rentalId', flex: 1},

        { text: 'Movie Rented', dataIndex: 'movieId', flex: 1,
        renderer: function (value){
            var movieRecord = Ext.getStore('movieApiStore').findRecord('movieId', value);
            return movieRecord.get('movieName');}},
        { text: 'Customer Rentee', dataIndex: 'customerId', flex: 1,
        renderer: function(value){
            var customerStore = Ext.getStore('customerApiStore');
            var customerRecord = customerStore.findRecord('customerId', value);
            var customerFullName = '';
  
            var firstName = customerRecord.get('customerFirstName');
            var lastName = customerRecord.get('customerLastName');
            customerFullName = firstName + ' ' + lastName;
  
            return customerFullName; }},
        { text: 'Date borrowed', dataIndex: 'rentalBorrow', flex: 1 },
        { text: 'Date returned', dataIndex: 'rentalReturn', flex: 1 }
    ],



  

  
  
    height: 800,
    width: 200,
  

  });
