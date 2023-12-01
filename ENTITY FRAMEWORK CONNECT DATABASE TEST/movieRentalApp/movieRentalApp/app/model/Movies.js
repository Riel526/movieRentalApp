Ext.define('movieRentalApp.model.Movies', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'movieId', type: 'int' },
        { name: 'movieName', type: 'string' },
        { name: 'movieStock', type: 'int' },
        { name: 'movieRentStatus', type: 'int' }

    ]
    }
});