Ext.define('App.view.MoviesList', {
    extend: 'Ext.grid.Grid',
    xtype: 'widget.bookslist',

    alias: 'customerGridView',

    requires: [
        'App.store.customerStore'
    ],


    store: {
        type: 'movies'
    },

    initComponent: function () {
        this.tbar = [{
            text: 'Add movie',
            action: 'add',
            iconCls: 'book-add'
        }]
    };

    columns: [
        { text: 'ID', dataIndex: 'customerId', flex: 1 },
        { text: 'First Name', dataIndex: 'customerFirstName', flex: 1 },
        { text: 'Last Name', dataIndex: 'customerLastName', flex: 1 },
        { text: 'Movies rented', dataIndex: 'customerRentedMovies', flex: 1 },


        {
            header: 'Action', width 50,
            renderer: function (v, m, r) {
                var id = Ext.id();
                Ext.defer(function () {
                    Ext.widget('image', {
                        renderTo: id,
                        name: 'delete',
                        src: '/Content/images/delete.png',
                        width: 18,
                        height: 19,
                        listeners: {
                            afterrender: function (me) {
                                me.getEl().on('click', function () {
                                    var grid = Ext.ComponentQuery.query('Movieslist')[0];
                                    if (grid) {
                                        var sm = grid.getSelectionModel();
                                        var rs = sm.getSelection();
                                        if (!rs.length) {
                                            Ext.Msg.alert('no movie selected');
                                            return;
                                        }
                                        Ext.Msg.confirm('remove movie',
                                            'Are you sure you want to delete?'
                                            function (button) {
                                                if (button == 'yes') {
                                                    var movies = rs[0].getData();
                                                    var id = movies.id;
                                                    Ext.Ajax.request({
                                                        url: 'http://localhost:44383/Movies/DeleteMovie',
                                                        method: 'POST',
                                                        jsonData: { 'movieId': id },
                                                        success: function (response) {
                                                            var grid = Ext.ComponentQuery.query('bookslist')
                                                            grid.getStore().load();
                                                        }
                                                    })
                                                }
                                            }
                                        ),

                                    }
                                })
                            }
                        }
                    })
                }, 50);
                return Ext.String.format('<div id ="{0}"> </div>', id);
            }
        }

    ],

    height: 800,
    width: 800,

    renderTo: Ext.getBody()
});

this.callParent(arguments);
