Ext.define('thirdClassicTest.view.main.addCustomerForm',{
    extend: 'Ext.window.Window',
    xtype: 'addCustomerForm', 

    controller: 'main',

    title: 'Add Customer',
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
                fieldLabel: 'First Name',
                name: 'customerFirstName',
                id: 'customerFirstName'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Last Name',
                name: 'customerLastName',
                id: 'customerLastName'
            },

            {
                xtype: 'numberfield',
                fieldLabel: 'Movies Rented',
                name: 'customerRentedMovies',
                id: 'customerRentedMovies'
    
            },
            
            
         ],
         
    }],

    buttons: [
    {
        
        text   : 'Add customer',
        handler: 'onAddCustomer'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})


