var root = {
    text: 'Groceries',
    items: [{
        text: 'Drinks',
        items: [{
            text: 'Water',
            items: [{
                text: 'Sparkling',
                leaf: true
            }, {
                text: 'Still',
                leaf: true
            }]
        }, {
            text: 'Coffee',
            leaf: true
        }, {
            text: 'Espresso',
            leaf: true
        }, {
            text: 'Redbull',
            leaf: true
        }, {
            text: 'Coke',
            leaf: true
        }, {
            text: 'Diet Coke',
            leaf: true
        }]
    }, {
        text: 'Fruit',
        items: [{
            text: 'Bananas',
            leaf: true
        }, {
            text: 'Lemon',
            leaf: true
        }]
    }, {
        text: 'Snacks',
        items: [{
            text: 'Nuts',
            leaf: true
        }, {
            text: 'Pretzels',
            leaf: true
        }, {
            text: 'Wasabi Peas',
            leaf: true
        }]
    }]
};

Ext.define('Sencha.store.Groceries',
{
    extend: 'Ext.data.TreeStore',
    model: 'Sencha.model.Groceries',
    requires: ['Sencha.model.Groceries'],
    root: root,
    defaultRootProperty: 'items'
});