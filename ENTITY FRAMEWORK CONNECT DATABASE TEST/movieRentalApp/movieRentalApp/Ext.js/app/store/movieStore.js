Ext.define('App.store.movieStore', {
    extend: 'Ext.data.Store',
  
    alias: 'store.movieStore',
  
    fields: [
      'movieId',
      'movieName',
      'movieStock',
      'movieRentStatus'
    ],
  
    proxy: {
      type: 'ajax',
      url: 'resources/movieData.json',
      reader: {
        type: 'json',
        rootProperty: ''
      }
    },
  
    autoLoad: true
  });
  