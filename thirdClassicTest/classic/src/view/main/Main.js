/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("thirdClassicTest.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "thirdClassicTest.view.main.MainController",
    "thirdClassicTest.view.main.MainModel",
    "thirdClassicTest.view.main.List",
  ],

  controller: "main",
  viewModel: "main",

  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "{name}",
      },
      flex: 0,
    },
    iconCls: "fa-th-list",
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  responsiveConfig: {
    tall: {
      headerPosition: "top",
    },
    wide: {
      headerPosition: "left",
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: "left",
          textAlign: "left",
        },
        tall: {
          iconAlign: "top",
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
    {
      title: "Movies",
      iconCls: "x-fa fa-columns",
      layout: "fit",
      items: [
        {
          xtype: "movieGridView",
          bind:{
            store: "{movieStore}"
          },
          tbar: [
            {
              text: "Refresh",
              iconCls: "x-fa fa-save",
              handler: function () {
                var store = Ext.getStore("movieApiStore");
                store.load({
                  callback: function (success) {
                    if (success) {
                      Ext.Msg.alert(
                        "Refreshed!",
                        "Updated movie list has been loaded!"
                      );
                      store.clearFilter();
                    }
                  },
                });
              },
            },
            {
              text: "Add movie",
              iconCls: "x-fa fa-plus",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.addMovieForm").show();
              },
            },
            {
              text: "Update movie",
              iconCls: "x-fa fa-edit",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.updateMovieForm").show();
              },
            },
            {
              text: "Delete movie",
              iconCls: "x-fa fa-trash",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.deleteMovieForm").show();
              },
            },
            {
              text: "Search movie",
              iconCls: "x-fa fa-search",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.searchMovieForm").show();
              },
            },
          ],
        },
      ],
    },

    {
      title: "Customers",
      iconCls: "x-fa fa-beer",
      layout: "fit",
      items: [
        {
          xtype: "customerGridView",
          bind:{
            store: '{customerStore}'
          },
          tbar: [
            {
              text: "Refresh",
              iconCls: "x-fa fa-save",
              handler: function () {
                var store = Ext.getStore("customerApiStore");
                store.load({
                  callback: function (success) {
                    if (success) {
                      Ext.Msg.alert(
                        "Refreshed!",
                        "Updated customer list has been loaded!"
                      );
                      store.clearFilter();
                    }
                  },
                });
              },
            },
            {
              text: "Add customer",
              iconCls: "x-fa fa-plus",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.addCustomerForm").show();
              },
            },
            {
              text: "Update customer",
              iconCls: "x-fa fa-edit",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.updateCustomerForm").show();
              },
            },
            {
              text: "Delete customer",
              iconCls: "x-fa fa-trash",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.deleteCustomerForm").show();
              },
            },
            {
              text: "Search customer",
              iconCls: "x-fa fa-search",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.searchCustomerForm").show();
              },
            },
          ]
        },
      ],
    },
    {
      title: "Master Detail",
      iconCls: "x-fa fa-credit-card",
      layout: "fit",
      items: [
        {
          
          xtype: 'masterDetailGridView',
          bind:{
            store: '{masterDetailStore}'
          },
          tbar: [
            {
              text: "Refresh",
              iconCls: "x-fa fa-save",
              handler: function () {
                var store = Ext.getStore("masterDetailApiStore");
                store.load({
                  callback: function (success) {
                    if (success) {
                      Ext.Msg.alert(
                        "Refreshed!",
                        "Updated customer list has been loaded!"
                      );
                      store.clearFilter();
                    }
                  },
                });
              },
            },
            {
              text: "Delete detail by Id",
              iconCls: "x-fa fa-trash",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.deleteMasterDetailForm").show();
              }
            }
          ]
        }
      ]
    },
    {
      title: "Transactions",
      iconCls: "x-fa fa-credit-card",
      layout: "fit",
      items: [
        {
          
          xtype: 'transactionGridView',
          bind:{
            store: '{transactionStore}'
          },
          tbar:[
            {
              text: "Refresh",
              iconCls: "x-fa fa-save",
              handler: function () {
              var store = Ext.getStore("transactionApiStore");

              var historyStore = Ext.getStore("historyApiStore");
              
              console.log(store)
              console.log(historyStore);

                store.load({
                  callback: function (success) {
                    if (success) {
                      Ext.Msg.alert(
                        "Refreshed!",
                        "Updated transaction list has been loaded!"
                      );
                      store.clearFilter();
                    }
                  },
                });
              },
            },
            
            {
              text: "Rent movie",
              iconCls: "x-fa fa-plus",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.addTransactionForm").show();
              }
            },
            {
              text: "Rent multiple movie",
              iconCls: "x-fa fa-shopping-cart",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.addMultipleTransactionForm").show();
              }
            },
            {
              text: "Return movie",
              iconCls: "x-fa fa-undo",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.onReturnTransactionForm").show();
              }
            },
            {
              text: "Search transaction",
              iconCls: "x-fa fa-search",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.searchTransactionForm").show();
              },
            },
            {
              text: "Update changes to history",
              iconCls: "x-fa fa-search",
              handler: 'updateHistory',
            },
          ]
        }
      ]
    },
    {
      title: "Transaction History",
      iconCls: "x-fa fa-credit-card",
      layout: "fit",
      items: [
        {
          
          xtype: 'historyGridView',
          bind:{
            store: '{historyStore}'
          },
          tbar: [
            {
              text: "Refresh",
              iconCls: "x-fa fa-save",
              handler: function () {
                var store = Ext.getStore("historyApiStore");
                store.load({
                  callback: function (success) {
                    if (success) {
                      Ext.Msg.alert(
                        "Refreshed!",
                        "Updated customer list has been loaded!"
                      );
                      store.clearFilter();
                    }
                  },
                });
              },
            },
            {
              text: "Delete History by Id",
              iconCls: "x-fa fa-trash",
              handler: function () {
                Ext.create("thirdClassicTest.view.main.deleteHistoryForm").show();
              }
            }
          ]
        }
      ]
    }
  ],
});
