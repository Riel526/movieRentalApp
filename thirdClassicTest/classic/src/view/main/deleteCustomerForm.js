Ext.define('thirdClassicTest.view.main.deleteCustomerForm',{
    extend: 'Ext.window.Window',
    xtype: 'deleteCustomerForm', 

    controller: 'main',

    title: 'Delete Customer',
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
        
        text   : 'Delete customer',
        handler: 'onDeleteCustomer'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})