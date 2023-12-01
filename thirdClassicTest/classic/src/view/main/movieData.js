Ext.define('thirdClassicTest.view.main.movieData',{
    extend: 'Ext.form.Panel',
    xtype: 'movieData',


    alias: 'movieData',
    height: '100%',
    layout: 'hbox',
    items:[
        {
            xtype:'formpanel',
            title: 'Form',
            flex: 1,
            items:[
                {
                    xtype:'textfield',
                    name: 'movieName',
                    label: 'MovieName'
                },
                {
                    xtype:'textfield',
                    name: 'movieStock',
                    label: 'MovieStock'
                },
                {
                    xtype:'textfield',
                    name: 'movieStock',
                    label: 'MovieRentStatus'
                }
            ],
            buttons:[
                {
                    text:'Submit'
                },

                {
                    xtype:'grid',
                    title:'data',
                    width: '70%',
                    store:{},
                    columns: [
                        {text:'MovieName', dataIndex: 'movieName', flex: 1},
                        {text:'MovieStock', dataIndex: 'movieStock', flex: 1},
                        {text:'MovieRentStatus', dataIndex: 'movieRentStatus', flex: 1}
                    ]
                }
            ]
        }
    ]
})