Ext.define('thirdClassicTest.view.main.searchMovieForm',{
    extend: 'Ext.window.Window',
    xtype: 'searchMovieForm', 

    controller: 'main',

    title: 'Search Movie',
    width: 500,
    height: 300,
    layout: 'fit',
    model: true,


    items: [{
        xtype: 'form',
        itemId: 'myFormPanel',
        bodyPadding: 10,
        defaultType: 'textField',
        modal: true,


        items: [
            {
                xtype:'textfield',
                fieldLabel: 'Movie Id',
                name: 'movieId',
                id: 'movieId'
            },
            ,
            
            
         ],
         
    }],

    buttons: [
    {
        
        text   : 'Search movie',
        handler: 'onSearchMovie'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})


