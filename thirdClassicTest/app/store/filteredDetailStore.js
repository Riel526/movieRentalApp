var filteredDetail = [];

var filteredTransactionsStore = Ext.create('Ext.data.Store', {
    model: 'thirdClassicTest.model.filteredDetailModel',

    storeId: 'filteredDetailStore',

    data: filteredDetail,
  });