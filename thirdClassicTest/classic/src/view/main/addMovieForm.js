Ext.define('thirdClassicTest.view.main.addMovieForm',{
    extend: 'Ext.window.Window',
    xtype: 'addMovieForm', 

    controller: 'main',

    title: 'Add Movie',
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
                fieldLabel: 'Movie Title',
                name: 'movieName',
                id: 'movieName'
            },
            {
                xtype:'numberfield',
                fieldLabel: 'Movie Stocks',
                name: 'movieStock',
                id: 'movieStock'
            },

            {
                xtype: 'combobox',
                fieldLabel: 'Availability',
                name: 'movieRentStatus',
                store: [[true, 'Available'], [false, 'Not Available']],
                queryMode: 'local',
                valueField: 'value',
                displayField: 'text',
                forceSelection: true
                
            },
            
            
         ],
         
    }],

    buttons: [
    {
            
        text   : 'Add movie',
        handler: 'onAddMovie'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})


