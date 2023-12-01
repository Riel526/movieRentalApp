Ext.define('thirdClassicTest.view.main.searchCustomerForm',{
    extend: 'Ext.window.Window',
    xtype: 'searchCustomerForm', 

    controller: 'main',

    title: 'Search Customer',
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
                fieldLabel: 'Customer Id',
                name: 'customerId',
                id: 'customerId'
            },
            ,
            
            
         ],
         
    }],

    buttons: [
    {
        
        text   : 'Search customer',
        handler: 'onSearchCustomer'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})
