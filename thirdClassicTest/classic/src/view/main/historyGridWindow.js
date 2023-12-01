Ext.define('thirdClassicTest.view.main.historyGridWindow', {
  extend: 'Ext.window.Window',
  xtype: 'historyGridWindow',
  
  title: 'History Grid',
  width: 800,
  height: 600,
  layout: 'fit',
  modal: true,

  items: [
    {
      xtype: 'historyGridView',
      reference: 'historyGridView', 
    },
  ],

  buttons: [
    {
      text: 'OK',
      handler: function (btn) {
        btn.up('window').close();
      },
    },
    {
      text: "Refresh",
      iconCls: "x-fa fa-save",
      handler: function () {
        var store = Ext.getStore("historyApiStore");

        if (!store.isLoaded()) {
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
      }},
    },
    {
      text: "Delete History by Id",
      iconCls: "x-fa fa-trash",
      handler: function () {
        Ext.create(
          "thirdClassicTest.view.main.deleteHistoryForm"
        ).show();
      },
    }
  ],

  
});