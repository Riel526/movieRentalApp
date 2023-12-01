Ext.define('thirdClassicTest.view.main.filteredMovieGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'filteredMovieGrid',
  
    columns: [
      { text: 'Movie Name', dataIndex: 'movieId', flex: 1,
      renderer: function (value){
        var movieRecord = Ext.getStore('movieApiStore').findRecord('movieId', value);
        return movieRecord.get('movieName');
      } },
      { text: 'Customer Rentee', dataIndex: 'customerId', flex: 1,
      renderer: function(value){
        var customerStore = Ext.getStore('customerApiStore');
        var customerRecord = customerStore.findRecord('customerId', value);
        var customerFullName = '';

        var firstName = customerRecord.get('customerFirstName');
        var lastName = customerRecord.get('customerLastName');
        customerFullName = firstName + ' ' + lastName;

        return customerFullName;
      }  },
      { text: 'Rental Date', dataIndex: 'rentalBorrow', flex: 1 },
      { text: 'Return Date', dataIndex: 'rentalReturn', flex: 1 },
    ],
  
    height: 400,
    width: 700,
  });