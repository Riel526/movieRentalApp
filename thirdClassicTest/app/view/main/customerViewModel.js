Ext.define('thirdClassicTest.view.main.customerViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.customerViewModel',

    id: 'customerViewModel',

    stores: {
        customerStore: {
            type: 'customerApiStore'
        }
    }
});
