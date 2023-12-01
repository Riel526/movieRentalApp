Ext.define('thirdClassicTest.view.main.movieViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.movieViewModel',

    id: 'movieViewModel',

    stores: {
        movieStore: {
            type: 'movieApiStore'
        }
    }
});
