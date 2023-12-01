Ext.define("thirdClassicTest.view.main.addTransactionForm", {
  extend: "Ext.window.Window",
  xtype: "addTransactionForm",

  controller: "main",

  title: "Add Transaction",
  width: 500,
  height: 300,
  layout: "fit",
  model: true,

  items: [
    {
      xtype: "form",
      itemId: "myFormPanel",
      bodyPadding: 10,
      defaultType: "textField",
      modal: true,

      items: [
        {
          xtype: "combobox",
          fieldLabel: "Movie Rented",
          name: "movieId",
          id: "movieId",
          store: "movieApiStore",
          displayField: "movieName",
          valueField: "movieId",
          queryMode: "local",
          editable: false,
          listeners: {
            render: function (value) {
              var movieId = value;
              var movieStore = Ext.getStore("movieApiStore");
              var movieRecord = movieStore.findRecord("movieId", movieId);

              if (movieRecord) {
                return movieRecord.get("movieName");
              } else {
                return "";
              }
            },
          },
        },
        {
          xtype: "combobox",
          fieldLabel: "Customer Rentee",
          name: "customerId",
          id: "customerId",
          store: "customerApiStore",
          displayField: "fullName",
          valueField: "customerId",
          queryMode: "local",
          editable: false,
          listeners: {
            render: function (combo) {
              combo.getStore().each(function (record) {
                record.set(
                  "fullName",
                  record.get("customerFirstName") +
                    " " +
                    record.get("customerLastName")
                );
              });
            },
          },
        },

        {
          xtype: "datefield",
          fieldLabel: "Date Rented",
          name: "rentalDate",
          format: "Y-m-d",
          startDay: 1,
        },
      ],
    },
  ],

  buttons: [
    {
      text: "Add transaction",
      handler: "onAddTransaction",
    },
    {
      text: "Cancel",
      handler: "onCancel",
    },
  ],
});
