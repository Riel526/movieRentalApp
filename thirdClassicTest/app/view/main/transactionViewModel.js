Ext.define('thirdClassicTest.view.main.transactionViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.transactionViewModel',

    id: 'transactionViewModel',

    stores: {
        transactionStore: {
            type: 'transactionApiStore'
        }
    }
});
