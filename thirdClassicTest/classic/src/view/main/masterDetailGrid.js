Ext.define("thirdClassicTest.view.main.masterDetailGrid", {
  extend: "Ext.grid.Panel",
  xtype: "masterDetailGridView",

  alias: "masterDetailGridView",

  viewModel: {
    type: "masterDetailViewModel",
  },

  bind: {
    store: "{masterDetailApiStore}",
  },

  columns: [
    { text: "ID", dataIndex: "customerId", flex: 1 },
    {
      text: "Customer Rentee",
      dataIndex: "customerId",
      flex: 1,
      renderer: function (value) {
        var customerStore = Ext.getStore("customerApiStore");
        var customerRecord = customerStore.findRecord("customerId", value);
        var customerFullName = "";

        var firstName = customerRecord.get("customerFirstName");
        var lastName = customerRecord.get("customerLastName");
        customerFullName = firstName + " " + lastName;

        return customerFullName;
      },
    },
    { text: "Date Rented", dataIndex: "rentalDate", flex: 1 },

    {
      xtype: "actioncolumn",
      width: 100,
      items: [
        {
          iconCls: "x-fa fa-eye",
          tooltip: "View master Detail",
          handler: function (grid, rowIndex) {
            var record = grid.getStore().getAt(rowIndex);
            var referenceNumber = record.get('referenceNumber');
            var transactionStore = Ext.getStore('transactionApiStore');
            
            
            var filteredDetail = transactionStore.query('referenceNumber', referenceNumber).getRange();
            
            var filteredDetailGrid = Ext.create('thirdClassicTest.view.main.filteredDetailGrid', {
              store: {
                fields: ['customerId', 'movieId', 'rentalDate',],
                data: filteredDetail,
              },
            });
            Ext.create('Ext.window.Window', {
              title: 'Selected Transactions',
              height: 500,
              width: 600,
              layout: 'fit',
              items: [filteredDetailGrid],
            }).show();
          },
        },
      ],
    },
  ],

  height: 800,
  width: 800,
});
