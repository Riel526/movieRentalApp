Ext.define('thirdClassicTest.view.main.movieGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'movieGridView',

    alias: 'movieGridView',

    viewModel: {
      type: 'movieViewModel'
    },

    bind: {
      store: '{movieStore}'
    },
  

    columns: 
    [
      { text: 'ID', dataIndex: 'movieId', flex: 1,},
      { text: 'Movie Name', dataIndex: 'movieName', flex: 1 },  
      { text: 'Stocks', dataIndex: 'movieStock', flex: 1 },
      { text: 'Availability', dataIndex: 'movieRentStatus', flex: 1 },
      {
        xtype: 'actioncolumn',
        width: 100,
        items: [
          {
            iconCls: 'x-fa fa-eye',
            tooltip: 'View Transactions',
            handler: function (grid, rowIndex) {
              var record = grid.getStore().getAt(rowIndex);
              var movieId = record.get('movieId');
              var transactionStore = Ext.getStore('historyApiStore');
              
              
              var filteredMovie = transactionStore.query('movieId', movieId).getRange();
              
              var filteredMovieGrid = Ext.create('thirdClassicTest.view.main.filteredMovieGrid', {
                store: {
                  fields: ['movieId', 'customerId', 'rentalBorrow', 'rentalReturn'],
                  data: filteredMovie,
                },
              });
              console.log(filteredMovie)
              Ext.create('Ext.window.Window', {
                title: 'Selected Transactions',
                height: 500,
                width: 600,
                layout: 'fit',
                items: [filteredMovieGrid],
              }).show();
            },
          }
        ]
        }
    ],



  

    
  
    height: 800,
    width: 200,
  

  });

