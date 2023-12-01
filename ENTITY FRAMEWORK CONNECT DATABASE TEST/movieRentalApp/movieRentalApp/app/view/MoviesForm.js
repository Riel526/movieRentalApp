Ext.define('App.view.MoviesForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.booksform',
    title: 'Add Movie',
    width: 350,
    layout: 'fit',
    rezisable: 'false',
    closeAction: 'hide',
    modal: true,
    config: {
        recordIndex: 0,
        action: ''
    },
    items: [{
        xtype: 'form',
        layout: 'anchor',
        bodyStyle: {
            background: 'none',
            padding: '10px',
            border: 0
        },
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },

        items: [{
            name: 'moviId',
            fieldLabel: 'movie Id'
        },{
            name: 'movieName',
            fieldLabel: 'movie name'
        },{
            name: 'movieStock',
            fieldLabel: 'movie stocks'
        },{
            name: 'movieRentStatus',
            fieldLabel: 'Rent status'
            }
        ]
    }],

    buttons: [{
        text: 'OK',
        action: 'add'
    }, {
        text: 'Reset',
        handler: function () {
            this.up('window').down('form').getForm().reset()
        }
    }, {
        text: 'cancel',
        handler: function () {
            this.up('window').close();
        }
    ]



})