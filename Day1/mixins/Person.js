

Ext.define("MyApp.Person",{
	name		: "",
	lastname	: "",
	nationality : "",
	
	constructor	: function(options){
		Ext.apply(this,options);
	}
});