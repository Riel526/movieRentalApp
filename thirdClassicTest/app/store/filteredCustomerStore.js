var filteredTransactions = [];

var filteredTransactionsStore = Ext.create('Ext.data.Store', {
    model: 'thirdClassicTest.model.filteredCustomerModel',

    storeId: 'filteredCustomerStore',

    data: filteredTransactions,
  });