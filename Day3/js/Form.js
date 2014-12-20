
Ext.define('MyApp.view.clients.InvoiceForm',{
    extend      : 'Ext.form.Panel',
    alias       : 'widget.clientform',

    title		: 'Client form',
    bodyPadding	: 5,
    defaultType	: 'textfield',

    initComponent   : function(){
        var me = this;

        me.items = me.buildItems();
        me.tbar = [{text:'Save',handler:me.saveData,scope:me}];
        me.dockedItems = me.buildToolbars();
        var cctf = Ext.create('Ext.form.Textfield',{
            fieldLabel  : 'CreditCard',
            name        : 'creditCard'
        });
        

        me.callParent();
    },
    
    saveData	: function(){
		var me = this;

		var invoice = Ext.create("MyApp.model.Invoice",{
			taxId	: '12345y',
			date	: '2012-01-25 11:55:21',
			name	: 'Mr 78John',
			address	: '123 ST 987 LA. USA',
			creditCard: cctf.getValue()
		});
		
		Ext.data.validations.lengthMessage = 'Please correct the length';

		if(invoice.isValid()){
			console.log('Everything is fine!');
		}else{
			var errors = invoice.validate();

			errors.each(function(error){
				console.log(error.field,error.message);
			});
		}},

    
        

    buildItems      : function(){
        return [{
            fieldLabel  : 'Invoice Id',
            name        : 'invoiceId'
        },{
            fieldLabel  : 'TaxId',
            name        : 'taxId'
        },{
            xtype: 'datefield',
            name	:	'date',
            fieldLabel: 'Birthdate '
        },{
            fieldLabel  : 'Phone',
            name        : 'phone'
        },{
            fieldLabel  : 'Name',
            name        : 'name'
        },{
            fieldLabel  : 'Address',
            name        : 'address'
        },cctv

        
        
        ];
    },

    buildToolbars    : function(){
        return [{
            xtype   : 'toolbar',
            docked  : 'top',
            items   : [{
                text    : 'New',
                iconCls : 'new-icon'
            },{
                text    : 'Save',
                iconCls : 'save-icon'
            },{
                text    : 'Delete',
                iconCls : 'delete-icon'
            }]
        }]
    
    
    
	}

});