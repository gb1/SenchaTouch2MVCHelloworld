Ext.define('Sencha.view.login.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',
    layout:'vbox',
    config:
    {
        items:
        [
            {
                xtype:'textfield',
                label:'Username',
                name:'username',
                li: function(){alert('asdasd');}
            },
            {
                xtype:'passwordfield',
                label:'Password',
                name:'password'
            },
            {
                xtype:'button',
                text:'Login'

            }
        ]
        
    }

    //constructor: function() {
     //   this.addListener('submit',function(){alert('sadfg')});
    //    this.callParent(arguments);
    //}


});

