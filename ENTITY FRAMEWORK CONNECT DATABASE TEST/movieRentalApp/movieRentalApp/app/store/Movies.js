Ext.define('App.store.Movies', {
    extend: 'Ext.data.Store',

    alias: 'store.movieStore',

    model: 'App.model.Movies'

    fields: [
        'movieId',
        'movieName',
        'movieStock',
        'movieRentStatus'
    ],

    proxy: {
        type: 'ajax',
        url: 'http://localhost:44383/movies/GetMovies', //movies is in lower case bacause movies in the db is in lowercase, GetMovies is the method created in movies controllers
        reader: {
            type: 'json',
            rootProperty: 'movies'
        }
    },

    autoLoad: true
});
