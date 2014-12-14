
Ext.define("MyApp.Client",{		//Step 1
	name		: "Raj",	//Step 2
	lastName	: "Kapoor",
	
	constructor	: function(config){	//Step 3
        
        Ext.apply(this,config || {}); //Step 4

		console.log("I'm a new client!");
	}
});