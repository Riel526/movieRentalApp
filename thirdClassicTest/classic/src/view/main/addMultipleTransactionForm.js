Ext.define('thirdClassicTest.view.main.addMultipleTransactionForm',{
    extend: 'Ext.window.Window',
    xtype: 'addMultipleTransactionForm', 

    controller: 'main',

    title: 'Add Multiple Transaction',
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
                store: 'movieApiStore',
                columns: [
                    { text: 'Movie Name', dataIndex: 'movieName', flex: 1 },
                    { text: 'Stock', dataIndex: 'movieStock', flex: 1 },
                    { text: 'Rent Status', dataIndex: 'movieRentStatus', flex: 1 }
                ],
                selModel: 'checkboxmodel',
            },
            {
                xtype:'combobox', 
                fieldLabel: 'Customer Rentee',
                name: 'customerId',
                id: 'customerId',
                store: 'customerApiStore',
                displayField:'fullName',
                valueField: 'customerId',
                queryMode: 'local',
                editable: false,
                listeners: {
                    render: function(combo) {
                      combo.getStore().each(function(record) {
                        record.set('fullName', record.get('customerFirstName') + ' ' + record.get('customerLastName'));
                      });
                    }
                  }
            },

            {
                xtype: 'datefield',
                fieldLabel: 'Date Rented',
                name: 'rentalDate',
                format: 'Y-m-d',
                startDay: 1                
            },
            
            
         ],
         
    }],

    buttons: [
    {
            
        text   : 'Add multiple transaction',
        handler: 'onMultipleTransaction'
    },
    {
        text   : 'Cancel',
        handler: 'onCancel'
    }
]

})