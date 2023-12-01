Ext.define('thirdClassicTest.view.main.historyViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.historyViewModel',

    id: 'historyViewModel',

    stores: {
        historyStore: {
            type: 'historyApiStore'
        }
    }
});
