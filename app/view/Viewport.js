Ext.define('Sencha.view.Viewport', {
    extend: 'Ext.TabPanel',
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        items:
        [
            {
                title: 'Grocieries',
                iconCls: 'favorites',
                xtype: 'grocerylist'
            },
            {
                title: 'Login',
                iconCls: 'user',
                xtype: 'loginform'
            }
        ]
    }
});
