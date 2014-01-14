(function(){window.musicPassport={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";return this.user=new musicPassport.Models.Profile,this.passport=new musicPassport.Models.Passport,this.lineup=new musicPassport.Models.Lineup,this.appView=new musicPassport.Views.App({model:this.user}),this.router=new musicPassport.Routers.AppRouter,Backbone.history.start()}},$(function(){"use strict";return musicPassport.init()}),window.Evt=new Evrythng({evrythngApiKey:"EyvifRsWvxEh4prtcQ6LQtSHAs9AF8ce2iuxomMFbCMkaXUvpxnvOUOAH6fDePuug66HRIGGiFcDQzF7",evrythngAppId:"52d0185a55872c9a6d7b1616",facebookAppId:"1449050295309307",jQuery:jQuery}),$(document).on("fbStatusChange",function(a,b){return"connected"===b.status?FB.api("/me",function(a){return b={email:"joaoguerravieira@gmail.com",password:"Click12345"},Evt.request({url:"/auth/evrythng",data:b,method:"post"},function(b){var c;return b.evrythngApiKey?(musicPassport.user.set(a),musicPassport.user.set("authenticated",!0),Evt.options.evrythngAppApiKey=Evt.options.evrythngApiKey,Evt.options.evrythngApiKey=b.evrythngApiKey,c=musicPassport.passport.get("thngid"),musicPassport.router.navigate(""+c+"/home",{trigger:!0})):void 0})}):Evt.request({url:"/auth/all/logout",method:"post"},function(){return Evt.options.evrythngApiKey=Evt.options.evrythngAppApiKey,musicPassport.user.set(musicPassport.user.defaults),musicPassport.router.navigate(""+musicPassport.passport.get("thngid"),{trigger:!0})})})}).call(this),window.JST||(window.JST={}),window.JST["app/scripts/templates/app"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){d(b('<!-- navigation -->\n<nav id="navigation" class="navbar navbar-default navbar-fixed-top" role="navigation">\n	<!-- navigation dependent of login -->\n</nav>\n\n\n<!-- content -->\n<div class="jumbotron panel-holder">\n  <div id="panel-carousel" class="owl-carousel">\n\n  </div>\n</div>'))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},window.JST||(window.JST={}),window.JST["app/scripts/templates/home"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){this.passport.exists?this.passport.own?(d(b('\n	<div id="viewing" class="panel">\n		<p>You\'re currently watching</p>\n		<p>')),d(this.closerStage.checkinCount),d(b('</p>\n		<a href="#" class="checkin">Check in concert!</a>\n	</div>\n	<div id="playing" class="panel">\n		<p>Also playing</p>\n		<p>')),d(this.otherStages.checkinCount),d(b('</p>\n		<div class="next-concert">\n			<p>Your next show: <span id="band"></span></p>\n		</div>\n		<a href="#" class="passport-full">Check my concerts</a>\n	</div>\n'))):(d(b("\n	")),this.passport["new"]?d(b('\n		<div class="panel">\n			<h2>Congratulations! You\'ve got a new fancy accessory</h2>\n			<p>This bracelet is not registered. Claim it and start using your passport</p>\n			<p>\n				<a href="#" class="btn btn-primary btn-large btn-claim">Claim my bracelet</a>\n			</p>\n		</div>\n	')):d(b('\n		<div class="panel">\n			<h2>Getting new friends?</h2>\n			<p>This isn\'t your bracelet. Please scan yours to use your passport</p>\n		</div>\n	')),d(b("\n"))):d(b('\n	<div class="panel">\n		<h2>Oops! This bracelet doesn\'t exist</h2>\n		<p>Please scan a valid bracelet and claim it to start using your passport</p>\n	</div>\n')),d(b('\n<div id="lineup" class="panel">\n	<p>View lineup</p>\n	<a href="#" class="lineup">View</a>\n</div>'))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},window.JST||(window.JST={}),window.JST["app/scripts/templates/lineup"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){var a,c,e,f,g,h,i,j,k,l;d(b('<div id="welcome" class="panel">\n	')),j=this.lineup.attributes;for(e in j){for(c=j[e],d(b("\n		<h1>Day ")),d(e),d(b("</h1>\n		<h2>Main Stage</h2>\n		")),k=c.mainStage,f=0,h=k.length;h>f;f++)a=k[f],d(b('\n			<p>\n				<span class="band">')),d(a.band),d(b("</span>\n				<span> (")),d(a.startTime),d(b(')</span>\n				<a href="#" class="passport-add">Add to passport</a>\n			</p>\n		'));for(d(b("\n		<h2>Secondary Stage</h2>\n		")),l=c.secondaryStage,g=0,i=l.length;i>g;g++)a=l[g],d(b('\n			<p>\n				<span class="band">')),d(a.band),d(b("</span>\n				<span> (")),d(a.startTime),d(b(') %></span>\n				<a href="#" class="passport-add">Add to passport</a>\n			</p>\n		'));d(b("\n	"))}d(b("\n	<br/>\n</div>"))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},window.JST||(window.JST={}),window.JST["app/scripts/templates/login"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){d(b('<div class="navbar-header">\n\n	')),this.id?(d(b('\n		<button type="button" id="menu" class="navbar-toggle avatar" data-toggle="collapse" data-target="#navbar-collapse-1">\n    	')),d(this.name),d(b('\n    	<img src="https://graph.facebook.com/')),d(this.id),d(b('/picture?width=32&height=32" width="28" height="28"/>\n    	<span class="caret"></span>\n		</button>\n	'))):d(b('\n		<button type="button" class="navbar-toggle login" data-toggle="collapse" data-target="#navbar-collapse-1">Login</button>\n	')),d(b('\n\n	<a class="navbar-brand brand-logo" href="#">Music Passport</a>\n</div>\n\n<div class="collapse navbar-collapse" id="navbar-collapse-1">\n	')),this.id&&d(b('\n		<ul id="login" class="nav navbar-nav">\n  			<li><a href="#" class="passport">My Passport</a></li>\n  			<li><a href="#" class="lineup">Lineup</a></li>\n		</ul>\n	')),d(b('\n\n	<ul id="login" class="nav navbar-nav navbar-right">\n		')),this.id?(d(b('\n  		<li class="avatar">\n    		')),d(this.name),d(b('\n    		<img src="https://graph.facebook.com/')),d(this.id),d(b('/picture?width=32&height=32" width="28" height="28"/>\n  		</li>\n  		<li><a href="#" class="logout">Logout</a></li>\n		'))):d(b('\n  		<li><a href="#" class="login">Login</a></li>\n		')),d(b("\n	</ul>\n</div>"))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},window.JST||(window.JST={}),window.JST["app/scripts/templates/passport"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){var a,c,e,f;for(d(b('<div id="passport" class="panel">\n	<h2>My Passport</h2>\n	')),f=this.concerts,c=0,e=f.length;e>c;c++)a=f[c],d(b("\n		<p>\n			")),d(""+a.band+" ("+a.startTime+" - "+a.finishTime+")"),d(b('\n			<div class="stamp ')),d(a.seen?"seen":"unseen"),d(b('">')),d(a.seen),d(b("</div>\n		</p>\n	"));d(b("\n</div>\n\n"))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},window.JST||(window.JST={}),window.JST["app/scripts/templates/welcome"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){d(b('<div id="welcome" class="panel">\n	<div class="festival-logo">\n	</div>\n		<h1 class="navbar-brand">Music Passport</h1>\n	<h2>Your bracelet is your digital music passport</h2>\n	<p>Check in at concerts, collect rewards and share it with friends</p>\n	<p>\n		<a href="#" class="btn btn-primary btn-large btn-login">Login with Facebook</a>\n	</p>\n</div>'))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Routers.AppRouter=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.routes={"":"welcome",lineup:"lineup",":thngid/home":"home",":thngid":"start"},d.prototype.initialize=function(){return this.carouselOptions={items:2,itemsTablet:[768,1],itemsMobile:[479,1],itemsScaleUp:!0,pagination:!1},this.welcomeView=new musicPassport.Views.Welcome({model:musicPassport.user}),$("#panel-carousel").owlCarousel(this.carouselOptions),this.owl=$(".owl-carousel").data("owlCarousel")},d.prototype.welcome=function(){var a,b;for(a=b=0;1>=b;a=++b)this.owl.removeItem();return this.owl.addItem(this.welcomeView.el)},d.prototype.home=function(){var a,b,c;if(musicPassport.user.isAuthenticated()){for(a=c=0;1>=c;a=++c)this.owl.removeItem();return b=new musicPassport.Views.Home({model:musicPassport.passport,owl:this.owl})}return this.navigate("",{trigger:!0})},d.prototype.start=function(a){return musicPassport.passport.set("thngid",a),musicPassport.user.isAuthenticated()?this.navigate(""+a+"/home",{trigger:!0}):this.welcome()},d.prototype.lineup=function(){var a,b,c;for(a=c=0;1>=c;a=++c)this.owl.removeItem();return b=new musicPassport.Views.Lineup({model:musicPassport.lineup}),this.owl.addItem(b.el)},d}(Backbone.Router)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Models.Profile=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.defaults={id:"",name:"",first_name:"",last_name:"",gender:"",username:"",link:"",locale:"",timezone:"",authenticated:!1},d.prototype.isAuthenticated=function(){return this.get("authenticated")},d}(Backbone.Model)}.call(this),function(){"use strict";var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};musicPassport.Models.Passport=function(a){function c(){var a=this;this.wishlist=new musicPassport.Collections.Wishlist,this.on("change",this.getWishList,this),this.wishlist.on("reset",function(){return a.trigger("update")}),Backbone.Model.apply(this,arguments)}return b(c,a),c.prototype.defaults={thngid:"!",exists:!1,own:!1,"new":!0},c.prototype.exists=function(){return this.get("exists")},c.prototype.isFromOwner=function(){return this.get("own")},c.prototype.isNew=function(){return this.get("new")},c.prototype.isValid=function(){return this.get("exists")&&this.get("own")&&!this.get("new")},c.prototype.getWishList=function(){var a=this;return this.isValid()?Evt.readProperty({thng:this.get("thngid")},function(b){return a.wishlist.reset(b)}):void 0},c.prototype.getNextConcert=function(){return this.wishlist.first()},c}(Backbone.Model)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Views.App=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.template=JST["app/scripts/templates/app"],d.prototype.el="body",d.prototype.events={"click .btn-login":"login"},d.prototype.initialize=function(){return this.on("login",this.login),this.on("logout",this.logout),this.getCurrentPosition(),this.render()},d.prototype.render=function(){return this.$el.append(this.template(this.model.toJSON())),new musicPassport.Views.Login({model:this.model,el:"#navigation"}),this},d.prototype.login=function(a){var b;return a.preventDefault(),b={email:"joaoguerravieira@gmail.com",password:"Click12345"},Evt.request({url:"/auth/evrythng",data:b,method:"post"},function(a){var b;return a.evrythngApiKey?(musicPassport.user.set({id:"348972",name:"João Vieira"}),musicPassport.user.set("authenticated",!0),Evt.options.evrythngAppApiKey=Evt.options.evrythngApiKey,Evt.options.evrythngApiKey=a.evrythngApiKey,b=musicPassport.passport.get("thngid"),musicPassport.router.navigate(""+b+"/home",{trigger:!0})):void 0})},d.prototype.logout=function(){return FB.logout()},d.prototype.getCurrentPosition=function(){var a=this;return this.position="Current position unavailable",navigator.geolocation?navigator.geolocation.getCurrentPosition(function(b){return a.position=b.coords}):void 0},d}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Views.Login=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.template=JST["app/scripts/templates/login"],d.prototype.events={"click .login":"login","click .logout":"logout","click .brand-logo, .passport":"home","click .lineup":"viewLineup","click .navbar-collapse li > a":"toggleNavigation"},d.prototype.initialize=function(){return this.model.on("change",this.render,this),this.render()},d.prototype.render=function(){return this.$el.html(this.template(this.model.toJSON())),this},d.prototype.login=function(a){return a.stopPropagation(),musicPassport.appView.trigger("login",a)},d.prototype.logout=function(a){return a.preventDefault(),musicPassport.appView.trigger("logout")},d.prototype.home=function(a){var b;return a.preventDefault(),/home/.test(Backbone.history.fragment)?(musicPassport.router.owl.goTo(0),$("body").animate({scrollTop:0})):(b=musicPassport.passport.get("thngid"),musicPassport.router.navigate(""+b+"/home",{trigger:!0}))},d.prototype.viewLineup=function(a){return a.preventDefault(),musicPassport.router.navigate("lineup",{trigger:!0})},d.prototype.toggleNavigation=function(){return this.$(".navbar-toggle:visible").click()},d}(Backbone.View)}.call(this),function(){"use strict";var a,b=function(a,b){return function(){return a.apply(b,arguments)}},c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};musicPassport.Views.Welcome=function(c){function e(){return this.showHideButtons=b(this.showHideButtons,this),a=e.__super__.constructor.apply(this,arguments)}return d(e,c),e.prototype.tagName="div",e.prototype.className="panel-wrapper",e.prototype.template=JST["app/scripts/templates/welcome"],e.prototype.initialize=function(){return this.model.on("change",this.showHideButtons,this),this.render()},e.prototype.render=function(){return this.$el.html(this.template()),this.showHideButtons(),this},e.prototype.showHideButtons=function(){return this.model.get("id")?this.$(".btn-login").addClass("hidden"):this.$(".btn-login").removeClass("hidden")},e}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Views.Home=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.tagName="div",d.prototype.className="panel-wrapper",d.prototype.template=JST["app/scripts/templates/home"],d.prototype.events={"click .btn-claim":"activate","click .checkin":"checkin","click .passport-full":"viewFullPassport"},d.prototype.initialize=function(a){var b,c=this;return this.owl=a.owl,b=a.model.get("thngid"),this.model.on("update",this.refresh,this),Evt.readThng({thng:b},function(a){return a.tags.indexOf(!0)?Evt.readAction({type:"_activation"},function(a){return a.length?c.model.set({exists:!0,own:a[0].customFields.owner===musicPassport.user.get("id"),"new":a[0].thng!==b}):c.model.set("exists",!0),c.render()}):void 0},function(a){return 400===a.status?(c.model.set("exists",!1),c.render()):void 0}),this.getStageInfo()},d.prototype.render=function(){return this.$el.html(this.template({passport:this.model.toJSON(),closerStage:this.closerStage,otherStages:this.otherStages})),this.owl.addItem(this.el),this.model.isValid()&&this.owl.addItem(new musicPassport.Views.Passport({model:this.model}).el),this},d.prototype.refresh=function(){var a,b;return(a=this.model.getNextConcert())?(b=musicPassport.lineup.getConcert(a.get("key")),this.$(".next-concert #band").text(""+b.band+" ("+b.startTime+")"),this.$(".next-concert").show()):this.$(".next-concert").hide()},d.prototype.activate=function(a){var b,c=this;return a.preventDefault(),b={url:"/actions/_activation",data:{timestamp:(new Date).getTime(),type:"_activation",customFields:{owner:musicPassport.user.get("id")},thng:this.model.get("thngid")},method:"post",evrythngApiKey:Evt.options.evrythngApiKey},Evt.request(b,function(){return c.model.set({own:!0,"new":!1}),c.render()})},d.prototype.checkin=function(){return Evt.checkin({thng:this.model.get("thngid")},function(){})},d.prototype.viewFullPassport=function(a){return a.preventDefault(),this.owl.next(),$("body").animate({scrollTop:0})},d.prototype.getStageInfo=function(){var a,b,c,d=this;return a=musicPassport.appView.position,"string"!=typeof a?(c={types:"thng",tags:"stage",lat:a.latitude,lon:a.longitude,maxDist:.1},b={types:"thng",tags:"stage"},Evt.request({url:"/search",params:c},function(a){return d.closerStage=a.thngs[0],d.closerStage.checkinCount=0},function(){}),Evt.request({url:"/search",params:b},function(a){var b,c,e,f,g;for(d.otherStages=[],f=a.thngs,g=[],c=0,e=f.length;e>c;c++)b=f[c],b.checkinCount=0,g.push(d.otherStages.push(b));return g},function(){})):void 0},d}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Views.Passport=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.tagName="div",d.prototype.className="panel-wrapper",d.prototype.template=JST["app/scripts/templates/passport"],d.prototype.initialize=function(){return this.model.on("update",this.render,this),this.render()},d.prototype.render=function(){var a,b,c,d,e,f;for(c=[],f=this.model.wishlist.models,d=0,e=f.length;e>d;d++)a=f[d],b={seen:a.seen()},b=_.extend(b,musicPassport.lineup.getConcert(a.get("key"))),c.push(b);return this.$el.html(this.template({concerts:c})),this},d}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Views.Lineup=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.tagName="div",d.prototype.className="panel-wrapper",d.prototype.template=JST["app/scripts/templates/lineup"],d.prototype.events={"click .passport-add":"addToPassport"},d.prototype.initialize=function(){return this.render()},d.prototype.render=function(){return this.$el.html(this.template({lineup:this.model,timeHelper:this.timeHelper})),this},d.prototype.timeHelper=function(a){var b,c;return b=new Date,c=a.match(/(\d+)(?::(\d\d))?/i),b.setHours(parseInt(c[1],10)),b.setMinutes(parseInt(c[2],10)||0),b},d.prototype.addToPassport=function(a){var b;return a.preventDefault(),b={thng:musicPassport.passport.get("thngid"),data:[{key:$(a.currentTarget).prevAll(".band").text(),value:"-1"}]},Evt.updateProperty(b,function(){return musicPassport.passport.getWishList()})},d}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Models.Lineup=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.defaults={1:{date:"2014-01-15",mainStage:[{band:"Green Day",startTime:"21:55",finishTime:"01:00","star-level":5},{band:"Two Door Cinema Club",startTime:"20:25",finishTime:"21:55","star-level":4},{band:"Biffy Clyro",startTime:"19:10",finishTime:"20:25","star-level":4},{band:"Stereophonics",startTime:"18:00",finishTime:"19:10","star-level":3}],secondaryStage:[{band:"Edward Sharpe & The Magnetic Zeros",startTime:"22:30",finishTime:"00:00","star-level":4},{band:"Dead Combo",startTime:"21:00",finishTime:"22:30","star-level":3},{band:"Japandroids",startTime:"19:50",finishTime:"21:00","star-level":3}]},2:{date:"2014-01-16",mainStage:[{band:"Kings of Leon",startTime:"23:00",finishTime:"01:00","star-level":5},{band:"Phoenix",startTime:"21:20",finishTime:"23:00","star-level":5},{band:"Tame Impala",startTime:"20:10",finishTime:"21:20","star-level":4},{band:"Jake Bugg",startTime:"19:00",finishTime:"20:10","star-level":3}],secondaryStage:[{band:"Crystal Castles",startTime:"00:05",finishTime:"01:30","star-level":3},{band:"Django Django",startTime:"22:40",finishTime:"00:05","star-level":3},{band:"Of Monsters and Men",startTime:"21:25",finishTime:"22:40","star-level":2}]}},d.prototype.getConcert=function(a){var b,c,d,e,f,g,h;g=this.attributes;for(d in g)for(c=g[d],h=c.mainStage.concat(c.secondaryStage),e=0,f=h.length;f>e;e++)if(b=h[e],b.band.toLowerCase()===a)return b},d}(Backbone.Model)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Models.Concert=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.seen=function(){return"1"===this.get("value")},d.prototype.check=function(){return this.set("value","1")},d}(Backbone.Model)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Collections.Wishlist=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.model=musicPassport.Models.Concert,d}(Backbone.Collection)}.call(this);