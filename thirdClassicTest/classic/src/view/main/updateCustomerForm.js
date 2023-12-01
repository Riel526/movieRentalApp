Ext.define('thirdClassicTest.view.main.updateCustomerForm',{
    extend: 'Ext.window.Window',
    xtype: 'updateCustomerForm', 

    controller: 'main',

    title: 'Update Customer',
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
                fieldLabel: 'Customer Id',
                dataIndex: 'customerId',
                name: 'customerId',
                id: 'customerId'
            },
            {
                xtype:'textfield',
                fieldLabel: 'First Name',
                name: 'customerFirstName',
                id: 'customerFirstName',
                dataIndex: 'customerFirstName'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Last Name',
                name: 'customerLastName',
                id: 'customerLastName',
                dataIndex: 'customerLastName'
            },

            {
                xtype: 'numberfield',
                fieldLabel: 'Movies Rented',
                name: 'customerRentedMovies',
                id: 'customerRentedMovies',
                dataIndex: 'customerRentedMovies'
                
            },
            
            
         ],
         
    }],

    buttons: [
    {
        
        text   : 'Update Customer',
        handler: 'onUpdateCustomer'
    }, 
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})

