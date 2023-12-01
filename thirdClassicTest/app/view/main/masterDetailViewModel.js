Ext.define('thirdClassicTest.view.main.masterDetailViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.masterDetailViewModel',

    id: 'masterDetailViewModel',

    stores: {
        masterDetailStore: {
            type: 'masterDetailApiStore'
        }
    }
});
