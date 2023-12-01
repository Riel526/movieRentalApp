Ext.define('thirdClassicTest.view.main.returnMultipleTransactionForm',{
    extend: 'Ext.window.Window',
    xtype: 'returnMultipleTransactionForm', 

    controller: 'main',

    title: 'Return Multiple Transaction',
    width: 800,
    height: 700,
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
                xtype: 'gridpanel',
                title:  'Rent Multiple Movies',
                store: 'transactionApiStore',
                columns: [
                    { text: 'Movie Rented', dataIndex: 'movieId', flex: 1,
                    renderer: function (value){
                        var movieRecord = Ext.getStore('movieApiStore').findRecord('movieId', value);
                        return movieRecord.get('movieName');}},
                    { text: 'Customer Rentee', dataIndex: 'customerId', flex: 1,
                    renderer: function(value){
                        var customerStore = Ext.getStore('customerApiStore');
                        var customerRecord = customerStore.findRecord('customerId', value);
                        var customerFullName = '';
              
                        var firstName = customerRecord.get('customerFirstName');
                        var lastName = customerRecord.get('customerLastName');
                        customerFullName = firstName + ' ' + lastName;
              
                        return customerFullName; }},
                    { text: 'Rent Date', dataIndex: 'rentalDate', flex: 1 }
                ],
                selModel: 'checkboxmodel',
            },
                 
         ],
         
    }],

    buttons: [
    {
            
        text   : 'Add multiple transaction',
        handler: 'onMultipleReturn'
    },
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})