

Ext.define('MyApp.users.Employee',{
    extend      : 'Ext.util.Observable',
    attempts	: 0,

    constructor	: function(){
		var me = this;

		//me.addEvents('success','fail');

		me.callParent();
    },

    login	: function(usr,pwd){
		var me = this;

		Ext.Msg.wait('Please wait','Loading...',{
			interval: 200
		});
		//faking the server response
		setTimeout(function(){
			Ext.Msg.hide();
			me.attempts++;
			if(usr === 'maxx' && pwd === '123'){
				me.fireEvent("success",me);
			}else{
				me.fireEvent("fail",me.attempts);
			}
		},3000);
    }
});