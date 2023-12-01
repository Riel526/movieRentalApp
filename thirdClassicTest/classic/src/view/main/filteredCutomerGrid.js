Ext.define('thirdClassicTest.view.main.filteredCustomerGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'filteredCustomerGrid',
  
    columns: [
      { text: 'Rented Movie', dataIndex: 'movieId', flex: 1,
      renderer: function (value){
        var movieRecord = Ext.getStore('movieApiStore').findRecord('movieId', value);
        return movieRecord.get('movieName');
      } },
      { text: 'Customer Name', dataIndex: 'customerId', flex: 1,
      renderer: function(value){
        var customerStore = Ext.getStore('customerApiStore');
        var customerRecord = customerStore.findRecord('customerId', value);
        var customerFullName = '';

        var firstName = customerRecord.get('customerFirstName');
        var lastName = customerRecord.get('customerLastName');
        customerFullName = firstName + ' ' + lastName;

        return customerFullName;
      }  },
      { text: 'Rental Date', dataIndex: 'rentalDate', flex: 1 },
    ],
  
    height: 400,
    width: 700,
  });