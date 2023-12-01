Ext.define('thirdClassicTest.view.main.searchTransactionForm',{
    extend: 'Ext.window.Window',
    xtype: 'searchTransactionForm', 

    controller: 'main',

    title: 'Search Transcation',
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
                fieldLabel: 'Rental Id',
                name: 'rentalId',
                id: 'rentalId'
            },
            ,
            
            
         ],
         
    }],

    buttons: [
    {
        
        text   : 'Search movie',
        handler: 'onSearchTransaction'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})
