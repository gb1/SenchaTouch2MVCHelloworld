Ext.define('Sencha.view.groceries.List', {
    extend: 'Ext.dataview.NestedList',
    alias: 'widget.grocerylist',
    title: 'Groceries',
    layout: 'vbox',
    displayField: 'text',

    store: 'store.Groceries',

    initialize: function () {
        console.log('Grocery List Initialized');
    }

});
