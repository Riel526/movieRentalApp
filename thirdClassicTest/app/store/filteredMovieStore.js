var filteredTransactions = [];

var filteredTransactionsStore = Ext.create('Ext.data.Store', {
    model: 'thirdClassicTest.model.filteredMovieModel',

    storeId: 'filteredMovieStore',

    data: filteredTransactions,
  });