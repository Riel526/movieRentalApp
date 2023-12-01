Ext.define('thirdClassicTest.view.main.deleteHistoryForm',{
    extend: 'Ext.window.Window',
    xtype: 'deleteHistoryForm', 

    controller: 'main',

    title: 'Delete History',
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
                fieldLabel: 'History Id',
                name: 'historyId',
                id: 'historyId'
            },
            ,
            
            
         ],
         
    }],

    buttons: [
    {
        
        text   : 'Delete History',
        handler: 'onDeleteHistory'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})