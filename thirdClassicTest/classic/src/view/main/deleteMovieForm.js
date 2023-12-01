Ext.define('thirdClassicTest.view.main.deleteMovieForm',{
    extend: 'Ext.window.Window',
    xtype: 'deleteMovieForm', 

    controller: 'main',

    title: 'Delete Movie',
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
        
        text   : 'Delete movie',
        handler: 'onDeleteMovie'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})


