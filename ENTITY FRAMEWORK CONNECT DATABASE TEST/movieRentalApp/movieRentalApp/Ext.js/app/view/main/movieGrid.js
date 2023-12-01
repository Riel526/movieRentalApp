Ext.define('App.view.main.movieGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'movieGridView',

    alias: 'movieGridView',

    requires: [
        'App.store.movieStore'
    ],
  
  
    store: {
      type: 'movieStore'
    },
  
    columns: [
      { text: 'ID', dataIndex: 'movieId', flex: 1},
      { text: 'Movie Name', dataIndex: 'movieName', flex: 1 },
      { text: 'Stocks', dataIndex: 'movieStock', flex: 1 },
      { text: 'Availability', dataIndex: 'movieRentStatus', flex: 1 }
    ],
  
    height: 800,
    width: 800,
  
    renderTo: Ext.getBody()
  });
  