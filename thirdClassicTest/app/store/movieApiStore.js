Ext.define('thirdClassicTest.store.movieApiStore', {
    extend: 'Ext.data.Store',
    alias: 'store.movieApiStore',

    model: 'thirdClassicTest.model.movieModel',
    storeId: 'movieApiStore',

    fields:[
        'movieId',
        'movieName',
        'movieStock',
        'movieRentStatus'   
    ],

    proxy: {
        type:'rest',
       api:{
            read: 'https://localhost:44383/api/movie',
            create: 'https://localhost:44383/api/movie',
            update: 'https://localhost:44383/api/movie',
            destroy: 'https://localhost:44383/api/movie'
        },

        writer: {
            type: 'json',
            writeAllFields: true
        },

        actionMethods:{
            read: 'GET',
            create: 'POST',
            update: 'PUT',
            destroy: 'DELETE'
        },

        reader: {
            type:'json',
            rootProperty: 'data'
        }
    },


})

