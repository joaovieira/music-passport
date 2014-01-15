(function() {
  window.musicPassport = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      'use strict';
      this.user = new musicPassport.Models.Profile();
      this.passport = new musicPassport.Models.Passport();
      this.lineup = new musicPassport.Models.Lineup();
      this.appView = new musicPassport.Views.App({
        model: this.user
      });
      this.router = new musicPassport.Routers.AppRouter();
      return Backbone.history.start();
    }
  };

  $(function() {
    'use strict';
    return musicPassport.init();
  });

  window.Evt = new Evrythng({
    evrythngApiKey: 'EyvifRsWvxEh4prtcQ6LQtSHAs9AF8ce2iuxomMFbCMkaXUvpxnvOUOAH6fDePuug66HRIGGiFcDQzF7',
    evrythngAppId: '52d0185a55872c9a6d7b1616',
    facebookAppId: '1449050295309307',
    jQuery: jQuery
  });

  $(document).on('fbStatusChange', function(event, data) {
    if (data.status === 'connected') {
      return FB.api('/me', function(response) {
        data = {
          "access": {
            "token": data.authResponse.accessToken
          }
        };
        return Evt.request({
          url: "/auth/facebook",
          data: data,
          method: 'post'
        }, function(access) {
          var thngid;
          if (access.evrythngApiKey) {
            musicPassport.user.set(response);
            musicPassport.user.set('authenticated', true);
            Evt.options.evrythngAppApiKey = Evt.options.evrythngApiKey;
            Evt.options.evrythngApiKey = access.evrythngApiKey;
            thngid = musicPassport.passport.get('thngid');
            return musicPassport.router.navigate("" + thngid + "/home", {
              trigger: true
            });
          }
        });
      });
    } else {
      return Evt.request({
        url: '/auth/all/logout',
        method: 'post'
      }, function(access) {
        Evt.options.evrythngApiKey = Evt.options.evrythngAppApiKey;
        musicPassport.user.set(musicPassport.user.defaults);
        return musicPassport.router.navigate("" + (musicPassport.passport.get("thngid")), {
          trigger: true
        });
      });
    }
  });

}).call(this);

if (!window.JST) {
  window.JST = {};
}
window.JST["app/scripts/templates/app"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<!-- navigation -->\n<nav id="navigation" class="navbar navbar-default navbar-fixed-top" role="navigation">\n\t<!-- navigation dependent of login -->\n</nav>\n\n\n<!-- content -->\n<div class="jumbotron panel-holder">\n  <div id="panel-carousel" class="owl-carousel">\n\n  </div>\n</div>'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["app/scripts/templates/home"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      var i, stage, _i, _len, _ref, _ref1, _ref2, _ref3;
    
      if (!this.passport.exists) {
        _print(_safe('\n\t<div class="panel">\n\t\t<h2>Oops! This bracelet doesn\'t exist</h2>\n\t\t<p>Please scan a valid bracelet and claim it to start using your passport</p>\n\t</div>\n'));
      } else if (!this.passport.own) {
        _print(_safe('\n\t'));
        if (this.passport["new"]) {
          _print(_safe('\n\t\t<div class="panel">\n\t\t\t<h2>Congratulations! You\'ve got a new fancy accessory</h2>\n\t\t\t<p>This bracelet is not registered. Claim it and start using your passport</p>\n\t\t\t<p>\n\t\t\t\t<a href="#" class="btn btn-primary btn-large btn-claim">Claim my bracelet</a>\n\t\t\t</p>\n\t\t</div>\n\t'));
        } else {
          _print(_safe('\n\t\t<div class="panel">\n\t\t\t<h2>Getting new friends?</h2>\n\t\t\t<p>This isn\'t your bracelet. Please scan yours to use your passport</p>\n\t\t</div>\n\t'));
        }
        _print(_safe('\n'));
      } else {
        _print(_safe('\n\t<div id="watching" class="panel">\n\t\t<h2 class="panel-desc">You\'re currently watching:</h2>\n\t\t'));
        if (this.closerStage && !!((_ref = this.closerStage.properties) != null ? _ref.playing : void 0)) {
          _print(_safe('\n\t\t\t<h2 class="band">'));
          _print(this.closerStage.properties.playing);
          _print(_safe('</h2>\n\t\t\t<div class="description">\n\t\t\t\t<span class="bold">'));
          _print(this.timeMissing(this.closerStage.properties.finishTime, Date.now()));
          _print(_safe('</span> missing to end\n\t\t\t</div>\n\t\t\t<div class="description">\n\t\t\t\t<span class="bold">'));
          _print(this.closerStage.checkinCount);
          _print(_safe('</span> people checked-in at this concert\n\t\t\t</div>\n\t\t\t<a href="#" class="btn btn-primary btn-large wide checkin">Check-in & Share</a>\n\t\t'));
        } else {
          _print(_safe('\n\t\t\t<p>There are no concerts near you now</p>\n\t\t'));
        }
        _print(_safe('\n\t</div>\n\t<div id="playing" class="panel">\n\t\t<h2 class="panel-desc">Also playing:</h2>\n\t\t'));
        if (this.otherStages.length) {
          _print(_safe('\n\t\t\t'));
          _ref1 = this.otherStages;
          for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
            stage = _ref1[i];
            _print(_safe('\n\t\t\t\t'));
            if ((_ref2 = stage.properties) != null ? _ref2.playing : void 0) {
              _print(_safe('\n\t\t\t\t\t<div class="band-name bold">'));
              _print(stage.properties.playing);
              _print(_safe('</div>\n\t\t\t\t\t<div class="concert clearfix '));
              if (i === this.otherStages.length - 1) {
                _print("last");
              }
              _print(_safe('">\n\t\t\t\t\t\t<div class="left">\n\t\t\t\t\t\t\t<span>'));
              _print(stage.name);
              _print(_safe('</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t\t<span><i class="fa fa-clock-o"></i>'));
              _print(this.timeMissing(stage.properties.finishTime, Date.now()));
              _print(_safe(' </span>\n\t\t\t\t\t\t\t<span><i class="fa fa-group"></i>'));
              _print(stage.checkinCount);
              _print(_safe('</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t'));
            }
            _print(_safe('\n\t\t\t'));
          }
          _print(_safe('\n\t\t'));
        } else {
          _print(_safe('\n\t\t\t'));
          if (this.closerStage && !!((_ref3 = this.closerStage.properties) != null ? _ref3.playing : void 0)) {
            _print(_safe('\n\t\t\t\t<p>There are no other bands playing now</p>\n\t\t\t'));
          } else {
            _print(_safe('\n\t\t\t\t<p>There are no bands playing now</p>\n\t\t\t'));
          }
          _print(_safe('\n\t\t'));
        }
        _print(_safe('\n\t</div>\n\t<div id="next-concert" class="panel">\n\t\t<h2 class="panel-desc">Your next show:</h2>\n\t\t<h2 class="band"></h2>\n\t\t<p class="empty-band">None</p>\n\t\t<a href="#" class="passport-details bold">View my concerts</a>\n\t</div>\n'));
      }
    
      _print(_safe('\n<div id="lineup" class="panel">\n\t<a href="#" class="btn btn-primary btn-large wide lineup">View Lineup</a>\n</div>'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["app/scripts/templates/lineup"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      var concert, concerts, day, _i, _j, _len, _len1, _ref, _ref1, _ref2;
    
      _print(_safe('<h2 class="panel-name" id="passport-title">Lineup</h2>\n<div id="welcome" class="panel">\n\t'));
    
      _ref = this.lineup.attributes;
      for (day in _ref) {
        concerts = _ref[day];
        _print(_safe('\n\t\t<h1>Day '));
        _print(day);
        _print(_safe('</h1>\n\t\t<h2>Main Stage</h2>\n\t\t'));
        _ref1 = concerts.mainStage;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          concert = _ref1[_i];
          _print(_safe('\n\t\t\t<p>\n\t\t\t\t<span class="band">'));
          _print(concert.band);
          _print(_safe('</span>\n\t\t\t\t<span> '));
          _print("(" + (this.getTime(concert.startTime)) + " - " + (this.getTime(concert.finishTime)) + ")");
          _print(_safe('</span>\n\n\t\t\t\t'));
          if (this.passport && !_.find(this.passport, function(item) {
            return item.band === concert.band;
          })) {
            _print(_safe('\n\t\t\t\t\t<a href="#" class="passport-add"><i class="fa fa-bookmark"></i></span></a>\n\t\t\t\t'));
          }
          _print(_safe('\n\t\t\t</p>\n\t\t'));
        }
        _print(_safe('\n\t\t<h2>Second Stage</h2>\n\t\t'));
        _ref2 = concerts.secondStage;
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          concert = _ref2[_j];
          _print(_safe('\n\t\t\t<p>\n\t\t\t\t<span class="band">'));
          _print(concert.band);
          _print(_safe('</span>\n\t\t\t\t<span> '));
          _print("(" + (this.getTime(concert.startTime)) + " - " + (this.getTime(concert.finishTime)) + ")");
          _print(_safe('</span>\n\n\t\t\t\t'));
          if (this.passport && !_.find(this.passport, function(item) {
            return item.band === concert.band;
          })) {
            _print(_safe('\n\t\t\t\t\t<a href="#" class="passport-add"><i class="fa fa-bookmark"></i></a>\n\t\t\t\t'));
          }
          _print(_safe('\n\t\t\t</p>\n\t\t'));
        }
        _print(_safe('\n\t'));
      }
    
      _print(_safe('\n\t<br/>\n</div>'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["app/scripts/templates/login"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="navbar-header">\n\n\t'));
    
      if (!!this.id) {
        _print(_safe('\n\t\t<button type="button" id="menu" class="navbar-toggle avatar" data-toggle="collapse" data-target="#navbar-collapse-1">\n    \t'));
        _print(this.name);
        _print(_safe('\n    \t<img src="https://graph.facebook.com/'));
        _print(this.id);
        _print(_safe('/picture?width=32&height=32" width="28" height="28"/>\n    \t<span class="caret"></span>\n\t\t</button>\n\t'));
      } else {
        _print(_safe('\n\t\t<button type="button" class="navbar-toggle login" data-toggle="collapse" data-target="#navbar-collapse-1">Login</button>\n\t'));
      }
    
      _print(_safe('\n\n\t<a class="navbar-brand brand-logo" href="#">Music Passport</a>\n</div>\n\n<div class="collapse navbar-collapse" id="navbar-collapse-1">\n\t'));
    
      if (!!this.id) {
        _print(_safe('\n\t\t<ul id="login" class="nav navbar-nav">\n  \t\t\t<li><a href="#" class="passport">My Passport</a></li>\n  \t\t\t<li><a href="#" class="lineup">Lineup</a></li>\n\t\t</ul>\n\t'));
      }
    
      _print(_safe('\n\n\t<ul id="login" class="nav navbar-nav navbar-right">\n\t\t'));
    
      if (!!this.id) {
        _print(_safe('\n  \t\t<li class="avatar">\n    \t\t'));
        _print(this.name);
        _print(_safe('\n    \t\t<img src="https://graph.facebook.com/'));
        _print(this.id);
        _print(_safe('/picture?width=32&height=32" width="28" height="28"/>\n  \t\t</li>\n  \t\t<li><a href="#" class="logout">Logout</a></li>\n\t\t'));
      } else {
        _print(_safe('\n  \t\t<li><a href="#" class="login">Login</a></li>\n\t\t'));
      }
    
      _print(_safe('\n\t</ul>\n</div>'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["app/scripts/templates/passport"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      var concert, i, _i, _len, _ref;
    
      _print(_safe('<h2 class="panel-name" id="passport-title">My Passport</h2>\n<div class="panel" id="passport" >\n\t'));
    
      if (this.concerts) {
        _print(_safe('\n\t\t'));
        if (this.concerts.length) {
          _print(_safe('\n\t\t\t'));
          _ref = this.concerts;
          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            concert = _ref[i];
            _print(_safe('\n\t\t\t\t<div class="passport-item clearfix '));
            if (i === this.concerts.length - 1) {
              _print("last");
            }
            _print(_safe('">\n\t\t\t\t\t<div class="left">\n\t\t\t\t\t\t<div class="band-name bold">'));
            _print(concert.band);
            _print(_safe('</div>\n\t\t\t\t\t\t<div class="concert-missing">'));
            _print(this.timeMissing(Date.now(), concert.startTime));
            _print(_safe('</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="right">\n\t\t\t\t\t\t<div class="concert-time bold">'));
            _print(this.getTime(concert.startTime));
            _print(_safe('</div>\n\t\t\t\t\t\t<div class="concert-day">Day '));
            _print(concert.day);
            _print(_safe('</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="concert-status '));
            _print(concert.seen ? 'seen' : 'unseen');
            _print(_safe('"/>\n\t\t\t\t</div>\n\t\t\t'));
          }
          _print(_safe('\n\t\t'));
        } else {
          _print(_safe('\n\t\t\t<!-- wish list empty -->\n\t\t\t<p class="empty">You don\'t have any concert in your passport. Add them to your want-to-see list from the <a href="#lineup">Lineup</a></p>\n\t\t'));
        }
        _print(_safe('\n\t'));
      } else {
        _print(_safe('\n\t\t<!-- loading -->\n\t\t<p class="loading">Loading</p>\n\t'));
      }
    
      _print(_safe('\n</div>\n\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["app/scripts/templates/welcome"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div id="welcome" class="panel">\n\t<div class="festival-logo">\n\t</div>\n\t\t<h1 class="navbar-brand">Music Passport</h1>\n\t<h2>Your bracelet is your digital music passport</h2>\n\t<p>Check in at concerts, collect rewards and share it with friends</p>\n\t<p>\n\t\t<a href="#" class="btn btn-primary btn-large btn-login">Login with Facebook</a>\n\t</p>\n</div>'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Routers.AppRouter = (function(_super) {
    __extends(AppRouter, _super);

    function AppRouter() {
      _ref = AppRouter.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AppRouter.prototype.routes = {
      "": "welcome",
      "lineup": "lineup",
      ":thngid/home": "home",
      ":thngid": "start"
    };

    AppRouter.prototype.initialize = function() {
      this.carouselOptions = {
        items: 2,
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        itemsScaleUp: true,
        pagination: false
      };
      this.welcomeView = new musicPassport.Views.Welcome({
        model: musicPassport.user
      });
      $("#panel-carousel").owlCarousel(this.carouselOptions);
      return this.owl = $(".owl-carousel").data('owlCarousel');
    };

    AppRouter.prototype.welcome = function() {
      var i, _i;
      for (i = _i = 0; _i <= 1; i = ++_i) {
        this.owl.removeItem();
      }
      return this.owl.addItem(this.welcomeView.el);
    };

    AppRouter.prototype.home = function() {
      var passportView;
      if (musicPassport.user.isAuthenticated()) {
        return passportView = new musicPassport.Views.Home({
          model: musicPassport.passport,
          owl: this.owl
        });
      } else {
        return this.navigate("", {
          trigger: true
        });
      }
    };

    AppRouter.prototype.start = function(thngid) {
      musicPassport.passport.set('thngid', thngid);
      if (musicPassport.user.isAuthenticated()) {
        return this.navigate("" + thngid + "/home", {
          trigger: true
        });
      } else {
        return this.welcome();
      }
    };

    AppRouter.prototype.lineup = function() {
      var i, lineupView, _i;
      if (musicPassport.user.isAuthenticated()) {
        for (i = _i = 0; _i <= 1; i = ++_i) {
          this.owl.removeItem();
        }
        lineupView = new musicPassport.Views.Lineup({
          model: musicPassport.lineup
        });
        return this.owl.addItem(lineupView.el);
      } else {
        return this.navigate("", {
          trigger: true
        });
      }
    };

    return AppRouter;

  })(Backbone.Router);

}).call(this);

(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Models.Profile = (function(_super) {
    __extends(Profile, _super);

    function Profile() {
      _ref = Profile.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Profile.prototype.defaults = {
      "id": "",
      "name": "",
      "first_name": "",
      "last_name": "",
      "gender": "",
      "username": "",
      "link": "",
      "locale": "",
      "timezone": "",
      "authenticated": false
    };

    Profile.prototype.isAuthenticated = function() {
      return this.get('authenticated');
    };

    return Profile;

  })(Backbone.Model);

}).call(this);

(function() {
  'use strict';
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Models.Passport = (function(_super) {
    __extends(Passport, _super);

    Passport.prototype.defaults = {
      "thngid": "!",
      "exists": false,
      "own": false,
      "new": true
    };

    function Passport(attrs, options) {
      var _this = this;
      this.wishlist = new musicPassport.Collections.Wishlist();
      this.on("change", this.getWishList, this);
      this.wishlist.on("reset change", function() {
        return _this.trigger("update");
      });
      Backbone.Model.apply(this, arguments);
    }

    Passport.prototype.exists = function() {
      return this.get('exists');
    };

    Passport.prototype.isFromOwner = function() {
      return this.get('own');
    };

    Passport.prototype.isNew = function() {
      return this.get('new');
    };

    Passport.prototype.isValid = function() {
      return this.get('exists') && this.get('own') && !this.get('new');
    };

    Passport.prototype.getWishList = function() {
      var _this = this;
      if (this.isValid()) {
        return Evt.readProperty({
          thng: this.get('thngid')
        }, function(properties) {
          return _this.wishlist.reset(properties);
        });
      }
    };

    Passport.prototype.getAllConcerts = function() {
      var band, concert, concerts, _i, _len, _ref;
      concerts = [];
      _ref = this.wishlist.models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        band = _ref[_i];
        concert = {
          seen: band.seen()
        };
        concert = _.extend(concert, musicPassport.lineup.getConcert(band.get('key')));
        concerts.push(concert);
      }
      return _.sortBy(concerts, function(concert) {
        return concert.startTime;
      });
    };

    Passport.prototype.getNextConcert = function() {
      var currentTime;
      currentTime = Date.now();
      return _.find(this.getAllConcerts(), function(concert) {
        return concert.finishTime > currentTime && !concert.seen;
      });
    };

    Passport.prototype.checkinConcert = function(timestamp, concert) {
      var options,
        _this = this;
      options = {
        thng: this.get('thngid'),
        data: [
          {
            key: concert,
            value: "1",
            timestamp: timestamp
          }
        ]
      };
      return Evt.updateProperty(options, function(result) {
        var band;
        band = _this.wishlist.findWhere({
          key: result[0].key
        });
        if (band) {
          band.set('value', result[0].value);
        } else {
          _this.wishlist.add(new musicPassport.Models.Concert(result[0]));
        }
        return _this.trigger("checkin");
      });
    };

    return Passport;

  })(Backbone.Model);

}).call(this);

(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Views.App = (function(_super) {
    __extends(App, _super);

    function App() {
      _ref = App.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    App.prototype.template = JST['app/scripts/templates/app'];

    App.prototype.el = 'body';

    App.prototype.events = {
      'click .btn-login': 'login'
    };

    App.prototype.initialize = function() {
      this.on('login', this.login);
      this.on('logout', this.logout);
      this.getCurrentPosition();
      return this.render();
    };

    App.prototype.render = function() {
      this.$el.append(this.template(this.model.toJSON()));
      new musicPassport.Views.Login({
        model: this.model,
        el: '#navigation'
      });
      return this;
    };

    App.prototype.login = function(e) {
      e.preventDefault();
      /*data = 
        'email': "joaoguerravieira@gmail.com"
        'password': "Click12345"
      
      Evt.request
        url: '/auth/evrythng'
        data: data
        method: 'post'
      , (access) ->
        if access.evrythngApiKey
          musicPassport.user.set {id:"348972", name:"João Vieira"} #Store the newly authenticated FB user
          musicPassport.user.set 'authenticated', true
          Evt.options.evrythngAppApiKey = Evt.options.evrythngApiKey
          Evt.options.evrythngApiKey = access.evrythngApiKey
          thngid = musicPassport.passport.get 'thngid'
          musicPassport.router.navigate "#{thngid}/home", { trigger: true }
      */

      return FB.login(null, {
        scope: 'email,user_birthday'
      });
    };

    App.prototype.logout = function() {
      return FB.logout();
    };

    App.prototype.getCurrentPosition = function() {
      var _this = this;
      this.position = "Current position unavailable";
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(function(position) {
          return _this.position = position.coords;
        });
      }
    };

    return App;

  })(Backbone.View);

}).call(this);

(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Views.Login = (function(_super) {
    __extends(Login, _super);

    function Login() {
      _ref = Login.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Login.prototype.template = JST['app/scripts/templates/login'];

    Login.prototype.events = {
      'click .login': 'login',
      'click .logout': 'logout',
      'click .brand-logo, .passport': 'home',
      'click .lineup': 'viewLineup',
      'click .navbar-collapse li > a': 'toggleNavigation'
    };

    Login.prototype.initialize = function() {
      this.model.on("change", this.render, this);
      return this.render();
    };

    Login.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    Login.prototype.login = function(e) {
      e.stopPropagation();
      return musicPassport.appView.trigger('login', e);
    };

    Login.prototype.logout = function(e) {
      e.preventDefault();
      return musicPassport.appView.trigger('logout');
    };

    Login.prototype.home = function(e) {
      var thngid;
      e.preventDefault();
      if (/home/.test(Backbone.history.fragment)) {
        musicPassport.router.owl.goTo(0);
        return $("body").animate({
          scrollTop: 0
        });
      } else {
        thngid = musicPassport.passport.get('thngid');
        return musicPassport.router.navigate("" + thngid + "/home", {
          trigger: true
        });
      }
    };

    Login.prototype.viewLineup = function(e) {
      e.preventDefault();
      return musicPassport.router.navigate("lineup", {
        trigger: true
      });
    };

    Login.prototype.toggleNavigation = function() {
      return this.$(".navbar-toggle:visible").click();
    };

    return Login;

  })(Backbone.View);

}).call(this);

(function() {
  'use strict';
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Views.Welcome = (function(_super) {
    __extends(Welcome, _super);

    function Welcome() {
      this.showHideButtons = __bind(this.showHideButtons, this);
      _ref = Welcome.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Welcome.prototype.tagName = "div";

    Welcome.prototype.className = "panel-wrapper";

    Welcome.prototype.template = JST['app/scripts/templates/welcome'];

    Welcome.prototype.initialize = function() {
      this.model.on("change", this.showHideButtons, this);
      return this.render();
    };

    Welcome.prototype.render = function() {
      this.$el.html(this.template());
      this.showHideButtons();
      return this;
    };

    Welcome.prototype.showHideButtons = function() {
      if (!!this.model.get('id')) {
        return this.$('.btn-login').addClass('hidden');
      } else {
        return this.$('.btn-login').removeClass('hidden');
      }
    };

    return Welcome;

  })(Backbone.View);

}).call(this);

(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Views.Home = (function(_super) {
    __extends(Home, _super);

    function Home() {
      _ref = Home.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Home.prototype.tagName = "div";

    Home.prototype.className = "panel-wrapper";

    Home.prototype.template = JST['app/scripts/templates/home'];

    Home.prototype.events = {
      'click .btn-claim': 'activate',
      'click .checkin': 'checkin',
      'click .passport-details': "viewPassportDetails",
      'click .btn.lineup': "viewLineup"
    };

    Home.prototype.initialize = function(options) {
      var thngid,
        _this = this;
      this.owl = options.owl;
      thngid = options.model.get('thngid');
      this.model.on("update", this.updateNextShow, this);
      this.model.on("checkin", this.render, this);
      this.getStageInfo();
      return Evt.readThng({
        thng: thngid
      }, function(thng) {
        if (thng.tags.indexOf("bracelet" !== -1)) {
          return Evt.readAction({
            type: "_activation"
          }, function(action) {
            if (action.length) {
              _this.model.set({
                "exists": true,
                "own": action[0].customFields.owner === musicPassport.user.get("id"),
                "new": action[0].thng !== thngid
              });
            } else {
              _this.model.set('exists', true);
            }
            return _this.render();
          });
        }
      }, function(error) {
        if (error.status === 400) {
          _this.model.set('exists', false);
          return _this.render();
        }
      });
    };

    Home.prototype.render = function() {
      var i, _i;
      for (i = _i = 0; _i <= 1; i = ++_i) {
        this.owl.removeItem();
      }
      this.$el.html(this.template({
        passport: this.model.toJSON(),
        closerStage: this.closerStage,
        otherStages: _.filter(this.otherStages, function(stage) {
          var _ref1;
          return !!((_ref1 = stage.properties) != null ? _ref1.playing : void 0);
        }),
        timeMissing: this.timeMissing
      }));
      this.owl.addItem(this.el);
      if (this.model.isValid()) {
        this.updateNextShow();
        this.owl.addItem(new musicPassport.Views.Passport({
          model: this.model
        }).el);
      }
      return this;
    };

    Home.prototype.updateNextShow = function() {
      var concert;
      if (concert = this.model.getNextConcert()) {
        this.$("#next-concert .empty-band").hide();
        return this.$("#next-concert .band").text(concert.band).show();
      } else {
        this.$("#next-concert .band").hide();
        return this.$("#next-concert .empty-band").show();
      }
    };

    Home.prototype.timeMissing = function(a, b) {
      var difference;
      difference = (a - b) / (1000 * 60);
      if (difference > 0) {
        return "" + difference + "m";
      } else {
        return "0m";
      }
    };

    Home.prototype.activate = function(e) {
      var query,
        _this = this;
      e.preventDefault();
      query = {
        url: '/actions/_activation',
        data: {
          timestamp: new Date().getTime(),
          type: '_activation',
          customFields: {
            "owner": musicPassport.user.get("id")
          },
          thng: this.model.get("thngid")
        },
        method: 'post'
      };
      return Evt.request(query, function(response) {
        _this.model.set({
          "own": true,
          "new": false
        });
        return _this.render();
      });
    };

    Home.prototype.checkin = function(e) {
      var currentTime, query,
        _this = this;
      e.preventDefault();
      currentTime = new Date().getTime();
      query = {
        url: '/actions/checkins',
        data: {
          type: "checkins",
          thng: this.model.get("thngid"),
          timestamp: currentTime,
          customFields: {
            "concert": this.closerStage.properties.playing
          }
        },
        method: 'post'
      };
      return Evt.request(query, function(result) {
        _this.closerStage.checkinCount++;
        return _this.model.checkinConcert(currentTime, result.customFields.concert);
      });
    };

    Home.prototype.viewPassportDetails = function(e) {
      e.preventDefault();
      this.owl.next();
      return $("body").animate({
        scrollTop: 0
      });
    };

    Home.prototype.viewLineup = function(e) {
      e.preventDefault();
      return musicPassport.router.navigate("lineup", {
        trigger: true
      });
    };

    Home.prototype.getStageInfo = function() {
      var position, queryAll, queryCloser,
        _this = this;
      position = musicPassport.appView.position;
      if (typeof position !== "string") {
        queryCloser = {
          "types": "thng",
          "tags": "stage",
          "lat": position.latitude,
          "lon": position.longitude,
          "maxDist": 0.1
        };
        queryAll = {
          "types": "thng",
          "tags": "stage"
        };
        Evt.request({
          url: "/search",
          params: queryCloser
        }, function(result) {
          if (result.thngs.length) {
            _this.closerStage = result.thngs[0];
            _this.closerStage.checkinCount = 0;
            return _this.getCheckinsConcert(_this.closerStage);
          }
        }, function(error) {});
        return Evt.request({
          url: "/search",
          params: queryAll
        }, function(result) {
          var others, stage, _i, _len, _results;
          others = result.thngs;
          if (_this.closerStage) {
            others = _.filter(result.thngs, function(stage) {
              return stage.id !== _this.closerStage.id;
            });
          }
          _this.otherStages = [];
          _results = [];
          for (_i = 0, _len = others.length; _i < _len; _i++) {
            stage = others[_i];
            stage.checkinCount = 0;
            _this.getCheckinsConcert(stage);
            _results.push(_this.otherStages.push(stage));
          }
          return _results;
        }, function(error) {});
      }
    };

    Home.prototype.getCheckinsConcert = function(stage) {
      var _this = this;
      return Evt.request({
        url: "/actions/checkins"
      }, function(result) {
        var checkinsConcert;
        checkinsConcert = _.filter(result, function(checkin) {
          var _ref1;
          return ((_ref1 = checkin.customFields) != null ? _ref1.concert : void 0) === stage.properties.playing;
        });
        return stage.checkinCount = checkinsConcert.length;
      });
    };

    return Home;

  })(Backbone.View);

}).call(this);

(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Views.Passport = (function(_super) {
    __extends(Passport, _super);

    function Passport() {
      _ref = Passport.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Passport.prototype.tagName = "div";

    Passport.prototype.className = "panel-wrapper";

    Passport.prototype.template = JST['app/scripts/templates/passport'];

    Passport.prototype.initialize = function() {
      this.model.on("update", this.render, this);
      return this.render();
    };

    Passport.prototype.render = function() {
      this.$el.html(this.template({
        concerts: this.model.getAllConcerts(),
        getTime: musicPassport.lineup.getTime,
        getDay: musicPassport.lineup.getDay,
        timeMissing: this.timeMissing
      }));
      return this;
    };

    Passport.prototype.timeMissing = function(a, b) {
      var difference;
      difference = (a - b) / (1000 * 60 * 60);
      if (difference < 0) {
        return "Starts in " + (Math.abs(Math.round(difference))) + " hours";
      } else {
        return "Past";
      }
    };

    return Passport;

  })(Backbone.View);

}).call(this);

(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Views.Lineup = (function(_super) {
    __extends(Lineup, _super);

    function Lineup() {
      _ref = Lineup.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Lineup.prototype.tagName = "div";

    Lineup.prototype.className = "panel-wrapper";

    Lineup.prototype.template = JST['app/scripts/templates/lineup'];

    Lineup.prototype.events = {
      'click .passport-add': 'addToPassport'
    };

    Lineup.prototype.initialize = function() {
      return this.render();
    };

    Lineup.prototype.render = function() {
      var passport;
      if (musicPassport.passport.isValid()) {
        passport = musicPassport.passport.getAllConcerts();
      }
      this.$el.html(this.template({
        lineup: this.model,
        getTime: this.model.getTime,
        passport: passport
      }));
      return this;
    };

    Lineup.prototype.addToPassport = function(e) {
      var options;
      e.preventDefault();
      $(e.currentTarget).hide();
      options = {
        thng: musicPassport.passport.get('thngid'),
        data: [
          {
            key: $(e.currentTarget).prevAll(".band").text(),
            value: "-1"
          }
        ]
      };
      return Evt.updateProperty(options, function(response) {
        return musicPassport.passport.getWishList();
      });
    };

    return Lineup;

  })(Backbone.View);

}).call(this);

(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Models.Lineup = (function(_super) {
    var zeroPad;

    __extends(Lineup, _super);

    function Lineup() {
      _ref = Lineup.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Lineup.prototype.defaults = {
      "1": {
        "date": 1389744000000,
        "mainStage": [
          {
            "band": "Green Day",
            "startTime": 1389822900000,
            "finishTime": 1389834000000,
            "star-level": 5
          }, {
            "band": "Two Door Cinema Club",
            "startTime": 1389817500000,
            "finishTime": 1389822900000,
            "star-level": 4
          }, {
            "band": "Biffy Clyro",
            "startTime": 1389813000000,
            "finishTime": 1389817500000,
            "star-level": 4
          }, {
            "band": "Stereophonics",
            "startTime": 1389808800000,
            "finishTime": 1389813000000,
            "star-level": 3
          }
        ],
        "secondStage": [
          {
            "band": "Edward Sharpe & The Magnetic Zeros",
            "startTime": 1389825000000,
            "finishTime": 1389830400000,
            "star-level": 4
          }, {
            "band": "Dead Combo",
            "startTime": 1389819600000,
            "finishTime": 1389825000000,
            "star-level": 3
          }, {
            "band": "Japandroids",
            "startTime": 1389815400000,
            "finishTime": 1389819600000,
            "star-level": 3
          }
        ]
      },
      "2": {
        "date": 1389830400000,
        "mainStage": [
          {
            "band": "Kings of Leon",
            "startTime": 1389913200000,
            "finishTime": 1389920400000,
            "star-level": 5
          }, {
            "band": "Phoenix",
            "startTime": 1389907200000,
            "finishTime": 1389913200000,
            "star-level": 5
          }, {
            "band": "Tame Impala",
            "startTime": 1389903000000,
            "finishTime": 1389907200000,
            "star-level": 4
          }, {
            "band": "Jake Bugg",
            "startTime": 1389898800000,
            "finishTime": 1389903000000,
            "star-level": 3
          }
        ],
        "secondStage": [
          {
            "band": "Crystal Castles",
            "startTime": 1389917100000,
            "finishTime": 1389922200000,
            "star-level": 3
          }, {
            "band": "Django Django",
            "startTime": 1389912000000,
            "finishTime": 1389917100000,
            "star-level": 3
          }, {
            "band": "Of Monsters and Men",
            "startTime": 1389907500000,
            "finishTime": 1389912000000,
            "star-level": 2
          }
        ]
      }
    };

    Lineup.prototype.getConcert = function(band) {
      var concert, concerts, day, _i, _len, _ref1, _ref2;
      _ref1 = this.attributes;
      for (day in _ref1) {
        concerts = _ref1[day];
        _ref2 = concerts.mainStage.concat(concerts.secondStage);
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          concert = _ref2[_i];
          if (concert.band.toLowerCase() === band) {
            return _.extend(concert, {
              day: day
            });
          }
        }
      }
    };

    Lineup.prototype.getTime = function(miliseconds) {
      var date;
      date = new Date(miliseconds);
      return "" + (zeroPad(date.getHours())) + "h" + (zeroPad(date.getMinutes()));
    };

    zeroPad = function(x) {
      if (x < 10) {
        return '0' + x;
      } else {
        return '' + x;
      }
    };

    return Lineup;

  })(Backbone.Model);

}).call(this);

(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Models.Concert = (function(_super) {
    __extends(Concert, _super);

    function Concert() {
      _ref = Concert.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Concert.prototype.seen = function() {
      return this.get('value') === "1";
    };

    Concert.prototype.check = function() {
      return this.set('value', "1");
    };

    return Concert;

  })(Backbone.Model);

}).call(this);

(function() {
  'use strict';
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  musicPassport.Collections.Wishlist = (function(_super) {
    __extends(Wishlist, _super);

    function Wishlist() {
      _ref = Wishlist.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Wishlist.prototype.model = musicPassport.Models.Concert;

    return Wishlist;

  })(Backbone.Collection);

}).call(this);
