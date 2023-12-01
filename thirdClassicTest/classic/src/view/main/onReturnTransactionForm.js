Ext.define('thirdClassicTest.view.main.onReturnTransactionForm',{
    extend: 'Ext.window.Window',
    xtype: 'onReturnTransactionForm', 

    controller: 'main',

    title: 'Return movie',
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
                fieldLabel: 'rental Id',
                name: 'rentalId',
                id: 'rentalId'
            },
           /* {
                xtype: "datefield",
                fieldLabel: "Date Returned",
                name: "returnDate",
                format: "Y-m-d",
                startDay: 1,
            },*/
            
            
         ],
         
    }],

    buttons: [
    {
        
        text   : 'Return Movie',
        handler: 'onReturnTransaction'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})