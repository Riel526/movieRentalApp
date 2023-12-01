Ext.define('thirdClassicTest.view.main.updateMovieForm',{
    extend: 'Ext.window.Window',
    xtype: 'updateMovieForm', 

    controller: 'main',

    title: 'Update Movie',
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
                xtype:'numberfield',
                fieldLabel: 'Movie Id',
                dataIndex: 'movieId',
                name: 'movieId',
                id: 'movieId'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Movie Title',
                name: 'movieName',
                dataIndex: 'movieName',
                id: 'movieName'
            },
            {
                xtype:'numberfield',
                fieldLabel: 'Movie Stocks',
                name: 'movieStock',
                dataIndex: 'movieStock',
                id: 'movieStock'
            },

            {
                xtype: 'combobox',
                fieldLabel: 'Availability',
                dataIndex: 'movieRentStatus',
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
        
        text   : 'Update Movie',
        handler: 'onUpdateMovie'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})


