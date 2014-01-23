(function(){window.musicPassport={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";return this.user=new musicPassport.Models.Profile,this.passport=new musicPassport.Models.Passport,this.lineup=new musicPassport.Models.Lineup,this.appView=new musicPassport.Views.App({model:this.user}),this.router=new musicPassport.Routers.AppRouter,Backbone.history.start()}},$(function(){"use strict";return musicPassport.init()}),window.Evt=new Evrythng({evrythngApiKey:"EyvifRsWvxEh4prtcQ6LQtSHAs9AF8ce2iuxomMFbCMkaXUvpxnvOUOAH6fDePuug66HRIGGiFcDQzF7",evrythngAppId:"52d0185a55872c9a6d7b1616",facebookAppId:"1449050295309307",jQuery:jQuery}),$(document).on("fbStatusChange",function(a,b){return"connected"===b.status?FB.api("/me",function(a){return b={access:{token:b.authResponse.accessToken}},Evt.request({url:"/auth/facebook",data:b,method:"post"},function(b){var c;return b.evrythngApiKey?(musicPassport.user.set(a),musicPassport.user.set("authenticated",!0),Evt.options.evrythngAppApiKey=Evt.options.evrythngApiKey,Evt.options.evrythngApiKey=b.evrythngApiKey,c=musicPassport.passport.get("thngid"),musicPassport.router.navigate(""+c+"/home",{trigger:!0})):void 0})}):Evt.request({url:"/auth/all/logout",method:"post"},function(){return Evt.options.evrythngApiKey=Evt.options.evrythngAppApiKey,musicPassport.user.set(musicPassport.user.defaults),musicPassport.router.navigate(""+musicPassport.passport.get("thngid"),{trigger:!0})})})}).call(this),window.JST||(window.JST={}),window.JST["app/scripts/templates/app"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){d(b('<!-- navigation -->\n<nav id="navigation" class="navbar navbar-default navbar-fixed-top" role="navigation">\n	<!-- navigation dependent of login -->\n</nav>\n\n<div id="notification" class="alert alert-info alert-dismissable">\n	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n	<span></span>\n</div>\n\n<!-- content -->\n<div class="jumbotron panel-holder">\n  <div id="panel-carousel" class="owl-carousel">\n\n  </div>\n</div>'))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},window.JST||(window.JST={}),window.JST["app/scripts/templates/home"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){var a,c,e,f,g,h,i,j;if(this.passport.verified){if(d(b('\n	<div class="content-wrapper">\n		')),this.passport.exists)if(this.passport.own){if(d(b('\n			<div id="watching" class="panel">\n				<h2 class="panel-desc">You\'re currently watching:</h2>\n				')),this.closerStage&&(null!=(g=this.closerStage.properties)?g.playing:void 0)?(d(b('\n					<h2 class="band">')),d(this.closerStage.properties.playing),d(b('</h2>\n					<div class="description">\n						<span class="bold">')),d(this.timeMissing(this.closerStage.properties.finishTime,Date.now())),d(b('</span> missing to end\n					</div>\n					<div class="description">\n						<span class="checkin-count bold">')),d(this.closerStage.checkinCount),d(b('</span> people checked-in at this concert\n					</div>\n					<a href="#" class="btn btn-primary btn-large wide checkin">Check-in & Share</a>\n				'))):d(b("\n					<p>There are no concerts near you now</p>\n				")),d(b('\n			</div>\n			<div id="playing" class="panel">\n				<h2 class="panel-desc">Also playing:</h2>\n				')),this.otherStages.length){for(d(b("\n					")),h=this.otherStages,a=e=0,f=h.length;f>e;a=++e)c=h[a],d(b("\n						")),(null!=(i=c.properties)?i.playing:void 0)&&(d(b('\n							<div class="band-name bold">')),d(c.properties.playing),d(b('</div>\n							<div class="concert clearfix ')),a===this.otherStages.length-1&&d("last"),d(b('">\n								<div class="left">\n									<span>')),d(c.name),d(b('</span>\n								</div>\n								<div class="right">\n									<span><i class="fa fa-clock-o"></i>')),d(this.timeMissing(c.properties.finishTime,Date.now())),d(b(' </span>\n									<span><i class="fa fa-group"></i>')),d(c.checkinCount),d(b("</span>\n								</div>\n							</div>\n						"))),d(b("\n					"));d(b("\n				"))}else d(b("\n					")),this.closerStage&&(null!=(j=this.closerStage.properties)?j.playing:void 0)?d(b("\n						<p>There are no other bands playing now</p>\n					")):d(b("\n						<p>There are no bands playing now</p>\n					")),d(b("\n				"));d(b('\n			</div>\n			<div id="next-concert" class="panel">\n				<h2 class="panel-desc">Your next show:</h2>\n				<h2 class="band"></h2>\n				<p class="empty-band">None</p>\n				<a href="#" class="btn btn-primary btn-large wide passport-details">View my concerts</a>\n			</div>\n		'))}else d(b("\n			")),this.passport["new"]?d(b('\n				<div class="panel">\n					<h2>Congratulations! You\'ve got a new fancy accessory</h2>\n					<p>This bracelet is not registered. Claim it and start using your passport</p>\n					<p>\n						<a href="#" class="btn btn-primary btn-large btn-claim wide">Claim my bracelet</a>\n					</p>\n				</div>\n			')):d(b('\n				<div class="panel">\n					<h2>Getting new friends?</h2>\n					<p>This isn\'t your bracelet. Please scan yours to use your passport</p>\n				</div>\n			')),d(b("\n		"));else d(b('\n			<div class="panel">\n				<h2>Oops! This bracelet doesn\'t exist</h2>\n				<p>Please scan a valid bracelet and claim it to start using your passport</p>\n			</div>\n		'));d(b('\n		<div id="lineup" class="panel">\n			<a href="#" class="btn btn-primary btn-large wide lineup">View Lineup</a>\n		</div>\n	</div>\n'))}else d(b('\n	<div class="loading">\n		<div class="content">\n			<p>Loading MIDIs</p>\n			<div id="circleG">\n				<div id="circleG_1" class="circleG">\n				</div>\n				<div id="circleG_2" class="circleG">\n				</div>\n				<div id="circleG_3" class="circleG">\n				</div>\n			</div>\n		</div>\n	</div>\n'))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},window.JST||(window.JST={}),window.JST["app/scripts/templates/lineup"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){var a,c,e,f,g,h,i,j,k,l;d(b('<div class="content-wrapper">\n	<h2 class="panel-name" id="passport-title">Lineup</h2>\n	<div id="welcome" class="panel">\n		')),j=this.lineup.attributes;for(e in j){for(c=j[e],d(b("\n			<h1>Day ")),d(e),d(b("</h1>\n			<h2>Main Stage</h2>\n			")),k=c.mainStage,f=0,h=k.length;h>f;f++)a=k[f],d(b('\n				<p>\n					<span class="band">')),d(a.band),d(b("</span>\n					<span> ")),d("("+this.getTime(a.startTime)+" - "+this.getTime(a.finishTime)+")"),d(b("</span>\n\n					")),this.passport&&!_.find(this.passport,function(b){return b.band===a.band})&&d(b('\n						<a href="#" class="passport-add"><i class="fa fa-bookmark"></i></span></a>\n					')),d(b("\n				</p>\n			"));for(d(b("\n			<h2>Second Stage</h2>\n			")),l=c.secondStage,g=0,i=l.length;i>g;g++)a=l[g],d(b('\n				<p>\n					<span class="band">')),d(a.band),d(b("</span>\n					<span> ")),d("("+this.getTime(a.startTime)+" - "+this.getTime(a.finishTime)+")"),d(b("</span>\n\n					")),this.passport&&!_.find(this.passport,function(b){return b.band===a.band})&&d(b('\n						<a href="#" class="passport-add"><i class="fa fa-bookmark"></i></a>\n					')),d(b("\n				</p>\n			"));d(b("\n		"))}d(b("\n	</div>\n</div>"))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},window.JST||(window.JST={}),window.JST["app/scripts/templates/login"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){d(b('<div class="navbar-header">\n\n	')),this.id?(d(b('\n		<button type="button" id="menu" class="navbar-toggle avatar" data-toggle="collapse" data-target="#navbar-collapse-1">\n    	<span class="name">')),d(this.name),d(b('</span>\n    	<img src="https://graph.facebook.com/')),d(this.id),d(b('/picture?width=32&height=32" width="28" height="28"/>\n    	<span class="caret"></span>\n		</button>\n	'))):d(b('\n		<button type="button" class="navbar-toggle login" data-toggle="collapse" data-target="#navbar-collapse-1">Login</button>\n	')),d(b('\n\n	<a class="navbar-brand brand-logo" href="#">Music Passport</a>\n</div>\n\n<div class="collapse navbar-collapse" id="navbar-collapse-1">\n	')),this.id&&d(b('\n		<ul id="login" class="nav navbar-nav">\n  			<li><a href="#" class="passport">My Passport</a></li>\n  			<li><a href="#" class="lineup">Lineup</a></li>\n		</ul>\n	')),d(b('\n\n	<ul id="login" class="nav navbar-nav navbar-right">\n		')),this.id?(d(b('\n  		<li class="avatar">\n    		')),d(this.name),d(b('\n    		<img src="https://graph.facebook.com/')),d(this.id),d(b('/picture?width=32&height=32" width="28" height="28"/>\n  		</li>\n  		<li><a href="#" class="logout">Logout</a></li>\n		'))):d(b('\n  		<li><a href="#" class="login">Login</a></li>\n		')),d(b("\n	</ul>\n</div>"))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},window.JST||(window.JST={}),window.JST["app/scripts/templates/passport"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){var a,c,e,f,g;if(d(b('<div class="content-wrapper">\n	<h2 class="panel-name" id="passport-title">My Passport</h2>\n	<div class="panel" id="passport" >\n		')),this.concerts){if(d(b("\n			")),this.concerts.length){for(d(b("\n				")),g=this.concerts,c=e=0,f=g.length;f>e;c=++e)a=g[c],d(b('\n					<div class="passport-item clearfix ')),c===this.concerts.length-1&&d("last"),d(b('">\n						<div class="left">\n							<div class="band-name bold">')),d(a.band),d(b('</div>\n							<div class="concert-missing">')),d(this.timeMissing(Date.now(),a.startTime)),d(b('</div>\n						</div>\n						<div class="right">\n							<div class="concert-time bold">')),d(this.getTime(a.startTime)),d(b('</div>\n							<div class="concert-day">Day ')),d(a.day),d(b('</div>\n						</div>\n						<div class="concert-status ')),d(a.seen?"seen":"unseen"),d(b('"/>\n					</div>\n				'));d(b("\n			"))}else d(b('\n				<!-- wish list empty -->\n				<p class="empty">You don\'t have any concert in your passport. Add them to your want-to-see list from the <a href="#lineup">Lineup</a></p>\n			'));d(b("\n		"))}else d(b('\n			<!-- loading -->\n			<p class="loading">Loading</p>\n		'));d(b("\n	</div>\n</div>\n"))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},window.JST||(window.JST={}),window.JST["app/scripts/templates/welcome"]=function(a){var b=function(a){"undefined"==typeof a&&null==a&&(a="");var b=new String(a);return b.ecoSafe=!0,b};return function(){var a=[],c=this,d=function(b){"undefined"!=typeof b&&null!=b&&a.push(b.ecoSafe?b:c.escape(b))};return function(){d(b('<div class="content-wrapper">\n	<div id="welcome" class="panel">\n		<div class="festival-logo">\n		</div>\n			<h1 class="navbar-brand">Music Passport</h1>\n		<h2>Your bracelet is your digital music passport</h2>\n		<p>Check in at concerts, collect rewards and share it with friends</p>\n		<a href="#" class="btn btn-primary btn-large btn-login wide">Login with Facebook</a>\n	</div>\n</div>'))}.call(this),a.join("")}.call(function(){var c,d={escape:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},safe:b};for(c in a)d[c]=a[c];return d}())},function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Routers.AppRouter=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.routes={"":"welcome",lineup:"lineup",":thngid/home":"home",":thngid":"start"},d.prototype.initialize=function(){return this.carouselOptions={items:2,itemsTablet:[768,1],itemsMobile:[479,1],itemsScaleUp:!0,pagination:!1},this.welcomeView=new musicPassport.Views.Welcome({model:musicPassport.user}),$("#panel-carousel").owlCarousel(this.carouselOptions),this.owl=$(".owl-carousel").data("owlCarousel")},d.prototype.welcome=function(){var a,b;for(a=b=0;1>=b;a=++b)this.owl.removeItem();return this.owl.addItem(this.welcomeView.el)},d.prototype.home=function(a){var b;return musicPassport.passport.set("thngid",a),musicPassport.user.isAuthenticated()?b=new musicPassport.Views.Home({model:musicPassport.passport,owl:this.owl}):this.navigate(""+a,{trigger:!0})},d.prototype.start=function(a){return musicPassport.passport.set("thngid",a),musicPassport.user.isAuthenticated()?this.navigate(""+a+"/home",{trigger:!0}):this.welcome()},d.prototype.lineup=function(){var a,b,c;if(musicPassport.user.isAuthenticated()){for(a=c=0;1>=c;a=++c)this.owl.removeItem();return b=new musicPassport.Views.Lineup({model:musicPassport.lineup}),this.owl.addItem(b.el)}return this.navigate("",{trigger:!0})},d}(Backbone.Router)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Models.Profile=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.defaults={id:"",name:"",first_name:"",last_name:"",gender:"",username:"",link:"",locale:"",timezone:"",authenticated:!1},d.prototype.isAuthenticated=function(){return this.get("authenticated")},d}(Backbone.Model)}.call(this),function(){"use strict";var a={}.hasOwnProperty,b=function(b,c){function d(){this.constructor=b}for(var e in c)a.call(c,e)&&(b[e]=c[e]);return d.prototype=c.prototype,b.prototype=new d,b.__super__=c.prototype,b};musicPassport.Models.Passport=function(a){function c(){var a=this;this.wishlist=new musicPassport.Collections.Wishlist,this.on("change",this.getWishList,this),this.wishlist.on("reset change",function(){return a.trigger("update")}),Backbone.Model.apply(this,arguments)}return b(c,a),c.prototype.defaults={thngid:"!",exists:!1,own:!1,"new":!0},c.prototype.exists=function(){return this.get("exists")},c.prototype.isFromOwner=function(){return this.get("own")},c.prototype.isNew=function(){return this.get("new")},c.prototype.isValid=function(){return this.get("exists")&&this.get("own")&&!this.get("new")},c.prototype.getWishList=function(){var a=this;return this.isValid()?Evt.readProperty({thng:this.get("thngid")},function(b){return a.wishlist.reset(b)}):void 0},c.prototype.getAllConcerts=function(){var a,b,c,d,e,f;for(c=[],f=this.wishlist.models,d=0,e=f.length;e>d;d++)a=f[d],b={seen:a.seen()},b=_.extend(b,musicPassport.lineup.getConcert(a.get("key"))),c.push(b);return _.sortBy(c,function(a){return a.startTime})},c.prototype.getNextConcert=function(){var a;return a=Date.now(),_.find(this.getAllConcerts(),function(b){return b.finishTime>a&&!b.seen})},c.prototype.checkinConcert=function(a,b){var c,d=this;return c={thng:this.get("thngid"),data:[{key:b,value:"1",timestamp:a}]},Evt.updateProperty(c,function(a){var b;return b=d.wishlist.findWhere({key:a[0].key}),b?b.set("value",a[0].value):d.wishlist.add(new musicPassport.Models.Concert(a[0]))})},c}(Backbone.Model)}.call(this),function(){"use strict";var a,b=function(a,b){return function(){return a.apply(b,arguments)}},c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};musicPassport.Views.App=function(c){function e(){return this.notify=b(this.notify,this),a=e.__super__.constructor.apply(this,arguments)}return d(e,c),e.prototype.template=JST["app/scripts/templates/app"],e.prototype.el="body",e.prototype.events={"click .btn-login":"login","click button.close":"dismiss"},e.prototype.initialize=function(){return this.on("login",this.login),this.on("logout",this.logout),this.on("notify",this.notify),this.render(),this},e.prototype.render=function(){return this.$el.append(this.template(this.model.toJSON())),new musicPassport.Views.Login({model:this.model,el:"#navigation"}),this},e.prototype.login=function(a){var b;return a.preventDefault(),b={email:"joaoguerravieira@gmail.com",password:"Click12345"},Evt.request({url:"/auth/evrythng",data:b,method:"post"},function(a){var b;return a.evrythngApiKey?(musicPassport.user.set({id:"348972",name:"João Vieira"}),musicPassport.user.set("authenticated",!0),Evt.options.evrythngAppApiKey=Evt.options.evrythngApiKey,Evt.options.evrythngApiKey=a.evrythngApiKey,b=musicPassport.passport.get("thngid"),musicPassport.router.navigate(""+b+"/home",{trigger:!0})):void 0})},e.prototype.logout=function(){return FB.logout()},e.prototype.notify=function(a){return this.$("#notification span").html(a).parent().slideDown()},e.prototype.dismiss=function(a){return a.stopPropagation(),$(a.currentTarget).parent().slideUp()},e}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Views.Login=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.template=JST["app/scripts/templates/login"],d.prototype.events={"click .login":"login","click .logout":"logout","click .brand-logo, .passport":"home","click .lineup":"viewLineup","click .navbar-collapse li > a":"toggleNavigation"},d.prototype.initialize=function(){return this.model.on("change",this.render,this),this.render()},d.prototype.render=function(){return this.$el.html(this.template(this.model.toJSON())),this},d.prototype.login=function(a){return a.stopPropagation(),musicPassport.appView.trigger("login",a)},d.prototype.logout=function(a){return a.preventDefault(),musicPassport.appView.trigger("logout")},d.prototype.home=function(a){var b;return a.preventDefault(),/home/.test(Backbone.history.fragment)?(musicPassport.router.owl.goTo(0),$("body").animate({scrollTop:0})):(b=musicPassport.passport.get("thngid"),musicPassport.router.navigate(""+b+"/home",{trigger:!0}))},d.prototype.viewLineup=function(a){return a.preventDefault(),musicPassport.router.navigate("lineup",{trigger:!0})},d.prototype.toggleNavigation=function(){return this.$(".navbar-toggle:visible").click()},d}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Views.Welcome=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.tagName="div",d.prototype.className="panel-wrapper",d.prototype.template=JST["app/scripts/templates/welcome"],d.prototype.initialize=function(){return this.render()},d.prototype.render=function(){return this.$el.html(this.template()),this.model.get("id")?this.$(".btn-login").addClass("hidden"):this.$(".btn-login").removeClass("hidden"),this},d}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Views.Home=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.tagName="div",d.prototype.className="panel-wrapper",d.prototype.template=JST["app/scripts/templates/home"],d.prototype.events={"click .btn-claim":"activate","click .checkin":"checkin","click .passport-details":"viewPassportDetails","click .btn.lineup":"viewLineup"},d.prototype.initialize=function(a){var b=this;return this.owl=a.owl,this.model.on("update",this.updateNextShow,this),this.render(),this.getCurrentPosition().then(function(a){return b.getStageInfo(a)}).then(function(){return b.readPassport(b.model.get("thngid"))})},d.prototype.render=function(){var a,b;for(a=b=0;1>=b;a=++b)this.owl.removeItem();return this.$el.html(this.template({passport:this.model.toJSON(),closerStage:this.model.closerStage,otherStages:_.filter(this.model.otherStages,function(a){var b;return!!(null!=(b=a.properties)?b.playing:void 0)}),timeMissing:this.timeMissing})),this.owl.addItem(this.el),this.model.isValid()&&(this.updateNextShow(),this.owl.addItem(new musicPassport.Views.Passport({model:this.model}).el)),this.delegateEvents(),this},d.prototype.updateCurrentShow=function(){return this.$("#watching .checkin-count").html(++this.model.closerStage.checkinCount)},d.prototype.updateNextShow=function(){var a;return(a=this.model.getNextConcert())?(this.$("#next-concert .empty-band").hide(),this.$("#next-concert .band").text(a.band).show()):(this.$("#next-concert .band").hide(),this.$("#next-concert .empty-band").show())},d.prototype.timeMissing=function(a,b){var c;return c=(a-b)/6e4,c>0?""+c+"m":"0m"},d.prototype.activate=function(a){var b,c,d=this;return a.preventDefault(),c={url:"/actions/_activation",data:{type:"_activation",thng:this.model.get("thngid")},method:"post"},Evt.request(c,function(){return d.model.set({own:!0,"new":!1}),d.render()}),b={data:{customFields:{owner:musicPassport.user.get("id")}},thng:this.model.get("thngid")},Evt.updateThng(b,function(){return musicPassport.appView.trigger("notify","You activated your bracelet with success.")})},d.prototype.checkin=function(a){var b,c,d,e=this;return a.preventDefault(),c=(new Date).getTime(),b=this.model.closerStage.properties.playing,d={url:"/actions/checkins",data:{type:"checkins",thng:this.model.get("thngid"),timestamp:c,customFields:{concert:b}},method:"post"},Evt.request(d,function(a){return e.updateCurrentShow(),e.model.checkinConcert(c,a.customFields.concert),musicPassport.appView.trigger("notify","You checked in @ <strong>"+b+"</strong>. Rock on!")}),this.shareFacebook(b)},d.prototype.viewPassportDetails=function(a){return a.preventDefault(),this.owl.next(),$("body").animate({scrollTop:0})},d.prototype.viewLineup=function(a){return a.preventDefault(),musicPassport.router.navigate("lineup",{trigger:!0})},d.prototype.getStageInfo=function(a){var b,c=this;return b=new RSVP.Promise(function(b){var d,e;return typeof a!==String&&(e={types:"thng",tags:"stage",lat:a.latitude,lon:a.longitude,maxDist:.2},Evt.request({url:"/search",params:e},function(a){return a.thngsResultCount?(c.model.closerStage=a.thngs[0],c.model.closerStage.checkinCount=0,c.getCheckinsConcert(c.model.closerStage)):void 0})),d={types:"thng",tags:"stage"},Evt.request({url:"/search",params:d},function(a){var d,e;return d=a.thngs,c.model.closerStage&&(d=_.filter(a.thngs,function(a){return a.id!==c.model.closerStage.id})),c.model.otherStages=function(){var a,b,c;for(c=[],a=0,b=d.length;b>a;a++)e=d[a],c.push(this.getCheckinsConcert(e));return c}.call(c),b()})})},d.prototype.getCheckinsConcert=function(a){return a.checkinCount=0,Evt.request({url:"/actions/checkins"},function(b){var c;return c=_.filter(b,function(b){var c;return(null!=(c=b.customFields)?c.concert:void 0)===a.properties.playing}),a.checkinCount=c.length}),a},d.prototype.shareFacebook=function(a){return FB.ui({method:"feed",name:""+a+" @ Sziget Music Festival",picture:"http://joaovieira.github.io/music-passport/images/77238394.fb.jpg",caption:"Checked in with Music Passport",description:"The Sziget Music Passport keeps your concert checklist at hand,         along with live info from every stage and the full lineup to the rescue"},function(a){return null==(null!=a?a.id:void 0)?musicPassport.appView.trigger("notify","<strong>Facebook:</strong> Post not published."):void 0})},d.prototype.getCurrentPosition=function(){var a;return a=new RSVP.Promise(function(a){var b;return b="Current position unavailable",navigator.geolocation?navigator.geolocation.getCurrentPosition(function(c){return b=c.coords,a(b)},function(){return a(b)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}):a(b)})},d.prototype.readPassport=function(a){var b,c=this;return b={},Evt.readThng({thng:a},function(a){return Evt.readAction({type:"_activation"},function(d){var e,f;return-1!==a.tags.indexOf("bracelet")&&(b.exists=!0,(null!=(null!=(e=a.customFields)?e.owner:void 0)||d.length)&&(b["new"]=!1,(null!=(f=a.customFields)?f.owner:void 0)===musicPassport.user.get("id")&&(b.own=!0))),b.verified=!0,c.model.set(b),c.render()})},function(a){return 400===a.status?(c.model.set("verified",!0),c.render()):void 0})},d}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Views.Passport=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.tagName="div",d.prototype.className="panel-wrapper",d.prototype.template=JST["app/scripts/templates/passport"],d.prototype.initialize=function(){return this.model.on("update",this.render,this),this.render()},d.prototype.render=function(){return this.$el.html(this.template({concerts:this.model.getAllConcerts(),getTime:musicPassport.lineup.getTime,getDay:musicPassport.lineup.getDay,timeMissing:this.timeMissing})),this},d.prototype.timeMissing=function(a,b){var c;return c=(a-b)/36e5,0>c?"Starts in "+Math.abs(Math.round(c))+" hours":"Past"},d}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Views.Lineup=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.tagName="div",d.prototype.className="panel-wrapper",d.prototype.template=JST["app/scripts/templates/lineup"],d.prototype.events={"click .passport-add":"addToPassport"},d.prototype.initialize=function(){return this.render()},d.prototype.render=function(){var a;return musicPassport.passport.isValid()&&(a=musicPassport.passport.getAllConcerts()),this.$el.html(this.template({lineup:this.model,getTime:this.model.getTime,passport:a})),this},d.prototype.addToPassport=function(a){var b,c;return a.preventDefault(),$(a.currentTarget).hide(),b=$(a.currentTarget).prevAll(".band").text(),c={thng:musicPassport.passport.get("thngid"),data:[{key:b,value:"-1"}]},Evt.updateProperty(c,function(){return musicPassport.passport.getWishList(),musicPassport.appView.trigger("notify","You added <strong>"+b+"</strong> to your passport.")})},d}(Backbone.View)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Models.Lineup=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}var e;return c(d,b),d.prototype.defaults={1:{date:13903488e5,mainStage:[{band:"Green Day",startTime:13904277e5,finishTime:13904388e5,"star-level":5},{band:"Two Door Cinema Club",startTime:13904223e5,finishTime:13904277e5,"star-level":4},{band:"Biffy Clyro",startTime:13904178e5,finishTime:13904223e5,"star-level":4},{band:"Stereophonics",startTime:13904136e5,finishTime:13904178e5,"star-level":3}],secondStage:[{band:"Edward Sharpe & The Magnetic Zeros",startTime:13904298e5,finishTime:13904352e5,"star-level":4},{band:"Dead Combo",startTime:13904244e5,finishTime:13904298e5,"star-level":3},{band:"Japandroids",startTime:13904202e5,finishTime:13904244e5,"star-level":3}]},2:{date:13904352e5,mainStage:[{band:"Kings of Leon",startTime:1390518e6,finishTime:13905252e5,"star-level":5},{band:"Phoenix",startTime:1390512e6,finishTime:1390518e6,"star-level":5},{band:"Tame Impala",startTime:13905078e5,finishTime:1390512e6,"star-level":4},{band:"Jake Bugg",startTime:13905036e5,finishTime:13905078e5,"star-level":3}],secondStage:[{band:"Crystal Castles",startTime:13905219e5,finishTime:1390527e6,"star-level":3},{band:"Django Django",startTime:13905168e5,finishTime:13905219e5,"star-level":3},{band:"Of Monsters and Men",startTime:13905123e5,finishTime:13905168e5,"star-level":2}]}},d.prototype.getConcert=function(a){var b,c,d,e,f,g,h;g=this.attributes;for(d in g)for(c=g[d],h=c.mainStage.concat(c.secondStage),e=0,f=h.length;f>e;e++)if(b=h[e],b.band.toLowerCase()===a)return _.extend(b,{day:d})},d.prototype.getTime=function(a){var b;return b=new Date(a),""+e(b.getHours())+"h"+e(b.getMinutes())},e=function(a){return 10>a?"0"+a:""+a},d}(Backbone.Model)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Models.Concert=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.seen=function(){return"1"===this.get("value")},d.prototype.check=function(){return this.set("value","1")},d}(Backbone.Model)}.call(this),function(){"use strict";var a,b={}.hasOwnProperty,c=function(a,c){function d(){this.constructor=a}for(var e in c)b.call(c,e)&&(a[e]=c[e]);return d.prototype=c.prototype,a.prototype=new d,a.__super__=c.prototype,a};musicPassport.Collections.Wishlist=function(b){function d(){return a=d.__super__.constructor.apply(this,arguments)}return c(d,b),d.prototype.model=musicPassport.Models.Concert,d}(Backbone.Collection)}.call(this);