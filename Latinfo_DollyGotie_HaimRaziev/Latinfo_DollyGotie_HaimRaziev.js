(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Latinfo_DollyGotie_HaimRaziev_atlas_", frames: [[0,0,4500,3375],[1609,3377,272,99],[0,3377,357,164],[1056,3377,299,128],[718,3377,336,144],[359,3377,357,164],[1357,3377,250,115]]}
];


// symbols:



(lib._4683 = function() {
	this.spriteSheet = ss["Latinfo_DollyGotie_HaimRaziev_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.spriteSheet = ss["Latinfo_DollyGotie_HaimRaziev_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["Latinfo_DollyGotie_HaimRaziev_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["Latinfo_DollyGotie_HaimRaziev_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["Latinfo_DollyGotie_HaimRaziev_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.spriteSheet = ss["Latinfo_DollyGotie_HaimRaziev_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.spriteSheet = ss["Latinfo_DollyGotie_HaimRaziev_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zuk_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.zuk_music_txt = new cjs.Text("", "15px 'Verdana'");
	this.zuk_music_txt.name = "zuk_music_txt";
	this.zuk_music_txt.textAlign = "center";
	this.zuk_music_txt.lineHeight = 20;
	this.zuk_music_txt.lineWidth = 171;
	this.zuk_music_txt.parent = this;
	this.zuk_music_txt.setTransform(5.5,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPB0QgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAhBIBQgSIAABWQAAALgIAHQgGAGgIAAQgHAAgGgEQgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAgrIg8AMIAAA3QgBAKgGAHQgHAGgJAAQgHAAgFgEgAhXBDQgggfAAgtQAAgtAgghQAhggAtAAQArAAAfAfQAgAdADAsIgUAEQgBglgagZQgbgagjAAQgmAAgZAbQgbAZAAAmQAAAkAbAbQAZAaAmAAIAJAAQgHAIgCAMIAAAAQgtAAghghgAhCAuQgPgOgFgVIAKAAQAFAQAMAMQANANAQAEIgBAKQgUgFgPgPgAhCAJIALgBQAHAUAVAIIgBAKQgdgJgJgcgAgfALQgIgJAAgLQAAgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAJQgJAJgLAAQgNAAgJgJgAgYgYQgFAHAAAIQAAAIAFAFQAHAGAIAAQAIAAAFgGQAGgFAAgIQAAgIgGgHQgFgFgIAAQgIAAgHAFgAAIg3IABgLQAcAJAJAdIgKABQgIgVgUgHgAAng7QgMgMgQgFIAAgKQAVAFAOAPQAPAPAFAUIgKABQgEgQgNgNg");
	this.shape.setTransform(0.5,0.5,2.833,2.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AtqJ1IAAzpIbTAAIAAN2IACAAIAAFzg");
	this.shape_1.setTransform(5.5,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.zuk_music_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.zuk_music, new cjs.Rectangle(-82,-48.8,175,125.9), null);


(lib.text_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgnPAbkMAAAg3HMBOfAAAMAAAA3Hg");
	this.shape.setTransform(251.2,176.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_bg, new cjs.Rectangle(0,0,502.4,352.8), null);


(lib.tango_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.tan_music_txt = new cjs.Text("", "15px 'Verdana'");
	this.tan_music_txt.name = "tan_music_txt";
	this.tan_music_txt.textAlign = "center";
	this.tan_music_txt.lineHeight = 20;
	this.tan_music_txt.lineWidth = 171;
	this.tan_music_txt.parent = this;
	this.tan_music_txt.setTransform(5.5,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPB0QgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAhBIBQgSIAABWQAAALgIAHQgGAGgIAAQgHAAgGgEQgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAgrIg8AMIAAA3QgBAKgGAHQgHAGgJAAQgHAAgFgEgAhXBDQgggfAAgtQAAgtAgghQAhggAtAAQArAAAfAfQAgAdADAsIgUAEQgBglgagZQgbgagjAAQgmAAgZAbQgbAZAAAmQAAAkAbAbQAZAaAmAAIAJAAQgHAIgCAMIAAAAQgtAAghghgAhCAuQgPgOgFgVIAKAAQAFAQAMAMQANANAQAEIgBAKQgUgFgPgPgAhCAJIALgBQAHAUAVAIIgBAKQgdgJgJgcgAgfALQgIgJAAgLQAAgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAJQgJAJgLAAQgNAAgJgJgAgYgYQgFAHAAAIQAAAIAFAFQAHAGAIAAQAIAAAFgGQAGgFAAgIQAAgIgGgHQgFgFgIAAQgIAAgHAFgAAIg3IABgLQAcAJAJAdIgKABQgIgVgUgHgAAng7QgMgMgQgFIAAgKQAVAFAOAPQAPAPAFAUIgKABQgEgQgNgNg");
	this.shape.setTransform(0.5,0.5,2.833,2.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AtxJxIAAzhIbjAAIAAThg");
	this.shape_1.setTransform(6.2,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.tan_music_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tango_music, new cjs.Rectangle(-82,-48,176.4,125.1), null);


(lib.samba_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.sam_music_txt = new cjs.Text("", "15px 'Verdana'");
	this.sam_music_txt.name = "sam_music_txt";
	this.sam_music_txt.textAlign = "center";
	this.sam_music_txt.lineHeight = 20;
	this.sam_music_txt.lineWidth = 171;
	this.sam_music_txt.parent = this;
	this.sam_music_txt.setTransform(5.5,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPB0QgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAhBIBQgSIAABWQAAALgIAHQgGAGgIAAQgHAAgGgEQgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAgrIg8AMIAAA3QgBAKgGAHQgHAGgJAAQgHAAgFgEgAhXBDQgggfAAgtQAAgtAgghQAhggAtAAQArAAAfAfQAgAdADAsIgUAEQgBglgagZQgbgagjAAQgmAAgZAbQgbAZAAAmQAAAkAbAbQAZAaAmAAIAJAAQgHAIgCAMIAAAAQgtAAghghgAhCAuQgPgOgFgVIAKAAQAFAQAMAMQANANAQAEIgBAKQgUgFgPgPgAhCAJIALgBQAHAUAVAIIgBAKQgdgJgJgcgAgfALQgIgJAAgLQAAgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAJQgJAJgLAAQgNAAgJgJgAgYgYQgFAHAAAIQAAAIAFAFQAHAGAIAAQAIAAAFgGQAGgFAAgIQAAgIgGgHQgFgFgIAAQgIAAgHAFgAAIg3IABgLQAcAJAJAdIgKABQgIgVgUgHgAAng7QgMgMgQgFIAAgKQAVAFAOAPQAPAPAFAUIgKABQgEgQgNgNg");
	this.shape.setTransform(0.5,0.5,2.833,2.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AuELpIAA3RIcJAAIAAXRg");
	this.shape_1.setTransform(2.9,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.sam_music_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.samba_music, new cjs.Rectangle(-87.2,-72,180.2,149.1), null);


(lib.salsa_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.sal_music_txt = new cjs.Text("", "15px 'Verdana'");
	this.sal_music_txt.name = "sal_music_txt";
	this.sal_music_txt.textAlign = "center";
	this.sal_music_txt.lineHeight = 20;
	this.sal_music_txt.lineWidth = 171;
	this.sal_music_txt.parent = this;
	this.sal_music_txt.setTransform(5.5,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPB0QgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAhBIBQgSIAABWQAAALgIAHQgGAGgIAAQgHAAgGgEQgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAgrIg8AMIAAA3QgBAKgGAHQgHAGgJAAQgHAAgFgEgAhXBDQgggfAAgtQAAgtAgghQAhggAtAAQArAAAfAfQAgAdADAsIgUAEQgBglgagZQgbgagjAAQgmAAgZAbQgbAZAAAmQAAAkAbAbQAZAaAmAAIAJAAQgHAIgCAMIAAAAQgtAAghghgAhCAuQgPgOgFgVIAKAAQAFAQAMAMQANANAQAEIgBAKQgUgFgPgPgAhCAJIALgBQAHAUAVAIIgBAKQgdgJgJgcgAgfALQgIgJAAgLQAAgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAJQgJAJgLAAQgNAAgJgJgAgYgYQgFAHAAAIQAAAIAFAFQAHAGAIAAQAIAAAFgGQAGgFAAgIQAAgIgGgHQgFgFgIAAQgIAAgHAFgAAIg3IABgLQAcAJAJAdIgKABQgIgVgUgHgAAng7QgMgMgQgFIAAgKQAVAFAOAPQAPAPAFAUIgKABQgEgQgNgNg");
	this.shape.setTransform(0.5,0.5,2.833,2.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AtqKpIAAlzIAMAAIAAveIbJAAIAAVRg");
	this.shape_1.setTransform(5.5,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.sal_music_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.salsa_music, new cjs.Rectangle(-82,-59.2,175,136.3), null);


(lib.roomba_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.roo_music_txt = new cjs.Text("", "15px 'Verdana'");
	this.roo_music_txt.name = "roo_music_txt";
	this.roo_music_txt.textAlign = "center";
	this.roo_music_txt.lineHeight = 20;
	this.roo_music_txt.lineWidth = 171;
	this.roo_music_txt.parent = this;
	this.roo_music_txt.setTransform(5.5,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPB0QgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAhBIBQgSIAABWQAAALgIAHQgGAGgIAAQgHAAgGgEQgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAgrIg8AMIAAA3QgBAKgGAHQgHAGgJAAQgHAAgFgEgAhXBDQgggfAAgtQAAgtAgghQAhggAtAAQArAAAfAfQAgAdADAsIgUAEQgBglgagZQgbgagjAAQgmAAgZAbQgbAZAAAmQAAAkAbAbQAZAaAmAAIAJAAQgHAIgCAMIAAAAQgtAAghghgAhCAuQgPgOgFgVIAKAAQAFAQAMAMQANANAQAEIgBAKQgUgFgPgPgAhCAJIALgBQAHAUAVAIIgBAKQgdgJgJgcgAgfALQgIgJAAgLQAAgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAJQgJAJgLAAQgNAAgJgJgAgYgYQgFAHAAAIQAAAIAFAFQAHAGAIAAQAIAAAFgGQAGgFAAgIQAAgIgGgHQgFgFgIAAQgIAAgHAFgAAIg3IABgLQAcAJAJAdIgKABQgIgVgUgHgAAng7QgMgMgQgFIAAgKQAVAFAOAPQAPAPAFAUIgKABQgEgQgNgNg");
	this.shape.setTransform(0.5,0.5,2.833,2.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AtqJ1IAAzpIbTAAIAAN2IACAAIAAFzg");
	this.shape_1.setTransform(5.5,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.roo_music_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.roomba_music, new cjs.Rectangle(-82,-48.8,175,125.9), null);


(lib.mernguemusic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.mer_music_txt = new cjs.Text("", "15px 'Verdana'");
	this.mer_music_txt.name = "mer_music_txt";
	this.mer_music_txt.textAlign = "center";
	this.mer_music_txt.lineHeight = 20;
	this.mer_music_txt.lineWidth = 171;
	this.mer_music_txt.parent = this;
	this.mer_music_txt.setTransform(5.5,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPB0QgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAhBIBQgSIAABWQAAALgIAHQgGAGgIAAQgHAAgGgEQgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAgrIg8AMIAAA3QgBAKgGAHQgHAGgJAAQgHAAgFgEgAhXBDQgggfAAgtQAAgtAgghQAhggAtAAQArAAAfAfQAgAdADAsIgUAEQgBglgagZQgbgagjAAQgmAAgZAbQgbAZAAAmQAAAkAbAbQAZAaAmAAIAJAAQgHAIgCAMIAAAAQgtAAghghgAhCAuQgPgOgFgVIAKAAQAFAQAMAMQANANAQAEIgBAKQgUgFgPgPgAhCAJIALgBQAHAUAVAIIgBAKQgdgJgJgcgAgfALQgIgJAAgLQAAgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAJQgJAJgLAAQgNAAgJgJgAgYgYQgFAHAAAIQAAAIAFAFQAHAGAIAAQAIAAAFgGQAGgFAAgIQAAgIgGgHQgFgFgIAAQgIAAgHAFgAAIg3IABgLQAcAJAJAdIgKABQgIgVgUgHgAAng7QgMgMgQgFIAAgKQAVAFAOAPQAPAPAFAUIgKABQgEgQgNgNg");
	this.shape.setTransform(0.5,0.5,2.833,2.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AtqJ1IAAzpIbTAAIAAN2IACAAIAAFzg");
	this.shape_1.setTransform(5.5,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.mer_music_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mernguemusic, new cjs.Rectangle(-82,-48.8,175,125.9), null);


(lib.mc_zuk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.zuk_h = new cjs.Text("זוק", "25px 'Arial'");
	this.zuk_h.name = "zuk_h";
	this.zuk_h.textAlign = "center";
	this.zuk_h.lineHeight = 30;
	this.zuk_h.lineWidth = 69;
	this.zuk_h.parent = this;
	this.zuk_h.setTransform(48,69);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBEQAMgwAEhJQACgdgCgJQgCgOAKgQQAHAKAEABQABAIgEAQQgEAQABAIQADAXgEAjIgGA4IgDAfIgCAWQgBADgMAOQgKgcAGgag");
	this.shape.setTransform(52,19.6,0.949,0.705);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDACQABgJgDgEQADgGADAEQADAFABgBIgEAWIgBACQgCgEgBgJg");
	this.shape_1.setTransform(64.8,21.7,0.949,0.705);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABANQgBgDgEADIAAgSQACgKAHgFIgCAoIgCgHg");
	this.shape_2.setTransform(63.7,22.4,0.949,0.705);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiACQAAgCACgEQANAHAUgBIAigCQgNAEgTABIgfAAIgCAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_3.setTransform(56.2,31.8,0.949,0.705);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBARIABgHQAAgUgDgKQAEADACAHIABAMIAAASIgBABQgDAAgBgEg");
	this.shape_4.setTransform(47.1,63.9,0.949,0.705);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLAMQgCgPACgIQAGgGgEgHQAAgBgBgBQAAgBAAAAQAAgBAAAAQAAAAABAAIADgBQABgBAAAAQABAAAAgBQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQgCALAFAFQADADAJADQgCAFABALQgBAUgLAAQgJgBgCgTg");
	this.shape_5.setTransform(46.1,66.7,0.949,0.705);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMBIQACgJgDgEQgCgEgHgDIgLgEQgIgDgDgFQAKgCAHgMIAHgXQAHgRAAggQAAgFADgNQADgNAAgJQAEAHAAANIAABCQAAAVgFAKQgFANADAQQABAJAGASQgNgDAEgMg");
	this.shape_6.setTransform(53.4,61.1,0.949,0.705);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAFDcQgHgDgEgDQgGgFADgLQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAABQgBAAAAABIgEABQAAAAgBAAQAAAAAAABQAAAAABABQAAABABAAQAEAIgGAGQgHgBAAgLIAAgeQAFgRgFgLIAAgqQgJg1gEgsQgCgSgFgIQADgNgJgUQgKgWALgTQAagsAOgVQAWgiAWgZQABAKgDAnQgCAdAEASQACAPACAFQAOAjABAlQgGAFgEARQgKAPADAFQABADAQAGIAEAAIgBA7QgFAAgHgHIgfgcQgLgKAAAPIgEAnQgDAYACAPQgFAQAIAWQACALAAAUIgBAHQABAEAFAAIAAAOgAgDhZQgNAPgBAMQgDAZAQAlQAVhQAGgRQACgHgGAAQgKABgMAOg");
	this.shape_7.setTransform(46.9,50.8,0.949,0.705);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAZQAFgLAPgWQAOgWAGgOIABAFQgHAtgUAiQgDgGgCABQgCABgHAIQgFgJAFgKg");
	this.shape_8.setTransform(58.5,36.8,0.949,0.705);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLgJQABgZAOgKQgCAKACAMIAEAWQAEAPgBAEQgBALgMAEQgCAAgCAEIgFAHg");
	this.shape_9.setTransform(57.5,43.1,0.949,0.705);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAZQgCgGgFgEQgHgEgBgDQgDgDADgHQAIgOAEgDQAIgIAJAEIADgDQACAAAFgCQAEAAABAFQgEAFADAGQAEAHgBADIgDAOQgDAHgGAAQgCAAgJAIQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgDAAgCgEg");
	this.shape_10.setTransform(77.7,23.3,0.949,0.705);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAdQgFgHgEgMIgIgTQgBgUACgJQAZAlAfgDQAAAEgFAKQgEAJABAGQgGgBgGAGIgJAJQgEgBgHgJg");
	this.shape_11.setTransform(53.9,9,0.949,0.705);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAQBcQgGgFgOgLQgMgKgHgIQAMACABgQQAEglgFgUQgDgRABgWIACgnIAFAPIACAQIAJBAQAHAnABAbQAAAFAFAGQAFAHABAEg");
	this.shape_12.setTransform(59.4,63.7,0.949,0.705);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhCBUQgIgGAFgKIAGgLQAFgGAGADQAWAHAPgHQAPgIAIgYIAkhvIAJAVQAHAQAMgCQgIAJgIAPIgOAaIgSAkIgTAlQgGAOgbAFQgJACgHAAQgOAAgIgGg");
	this.shape_13.setTransform(30.8,25.6,0.949,0.705);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjAbQgRghAHgcQAEgSAJAHQAGAEAEgDQADgBAEgGQAGgIAEgBQAFgCAFAHQAFAHAIgGQAFgGAEAEQACACACAHQADALABANIADATQABAKAFAIQAFAIgCALQgDALgIAHIgPAKIgEAAQgcAAgYgig");
	this.shape_14.setTransform(54.7,4.3,0.949,0.705);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag3BuIABgSQABgKgNACIgiACQgVACgNgIQgBgQAFgFQAEgFAPAAQAKAAAHgFQAFgDAGAEIALAIIAHAFQAEACADgHQAHAHADABIA9AJQALABADgOQALgrACgVQACgQgEgGQgDgGgNgBQgPgBgHASIgBAGQgBAEgCABIgbALQgQAHgMgFIAOgSQAIgKAJgFQABAAAAgLQAEgEABAEIADAHIACgpQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQADAEgBAJQAAAKACAEIADgDIAEgXQAGACAJgGQAJgHAJABQALAAABgCQABgDgFgNIANADQAHACAFAAQANgBAGgJQAHgKAGgBQAHAAAJAJQAWAUAEATQgJgDgNADQgOAEgHAAQgEABAAAJIAAAbQgIAOgHAVIgMAlIgJAfQgIAWgMAHQgLAHgTgHIgkgSQgLgFgDADQgDACgBAOIgCAKg");
	this.shape_15.setTransform(65.9,25.9,0.949,0.705);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVCMIgPgfQgPglANgqQAHgYABgMQACgUgIgRQgDgIADgLQAIgdgHgnIAAgbQAAgKAEAAQAHgBAPgEQAMgCAIADIAAACIgDADQgJgEgIAIQgEADgIAOQgDAIADADQABADAHAEQAFAEACAGQAEAHAEgFQAJgIACAAQAGAAADgHIADgPQABgDgEgHQgDgGAEgFQAPAKgCAVQgCAZAIAdQAHAWgIApIgLAxQgCAKgBAQIAAAbQgSgPgCglQgHAPAGAXQAEAOgEAQIgIAkQgFAVgCARQgDgPgJgTg");
	this.shape_16.setTransform(77.6,33.4,0.949,0.705);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAGCGQgKgGgggbQgGgMAIgQQAMgXgIgVQgFgOALgUIAFgLQADgHgCgIQgIAJgZANQgWAJgJAQQgCAEgKAIQgJAHgCAIQgMADgHgQIgJgWIgCgGQgBgDAGgCQAIgCADgGQAKgQAagWQAagWAJgQQAKgRAPABQAPABAMgJQAKgGALgPIANgOIAHAUQAFAMAEAGQgLAQADAOQACAJgCAdQgFBJgLAwQgHAaAKAcQAOgOABgDIABgWIADgfIAGg5QAEgigCgXQgBgIAEgQQAEgQgCgIIAKgJQAGgGAGABQAHAfAYAJQAHAEABAKIADAcQABAQgCAMQgBAGADABIAHgBQgEAIgLAGQgLAIgEAFQgkAtgLA7QgCAJgEACIgHAAQgUAAgVgNg");
	this.shape_17.setTransform(47.7,18.7,0.949,0.705);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhfEhQgIgggLgMQgFgHABgMIABgUQADgDgBgEIAfh8QALgvAPgdQARgiADgqQAGhUAphZQADgHAFgZIADgSQACgLAGgFQAgAbALAGQAYAPAYgCQgUAngIAyQgWAYgXAjQgOAVgaArQgKATAJAWQAJAUgDANQgnBLgRBTIgBAOIgGAkQgEAWAAAPQAFAJAKAHIARANQAHALgCAFQgCAEgNAHQgpgCgUgag");
	this.shape_18.setTransform(41.5,48.1,0.949,0.705);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AARF5QgBgFgFgGQgFgGgBgGQgBgagFgoIgKhBIgDgPIgEgQIgDAoQAAAWADARQAFAUgEAmQgBAQgMgCQgEAAgGgDIgJgFQgGgSgBgJQgDgQAFgNQAFgKAAgVIAAhDQAAgNgEgHQAAAJgDANQgDANAAAFQAAAggHASIgIAXQgHAMgKACQgJgKAGgTIAMgiIABgWQABgNgCgKIAAg7QAFgcgIgXQgCgmgNghQgCgGgDgOQgEgTACgdQADgnAAgJQAIgyAUgnQADgCACgJQALg7AkgtQAEgFAMgIQAJgGAEgIIAcgcQASgUAXATQAFAFAHAJIALAPQAFANgBACQgBACgLAAQgJAAgJAGQgJAHgHgCQgBABgEgFQgDgEgDAGQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgJAFgBAKIAAATQAAALgBABQgJAFgIAKIgOATQgFAaAGAWQgCAHgEgDIgHgEIgLgIQgGgFgFADQgHAFgKAAQgPAAgEAGQgFAFABAPQgCAFAAACQABADAFAAIAgAAQATgBANgFQAMgCgBALIgBARQgFAOgPAWQgPAXgGALQgEAKAFAJQAHgIACgBQABgBAEAFIgBAGQgPAKgBAZIAAA2QgBAQAHARQAEAKAKASQAIAOgBAJQgBAdAJAgQAEATAPAlIAIAYQACAEABAMQABAKACAGQAAAFADACQgBAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAHADAGQAhAwAoAAQgIAUgfACIgJABQgXAAgVgLg");
	this.shape_19.setTransform(60.1,43.6,0.949,0.705);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDACQADgGAEAGg");
	this.shape_20.setTransform(36.7,71,0.949,0.705);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(153,153,153,0.008)").s().p("AnpITIAAwlIPTAAIAAQlg");
	this.shape_21.setTransform(49,53.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990000").s().p("AgQBEQAMgwAEhJQACgdgCgJQgCgOAKgQQAHAKAEABQABAIgEAQQgEAQABAIQADAXgEAjIgGA4IgDAfIgCAWQgBADgMAOQgKgcAGgag");
	this.shape_22.setTransform(52,19.6,0.949,0.705);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990000").s().p("AgDACQABgJgDgEQADgGADAEQADAFABgBIgEAWIgBACQgCgEgBgJg");
	this.shape_23.setTransform(64.8,21.7,0.949,0.705);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990000").s().p("AABANQgBgDgEADIAAgSQACgKAHgFIgCAoIgCgHg");
	this.shape_24.setTransform(63.7,22.4,0.949,0.705);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990000").s().p("AggACQAAgCACgCQAMAEATgBIAggBQgMADgSAAIgeAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_25.setTransform(56.2,31.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AgBARIABgHQAAgUgDgKQAEADACAHIABAMIAAASIgBABQgDAAgBgEg");
	this.shape_26.setTransform(47.1,63.9,0.949,0.705);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990000").s().p("AgLAMQgCgPACgIQAGgGgEgHQAAgBgBgBQAAgBAAAAQAAgBAAAAQAAAAABAAIADgBQABgBAAAAQABAAAAgBQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQgCALAFAFQADADAJADQgCAFABALQgBAUgLAAQgJgBgCgTg");
	this.shape_27.setTransform(46.1,66.7,0.949,0.705);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990000").s().p("AAMBIQACgJgDgEQgCgEgHgDIgLgEQgIgDgDgFQAKgCAHgMIAHgXQAHgRAAggQAAgFADgNQADgNAAgJQAEAHAAANIAABCQAAAVgFAKQgFANADAQQABAJAGASQgNgDAEgMg");
	this.shape_28.setTransform(53.4,61.1,0.949,0.705);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#990000").s().p("AAFDcQgHgDgEgDQgGgFADgLQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAABQgBAAAAABIgEABQAAAAgBAAQAAAAAAABQAAAAABABQAAABABAAQAEAIgGAGQgHgBAAgLIAAgeQAFgRgFgLIAAgqQgJg1gEgsQgCgSgFgIQADgNgJgUQgKgWALgTQAagsAOgVQAWgiAWgZQABAKgDAnQgCAdAEASQACAPACAFQAOAjABAlQgGAFgEARQgKAPADAFQABADAQAGIAEAAIgBA7QgFAAgHgHIgfgcQgLgKAAAPIgEAnQgDAYACAPQgFAQAIAWQACALAAAUIgBAHQABAEAFAAIAAAOgAgDhZQgNAPgBAMQgDAZAQAlQAVhQAGgRQACgHgGAAQgKABgMAOg");
	this.shape_29.setTransform(46.9,50.8,0.949,0.705);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#990000").s().p("AgTAZQAFgLAPgWQAOgWAGgOIABAFQgHAtgUAiQgDgGgCABQgCABgHAIQgFgJAFgKg");
	this.shape_30.setTransform(58.5,36.8,0.949,0.705);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#990000").s().p("AgLgJQABgZAOgKQgCAKACAMIAEAWQAEAPgBAEQgBALgMAEQgCAAgCAEIgFAHg");
	this.shape_31.setTransform(57.5,43.1,0.949,0.705);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#990000").s().p("AgHAZQgCgGgFgEQgHgEgBgDQgDgDADgHQAIgOAEgDQAIgIAJAEIADgDQACAAAFgCQAEAAABAFQgEAFADAGQAEAHgBADIgDAOQgDAHgGAAQgCAAgJAIQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgDAAgCgEg");
	this.shape_32.setTransform(77.7,23.3,0.949,0.705);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#990000").s().p("AgLAdQgFgHgEgMIgIgTQgBgUACgJQAZAlAfgDQAAAEgFAKQgEAJABAGQgGgBgGAGIgJAJQgEgBgHgJg");
	this.shape_33.setTransform(53.9,9,0.949,0.705);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#990000").s().p("AAQBcQgGgFgOgLQgMgKgHgIQAMACABgQQAEglgFgUQgDgRABgWIACgnIAFAPIACAQIAJBAQAHAnABAbQAAAFAFAGQAFAHABAEg");
	this.shape_34.setTransform(59.4,63.7,0.949,0.705);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#990000").s().p("AhCBUQgIgGAFgKIAGgLQAFgGAGADQAWAHAPgHQAPgIAIgYIAkhvIAJAVQAHAQAMgCQgIAJgIAPIgOAaIgSAkIgTAlQgGAOgbAFQgJACgHAAQgOAAgIgGg");
	this.shape_35.setTransform(30.8,25.6,0.949,0.705);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#990000").s().p("AgjAbQgRghAHgcQAEgSAJAHQAGAEAEgDQADgBAEgGQAGgIAEgBQAFgCAFAHQAFAHAIgGQAFgGAEAEQACACACAHQADALABANIADATQABAKAFAIQAFAIgCALQgDALgIAHIgPAKIgEAAQgcAAgYgig");
	this.shape_36.setTransform(54.7,4.3,0.949,0.705);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#990000").s().p("Ag3BuIABgSQABgKgNACIgiACQgVACgNgIQgBgQAFgFQAEgFAPAAQAKAAAHgFQAFgDAGAEIALAIIAHAFQAEACADgHQAHAHADABIA9AJQALABADgOQALgrACgVQACgQgEgGQgDgGgNgBQgPgBgHASIgBAGQgBAEgCABIgbALQgQAHgMgFIAOgSQAIgKAJgFQABAAAAgLQAEgEABAEIADAHIACgpQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQADAEgBAJQAAAKACAEIADgDIAEgXQAGACAJgGQAJgHAJABQALAAABgCQABgDgFgNIANADQAHACAFAAQANgBAGgJQAHgKAGgBQAHAAAJAJQAWAUAEATQgJgDgNADQgOAEgHAAQgEABAAAJIAAAbQgIAOgHAVIgMAlIgJAfQgIAWgMAHQgLAHgTgHIgkgSQgLgFgDADQgDACgBAOIgCAKg");
	this.shape_37.setTransform(65.9,25.9,0.949,0.705);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("AgVCMIgPgfQgPglANgqQAHgYABgMQACgUgIgRQgDgIADgLQAIgdgHgnIAAgbQAAgKAEAAQAHgBAPgEQAMgCAIADIAAACIgDADQgJgEgIAIQgEADgIAOQgDAIADADQABADAHAEQAFAEACAGQAEAHAEgFQAJgIACAAQAGAAADgHIADgPQABgDgEgHQgDgGAEgFQAPAKgCAVQgCAZAIAdQAHAWgIApIgLAxQgCAKgBAQIAAAbQgSgPgCglQgHAPAGAXQAEAOgEAQIgIAkQgFAVgCARQgDgPgJgTg");
	this.shape_38.setTransform(77.6,33.4,0.949,0.705);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AAGCGQgKgGgggbQgGgMAIgQQAMgXgIgVQgFgOALgUIAFgLQADgHgCgIQgIAJgZANQgWAJgJAQQgCAEgKAIQgJAHgCAIQgMADgHgQIgJgWIgCgGQgBgDAGgCQAIgCADgGQAKgQAagWQAagWAJgQQAKgRAPABQAPABAMgJQAKgGALgPIANgOIAHAUQAFAMAEAGQgLAQADAOQACAJgCAdQgFBJgLAwQgHAaAKAcQAOgOABgDIABgWIADgfIAGg5QAEgigCgXQgBgIAEgQQAEgQgCgIIAKgJQAGgGAGABQAHAfAYAJQAHAEABAKIADAcQABAQgCAMQgBAGADABIAHgBQgEAIgLAGQgLAIgEAFQgkAtgLA7QgCAJgEACIgHAAQgUAAgVgNg");
	this.shape_39.setTransform(47.7,18.7,0.949,0.705);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#990000").s().p("AhfEhQgIgggLgMQgFgHABgMIABgUQADgDgBgEIAfh8QALgvAPgdQARgiADgqQAGhUAphZQADgHAFgZIADgSQACgLAGgFQAgAbALAGQAYAPAYgCQgUAngIAyQgWAYgXAjQgOAVgaArQgKATAJAWQAJAUgDANQgnBLgRBTIgBAOIgGAkQgEAWAAAPQAFAJAKAHIARANQAHALgCAFQgCAEgNAHQgpgCgUgag");
	this.shape_40.setTransform(41.5,48.1,0.949,0.705);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990000").s().p("AARF5QgBgFgFgGQgFgGgBgGQgBgagFgoIgKhBIgDgPIgEgQIgDAoQAAAWADARQAFAUgEAmQgBAQgMgCQgEAAgGgDIgJgFQgGgSgBgJQgDgQAFgNQAFgKAAgVIAAhDQAAgNgEgHQAAAJgDANQgDANAAAFQAAAggHASIgIAXQgHAMgKACQgJgKAGgTIAMgiIABgWQABgNgCgKIAAg7QAFgcgIgXQgCgmgNghQgCgGgDgOQgEgTACgdQADgnAAgJQAIgyAUgnQADgCACgJQALg7AkgtQAEgFAMgIQAJgGAEgIIAcgcQASgUAXATQAFAFAHAJIALAPQAFANgBACQgBACgLAAQgJAAgJAGQgJAHgHgCQgBABgEgFQgDgEgDAGQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgJAFgBAKIAAATQAAALgBABQgJAFgIAKIgOATQgFAaAGAWQgCAHgEgDIgHgEIgLgIQgGgFgFADQgHAFgKAAQgPAAgEAGQgFAFABAPQgCAFAAACQABADAFAAIAgAAQATgBANgFQAMgCgBALIgBARQgFAOgPAWQgPAXgGALQgEAKAFAJQAHgIACgBQABgBAEAFIgBAGQgPAKgBAZIAAA2QgBAQAHARQAEAKAKASQAIAOgBAJQgBAdAJAgQAEATAPAlIAIAYQACAEABAMQABAKACAGQAAAFADACQgBAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAHADAGQAhAwAoAAQgIAUgfACIgJABQgXAAgVgLg");
	this.shape_41.setTransform(60.1,43.6,0.949,0.705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.zuk_h}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.zuk_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,107.2);


(lib.mc_tango = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.tango_h = new cjs.Text("טנגו", "25px 'Arial'");
	this.tango_h.name = "tango_h";
	this.tango_h.textAlign = "center";
	this.tango_h.lineHeight = 30;
	this.tango_h.lineWidth = 69;
	this.tango_h.parent = this;
	this.tango_h.setTransform(45.3,71.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("Ag+CEQhIgvgXhMQgNgrAHgoQAIgwAigXQAmgbAqAPQAkAMAOAhQAdgMAgAIQAqALAaAlQAYAkAEAtQADAvgTAlQgVApgpAPQgbAKgbAAQgvAAgxgfg");
	this.shape.setTransform(25.9,40,0.226,0.26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#040404").s().p("AgRAMIAVgcIAOAPQgFASgNAAQgIAAgJgFg");
	this.shape_1.setTransform(58.3,70.8,0.226,0.26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#040404").s().p("AKvUUQghgdgMhKQgOhPgYgcIgPgPQASg/AEgIQASgnAogQQgkgXhMgfQhGgegigXQgegVgpAKQgoALgkAlQgyA1gLBDQgIA0AOBPQALA4gWAaQgUAZg8AGQiWAOh6gCQgZADgMgBQgVgCgGgTQgHgYAUgNQALgHAcgKQA4gaAfhdQAhhcgeg1QgHgNgNgDIgZgDQhugIh6gdQhkgXh/grQgigMgRgBQgdgCgcAPIkICQQiVBVhnBSQh6Bfg1AXQhtAuhrg3IAAhAQA/gtC4hUQCihJBQhMQDHi8EEhwQBtgvBmhyQA6hDBriPQAggqAAglQgBgwg/gUQgbgIgPgUQgPgVAFgUQAYhgg3gpQgfgXhlgWQgggSgRgFQgcgJgSAmQgiBEhDAPQgxAKhOgTQg8gOgsg6QgOgTgyhdQgHgLA4hcQA3hcAQgJQAWgMAogYQAlgQApAOQCuA8BJAHQCNAMBrhWQAagVAUgbQAYgegLgFQhFgjgrhRQgphhgZgwQgfg3ANgiQAJgbAugaQB9hKB+ARQAwAGAjAbQAhAaAYAwQAKATgBBNQAAA6AlAIQAnAIAkg0QAthGATgLQBrhBgMiCQgFg6ADgYQAGguAfgdIA/AAQAYASA8BUQAvBEA1APQArANA3AkQBSA1AKAFQAzAbAmAwQAnAxAAApQgBAvgzAkQguAfhBAMQgdAFgqAOIhFAYQgjALgOAQQgVAVAGAiQARBeATA7QAbBQAsBBQAlA0BOBmQBDBcAeBJQAQAoACAMQAEAegUAZQhDBQAFAVQAGAWBhAfQBIAXAWAsQAVArgZBCIgjBfQgXA3gfAjQghAlABAbQACAmA/AeQAyAWDmBNQCsA6BgBDIAAAqQiKA+gxBSQgtBNhJAGQgbADgpgGIhLgNIAPgSQAGgIAFgEQAOgKAogNQAfgOgIgfQgKgjgfgTQgfgSgsAEQgoADgvgQQgbgJg4gbQgSgLgJgDQgRgFgIATQgPAqg1BOQgjBJAuBBgAMLHdQgkAUADAsQACAZAKA0IAxiHIgPgFIgIgCIgFABgAGvvaQgoA0AbAaQAlAnBHgDQAxgCBNgZQgTgzg5gwIhhhSQACAfgyA/g");
	this.shape_2.setTransform(45,42.3,0.226,0.26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,153,153,0.008)").s().p("AnpITIAAwlIPTAAIAAQlg");
	this.shape_3.setTransform(49,53.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("Ag+CEQhIgvgXhMQgNgrAHgoQAIgwAigXQAmgbAqAPQAkAMAOAhQAdgMAgAIQAqALAaAlQAYAkAEAtQADAvgTAlQgVApgpAPQgbAKgbAAQgvAAgxgfg");
	this.shape_4.setTransform(25.9,40,0.226,0.26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgRAMIAVgcIAOAPQgFASgNAAQgIAAgJgFg");
	this.shape_5.setTransform(58.3,70.8,0.226,0.26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AKvUUQghgdgMhKQgOhPgYgcIgPgPQASg/AEgIQASgnAogQQgkgXhMgfQhGgegigXQgegVgpAKQgoALgkAlQgyA1gLBDQgIA0AOBPQALA4gWAaQgUAZg8AGQiWAOh6gCQgZADgMgBQgVgCgGgTQgHgYAUgNQALgHAcgKQA4gaAfhdQAhhcgeg1QgHgNgNgDIgZgDQhugIh6gdQhkgXh/grQgigMgRgBQgdgCgcAPIkICQQiVBVhnBSQh6Bfg1AXQhtAuhrg3IAAhAQA/gtC4hUQCihJBQhMQDHi8EEhwQBtgvBmhyQA6hDBriPQAggqAAglQgBgwg/gUQgbgIgPgUQgPgVAFgUQAYhgg3gpQgfgXhlgWQgggSgRgFQgcgJgSAmQgiBEhDAPQgxAKhOgTQg8gOgsg6QgOgTgyhdQgHgLA4hcQA3hcAQgJQAWgMAogYQAlgQApAOQCuA8BJAHQCNAMBrhWQAagVAUgbQAYgegLgFQhFgjgrhRQgphhgZgwQgfg3ANgiQAJgbAugaQB9hKB+ARQAwAGAjAbQAhAaAYAwQAKATgBBNQAAA6AlAIQAnAIAkg0QAthGATgLQBrhBgMiCQgFg6ADgYQAGguAfgdIA/AAQAYASA8BUQAvBEA1APQArANA3AkQBSA1AKAFQAzAbAmAwQAnAxAAApQgBAvgzAkQguAfhBAMQgdAFgqAOIhFAYQgjALgOAQQgVAVAGAiQARBeATA7QAbBQAsBBQAlA0BOBmQBDBcAeBJQAQAoACAMQAEAegUAZQhDBQAFAVQAGAWBhAfQBIAXAWAsQAVArgZBCIgjBfQgXA3gfAjQghAlABAbQACAmA/AeQAyAWDmBNQCsA6BgBDIAAAqQiKA+gxBSQgtBNhJAGQgbADgpgGIhLgNIAPgSQAGgIAFgEQAOgKAogNQAfgOgIgfQgKgjgfgTQgfgSgsAEQgoADgvgQQgbgJg4gbQgSgLgJgDQgRgFgIATQgPAqg1BOQgjBJAuBBgAMLHdQgkAUADAsQACAZAKA0IAxiHIgPgFIgIgCIgFABgAGvvaQgoA0AbAaQAlAnBHgDQAxgCBNgZQgTgzg5gwIhhhSQACAfgyA/g");
	this.shape_6.setTransform(45,42.3,0.226,0.26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.tango_h}]}).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.tango_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,108.3);


(lib.mc_samba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.samba_h = new cjs.Text("סמבה", "25px 'Arial'");
	this.samba_h.name = "samba_h";
	this.samba_h.textAlign = "center";
	this.samba_h.lineHeight = 30;
	this.samba_h.lineWidth = 67;
	this.samba_h.parent = this;
	this.samba_h.setTransform(45.4,67);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOABIALgKIAHAAIALAJQgHAKgIAAQgGAAgIgJg");
	this.shape.setTransform(37.6,18.7,0.121,0.121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAEIAJgdIARAoQgCAIgJADQgRgIACgOg");
	this.shape_1.setTransform(37.3,18.4,0.121,0.121);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAgQAKgRgFgRQgDgRgWgWQAmASAFARQAFAOgSAhQgIAAgCgJg");
	this.shape_2.setTransform(37.6,18.2,0.121,0.121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040003").s().p("AgCAoQgWgQgMgYQgQghAPgSQAPgSAjALQAOAFAIAKQAJAKABAPIAABRQgegKgRgNg");
	this.shape_3.setTransform(49.9,22.9,0.121,0.121);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFBFC").s().p("AhigDQgEhSABgUIDNAsQghAchBA4Qg7A0gyAfQAJgugEg/g");
	this.shape_4.setTransform(40.4,25.9,0.121,0.121);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah/DDIgYieQgMAAgHALQgFANgFAFIgOAVQgKAKgNgEQgUgFgFgjIgHhTIgCgUQgBgLgEgIQgDgFgSgKQgOgIADgLQAMgpAdg8QAKgVAiAIQAnAJAOAFQAdAKASARQAGAFBhBEQA9ArAYAxQAIANAbACIAsADIAXABQAOAAAFAJQAGAMgOAHQgRAJgBAIQAMAOAXACIAmADQALADAVACQAMAHgWAgQgVAggTABQgMABgdgQQgVgLgYAIIA8AwQATAPgMAPQgLAOgUgNQgmgYgYgVQgfgcgUgeQgXgigJgKQgggigtALQgSAFgJARQgFALgDAWQgDAUgBAcIgCAvQgBAOgCAFQgEAJgMACIgFAAQgWAAgDgZg");
	this.shape_5.setTransform(54.3,25,0.121,0.121);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66003D").s().p("AgEgaQAPAMgCAOQgCAKgMASQgGgfAHgXg");
	this.shape_6.setTransform(29,15.6,0.121,0.121);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#191518").s().p("AgEAWQgYgBgMgVIAqgRQA0gRgRA0QgZAEgNAAIgDAAg");
	this.shape_7.setTransform(42,73.8,0.121,0.121);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#010001").s().p("AAEBpIg4gGQgigEgXADIgCjGQAngHA1ACQAdACA9AHQAUABACAHQAOA2ADAaQAFAtgMAiQgKAcgfAGQgHACgPAAIgkgCg");
	this.shape_8.setTransform(27,74.6,0.121,0.121);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABNDSQgFgEgKgEIgQgGQglg/hPg4Qh9hWA4iIQAHgQANgXIAVgnQANB1BxgKQAHAAAJADIARAHQAXAIgCAVQgBANgJAEQgGACgNAAQgcgDgNAAQgVACgIATQgPAoAtAwQApAqBKAkQAaANADATQACAPgOAYQgQAbgUAAQgPAAgRgOg");
	this.shape_9.setTransform(30.9,34.6,0.121,0.121);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ADEDBQgHgHAAgSQABgZAAgMQgBgWgLgNQgMgWgZACQgcAFgOgCQgbAHgVAXQgMANgVAgQgaAogwgCQhggChhABQhAAAAWg7QASgPAwgUQAsgTATgUQAGgIAOAAIAXADQBBAFATgHQASgHAtgxIhwgjQgPgDgHgDQgMgGAGgRQAFgSAMgCQAIgCASAFIA8AOIA8AOQAuAIAdgQQAegPAUgrQAQggAUgUQAZgYAYACQASABAIAgQACAIAGAxQAKBKgjAsQgaAiAHAnIgDBVQAAAQgFAHQgGAIgQAAIgCAAQgQAAgHgGg");
	this.shape_10.setTransform(40.3,72.9,0.121,0.121);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjfE/Qg3gBgLgoQgGgUAOgPIAegWIA6giQAkgUATgTQAVgNAdABQARAAAiAFQAkAEAOgCQAcgEAPgXQALgQgDg1QgDgygLgQQgHgIgMgEIgVgFQgYgHgzAAQgzAAgYgHQgEgIABgLIAEgUQBAgKAggDQA1gFArADQAaACAFgSIADgfQAJhgAkhHQBCAoAbA1QAdA5gNBLQgGAgAQAmQAJAXAXApQAJAUAAAFQABAMgQAHQgQAIgHgLQgGgPgDgHQgQgkgKgRQgQgdgVgRQgpA1gTBIQgQA3gGBSQgFAzgPAQQgQAQgxADIh3AIQgvACgoAAIggAAg");
	this.shape_11.setTransform(27.3,74,0.121,0.121);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AguC/IgKloQgBgfgRgIQgRgIgaASQgiAZgfAyQgIAPgLAFQgNAHgNgHQgOgHABgPQABgJAHgRIAagwQAQgfAIgSQAQglAFgyQACgWABhEQABgbAIhIQABgMAHgGQAHgIALABQARACADAYIACAjQABAVADAOQACAIgDAWQAAASASAAIAsABQAZgDANgSQAEgFAGgMQAOgSAEgDQALgJAPAGQANAHAAANIgGAZQgCAGABADQAAAEgJAWQgGAQANAHQALAGAOgJIAXgRQAKgFAUgQQASgLALAOQALAOgMASQgKANgSALQgqAXgHAiQgHAcAPAyQAnB9AoCtQAXBkArDKIgFACQhigEg2AjQg1AjgjBcQghiYgKjPg");
	this.shape_12.setTransform(29,8.4,0.121,0.121);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjkD7QgogIgdgiQgjgrgKgmQgOgvAWguQAkhPA/hLQAzg+BOhFQAygGA6AMQAhAGBHAXQCLAtBoABQgWAZgKAqQgFAYgIAxIgSBUQgMAxgQAhQhBgBgpgHQg5gKgrgbQgVgBgOAPQgJAKgMAVQg4BJhXAfQggAMgbAAQgLAAgLgCg");
	this.shape_13.setTransform(38.5,23.5,0.121,0.121);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsGYQhSgHgxgIQhLgLgSgiQgTgiAhhGQAVgrAhg/IA4hqQAkhDANggQAWg6AEgzIADgbQACgQgEgMIgCgPQAPhhBIgwQBJgvBVAgIAhADQgPBKgBBhIAFCsQABA4AyBHQAeAsgCA4QgCA6gjAnQgdAhguAuIhNBNQgigEhhgIg");
	this.shape_14.setTransform(29.8,18.1,0.121,0.121);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AixFgQgigygPgbIggg3QAKgIAMADQAFABAPAIQAfAQASgiQAPgcgggSIgzgeQgdgSgSgTQgegegJgQQgWgnANgaQAOgaAtgFIANgCQAIgCAGgGQgIgOgSgGQgHgCgZgEQhAgIgTgWQgSgVABhAIgSixIAFgIQADgFABgEQAHgeALgHQAOgIAbAVQASAPAdAGQARAEAjADQBfAJCEAXIDgApQAXAEAIAKQAIAKgEAZQgEAUABAsQAAAqgEAWQgDAPAKAKQAHAIAQAHQAWAKAUAfIA0BMIA1BLIAOAUQAHAMgGAMQAIBKgNAWQgOAUhIAeQiUA7h1gCQg3gCg2AgQgPAJhMA4QgKgkgdgug");
	this.shape_15.setTransform(34.6,34.3,0.121,0.121);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAQIIQhQgCg5gLQhJgPg5giQgLgGABgKIAFgSQAEgZATgmQAWgsAFgRQAcg/gIhPQgEgogZhkQgBgFgIgGQg4gtgIgsQgHgsAjhEQADgHgBgKIgCgRQAAgwACgVQADgnAKgeQAsiAB/gUQBGgKA1AJQA/AMAyAnQB6BjgYCYQgDASAAAGQABAMAIALQAgAqgKAvQgKAvguAaIgLAFQgGADgCAGQggBUgJAlQgRBFAKA7QADAOAKAMQAGAHAPAOIhUBfQgvA4gfAsQgFAJgEAEQgFAGgGAAIgBAAg");
	this.shape_16.setTransform(54.5,15.1,0.121,0.121);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Al6I0QgYgagGgCIA+hdQAMgjAeghQAPgRApgmQBBg8AJg3QAIg3gshKQgqhHAAhGQgBicABhOQAAgeAEgOQAFgXASgOIAuhTQA5hoB9gHQB9gIBEBiQAcApAkAQQAjAQARAjQAOAdADAsQAGBbgWBXQgLAtAGAzQAFApASA0QAHAUATARQALAKAYARQAVASgFARQgDAJgKgCIgRgBIgPABQhXAFgfgKQg6gSgQhKQgeAYgGAiQgEAZAJAmQhnBXg6A8QhVBVg3BTQgNATgcAHIhGAPQgoAJgcAOQgHADgHAAQgNAAgLgMg");
	this.shape_17.setTransform(35.1,17.8,0.121,0.121);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AGZLRQgmgCg7ABIhhAAQg4gBgSgoQgGgNgBAAQgmAHgcgiIgWgdQgNgRgLgIQgngdgRgnQgTgrANgwQAEgQgBgHQgCgLgNgIQhWgzhRhUQg6g7hQhoQgSgXgUgGQgSgGgdAHQgqAJgxAeQgdAQg3AkQgOhBAWhCQARgzArhAQAYgiAkguIBAhNQAMgPADgLQAEgOgHgRQgKgWABgiIACg6QBDhmB4gDQB4gECNgzQBAgXARgVQASgWAEhAQAQgJAOAIQAIAGAKAPQAfAyAtAlQAqAjA7AbQAqATAtAwQAaAbAyA5QARASgCAXQgBAQAGAQQAFAKAMARQAhArgaA2QgLAYAEAmIAIA/QAAAEAEAPQADAMgCAIQAIASAFAcIAIAxQAHAcgEAPQgFAVgZAKQgOAGgCALQgBAIAFAQQAFAMAHAiQAHAdAHAQQALAcgBA1QAAA4AIAaQAHASAGAfIAKAzQAKAugLAPQgLAQguACQgkACgHAEQgTAIgFAhQgEAWgVAUQgYAXgfAAIgEAAg");
	this.shape_18.setTransform(38,44.8,0.121,0.121);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AEyLiQg/gMhXgkQgegMgKgeQgPghABgvQAFg2ABgbQAAgJAEgZQADgWgBgNQgyAVhCAMQgdAEhbALQgmAEgZgYQgZgXgDgqIgIhAIgJhBQgDgYgNgHQgNgHgXAHQgwAPgyAcQgnAVgzAlIg0AnIg0AmQghAWgSAJQgeAOgcABQgtgNAGg1QACgRgBgeQgBgiABgNQACgbgLgNQgKgNgagEIjQgmQh6gVhYgIIgmgEQgVgEgOgHQgfgRgYADQgaACgWAaQg0gpgUhSQgVhUAahJQArh1BJg0QAsAcA9gPQAigJBEgUQAPgCAOgPIAVgdQBeiBCkiKIAPgMQAJgFALAEIAnAWQACAPgKALQgGAGgPALQh4Btg8B6QgXAvAJAzQAJAyAlAkQAgAeAoACQAoACAygZQBAggA1hEQAWgbACgBQARgNAWASQAHAfABArIAABLQABArAfgcIBMhAQAugmAcgdQASgrAOhCQAPhKAIglQAIglAEgIQAKgXAYgIIEHgEQArAAAZgWQB2hkCMgUQBPgLBeg+QAKAUgLAWQgFAMgPAXQgTAtAFAOQAFANAsAVQBGAiBdABQAcAAAUgKQATgKAPgXQASgcAjgoIA5hBQAJgMAHgEQAKgHALAAQAQgIAXAJICNAxQBSAdA5AZQBiAtAfBCQAdBBgcBqQgEAPAGAMQACAGAMAPQA4BEAQBIQAIAkgJAZQgKAdgeALQgtARgoAvQgqA3gXAaQgUAXgLAHQgTANgXgEQgWgEgaAbQgLAKgHADQgLAFgLgHQgagRgLALQgGAGgIAfQgxC1ApCuQgMAcgqAMQgqANjUBLQibA3hoAUQghAHgjAAQgqAAgtgKg");
	this.shape_19.setTransform(46,27.8,0.121,0.121);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AbMZ9QgsgJghgbIgSgOIgSgNQhBg4g9gPQhFgShNAgQgzAVgdgOQgcgOgNgxQhAj/irmNQhdjVgthqQhNi4gwiMQhakGg/igQhbjlhfi1QgQgdgMAAQgKgBgRAYQg0BIg3BpQgfA9g9B8IhwDkQgtBdg+A3QgSAQgKAXQgIASgFAdQgbCdgeD+QgnFDgNBXQgIBBgZAiQgJALAAAPQAAAIAEASQAHAnAFBBQAGBOADAaQAGApgVBCQgXBIAAAhQAAAOgOAFQgGACgTACIg5AEIg5ACQgQgRADgUQADgNAOgWQAuhHgchcQgIgYgMgDQgLgCgSAQQgYAVgMAaQgWAqgeARQgeARgvgEQgUgCgegGIgwgMQgRgFgJgCQgQgCgNAKQARANAdAIIAuAPQAcANADALQADALgUAXQguA1g3gMQgdgHgbAGQgZAGgbASQgaASgSAIQgaAMgZAAIgdgJQgagGgEgXQgEgZAcgPICBg/QAVgKALgJQARgLAJgPQgMgKgrgHQgigHgHgUQgGgSAEggIAHg2QAEicAbjJQAJhFAtkeQAZifAFiVIAAgQQgBgJgHgHQgngogag8QgSgogVhIQgUhEgshYIhNiXQgGgNgGgBQgFgBgLAKQiABxhxBgQhOBBgeBXQgcBTAOBoQAaDKgqDcQgiC1hWDgQgLAcgaA4QgSAxAOAqQgEAkgPA/QgQBFgEAeQgCAKgHAIQgIAHgLAAQgigCg+AIQhCAIgegBQgEAAgJgHQAAieArhzQAth3AHiRQAFhpgPiiQgRizgJi9QgDg+gYhPQgticBOiXQAlhKA3hZQAggzBFhqICTjmQAjguA3gbQAsgWBDgNQAXgFATAPQALAIAVAZIBpB/QA+BGA6AqIAQANQAJAHAHAEQAkATAOAXQAQAbgKAnQgGAYANAaQAHAOAUAaQAeAlAVAVQAeAdAfAQIAIADQAEACACACQAxA2BUABQAVABA0gEQAvgEAZACQAXABAUgTQARgQAIgYQAKgbAQgLQAPgLAcgCQAvgDALgQQAKgPgNguQgghxAEhXQABgYgKgjQgOgmgFgTQgIgbACgQQADgWAVgQQANgJADgRIgBghIgLg1QgHggAIgWQAlgpArhLQA6hlANgUQAggvgFg9QgFhAAAhZIACiaQABgUAFgLQAGgQARgGQBKAxBNAUQCVAnCpg4ICzg/QBrglBJgUQAPgEAcgQQAagQARgEQApAeAOAdQARAkgRAsQgFANAGAMQADAHALANQAUAYAJAdQAIAbgBAjQgDB8AzBsQAsBdAlB0QAbBVAhCCQAcBzA5ChIBhEPQBDDDB/FMQCSF/A0CPQARAxAmBiQAeBWAJBBIAGApQADAXgEAPQgWBHAgBIQALAXBBBiIAMAQQAHAKADAHQAOAhgWAhQgVAhgmACIgcABQgfAAgYgFg");
	this.shape_20.setTransform(48.6,54.5,0.121,0.121);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(153,153,153,0.008)").s().p("AnpITIAAwlIPTAAIAAQlg");
	this.shape_21.setTransform(48.5,51.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990000").s().p("AgOABIALgKIAHAAIALAJQgHAKgIAAQgGAAgIgJg");
	this.shape_22.setTransform(37.6,18.7,0.121,0.121);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990000").s().p("AgMAEIAJgdIARAoQgCAIgJADQgRgIACgOg");
	this.shape_23.setTransform(37.3,18.4,0.121,0.121);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990000").s().p("AgCAgQAKgRgFgRQgDgRgWgWQAmASAFARQAFAOgSAhQgIAAgCgJg");
	this.shape_24.setTransform(37.6,18.2,0.121,0.121);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990000").s().p("AgCAoQgWgQgMgYQgQghAPgSQAPgSAjALQAOAFAIAKQAJAKABAPIAABRQgegKgRgNg");
	this.shape_25.setTransform(49.9,22.9,0.121,0.121);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("Ah/DDIgYieQgMAAgHALQgFANgFAFIgOAVQgKAKgNgEQgUgFgFgjIgHhTIgCgUQgBgLgEgIQgDgFgSgKQgOgIADgLQAMgpAdg8QAKgVAiAIQAnAJAOAFQAdAKASARQAGAFBhBEQA9ArAYAxQAIANAbACIAsADIAXABQAOAAAFAJQAGAMgOAHQgRAJgBAIQAMAOAXACIAmADQALADAVACQAMAHgWAgQgVAggTABQgMABgdgQQgVgLgYAIIA8AwQATAPgMAPQgLAOgUgNQgmgYgYgVQgfgcgUgeQgXgigJgKQgggigtALQgSAFgJARQgFALgDAWQgDAUgBAcIgCAvQgBAOgCAFQgEAJgMACIgFAAQgWAAgDgZg");
	this.shape_26.setTransform(54.3,25,0.121,0.121);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990000").s().p("AgEgaQAPAMgCAOQgCAKgMASQgGgfAHgXg");
	this.shape_27.setTransform(29,15.6,0.121,0.121);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990000").s().p("AgEAWQgYgBgMgVIAqgRQA0gRgRA0QgZAEgNAAIgDAAg");
	this.shape_28.setTransform(42,73.8,0.121,0.121);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#990000").s().p("AAEBpIg4gGQgigEgXADIgCjGQAngHA1ACQAdACA9AHQAUABACAHQAOA2ADAaQAFAtgMAiQgKAcgfAGQgHACgPAAIgkgCg");
	this.shape_29.setTransform(27,74.6,0.121,0.121);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#990000").s().p("ABNDSQgFgEgKgEIgQgGQglg/hPg4Qh9hWA4iIQAHgQANgXIAVgnQANB1BxgKQAHAAAJADIARAHQAXAIgCAVQgBANgJAEQgGACgNAAQgcgDgNAAQgVACgIATQgPAoAtAwQApAqBKAkQAaANADATQACAPgOAYQgQAbgUAAQgPAAgRgOg");
	this.shape_30.setTransform(30.9,34.6,0.121,0.121);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#990000").s().p("ADEDBQgHgHAAgSQABgZAAgMQgBgWgLgNQgMgWgZACQgcAFgOgCQgbAHgVAXQgMANgVAgQgaAogwgCQhggChhABQhAAAAWg7QASgPAwgUQAsgTATgUQAGgIAOAAIAXADQBBAFATgHQASgHAtgxIhwgjQgPgDgHgDQgMgGAGgRQAFgSAMgCQAIgCASAFIA8AOIA8AOQAuAIAdgQQAegPAUgrQAQggAUgUQAZgYAYACQASABAIAgQACAIAGAxQAKBKgjAsQgaAiAHAnIgDBVQAAAQgFAHQgGAIgQAAIgCAAQgQAAgHgGg");
	this.shape_31.setTransform(40.3,72.9,0.121,0.121);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#990000").s().p("AjfE/Qg3gBgLgoQgGgUAOgPIAegWIA6giQAkgUATgTQAVgNAdABQARAAAiAFQAkAEAOgCQAcgEAPgXQALgQgDg1QgDgygLgQQgHgIgMgEIgVgFQgYgHgzAAQgzAAgYgHQgEgIABgLIAEgUQBAgKAggDQA1gFArADQAaACAFgSIADgfQAJhgAkhHQBCAoAbA1QAdA5gNBLQgGAgAQAmQAJAXAXApQAJAUAAAFQABAMgQAHQgQAIgHgLQgGgPgDgHQgQgkgKgRQgQgdgVgRQgpA1gTBIQgQA3gGBSQgFAzgPAQQgQAQgxADIh3AIQgvACgoAAIggAAg");
	this.shape_32.setTransform(27.3,74,0.121,0.121);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#990000").s().p("AguC/IgKloQgBgfgRgIQgRgIgaASQgiAZgfAyQgIAPgLAFQgNAHgNgHQgOgHABgPQABgJAHgRIAagwQAQgfAIgSQAQglAFgyQACgWABhEQABgbAIhIQABgMAHgGQAHgIALABQARACADAYIACAjQABAVADAOQACAIgDAWQAAASASAAIAsABQAZgDANgSQAEgFAGgMQAOgSAEgDQALgJAPAGQANAHAAANIgGAZQgCAGABADQAAAEgJAWQgGAQANAHQALAGAOgJIAXgRQAKgFAUgQQASgLALAOQALAOgMASQgKANgSALQgqAXgHAiQgHAcAPAyQAnB9AoCtQAXBkArDKIgFACQhigEg2AjQg1AjgjBcQghiYgKjPg");
	this.shape_33.setTransform(29,8.4,0.121,0.121);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#990000").s().p("AjkD7QgogIgdgiQgjgrgKgmQgOgvAWguQAkhPA/hLQAzg+BOhFQAygGA6AMQAhAGBHAXQCLAtBoABQgWAZgKAqQgFAYgIAxIgSBUQgMAxgQAhQhBgBgpgHQg5gKgrgbQgVgBgOAPQgJAKgMAVQg4BJhXAfQggAMgbAAQgLAAgLgCg");
	this.shape_34.setTransform(38.5,23.5,0.121,0.121);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#990000").s().p("AgsGYQhSgHgxgIQhLgLgSgiQgTgiAhhGQAVgrAhg/IA4hqQAkhDANggQAWg6AEgzIADgbQACgQgEgMIgCgPQAPhhBIgwQBJgvBVAgIAhADQgPBKgBBhIAFCsQABA4AyBHQAeAsgCA4QgCA6gjAnQgdAhguAuIhNBNQgigEhhgIg");
	this.shape_35.setTransform(29.8,18.1,0.121,0.121);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#990000").s().p("AixFgQgigygPgbIggg3QAKgIAMADQAFABAPAIQAfAQASgiQAPgcgggSIgzgeQgdgSgSgTQgegegJgQQgWgnANgaQAOgaAtgFIANgCQAIgCAGgGQgIgOgSgGQgHgCgZgEQhAgIgTgWQgSgVABhAIgSixIAFgIQADgFABgEQAHgeALgHQAOgIAbAVQASAPAdAGQARAEAjADQBfAJCEAXIDgApQAXAEAIAKQAIAKgEAZQgEAUABAsQAAAqgEAWQgDAPAKAKQAHAIAQAHQAWAKAUAfIA0BMIA1BLIAOAUQAHAMgGAMQAIBKgNAWQgOAUhIAeQiUA7h1gCQg3gCg2AgQgPAJhMA4QgKgkgdgug");
	this.shape_36.setTransform(34.6,34.3,0.121,0.121);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#990000").s().p("AAQIIQhQgCg5gLQhJgPg5giQgLgGABgKIAFgSQAEgZATgmQAWgsAFgRQAcg/gIhPQgEgogZhkQgBgFgIgGQg4gtgIgsQgHgsAjhEQADgHgBgKIgCgRQAAgwACgVQADgnAKgeQAsiAB/gUQBGgKA1AJQA/AMAyAnQB6BjgYCYQgDASAAAGQABAMAIALQAgAqgKAvQgKAvguAaIgLAFQgGADgCAGQggBUgJAlQgRBFAKA7QADAOAKAMQAGAHAPAOIhUBfQgvA4gfAsQgFAJgEAEQgFAGgGAAIgBAAg");
	this.shape_37.setTransform(54.5,15.1,0.121,0.121);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("Al6I0QgYgagGgCIA+hdQAMgjAeghQAPgRApgmQBBg8AJg3QAIg3gshKQgqhHAAhGQgBicABhOQAAgeAEgOQAFgXASgOIAuhTQA5hoB9gHQB9gIBEBiQAcApAkAQQAjAQARAjQAOAdADAsQAGBbgWBXQgLAtAGAzQAFApASA0QAHAUATARQALAKAYARQAVASgFARQgDAJgKgCIgRgBIgPABQhXAFgfgKQg6gSgQhKQgeAYgGAiQgEAZAJAmQhnBXg6A8QhVBVg3BTQgNATgcAHIhGAPQgoAJgcAOQgHADgHAAQgNAAgLgMg");
	this.shape_38.setTransform(35.1,17.8,0.121,0.121);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AGZLRQgmgCg7ABIhhAAQg4gBgSgoQgGgNgBAAQgmAHgcgiIgWgdQgNgRgLgIQgngdgRgnQgTgrANgwQAEgQgBgHQgCgLgNgIQhWgzhRhUQg6g7hQhoQgSgXgUgGQgSgGgdAHQgqAJgxAeQgdAQg3AkQgOhBAWhCQARgzArhAQAYgiAkguIBAhNQAMgPADgLQAEgOgHgRQgKgWABgiIACg6QBDhmB4gDQB4gECNgzQBAgXARgVQASgWAEhAQAQgJAOAIQAIAGAKAPQAfAyAtAlQAqAjA7AbQAqATAtAwQAaAbAyA5QARASgCAXQgBAQAGAQQAFAKAMARQAhArgaA2QgLAYAEAmIAIA/QAAAEAEAPQADAMgCAIQAIASAFAcIAIAxQAHAcgEAPQgFAVgZAKQgOAGgCALQgBAIAFAQQAFAMAHAiQAHAdAHAQQALAcgBA1QAAA4AIAaQAHASAGAfIAKAzQAKAugLAPQgLAQguACQgkACgHAEQgTAIgFAhQgEAWgVAUQgYAXgfAAIgEAAg");
	this.shape_39.setTransform(38,44.8,0.121,0.121);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#990000").s().p("AAlBZQgIgBgKgEQgEgCgBgDQgCgEAAgGIABgKIAAgEIABgEQgGACgIACIgOABQgFABgDgDQgDgDAAgFIgBgIIgBgHQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBABAAAAIgMAFIgLAHIgHAFIgGAEIgGAEIgHACQgGgCABgGIAAgGIAAgGQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgZgFIgagEIgEAAIgFgBQgDgCgDAAQgDAAgDADQgGgFgDgKQgCgJADgJQAFgOAJgGQAFADAIgCIAMgDQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIADgEQALgPAUgRIACgCIACAAIAFADQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIgCACQgPANgHAPQgDAGABAGQABAGAFAFQAEADAEAAQAFABAGgDQAIgEAHgIIADgEQAAAAABAAQAAgBABAAQABAAAAABQABAAAAABIABAJIAAAJQAAAFAEgDIAJgIIAJgIIAEgNIADgOIABgFQACgDADgBIAfgBQAFAAADgCQAOgMARgDQAKgBALgIQABADgBACIgCAFQgDAFABACQAAABAGADQAIAEALAAQAEAAACgBQADgBABgDIAHgIIAHgIIACgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIARAGIARAHQAMAFAEAIQADAIgDANIAAADIACADQAGAIACAJQABAEgBADQgBADgEACQgFACgFAFIgIAKIgEADQgCACgDgBQgCAAgDADIgDACIgCgBQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBABIgCAEQgFAWAFAVQgCAEgFABIgfALQgTAGgMADIgIABIgLgCg");
	this.shape_40.setTransform(46,27.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990000").s().p("AbMZ9QgsgJghgbIgSgOIgSgNQhBg4g9gPQhFgShNAgQgzAVgdgOQgcgOgNgxQhAj/irmNQhdjVgthqQhNi4gwiMQhakGg/igQhbjlhfi1QgQgdgMAAQgKgBgRAYQg0BIg3BpQgfA9g9B8IhwDkQgtBdg+A3QgSAQgKAXQgIASgFAdQgbCdgeD+QgnFDgNBXQgIBBgZAiQgJALAAAPQAAAIAEASQAHAnAFBBQAGBOADAaQAGApgVBCQgXBIAAAhQAAAOgOAFQgGACgTACIg5AEIg5ACQgQgRADgUQADgNAOgWQAuhHgchcQgIgYgMgDQgLgCgSAQQgYAVgMAaQgWAqgeARQgeARgvgEQgUgCgegGIgwgMQgRgFgJgCQgQgCgNAKQARANAdAIIAuAPQAcANADALQADALgUAXQguA1g3gMQgdgHgbAGQgZAGgbASQgaASgSAIQgaAMgZAAIgdgJQgagGgEgXQgEgZAcgPICBg/QAVgKALgJQARgLAJgPQgMgKgrgHQgigHgHgUQgGgSAEggIAHg2QAEicAbjJQAJhFAtkeQAZifAFiVIAAgQQgBgJgHgHQgngogag8QgSgogVhIQgUhEgshYIhNiXQgGgNgGgBQgFgBgLAKQiABxhxBgQhOBBgeBXQgcBTAOBoQAaDKgqDcQgiC1hWDgQgLAcgaA4QgSAxAOAqQgEAkgPA/QgQBFgEAeQgCAKgHAIQgIAHgLAAQgigCg+AIQhCAIgegBQgEAAgJgHQAAieArhzQAth3AHiRQAFhpgPiiQgRizgJi9QgDg+gYhPQgticBOiXQAlhKA3hZQAggzBFhqICTjmQAjguA3gbQAsgWBDgNQAXgFATAPQALAIAVAZIBpB/QA+BGA6AqIAQANQAJAHAHAEQAkATAOAXQAQAbgKAnQgGAYANAaQAHAOAUAaQAeAlAVAVQAeAdAfAQIAIADQAEACACACQAxA2BUABQAVABA0gEQAvgEAZACQAXABAUgTQARgQAIgYQAKgbAQgLQAPgLAcgCQAvgDALgQQAKgPgNguQgghxAEhXQABgYgKgjQgOgmgFgTQgIgbACgQQADgWAVgQQANgJADgRIgBghIgLg1QgHggAIgWQAlgpArhLQA6hlANgUQAggvgFg9QgFhAAAhZIACiaQABgUAFgLQAGgQARgGQBKAxBNAUQCVAnCpg4ICzg/QBrglBJgUQAPgEAcgQQAagQARgEQApAeAOAdQARAkgRAsQgFANAGAMQADAHALANQAUAYAJAdQAIAbgBAjQgDB8AzBsQAsBdAlB0QAbBVAhCCQAcBzA5ChIBhEPQBDDDB/FMQCSF/A0CPQARAxAmBiQAeBWAJBBIAGApQADAXgEAPQgWBHAgBIQALAXBBBiIAMAQQAHAKADAHQAOAhgWAhQgVAhgmACIgcABQgfAAgYgFg");
	this.shape_41.setTransform(48.6,54.5,0.121,0.121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.samba_h}]}).to({state:[{t:this.shape_21},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_4},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.samba_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-1.5,98.1,106.3);


(lib.mc_salsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.salsa_h = new cjs.Text("סלסה", "25px 'Arial'");
	this.salsa_h.name = "salsa_h";
	this.salsa_h.textAlign = "center";
	this.salsa_h.lineHeight = 30;
	this.salsa_h.lineWidth = 69;
	this.salsa_h.parent = this;
	this.salsa_h.setTransform(53.4,69.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYgLQAJAAARgCQAPAAAIANQgCgBgaANQgEACgEAAQgLAAgCgZg");
	this.shape.setTransform(4.7,27.7,0.332,0.354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAUQgDgCAAgLQAAgLAEgFQANgSAXABQANABAcAFIAAAdIgnAOQgIAEgJAAQgMAAgKgHg");
	this.shape_1.setTransform(1.4,26.8,0.332,0.354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiMFNQgFgFgLAAQgLABgEgGIgBgVQAAgQgKgCQgFgCgDAEIgEAIQgFAHAAADQgBAGAHAEQAFAEACADQADAEgCAGQgWABgKgBQgSgCgJgTQgBgEgKgCQgKgCgCgDQgHgLAEgLQADgKAKgHQALgIAOgSQARgVAHgGQAQgPgDgmQgDglgRgSQgZgZgWgMQgQgJgIgfQgIgfAJgUQALgYgJgaQgNgegFgPQgCgHgEAAQgDgBgGADIgOAIIgOAGQgUAKgRgBQgSgBgQgQIgJgGIgJgGQgDgFgFAAIgJABIgMgBIAAgLQAdgYAZAZQAOAPASgCQAOgCAPgNIAfgaIAfgYQAHgGABgMIABgTQAGguAXgMQAYgMAlAXQAMAIAEAUQADAVgKAJQgEAEgGALQgFAJgFAEQgHAGACAJQABAJAIAEQATAKAUAWIAhAlQAJAJAHABQAIACAKgGIAogUQAYgMAPgNQAIgJAJgCQANgCAGASIADADQABABAAAAQABAAAAAAQABABAAAAQABAAAAgBQAYgKAlAJIAfAGQARAEAOgBQAQgBAVgLIAhgSQAMgGATgOQAVgRAJgFQAMgHADgGQAGgLgYgEQgGgBgCgIIgDgNQgFgOgCgTQgBgLgBgWQAAgLANgDQANgEABgIIAWAAQABAHAGAAIAJABQAbANAHAPQAHASgOAdQgIARAKAKQAGAGAOAFQAmAMAUAkQALAUANA1QADANgMANIgYAVIgGADIgGADQgXAMgKAQQgMARACAZQABAMgFAGQgFAHgMAEQgZAKgTAaQgLAPgSAjQgDAIACAHQACAGAIAHQASANAlAlQAhAjAXAPQAIAFABAJQAAAJgGAJQgQAXgfAGQgfAFgbgPQAEgFAHAAIAKABQALgCACgGQABgGgFgJIgFgEIhBg3IAABTQABAJgBACQgCAGgHAAQgmABgWgCQghgEgagKIADgGIADgCIAcgIQAKgDAEgGQAGgIAAgoIgBgqQgBgXgFgSQgGgZALgaQAIgVASgUQAVgWAMgiQAEgMAMgxQACgLAHgTIAKggIgQADQgJACgFADQgjAXgpgDQgfgDgtgUQgmgRgkAEQgkAEggAbIgJAHIgJAHQgqAdgpghQgYgTAAAhQABAnAFAWQAIAgATAXQALAPAHATQAGATAAAUIABBMQABAsgEAfQgDARADAJQAFAMAPADIAEAEIADAFIgEAEQgDACgCAAIgVAEIgDABQgKAAgGgHg");
	this.shape_2.setTransform(49,41.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,153,153,0.008)").s().p("AnpITIAAwlIPTAAIAAQlg");
	this.shape_3.setTransform(52.1,53.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AiMFNQgFgFgLAAQgLABgEgGIgBgVQAAgQgKgCQgFgCgDAEIgEAIQgFAHAAADQgBAGAHAEQAFAEACADQADAEgCAGQgWABgKgBQgSgCgJgTQgBgEgKgCQgKgCgCgDQgHgLAEgLQADgKAKgHQALgIAOgSQARgVAHgGQAQgPgDgmQgDglgRgSQgZgZgWgMQgQgJgIgfQgIgfAJgUQALgYgJgaQgNgegFgPQgCgHgEAAQgDgBgGADIgOAIIgOAGQgUAKgRgBQgSgBgQgQIgJgGIgJgGQgDgFgFAAIgJABIgMgBIAAgLQAdgYAZAZQAOAPASgCQAOgCAPgNIAfgaIAfgYQAHgGABgMIABgTQAGguAXgMQAYgMAlAXQAMAIAEAUQADAVgKAJQgEAEgGALQgFAJgFAEQgHAGACAJQABAJAIAEQATAKAUAWIAhAlQAJAJAHABQAIACAKgGIAogUQAYgMAPgNQAIgJAJgCQANgCAGASIADADQABABAAAAQABAAAAAAQABABAAAAQABAAAAgBQAYgKAlAJIAfAGQARAEAOgBQAQgBAVgLIAhgSQAMgGATgOQAVgRAJgFQAMgHADgGQAGgLgYgEQgGgBgCgIIgDgNQgFgOgCgTQgBgLgBgWQAAgLANgDQANgEABgIIAWAAQABAHAGAAIAJABQAbANAHAPQAHASgOAdQgIARAKAKQAGAGAOAFQAmAMAUAkQALAUANA1QADANgMANIgYAVIgGADIgGADQgXAMgKAQQgMARACAZQABAMgFAGQgFAHgMAEQgZAKgTAaQgLAPgSAjQgDAIACAHQACAGAIAHQASANAlAlQAhAjAXAPQAIAFABAJQAAAJgGAJQgQAXgfAGQgfAFgbgPQAEgFAHAAIAKABQALgCACgGQABgGgFgJIgFgEIhBg3IAABTQABAJgBACQgCAGgHAAQgmABgWgCQghgEgagKIADgGIADgCIAcgIQAKgDAEgGQAGgIAAgoIgBgqQgBgXgFgSQgGgZALgaQAIgVASgUQAVgWAMgiQAEgMAMgxQACgLAHgTIAKggIgQADQgJACgFADQgjAXgpgDQgfgDgtgUQgmgRgkAEQgkAEggAbIgJAHIgJAHQgqAdgpghQgYgTAAAhQABAnAFAWQAIAgATAXQALAPAHATQAGATAAAUIABBMQABAsgEAfQgDARADAJQAFAMAPADIAEAEIADAFIgEAEQgDACgCAAIgVAEIgDABQgKAAgGgHg");
	this.shape_4.setTransform(49,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:52.1,y:53.1}},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.salsa_h}]}).to({state:[{t:this.shape_3,p:{x:49,y:60.4}},{t:this.shape_4},{t:this.shape_1},{t:this.shape},{t:this.salsa_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.1,107.7);


(lib.mc_roomba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.roomba_h = new cjs.Text("רומבה", "25px 'Arial'");
	this.roomba_h.name = "roomba_h";
	this.roomba_h.textAlign = "center";
	this.roomba_h.lineHeight = 30;
	this.roomba_h.lineWidth = 69;
	this.roomba_h.parent = this;
	this.roomba_h.setTransform(51,71.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("AgFAAQAAgEAFgBQAAAAABAAQAAABABAAQAAAAABABQAAABAAAAQAAABABABQAAAAAAAAQAAAAABAAQAAAAABAAQABAEgFABIgCABQgEAAgBgGg");
	this.shape.setTransform(28,10.6,1.006,0.71);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("AADgCQAAAFgFAAQACgEADgBg");
	this.shape_1.setTransform(74.7,67.4,1.006,0.71);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050505").s().p("AgBABIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAgBABQAAAAgBABg");
	this.shape_2.setTransform(27.8,27.5,1.006,0.71);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2C2C").s().p("AgBAAIABgBIACACIgBABg");
	this.shape_3.setTransform(74,23.5,1.006,0.71);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#020202").s().p("AgBgCIADAAIAAAEIgBABg");
	this.shape_4.setTransform(73.7,23.2,1.006,0.71);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020202").s().p("AAHAJQgMgGgFgMIABAAQAGACAFAHIAJAJg");
	this.shape_5.setTransform(72.8,22.3,1.006,0.71);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020202").s().p("AgBAHQgGgBAEgEQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIgGgDQAFgEADACIAHAEQADABgDAFQgBAEgFAAIgCgBg");
	this.shape_6.setTransform(70.7,14.5,1.006,0.71);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020202").s().p("AgCAJQgGgBgCgGQgBgCAAgIQANAIAKAAQgEAJgHAAIgDAAg");
	this.shape_7.setTransform(71.8,18.8,1.006,0.71);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#050505").s().p("AgBAEIgDgNQgCgHAFAAQAFgBgBAIQgBADACAJQACAJgDAGQgDgGgBgIg");
	this.shape_8.setTransform(26,34.6,1.006,0.71);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#050505").s().p("AgEgLIAEgBIAFAMQABAHgDAGIgHgYg");
	this.shape_9.setTransform(22.7,33.2,1.006,0.71);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#050505").s().p("AgDAAQAAgKADgHQAEAEgBAGIAAAKIgGAPIAAgSg");
	this.shape_10.setTransform(22.8,17,1.006,0.71);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#050505").s().p("AgIgNIACgDIADAAQAMAQAGAEQgGAFgEgFIgGgHIgEAMQgCAIgHAAg");
	this.shape_11.setTransform(26,18.4,1.006,0.71);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#020202").s().p("AgIA2QgCg8AHghQACgKACgFIAGAuQADAagBAUQAAAOgDACQgBABgFAAIgIgBg");
	this.shape_12.setTransform(71.6,47.3,1.006,0.71);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020202").s().p("AABAPQgMgKABgIQABgMAJAAQAHAEACAHQACAEABAKIgFAFIgDABIgDgBg");
	this.shape_13.setTransform(68.5,17.4,1.006,0.71);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020202").s().p("AAGAWIgFgQQgDgHgDgCQgFgFgIAAQgKAAgCgEQgBgEAGgJQAGgKADAAQACAAAKAHQAIAHAJARQAKARAIAGIgPARQgGgEgEgKg");
	this.shape_14.setTransform(66.8,8.8,1.006,0.71);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020202").s().p("AgigKIAPgRQATgEAKABQAYACACAcIgGgFQgIAHgMgCQgMgFgHAAQgGAAgDACQgDACgBAFQgBAEgEAKQgEAIAAAGQgGgQADgag");
	this.shape_15.setTransform(71.9,12.2,1.006,0.71);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#020202").s().p("AAfAfQACgMgBgGQAAgIgBgEQgCgEgKADQgHgNgHAFQgHAIgEABQgDACgEgCQgDgBgBgDQgCgFgCgBQgBAAgEADQgDABgDAHQgEAGgEACQAAgWAJgKQAHgIATgCIAPgCQAdAJACAcIgEAdIgEADIgBAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBg");
	this.shape_16.setTransform(26.7,8.7,1.006,0.71);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020202").s().p("AgcAIQADgOADgGQAGgKALgEQAEgCACgGIADgKQATgBAGAMIgGAeQgEARgIALQgCACgBAJQgCAHgEADQgCgdgcgJg");
	this.shape_17.setTransform(30.6,5.7,1.006,0.71);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020202").s().p("AgkArIAGgLQAEgGABgFIAGgPQAJgGAAgNIgCgVIgCgFQAHgNgLgIQgJgIAEgKQAFgNgGgMQAEgBAEgHQADgHADgCQAEgDABABQABAAACAFQACAEACABQAEACADgBQAEgCAIgIQAHgFAHAMQAJgDADAGQABADAAAIQABAGgCAMQAAACAAABQAAAAAAABQAAAAABABQAAAAABgBIAEgDQAHAKgJAJQgXAXARAXIgNAKQgJAEgDgIQgBgFgKgBQgJgBgBgGQgBAFAFAKQAGAIgFAGIgCAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgFAgQgDAFgJAHIgMALQgNAPgDAJQgEAIgFAbQgGglAYgrgAAchcQgGABABAFQABAGAHgBQAEgBgBgEQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBgBAAIAAAAg");
	this.shape_18.setTransform(25.1,16.8,1.006,0.71);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020202").s().p("AgDAAIAHgGQAAAEgDADIgEAGg");
	this.shape_19.setTransform(74,68.1,1.006,0.71);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020202").s().p("AgCAAQABgFAFgCIAAAJQAAAGgHAAIABgIg");
	this.shape_20.setTransform(57.8,28.8,1.006,0.71);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#020202").s().p("AgGgIIAGADQAAADAGACQADAEgHAFQgIgHAAgKg");
	this.shape_21.setTransform(72.4,71.9,1.006,0.71);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#050505").s().p("AgDAJIAAgGIADgOQAEAEAAAHQgDABABADIABAFQABADgEAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_22.setTransform(36.7,54.7,1.006,0.71);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#020202").s().p("AABAFQgFgGgFgCIgBgLQAGACAFAJQAGAIAEACIAAAIQgEgBgGgJg");
	this.shape_23.setTransform(76,67.5,1.006,0.71);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#020202").s().p("AgNAGIAAgIIAVgCQAHAEgCAGQgKgGgQAGg");
	this.shape_24.setTransform(74.7,64.3,1.006,0.71);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#020202").s().p("AgNACQgBgDADgEQAFgCAGACQAIACADAAQAAACACACQACAEgBACQgRgHgKACg");
	this.shape_25.setTransform(71.1,62.5,1.006,0.71);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#020202").s().p("AgNgHIANAAQAIAAAGADIgIAEQgFADABAFQgGgCgJgNg");
	this.shape_26.setTransform(69.2,25.1,1.006,0.71);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#050505").s().p("AAAA3QABgGgDgRQACgLgCgTQgDgUABgJIAEgcIADAEIACA0QACAfgEAVIgBADIAAAAIgCgBg");
	this.shape_27.setTransform(25,39.2,1.006,0.71);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020202").s().p("AgPAIQgFgFgBgMQAFAEAFgDQALgGANAGIABAFQAAACAFADQAEADgDADQgCADgOABIgEAAQgKAAgFgEg");
	this.shape_28.setTransform(76.1,72.6,1.006,0.71);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020202").s().p("AgBAjIgIggQABgPACgHQAEgNALgFQACAHgCALIgDASQgDASABAVg");
	this.shape_29.setTransform(71.9,68.8,1.006,0.71);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#050505").s().p("AgxgSQAEgDALAFQAZANAagLQARgHARACQgUAFgFADIgYAKQAEAGAGACIAMAEQAMADgLAHg");
	this.shape_30.setTransform(43.3,27.6,1.006,0.71);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#020202").s().p("AgCAPQgDgLgLgDIAEgYQAKgCAQAHIAAASQABALACAIIgFABQgFAEgDAAQgEAAgCgJg");
	this.shape_31.setTransform(71.1,64.3,1.006,0.71);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#020202").s().p("AgEAgQgGgFgBgPIgCgVQAAgMgFgJQAFgJAGAKIAJAOIAIAfQgBAKAKAHIgMACQgHAAgEgDg");
	this.shape_32.setTransform(70.7,70.1,1.006,0.71);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#020202").s().p("AAIANQgFgJgGgCIABAMQgEABgBAEIAAAAIgIAGQgDgKAAgNIAAgXQARgFAJAFIAHAWQAEAOAAAKQgEgCgHgKg");
	this.shape_33.setTransform(75.2,66.2,1.006,0.71);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#020202").s().p("AgDASQgGgJgFAJQgHAAgDADIACgcQACgQAMgIQAKACADALQAEAQALgLIAFgBIgBAGQgLAFgFAMQgBAHgBAQIgJgOg");
	this.shape_34.setTransform(70.3,66.7,1.006,0.71);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#020202").s().p("AgPAgQgEgJABgOIAAgXIAFgGQADgEAAgDQAGAAgBgGQAFACAFAHQAGAJAFABQAEADgBAFIgBAHIAAAfQgNgFgKAFIgFACQgDAAgCgCg");
	this.shape_35.setTransform(75.5,69.6,1.006,0.71);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#050505").s().p("AAAAxQgCgDgDgRQgCABgDAIQgDAGgGABQgCgGADgHIAEgNQABAAABgBQABAAAAgBQAAAAAAgBQgBAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAIAAACIgFABQABgHAFgJIAJgOQALgcACgKIAIANQAFAIgBAHIgKAiQgEAUAEAQIgHABQgBAAAAAAQgBAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_36.setTransform(29.3,26.3,1.006,0.71);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#050505").s().p("AgUBZQgEgCABgFQAGgQgDgVIgIgkIgCgnQgBgXADgRIADgSIARAaQAIAPAFANQABAEAEAAQAIABAFAHIAIAMQACAEgFAHQgGAHgFgBQgKgBADAIQAEATgKATQgEALgOAWQgBAEgDAAIgCAAg");
	this.shape_37.setTransform(43.8,65.7,1.006,0.71);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#050505").s().p("AgDBjQgGgCgCgJIgYhUQADgNAAgmQAAgiAHgSQACAGAAAOQAAAOACAIQAGgPAAgYQAGACAAAIIgDAPIAAAGQAAABAAAAQAAABABAAQAAABABAAQABAAAAAAQAFAAgBgDIgBgFQgBgDADgCQAQAVAYAvIgDARQgDARABAXIACAoQgSAEgGADQgEADgEAAIgEgBg");
	this.shape_38.setTransform(37.6,60,1.006,0.71);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#050505").s().p("AgDBsQgFgDgCgHIgCgNIADgJQACgFgDgDQgEgDgPADQgJACgEgEQgDgEgCgLQgEghAQgzQAKgDARAFQAQAFAIgFQAIgFAFgSIAUg6QAABEgMBVQgBAIgFAOQgDANAEAKQAGAQgLAHQgHAEgHAAQgIAAgIgFg");
	this.shape_39.setTransform(25.9,65.5,1.006,0.71);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#050505").s().p("AALC0QgFgVgEgIIgGgPQgBgLAEgRIADgcIAEgeQACgSAAgNQgGAZgRApQgUAtgGAVQgCgRAHgPQAIgYAahYQACgGgCgBQgBAAgGADIAHgdQACgSABgMQAHgvgIglQgCgJgFgDQgEgDgJAAIgLACQgGAAgCgHIAWAAQAFAAACgCQABgDgFgEQgCgDgBgBQgLgBgFgJQgDgFgDgNIAcgHQAEANAJAPIATAYQAVAbgNAnQgKAdACAlQABAQAHAxIANBCQAAAZgGAPQgCgJAAgOQAAgOgCgGQgHATAAAiQAAAmgDAOQgFgKgGgTg");
	this.shape_40.setTransform(31.8,45.5,1.006,0.71);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#020202").s().p("AgHCxQgBgEgCgBIgFABQgEABgIgCQgHgCgEABQAAgPgFgjQgFghACgSQACgOAEgOQADgJgDgDQADgBACgEQACgGACgBQANACACgDQADgCAAgOQABgTgDgaIgGguQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAPgOAGgVQAEgOADgaQABgNAJgSQABAHAAAMQAAALACAFQAFAPAGAFQASAOgEAZIgIA5QgEAkgGAVIgHAVQgHAAgBAFIACAJIAEAlQABAWgBAQQgCAVAAA7IgVADIgDgYg");
	this.shape_41.setTransform(73.9,49.9,1.006,0.71);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#020202").s().p("AA+BkIgVgoIgHgKQgBgEAFgEIAIgEQgGgDgIAAIgOAAQgIAAgHAEIgWAQQgOAJgHAJQgFAEgJADIgQADIgEABQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgFACgBAEIgBAJQgDAEgBAAQgMAAgIAIQgFAFgJANQgCgNgDgHQgDgKgMgCQgBgHADgIIAGgOQAHAAAOgDQAMAAAIACQAEABAEgCIAHgEIAQgLQAKgGAJAAQADAAADgCIAWgWQANgMADgMQAEgPASgEQAMgDAEgLQAEgKgHgMQgBgLgBgEQgDgIgIgDIgBgNQAAgIAEgEQAAgGAEgJQAEgJABgEQABgHADgBQADgCAGAAQAHAAANAEQAMAEAIgIIAGAEQABAHgBARQgBAOABAIQABAEgBACQgPARAJASQAFALAOAUQADAHAIAGQAEADAMAGQAIACACAEIgKANQgFAEgEgCQgNgGgSAGQgHADgGgDIgDgDIAAgGIgKgKQgFgGgHgCIgBAAIABAAQAFAMANAGIADAHIADACQgEASAFAXQACAMAIAaQAEAPgKAOQgJAPgPACQAJgWgIgYgAAugrQACAGAGABQALACAEgLQgKAAgOgJQAAAHABAEgAAmhvIAFAEQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABQgDAFAFABQAIABACgFQACgFgCgCIgHgEIgDAAQgDAAgDACg");
	this.shape_42.setTransform(66.1,22.1,1.006,0.71);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#050505").s().p("AgSDhQgQgFgKADIAGgZQADgOABgLQAKhRAChNIAEhJIADABIAAgDQAEgVgBgfIgDg1IgEgEIgEAcQAAAJACAVQACATgBALQgQgqgFgoQgDgRgHgJQgKgMAJgJIAHAAIAIAZQAEgGgCgHIgEgNQAJgHAPgDIAYgFQADANADAFQAFAIALACQACAAACADQAEAEgBADQgBADgGAAIgWAAQACAGAHAAIAKgBQAJgBAFADQAEAEACAJQAJAkgGAwQgBAMgEASIgHAeQAGgEABABQADABgDAGQgaBXgIAXQgGAQACAQQAFgUAUgtQATgpAFgYQAAAMgCARIgEAfIgEAcQgDAQABAMQgEAFAAALQAAAMgCAFIgTA6QgFASgIAFQgEACgGAAQgGAAgJgCgAgIjDQgGAAADAHIACAOQACAIAEAGQADgGgCgJQgCgKAAgDQACgHgFAAIgBAAg");
	this.shape_43.setTransform(26.8,47.3,1.006,0.71);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#020202").s().p("AAOAOQgHgMgRABIgNgBIANgGQAHgEADgFIAIAAQABAEAIAFQAJAEgCAEIgDAGQgCAEgEAAIgBAAg");
	this.shape_44.setTransform(32.1,2.3,1.006,0.71);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#050505").s().p("AiZBdQgHgWgCgQIgDgFIAAhJQAFAAAAgJQABgZANgaQAJgTASgbIABAGIACAVQABAMgJAIIAAgLQACgGgFgFQgDAIAAALIAAASQgBAFgEAGIgHALQgXArAGAkQAFgbADgHQAEgJAMgQIANgKQAJgHADgGQAHAAACgIIADgNIAHAIQAFAFAFgFQgGgEgNgRQAFgHgGgIQgGgKABgFQACAFAJACQAKABABAFQADAIAIgFIAOgJIACADQADANAEAGQAGAJALACQALACAMASQAUAdAvAPQAjALAQAQQAWAWATAFIAIAGQAFAEAFAAIgHAPQgCAHABAHQgIgEgKACIgRAGQgKAEgOgKQALgGgMgDIgMgEQgGgCgDgHIAYgLQAFgCATgFQgQgDgRAIQgcALgYgNQgLgFgFADQgZgGgfgSQgFgDgHAGQABgHgFgIIgIgNQgCAKgMAbIgIAPQgGAJAAAIIAEgBIACABIgFAMQgCAIACAGQAFgBADgGQADgIADgBQACARACACQACADAJgDIADANIgcAHIgZAFQgPADgJAHIgNABIgNgkg");
	this.shape_45.setTransform(35.7,23.1,1.006,0.71);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#020202").s().p("AhoDoQgMgBgEgIQgEgFAIgLIAHgHQAGgFgDgGQgCgGgIABQgLACgDgBQgIAAgDgGQgDgHAFgGIAJgMQALgPADgHQAEgKgEgFQgEgEgKACQghAFAHghIAGgVQAEgRgPACIgQAAQAGgPAFgHQAIgKAMgDQAigKA5ggQAOgJAFgPQAIgaAagOQAOgCAJgOQAKgOgEgQQgIgagCgMQgFgXAEgRIABgBQAGADAHgCQASgHANAHQAEACAFgFIAKgNQANgEAAAOQABALgBAFQgCAIgIAFQgFADADAHQAUBAgUA3QgDAHAFAIQATAiATA4QAKAdAfAzIAQAYIAAAGQgNAOgTgLQgGgDgDABQgEACAAAIQAAAJgEADQgEADgKgDQgJgCgLALIgJALQgEAEgEAAQgFAAgCgFQgIgRgXAGQgDABgCgCIAHgVQAGgWAEgjIAIg6QAEgYgSgPQgGgFgFgNQgCgGAAgLQAAgMgBgGQgJARgBANQgDAagEAOQgHAVgOANQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQgDAFgCAKQgHAhACA9QgCABgCAGQgCAEgDABIgMgEQgKgBgDAEQgDAEAFAIQAGAJgFAIQgFAGgLgFQgQgGgHAOQgGALgKAAIgBAAg");
	this.shape_46.setTransform(72.5,38.9,1.006,0.71);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(153,153,153,0.008)").s().p("AnpItIAAxZIPTAAIAARZg");
	this.shape_47.setTransform(49,55.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990000").s().p("AgFAAQAAgEAFgBQAAAAABAAQAAABABAAQAAAAABABQAAABAAAAQAAABABABQAAAAAAAAQAAAAABAAQAAAAABAAQABAEgFABIgCABQgEAAgBgGg");
	this.shape_48.setTransform(28,10.6,1.006,0.71);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#990000").s().p("AADgCQAAAFgFAAQACgEADgBg");
	this.shape_49.setTransform(74.7,67.4,1.006,0.71);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#990000").s().p("AgBABIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAgBABQAAAAgBABg");
	this.shape_50.setTransform(27.8,27.5,1.006,0.71);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#990000").s().p("AgBAAIABgBIACACIgBABg");
	this.shape_51.setTransform(74,23.5,1.006,0.71);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#990000").s().p("AgBgCIADAAIAAAEIgBABg");
	this.shape_52.setTransform(73.7,23.2,1.006,0.71);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#990000").s().p("AAHAJQgMgGgFgMIABAAQAGACAFAHIAJAJg");
	this.shape_53.setTransform(72.8,22.3,1.006,0.71);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#990000").s().p("AgBAHQgGgBAEgEQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIgGgDQAFgEADACIAHAEQADABgDAFQgBAEgFAAIgCgBg");
	this.shape_54.setTransform(70.7,14.5,1.006,0.71);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#990000").s().p("AgCAJQgGgBgCgGQgBgCAAgIQANAIAKAAQgEAJgHAAIgDAAg");
	this.shape_55.setTransform(71.8,18.8,1.006,0.71);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#990000").s().p("AgBAEIgDgNQgCgHAFAAQAFgBgBAIQgBADACAJQACAJgDAGQgDgGgBgIg");
	this.shape_56.setTransform(26,34.6,1.006,0.71);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#990000").s().p("AgEgLIAEgBIAFAMQABAHgDAGIgHgYg");
	this.shape_57.setTransform(22.7,33.2,1.006,0.71);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#990000").s().p("AgDAAQAAgKADgHQAEAEgBAGIAAAKIgGAPIAAgSg");
	this.shape_58.setTransform(22.8,17,1.006,0.71);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#990000").s().p("AgIgNIACgDIADAAQAMAQAGAEQgGAFgEgFIgGgHIgEAMQgCAIgHAAg");
	this.shape_59.setTransform(26,18.4,1.006,0.71);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#990000").s().p("AgIA2QgCg8AHghQACgKACgFIAGAuQADAagBAUQAAAOgDACQgBABgFAAIgIgBg");
	this.shape_60.setTransform(71.6,47.3,1.006,0.71);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#990000").s().p("AABAPQgMgKABgIQABgMAJAAQAHAEACAHQACAEABAKIgFAFIgDABIgDgBg");
	this.shape_61.setTransform(68.5,17.4,1.006,0.71);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#990000").s().p("AAGAWIgFgQQgDgHgDgCQgFgFgIAAQgKAAgCgEQgBgEAGgJQAGgKADAAQACAAAKAHQAIAHAJARQAKARAIAGIgPARQgGgEgEgKg");
	this.shape_62.setTransform(66.8,8.8,1.006,0.71);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#990000").s().p("AgigKIAPgRQATgEAKABQAYACACAcIgGgFQgIAHgMgCQgMgFgHAAQgGAAgDACQgDACgBAFQgBAEgEAKQgEAIAAAGQgGgQADgag");
	this.shape_63.setTransform(71.9,12.2,1.006,0.71);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#990000").s().p("AAfAfQACgMgBgGQAAgIgBgEQgCgEgKADQgHgNgHAFQgHAIgEABQgDACgEgCQgDgBgBgDQgCgFgCgBQgBAAgEADQgDABgDAHQgEAGgEACQAAgWAJgKQAHgIATgCIAPgCQAdAJACAcIgEAdIgEADIgBAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBg");
	this.shape_64.setTransform(26.7,8.7,1.006,0.71);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#990000").s().p("AgcAIQADgOADgGQAGgKALgEQAEgCACgGIADgKQATgBAGAMIgGAeQgEARgIALQgCACgBAJQgCAHgEADQgCgdgcgJg");
	this.shape_65.setTransform(30.6,5.7,1.006,0.71);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#990000").s().p("AgkArIAGgLQAEgGABgFIAGgPQAJgGAAgNIgCgVIgCgFQAHgNgLgIQgJgIAEgKQAFgNgGgMQAEgBAEgHQADgHADgCQAEgDABABQABAAACAFQACAEACABQAEACADgBQAEgCAIgIQAHgFAHAMQAJgDADAGQABADAAAIQABAGgCAMQAAACAAABQAAAAAAABQAAAAABABQAAAAABgBIAEgDQAHAKgJAJQgXAXARAXIgNAKQgJAEgDgIQgBgFgKgBQgJgBgBgGQgBAFAFAKQAGAIgFAGIgCAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgFAgQgDAFgJAHIgMALQgNAPgDAJQgEAIgFAbQgGglAYgrgAAchcQgGABABAFQABAGAHgBQAEgBgBgEQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBgBAAIAAAAg");
	this.shape_66.setTransform(25.1,16.8,1.006,0.71);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#990000").s().p("AgDAAIAHgGQAAAEgDADIgEAGg");
	this.shape_67.setTransform(74,68.1,1.006,0.71);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#990000").s().p("AgCAAQABgFAFgCIAAAJQAAAGgHAAIABgIg");
	this.shape_68.setTransform(57.8,28.8,1.006,0.71);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#990000").s().p("AgGgIIAGADQAAADAGACQADAEgHAFQgIgHAAgKg");
	this.shape_69.setTransform(72.4,71.9,1.006,0.71);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#990000").s().p("AgDAJIAAgGIADgOQAEAEAAAHQgDABABADIABAFQABADgEAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_70.setTransform(36.7,54.7,1.006,0.71);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#990000").s().p("AABAFQgFgGgFgCIgBgLQAGACAFAJQAGAIAEACIAAAIQgEgBgGgJg");
	this.shape_71.setTransform(76,67.5,1.006,0.71);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#990000").s().p("AgNAGIAAgIIAVgCQAHAEgCAGQgKgGgQAGg");
	this.shape_72.setTransform(74.7,64.3,1.006,0.71);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#990000").s().p("AgNACQgBgDADgEQAFgCAGACQAIACADAAQAAACACACQACAEgBACQgRgHgKACg");
	this.shape_73.setTransform(71.1,62.5,1.006,0.71);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#990000").s().p("AgNgHIANAAQAIAAAGADIgIAEQgFADABAFQgGgCgJgNg");
	this.shape_74.setTransform(69.2,25.1,1.006,0.71);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#990000").s().p("AAAA3QABgGgDgRQACgLgCgTQgDgUABgJIAEgcIADAEIACA0QACAfgEAVIgBADIAAAAIgCgBg");
	this.shape_75.setTransform(25,39.2,1.006,0.71);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#990000").s().p("AgPAIQgFgFgBgMQAFAEAFgDQALgGANAGIABAFQAAACAFADQAEADgDADQgCADgOABIgEAAQgKAAgFgEg");
	this.shape_76.setTransform(76.1,72.6,1.006,0.71);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#990000").s().p("AgBAjIgIggQABgPACgHQAEgNALgFQACAHgCALIgDASQgDASABAVg");
	this.shape_77.setTransform(71.9,68.8,1.006,0.71);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#990000").s().p("AgxgSQAEgDALAFQAZANAagLQARgHARACQgUAFgFADIgYAKQAEAGAGACIAMAEQAMADgLAHg");
	this.shape_78.setTransform(43.3,27.6,1.006,0.71);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#990000").s().p("AgCAPQgDgLgLgDIAEgYQAKgCAQAHIAAASQABALACAIIgFABQgFAEgDAAQgEAAgCgJg");
	this.shape_79.setTransform(71.1,64.3,1.006,0.71);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#990000").s().p("AgEAgQgGgFgBgPIgCgVQAAgMgFgJQAFgJAGAKIAJAOIAIAfQgBAKAKAHIgMACQgHAAgEgDg");
	this.shape_80.setTransform(70.7,70.1,1.006,0.71);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#990000").s().p("AAIANQgFgJgGgCIABAMQgEABgBAEIAAAAIgIAGQgDgKAAgNIAAgXQARgFAJAFIAHAWQAEAOAAAKQgEgCgHgKg");
	this.shape_81.setTransform(75.2,66.2,1.006,0.71);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#990000").s().p("AgDASQgGgJgFAJQgHAAgDADIACgcQACgQAMgIQAKACADALQAEAQALgLIAFgBIgBAGQgLAFgFAMQgBAHgBAQIgJgOg");
	this.shape_82.setTransform(70.3,66.7,1.006,0.71);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#990000").s().p("AgPAgQgEgJABgOIAAgXIAFgGQADgEAAgDQAGAAgBgGQAFACAFAHQAGAJAFABQAEADgBAFIgBAHIAAAfQgNgFgKAFIgFACQgDAAgCgCg");
	this.shape_83.setTransform(75.5,69.6,1.006,0.71);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#990000").s().p("AAAAxQgCgDgDgRQgCABgDAIQgDAGgGABQgCgGADgHIAEgNQABAAABgBQABAAAAgBQAAAAAAgBQgBAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAIAAACIgFABQABgHAFgJIAJgOQALgcACgKIAIANQAFAIgBAHIgKAiQgEAUAEAQIgHABQgBAAAAAAQgBAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_84.setTransform(29.3,26.3,1.006,0.71);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#990000").s().p("AgUBZQgEgCABgFQAGgQgDgVIgIgkIgCgnQgBgXADgRIADgSIARAaQAIAPAFANQABAEAEAAQAIABAFAHIAIAMQACAEgFAHQgGAHgFgBQgKgBADAIQAEATgKATQgEALgOAWQgBAEgDAAIgCAAg");
	this.shape_85.setTransform(43.8,65.7,1.006,0.71);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#990000").s().p("AgDBjQgGgCgCgJIgYhUQADgNAAgmQAAgiAHgSQACAGAAAOQAAAOACAIQAGgPAAgYQAGACAAAIIgDAPIAAAGQAAABAAAAQAAABABAAQAAABABAAQABAAAAAAQAFAAgBgDIgBgFQgBgDADgCQAQAVAYAvIgDARQgDARABAXIACAoQgSAEgGADQgEADgEAAIgEgBg");
	this.shape_86.setTransform(37.6,60,1.006,0.71);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#990000").s().p("AgDBsQgFgDgCgHIgCgNIADgJQACgFgDgDQgEgDgPADQgJACgEgEQgDgEgCgLQgEghAQgzQAKgDARAFQAQAFAIgFQAIgFAFgSIAUg6QAABEgMBVQgBAIgFAOQgDANAEAKQAGAQgLAHQgHAEgHAAQgIAAgIgFg");
	this.shape_87.setTransform(25.9,65.5,1.006,0.71);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#990000").s().p("AALC0QgFgVgEgIIgGgPQgBgLAEgRIADgcIAEgeQACgSAAgNQgGAZgRApQgUAtgGAVQgCgRAHgPQAIgYAahYQACgGgCgBQgBAAgGADIAHgdQACgSABgMQAHgvgIglQgCgJgFgDQgEgDgJAAIgLACQgGAAgCgHIAWAAQAFAAACgCQABgDgFgEQgCgDgBgBQgLgBgFgJQgDgFgDgNIAcgHQAEANAJAPIATAYQAVAbgNAnQgKAdACAlQABAQAHAxIANBCQAAAZgGAPQgCgJAAgOQAAgOgCgGQgHATAAAiQAAAmgDAOQgFgKgGgTg");
	this.shape_88.setTransform(31.8,45.5,1.006,0.71);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#990000").s().p("AgHCxQgBgEgCgBIgFABQgEABgIgCQgHgCgEABQAAgPgFgjQgFghACgSQACgOAEgOQADgJgDgDQADgBACgEQACgGACgBQANACACgDQADgCAAgOQABgTgDgaIgGguQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAPgOAGgVQAEgOADgaQABgNAJgSQABAHAAAMQAAALACAFQAFAPAGAFQASAOgEAZIgIA5QgEAkgGAVIgHAVQgHAAgBAFIACAJIAEAlQABAWgBAQQgCAVAAA7IgVADIgDgYg");
	this.shape_89.setTransform(73.9,49.9,1.006,0.71);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#990000").s().p("AA+BkIgVgoIgHgKQgBgEAFgEIAIgEQgGgDgIAAIgOAAQgIAAgHAEIgWAQQgOAJgHAJQgFAEgJADIgQADIgEABQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgFACgBAEIgBAJQgDAEgBAAQgMAAgIAIQgFAFgJANQgCgNgDgHQgDgKgMgCQgBgHADgIIAGgOQAHAAAOgDQAMAAAIACQAEABAEgCIAHgEIAQgLQAKgGAJAAQADAAADgCIAWgWQANgMADgMQAEgPASgEQAMgDAEgLQAEgKgHgMQgBgLgBgEQgDgIgIgDIgBgNQAAgIAEgEQAAgGAEgJQAEgJABgEQABgHADgBQADgCAGAAQAHAAANAEQAMAEAIgIIAGAEQABAHgBARQgBAOABAIQABAEgBACQgPARAJASQAFALAOAUQADAHAIAGQAEADAMAGQAIACACAEIgKANQgFAEgEgCQgNgGgSAGQgHADgGgDIgDgDIAAgGIgKgKQgFgGgHgCIgBAAIABAAQAFAMANAGIADAHIADACQgEASAFAXQACAMAIAaQAEAPgKAOQgJAPgPACQAJgWgIgYgAAugrQACAGAGABQALACAEgLQgKAAgOgJQAAAHABAEgAAmhvIAFAEQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABQgDAFAFABQAIABACgFQACgFgCgCIgHgEIgDAAQgDAAgDACg");
	this.shape_90.setTransform(66.1,22.1,1.006,0.71);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#990000").s().p("AgSDhQgQgFgKADIAGgZQADgOABgLQAKhRAChNIAEhJIADABIAAgDQAEgVgBgfIgDg1IgEgEIgEAcQAAAJACAVQACATgBALQgQgqgFgoQgDgRgHgJQgKgMAJgJIAHAAIAIAZQAEgGgCgHIgEgNQAJgHAPgDIAYgFQADANADAFQAFAIALACQACAAACADQAEAEgBADQgBADgGAAIgWAAQACAGAHAAIAKgBQAJgBAFADQAEAEACAJQAJAkgGAwQgBAMgEASIgHAeQAGgEABABQADABgDAGQgaBXgIAXQgGAQACAQQAFgUAUgtQATgpAFgYQAAAMgCARIgEAfIgEAcQgDAQABAMQgEAFAAALQAAAMgCAFIgTA6QgFASgIAFQgEACgGAAQgGAAgJgCgAgIjDQgGAAADAHIACAOQACAIAEAGQADgGgCgJQgCgKAAgDQACgHgFAAIgBAAg");
	this.shape_91.setTransform(26.8,47.3,1.006,0.71);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#990000").s().p("AAOAOQgHgMgRABIgNgBIANgGQAHgEADgFIAIAAQABAEAIAFQAJAEgCAEIgDAGQgCAEgEAAIgBAAg");
	this.shape_92.setTransform(32.1,2.3,1.006,0.71);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#990000").s().p("AiZBdQgHgWgCgQIgDgFIAAhJQAFAAAAgJQABgZANgaQAJgTASgbIABAGIACAVQABAMgJAIIAAgLQACgGgFgFQgDAIAAALIAAASQgBAFgEAGIgHALQgXArAGAkQAFgbADgHQAEgJAMgQIANgKQAJgHADgGQAHAAACgIIADgNIAHAIQAFAFAFgFQgGgEgNgRQAFgHgGgIQgGgKABgFQACAFAJACQAKABABAFQADAIAIgFIAOgJIACADQADANAEAGQAGAJALACQALACAMASQAUAdAvAPQAjALAQAQQAWAWATAFIAIAGQAFAEAFAAIgHAPQgCAHABAHQgIgEgKACIgRAGQgKAEgOgKQALgGgMgDIgMgEQgGgCgDgHIAYgLQAFgCATgFQgQgDgRAIQgcALgYgNQgLgFgFADQgZgGgfgSQgFgDgHAGQABgHgFgIIgIgNQgCAKgMAbIgIAPQgGAJAAAIIAEgBIACABIgFAMQgCAIACAGQAFgBADgGQADgIADgBQACARACACQACADAJgDIADANIgcAHIgZAFQgPADgJAHIgNABIgNgkg");
	this.shape_93.setTransform(35.7,23.1,1.006,0.71);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#990000").s().p("AhoDoQgMgBgEgIQgEgFAIgLIAHgHQAGgFgDgGQgCgGgIABQgLACgDgBQgIAAgDgGQgDgHAFgGIAJgMQALgPADgHQAEgKgEgFQgEgEgKACQghAFAHghIAGgVQAEgRgPACIgQAAQAGgPAFgHQAIgKAMgDQAigKA5ggQAOgJAFgPQAIgaAagOQAOgCAJgOQAKgOgEgQQgIgagCgMQgFgXAEgRIABgBQAGADAHgCQASgHANAHQAEACAFgFIAKgNQANgEAAAOQABALgBAFQgCAIgIAFQgFADADAHQAUBAgUA3QgDAHAFAIQATAiATA4QAKAdAfAzIAQAYIAAAGQgNAOgTgLQgGgDgDABQgEACAAAIQAAAJgEADQgEADgKgDQgJgCgLALIgJALQgEAEgEAAQgFAAgCgFQgIgRgXAGQgDABgCgCIAHgVQAGgWAEgjIAIg6QAEgYgSgPQgGgFgFgNQgCgGAAgLQAAgMgBgGQgJARgBANQgDAagEAOQgHAVgOANQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQgDAFgCAKQgHAhACA9QgCABgCAGQgCAEgDABIgMgEQgKgBgDAEQgDAEAFAIQAGAJgFAIQgFAGgLgFQgQgGgHAOQgGALgKAAIgBAAg");
	this.shape_94.setTransform(72.5,38.9,1.006,0.71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.roomba_h}]}).to({state:[{t:this.shape_47},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.roomba_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,111.5);


(lib.mc_merngue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOAhQgggYgMgWQgHgNAFgIQAOAgAgAUQAEADAKACIAFgBQABAAAAABQAAAAABAAQAAABAAABQAAABAAABQgBAIgHAAIgNgCg");
	this.shape.setTransform(42.8,4.2,0.923,0.642);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F0D8").s().p("AgCAAQACgFgDgEIAAgEQADADABAIIADALQAAABAAABQAAABAAABQgBAAAAABQgBAAAAAAIgFAAg");
	this.shape_1.setTransform(53.4,11.5,0.923,0.642);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAAIgEgDIAAgBQAEAAAHgEQAHgCADAFQADAEgCAKQgEgOgOAFg");
	this.shape_2.setTransform(58.1,8.7,0.923,0.642);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAEQADgHAKgEQAEgCAAAHQgDAKgIAAQgHAAABgEg");
	this.shape_3.setTransform(61.4,10.2,0.923,0.642);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4F0D8").s().p("AgBAAIADAAIgDABg");
	this.shape_4.setTransform(67.4,40,0.923,0.642);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAAIABgCIAEACIAAADQgDAAgCgDg");
	this.shape_5.setTransform(57.1,8.6,0.923,0.642);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4F0D8").s().p("AgCgNQACAEAAAHQAAAHADAEQACACgGACQgDgMACgOg");
	this.shape_6.setTransform(38.4,32.7,0.923,0.642);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4F0D8").s().p("AgFABQAFgBACgIQAEgMALABQgPAUgSATQgCgRANgCg");
	this.shape_7.setTransform(35.5,9.6,0.923,0.642);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020202").s().p("AACAWQgBgIAFgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgIABgEgCQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEAAIAEAAQAAAAABgBQABAAAAAAQAAgBABAAQAAgBAAAAQACgHgHgCIADgCQABgBAAAAQAAgBAAAAQAAAAgBgBQAAgBgBAAIgJgEIASgLQADAigIAgIgDADIgBgNg");
	this.shape_8.setTransform(67,18.8,0.923,0.642);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020202").s().p("AABAWQgHgDgFACQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBIgBgGIgDgRQgBgGADgBQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIACAJQACAGADAFIACgbQABgJAEAAQAEABABADIAAAGIAAAOIgBAFQAAAEABABQABAAAAABQABAAAAAAQABAAABgBQAAAAABgBIADgFQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQACACgBAEIgGAPIgBABQgEAAgHgDg");
	this.shape_9.setTransform(50.6,2,0.923,0.642);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#020202").s().p("AAJAfQgGgBgDgFIAAgHQgJgHgDgPQgFgTgDgGQAFgCAEADIAFAHQABAFAHACQANACAFAQQgCABgEgDQgDgDgDABIANAeIgJABIgDAAg");
	this.shape_10.setTransform(49.3,4.8,0.923,0.642);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020202").s().p("AgBAaQgRgDgHAAQgDAAgBgDIgBgHIABgIQAAgFgEgCIgBgDQAHgGAOgGIAWgJQACAGgEADIgHAHQAJAEAIgEQAIgEADgMIADgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAEACANQACAKgFAGIgTAMIAKADQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAIgDACIgDAAQgIAAgLgCg");
	this.shape_11.setTransform(65.1,16.1,0.923,0.642);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgrA2QgBgHAJgEIAFgCQAMAAAMgIIATgQQAGgEABgLIABgRQACgNgCgTQAAgNAKACQAIAFABALIAEAoIgBAGQgIAAgDAJIgGANQgDAFACAFQABAEgCADQgCADgFgCQgDgCgDADQgHAJgNABQgTACgEABIgFABQgFAAgBgFgAAcgZQgDACADAGIAHAMQACgEgCgEIgCgIQgBgEgCAAIgCAAg");
	this.shape_12.setTransform(59,61.5,0.923,0.642);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAWQgRgMgHgKQgEgEgDAAIAEgKQACgGgEgFIAAgHIAAgFQAAgBABgBQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIADAEQAUATAwAYQgDAHgJALQgJALgDAIQgGgHgTgOg");
	this.shape_13.setTransform(41.1,8.2,0.923,0.642);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020202").s().p("AgJAmIgGAAQgEgBgBgEQACgMgEgbIAAgEQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAJgIgIgLQgGgIgBgEIALgBQAEAFAGABIALgBQAKAAADAMQAEAPADAgIAAAFQgCAEADAFIgBAPQgKgFgZgEg");
	this.shape_14.setTransform(50.7,9.4,0.923,0.642);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABAYQgBgFgJgDQgKgEgCgFIgDADQgBAFACACIAFAEQACADgCADQgCADgJAAQgKgBgPgHIAIgLQATgSAPgVQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBABgBIACgDQADABAEAEQAGAKASANQATAMAHAHIAGAGQACADgHADQgFADAAAEIgZADQgNAAgGgLg");
	this.shape_15.setTransform(38.3,10.1,0.923,0.642);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAzQgMgFgEgEQgHgGgCgLIgHgOQgFgIgGgDQAUAAAXAEQANADADgOQAGgfgEgQQAFACgBAGIAAAIIABAHQAAADAEAAQAGAAARADQAPADAJgBQAGADgBAGQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgFAAIgEAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQAFADAIgBQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQgEAEAAAIIABAOIAAAEQgDAQgMAEQgEACgTACIgPABQgMAAgLgEg");
	this.shape_16.setTransform(61.9,19.4,0.923,0.642);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAnAqIgJgbQgBgDADgEQAFgFgDgKQgEgNgHABQgEABgBAFIgBAIQgPgWgSgDQgLgCgKAIQgNAJgCAJQgCAIAGASIAAACIgCACQgSgLgBgWQgBgWARgPQAagXAbAEQAcAFAVAeQAMASAFAOQAGASgDATQgFAUgMAHQgIgJgFgPg");
	this.shape_17.setTransform(61.5,7,0.923,0.642);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnBAQACgrgKgeQgIgaAAgnQABAKAHAHQAEAEANAEQAQAHAVgDQATgDAEgBQAMgEADgQQABAFgDARQgFAuASAkIABACQgmAmgugLQgKgCAAANQgCgDAAgIg");
	this.shape_18.setTransform(63,25.8,0.923,0.642);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAdBBQgvgZgUgUIgEgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBABQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAAGIAAAGQgDgCABgGQABgQgMgKQgJgHgEgYQgCgMAIgHQAIgGALAFQANAFAEgBQAIgCAHgJQANgSALASIAIALQAFAEAIAAQAGgBAFAGQAGAHgBAJIAAAUQgDAZAYAJQAAAEAGAIQAJALgJAJIgCADIgBAFIgFAAQgSAAgQgFgAgYgSQAMAWAhAYIAMACQAHAAABgIQABgBgBgBQAAgBAAgBQAAAAgBAAQAAgBgBAAIgFABQgJgCgFgDQgfgUgPggQgEAIAGANg");
	this.shape_19.setTransform(42.2,4.5,0.923,0.642);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AADBZIgKgBQgjgKgigqQgGgHACgKQAOgaAOgMQAIgHACgJQABgHgCgMQAAgNALACQAtALAmgmIADACIAEADQAPASAEAZQACARgDAdQgEAoABARQABAIACACQAGAIgBACQgBACgJAEQgTAHgJgCIgEAAIgMgBQgHAAgEADIgBABQgEgDgIgBg");
	this.shape_20.setTransform(63.6,34.2,0.923,0.642);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABWBdQgYgEgSAAQhLADgzgQQgdgKgRANQgCADgFgBQgPgDgMAPQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgGAFgEIAIgJQgEgBgKAAQgJAAgFgCIgGgDQgDgDABgFQABgFAIABQAEABAPgGIgKgEQgHgDgDgDQAAgFACgBQAPAIAJAAQAKAAACgDQABgDgCgDIgEgEQgCgCABgFIACgCQADAEAJAEQAJAEADAFQAFAKAOAAIAsgFIAZgCQAPgBAJgFQABAEAEAAIAGABQAZAEAKAEIAGAAQAAAAABAAQAAgBABAAQAAgBAAgBQAAgBAAgBIgDgMQgBgIgEgDQgDgggEgQQgDgLgKAAIgNgfQADgBADAEQAEADADgBQgGgRgMgCQgIgCAAgGQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBABAAIABgGIABAGQAAABAAABQABABAAAAQAAABABAAQAAAAABAAQAEgBAIACQAIADAEAAQAAAFADAFIAGAIQAHAMAQAoQANAfAMASQAHAKAEADQAHAEAJgDQAJgEASAAQgBgJgHgBQgQAAgNgVIgNgRIAAgEQAPgFADAPQADgKgDgFQgEgFgHADQgHADgEAAQgGgSACgJQACgJAMgJQAKgIAMABQATAEAPAWIABgJQAAgEAEgBQAIgBADANQAEALgFAFQgDAEABADIAIAaQAGAOAHAKIAJAYQAFAOABAJQgDAMgIAEQgIAEgKgEIAIgHQAEgDgCgGIgXAJQgOAGgHAHIgrgIgACBAHQgLAEgDAIQgBAEAHAAQAJAAADgLQAAgFgCAAIgCAAg");
	this.shape_21.setTransform(49.9,9.2,0.923,0.642);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgODgIAQgpQAJgXAAgVQAAgKgFgNQgIgWgegzQgNgYgIglQgEgVgJgMQgZgjAYgsQAEgJAAgIQANgKACgRQALgKAKgWQADgCADgHQACgGAEgCQgBAKAFAHQAiAqAiAJIAMACQAHABAEADIgNAXIgNASQgJALgDAIQgZAgASApQAVA0gQA+QgCAHADAHIAGAMQgLgCAAANQACATgCANIAAASQgBALgGAEIgVAQQgKAIgLAAIgBAAg");
	this.shape_22.setTransform(57.5,49.8,0.923,0.642);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhBCkIgLgGIgLgDQgHgBgFABQgHADgCgEQgCgDAAgHQAAgRgIgQQgGAKgDAOIgDAXQgPgKgSgBQgNABgVAFQgFAAAAgFIABgGQAEgbALgTQAdgyAHhRQACgiADgRQAFgcAJgVIAJgSQAFgKAHgFQADADAHADIAKAEQgPAGgEgBQgIgBgBAFQgBAFADADIAGADQAFACAJAAQAKAAAEABIgIAJQgFAEAAAGQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQAMgPAPADQAFABACgDQARgNAdAKQAyAQBMgDQASAAAYAEIArAIIABACQAEAQgHAfQgDAPgNgCQgYgGgUABIg6ADQgjACgZgRQgEgDgCACIgEAFQgJAUgJAcIgRAwQgFAPgKAIQgPAOABAYIAAAXQgDAGACAHIgBAIQgCAOADANIABABQgFgBgHgEg");
	this.shape_23.setTransform(43.3,22.8,0.923,0.642);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaEVQgIgFgFgKIgKgSQgCgFgCgBQgGgBgGgIIgKgNQgNgJAHgSQAMgiAOgdQAEgKAGgXQAHgWAEgLIARgjQAQgfgGgdQgCgLgHgLIgMgTIgfgoQgSgYgIgTQgCgFgHgEQgMgGgJgOQgEgIgHgTQgCgGACgIIAEgNQAVgFAMAAQATABAPAKIADgYQADgOAFgJQAJAQgBAQQAAAIACADQADAEAHgDQAFgCAHACIALADIAJAGQAIAEAEABQABAEADADIAGAGQAfAjARAXQAiAtAKAiQANAogNAjQgJAXgWAsQgaBAgDAzQgDAfADAnQABANgDADQgDADgMACIgKABQgFABgDAHQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgZABQgPgBgKgGg");
	this.shape_24.setTransform(36.4,48.1,0.923,0.642);

	this.merngue_h = new cjs.Text("מרנגה", "25px 'Arial'");
	this.merngue_h.name = "merngue_h";
	this.merngue_h.textAlign = "center";
	this.merngue_h.lineHeight = 30;
	this.merngue_h.lineWidth = 69;
	this.merngue_h.parent = this;
	this.merngue_h.setTransform(49.3,69);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(153,153,153,0.008)").s().p("AnpITIAAwlIPTAAIAAQlg");
	this.shape_25.setTransform(49,53.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AAOAhQgggYgMgWQgHgNAFgIQAOAgAgAUQAEADAKACIAFgBQABAAAAABQAAAAABAAQAAABAAABQAAABAAABQgBAIgHAAIgNgCg");
	this.shape_26.setTransform(42.8,4.2,0.923,0.642);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990000").s().p("AgHAAIgEgDIAAgBQAEAAAHgEQAHgCADAFQADAEgCAKQgEgOgOAFg");
	this.shape_27.setTransform(58.1,8.7,0.923,0.642);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990000").s().p("AgIAEQADgHAKgEQAEgCAAAHQgDAKgIAAQgHAAABgEg");
	this.shape_28.setTransform(61.4,10.2,0.923,0.642);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#990000").s().p("AACAWQgBgIAFgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgIABgEgCQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEAAIAEAAQAAAAABgBQABAAAAAAQAAgBABAAQAAgBAAAAQACgHgHgCIADgCQABgBAAAAQAAgBAAAAQAAAAgBgBQAAgBgBAAIgJgEIASgLQADAigIAgIgDADIgBgNg");
	this.shape_29.setTransform(67,18.8,0.923,0.642);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#990000").s().p("AABAWQgHgDgFACQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBIgBgGIgDgRQgBgGADgBQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIACAJQACAGADAFIACgbQABgJAEAAQAEABABADIAAAGIAAAOIgBAFQAAAEABABQABAAAAABQABAAAAAAQABAAABgBQAAAAABgBIADgFQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQACACgBAEIgGAPIgBABQgEAAgHgDg");
	this.shape_30.setTransform(50.6,2,0.923,0.642);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#990000").s().p("AAJAfQgGgBgDgFIAAgHQgJgHgDgPQgFgTgDgGQAFgCAEADIAFAHQABAFAHACQANACAFAQQgCABgEgDQgDgDgDABIANAeIgJABIgDAAg");
	this.shape_31.setTransform(49.3,4.8,0.923,0.642);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#990000").s().p("AgBAaQgRgDgHAAQgDAAgBgDIgBgHIABgIQAAgFgEgCIgBgDQAHgGAOgGIAWgJQACAGgEADIgHAHQAJAEAIgEQAIgEADgMIADgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAEACANQACAKgFAGIgTAMIAKADQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAIgDACIgDAAQgIAAgLgCg");
	this.shape_32.setTransform(65.1,16.1,0.923,0.642);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#990000").s().p("AgrA2QgBgHAJgEIAFgCQAMAAAMgIIATgQQAGgEABgLIABgRQACgNgCgTQAAgNAKACQAIAFABALIAEAoIgBAGQgIAAgDAJIgGANQgDAFACAFQABAEgCADQgCADgFgCQgDgCgDADQgHAJgNABQgTACgEABIgFABQgFAAgBgFgAAcgZQgDACADAGIAHAMQACgEgCgEIgCgIQgBgEgCAAIgCAAg");
	this.shape_33.setTransform(59,61.5,0.923,0.642);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#990000").s().p("AgIAWQgRgMgHgKQgEgEgDAAIAEgKQACgGgEgFIAAgHIAAgFQAAgBABgBQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIADAEQAUATAwAYQgDAHgJALQgJALgDAIQgGgHgTgOg");
	this.shape_34.setTransform(41.1,8.2,0.923,0.642);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#990000").s().p("AgJAmIgGAAQgEgBgBgEQACgMgEgbIAAgEQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAJgIgIgLQgGgIgBgEIALgBQAEAFAGABIALgBQAKAAADAMQAEAPADAgIAAAFQgCAEADAFIgBAPQgKgFgZgEg");
	this.shape_35.setTransform(50.7,9.4,0.923,0.642);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#990000").s().p("AABAYQgBgFgJgDQgKgEgCgFIgDADQgBAFACACIAFAEQACADgCADQgCADgJAAQgKgBgPgHIAIgLQATgSAPgVQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBABgBIACgDQADABAEAEQAGAKASANQATAMAHAHIAGAGQACADgHADQgFADAAAEIgZADQgNAAgGgLg");
	this.shape_36.setTransform(38.3,10.1,0.923,0.642);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#990000").s().p("AgSAzQgMgFgEgEQgHgGgCgLIgHgOQgFgIgGgDQAUAAAXAEQANADADgOQAGgfgEgQQAFACgBAGIAAAIIABAHQAAADAEAAQAGAAARADQAPADAJgBQAGADgBAGQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgFAAIgEAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQAFADAIgBQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQgEAEAAAIIABAOIAAAEQgDAQgMAEQgEACgTACIgPABQgMAAgLgEg");
	this.shape_37.setTransform(61.9,19.4,0.923,0.642);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("AAnAqIgJgbQgBgDADgEQAFgFgDgKQgEgNgHABQgEABgBAFIgBAIQgPgWgSgDQgLgCgKAIQgNAJgCAJQgCAIAGASIAAACIgCACQgSgLgBgWQgBgWARgPQAagXAbAEQAcAFAVAeQAMASAFAOQAGASgDATQgFAUgMAHQgIgJgFgPg");
	this.shape_38.setTransform(61.5,7,0.923,0.642);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AgnBAQACgrgKgeQgIgaAAgnQABAKAHAHQAEAEANAEQAQAHAVgDQATgDAEgBQAMgEADgQQABAFgDARQgFAuASAkIABACQgmAmgugLQgKgCAAANQgCgDAAgIg");
	this.shape_39.setTransform(63,25.8,0.923,0.642);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#990000").s().p("AAdBBQgvgZgUgUIgEgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBABQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAAGIAAAGQgDgCABgGQABgQgMgKQgJgHgEgYQgCgMAIgHQAIgGALAFQANAFAEgBQAIgCAHgJQANgSALASIAIALQAFAEAIAAQAGgBAFAGQAGAHgBAJIAAAUQgDAZAYAJQAAAEAGAIQAJALgJAJIgCADIgBAFIgFAAQgSAAgQgFgAgYgSQAMAWAhAYIAMACQAHAAABgIQABgBgBgBQAAgBAAgBQAAAAgBAAQAAgBgBAAIgFABQgJgCgFgDQgfgUgPggQgEAIAGANg");
	this.shape_40.setTransform(42.2,4.5,0.923,0.642);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990000").s().p("AAOA8IgLgDIgKgBQgfgGgggbQgFgEABgHQANgQANgIQAIgEACgGQAAgEgBgIQAAgJAJABQAqAIAjgZIADABIADADQAPALADAQQACALgDASQgEAaACALQAAAFACABQAFAFAAACQgBABgIACQgSAFgIgBIgEAAIgLgBQgGAAgEADg");
	this.shape_41.setTransform(63.6,34.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990000").s().p("ABWBdQgYgEgSAAQhLADgzgQQgdgKgRANQgCADgFgBQgPgDgMAPQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgGAFgEIAIgJQgEgBgKAAQgJAAgFgCIgGgDQgDgDABgFQABgFAIABQAEABAPgGIgKgEQgHgDgDgDQAAgFACgBQAPAIAJAAQAKAAACgDQABgDgCgDIgEgEQgCgCABgFIACgCQADAEAJAEQAJAEADAFQAFAKAOAAIAsgFIAZgCQAPgBAJgFQABAEAEAAIAGABQAZAEAKAEIAGAAQAAAAABAAQAAgBABAAQAAgBAAgBQAAgBAAgBIgDgMQgBgIgEgDQgDgggEgQQgDgLgKAAIgNgfQADgBADAEQAEADADgBQgGgRgMgCQgIgCAAgGQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBABAAIABgGIABAGQAAABAAABQABABAAAAQAAABABAAQAAAAABAAQAEgBAIACQAIADAEAAQAAAFADAFIAGAIQAHAMAQAoQANAfAMASQAHAKAEADQAHAEAJgDQAJgEASAAQgBgJgHgBQgQAAgNgVIgNgRIAAgEQAPgFADAPQADgKgDgFQgEgFgHADQgHADgEAAQgGgSACgJQACgJAMgJQAKgIAMABQATAEAPAWIABgJQAAgEAEgBQAIgBADANQAEALgFAFQgDAEABADIAIAaQAGAOAHAKIAJAYQAFAOABAJQgDAMgIAEQgIAEgKgEIAIgHQAEgDgCgGIgXAJQgOAGgHAHIgrgIgACBAHQgLAEgDAIQgBAEAHAAQAJAAADgLQAAgFgCAAIgCAAg");
	this.shape_42.setTransform(49.9,9.2,0.923,0.642);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#990000").s().p("AgODgIAQgpQAJgXAAgVQAAgKgFgNQgIgWgegzQgNgYgIglQgEgVgJgMQgZgjAYgsQAEgJAAgIQANgKACgRQALgKAKgWQADgCADgHQACgGAEgCQgBAKAFAHQAiAqAiAJIAMACQAHABAEADIgNAXIgNASQgJALgDAIQgZAgASApQAVA0gQA+QgCAHADAHIAGAMQgLgCAAANQACATgCANIAAASQgBALgGAEIgVAQQgKAIgLAAIgBAAg");
	this.shape_43.setTransform(57.5,49.8,0.923,0.642);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#990000").s().p("AhBCkIgLgGIgLgDQgHgBgFABQgHADgCgEQgCgDAAgHQAAgRgIgQQgGAKgDAOIgDAXQgPgKgSgBQgNABgVAFQgFAAAAgFIABgGQAEgbALgTQAdgyAHhRQACgiADgRQAFgcAJgVIAJgSQAFgKAHgFQADADAHADIAKAEQgPAGgEgBQgIgBgBAFQgBAFADADIAGADQAFACAJAAQAKAAAEABIgIAJQgFAEAAAGQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQAMgPAPADQAFABACgDQARgNAdAKQAyAQBMgDQASAAAYAEIArAIIABACQAEAQgHAfQgDAPgNgCQgYgGgUABIg6ADQgjACgZgRQgEgDgCACIgEAFQgJAUgJAcIgRAwQgFAPgKAIQgPAOABAYIAAAXQgDAGACAHIgBAIQgCAOADANIABABQgFgBgHgEg");
	this.shape_44.setTransform(43.3,22.8,0.923,0.642);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#990000").s().p("AgaEVQgIgFgFgKIgKgSQgCgFgCgBQgGgBgGgIIgKgNQgNgJAHgSQAMgiAOgdQAEgKAGgXQAHgWAEgLIARgjQAQgfgGgdQgCgLgHgLIgMgTIgfgoQgSgYgIgTQgCgFgHgEQgMgGgJgOQgEgIgHgTQgCgGACgIIAEgNQAVgFAMAAQATABAPAKIADgYQADgOAFgJQAJAQgBAQQAAAIACADQADAEAHgDQAFgCAHACIALADIAJAGQAIAEAEABQABAEADADIAGAGQAfAjARAXQAiAtAKAiQANAogNAjQgJAXgWAsQgaBAgDAzQgDAfADAnQABANgDADQgDADgMACIgKABQgFABgDAHQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgZABQgPgBgKgGg");
	this.shape_45.setTransform(36.4,48.1,0.923,0.642);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.merngue_h},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.merngue_h},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_28},{t:this.shape_27},{t:this.shape_1},{t:this.shape_26}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,107.2);


(lib.mc_kizumba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0C0C").s().p("AgBAAIACAAIgBABg");
	this.shape.setTransform(31.5,27.1,0.845,0.664);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0C0C").s().p("AgBAAIACAAQAAAAAAAAQABAAgBAAQAAABAAAAQAAAAgBAAg");
	this.shape_1.setTransform(47.4,15.3,0.845,0.664);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKgDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAEgBIAIADQAFABABAEQgBAFgJAAQgKgBgBgJg");
	this.shape_2.setTransform(37.4,14.5,0.845,0.664);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0C0C").s().p("AADAYQgDAAgBgDIgEgLQgCgGADgFQAEgIgIgMIABgCQAEAAACAFIADAOQADAIADAFQADAEgFAHIgBADIgCABIAAAAg");
	this.shape_3.setTransform(52.1,10.3,0.845,0.664);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C0C0C").s().p("AgDAHIABgNQAGAHABAGg");
	this.shape_4.setTransform(41.5,24.6,0.845,0.664);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C0C0C").s().p("AgHAIQAFgKAEgFQAEAAABADQABABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgHAIgFAAIgCAAg");
	this.shape_5.setTransform(37.6,31.5,0.845,0.664);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C0C0C").s().p("AgHANIAKgaQAGALgBAEQgBAGgHAFIgDABIgEgBg");
	this.shape_6.setTransform(38.7,29.8,0.845,0.664);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C0C0C").s().p("AgBAAIACgBQABABAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgBABIgBgCg");
	this.shape_7.setTransform(33.2,66.6,0.845,0.664);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMgCQgGgJAEgKQAFgKAKgCQAOgCABAQIABA0IgDABg");
	this.shape_8.setTransform(40.5,51.3,0.845,0.664);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C0C0C").s().p("AAAAAIAAAAIAAAAIABAAIgBABg");
	this.shape_9.setTransform(57.9,27.2,0.845,0.664);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C0C0C").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_10.setTransform(57,27.9,0.845,0.664);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C0C0C").s().p("AgDgCIAHAAQABABgBAEQgEgBgDgEg");
	this.shape_11.setTransform(40.1,7.4,0.845,0.664);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C0C0C").s().p("AADgEQAAAGgCADQgGgGAIgDg");
	this.shape_12.setTransform(28.3,29.6,0.845,0.664);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C0C0C").s().p("AABgEQACAEgBAFQgHgDAGgGg");
	this.shape_13.setTransform(22.2,38.5,0.845,0.664);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C0C0C").s().p("AgHgJIAPATIgDAAQgLAAgBgTg");
	this.shape_14.setTransform(23.9,41,0.845,0.664);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C0C0C").s().p("AgCgGQABgEABgBQADAAABAFIgBASQgIgIADgKg");
	this.shape_15.setTransform(31.3,68.7,0.845,0.664);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0C0C0C").s().p("AACgLIADAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAGIgBAJQgBAEgGABg");
	this.shape_16.setTransform(56.2,27.1,0.845,0.664);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0C0C0C").s().p("AgEgDQADgMAHgDQgEAHgCALIgCATQgEgLACgLg");
	this.shape_17.setTransform(22.5,36.5,0.845,0.664);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0C0C0C").s().p("AgCgCQAFgKAHgCQgEARgPAMQAAgIAHgJg");
	this.shape_18.setTransform(27.4,31.2,0.845,0.664);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0C0C0C").s().p("AAAAAIgLgNQAEgEAEADIAFAFQAIAFACAHQACAJgGAFQgBgIgHgJg");
	this.shape_19.setTransform(41.6,8.7,0.845,0.664);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0C0C0C").s().p("AgPAEQACgGAKAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBAAgBQABgEACgBQAKgEAEAAIgeAfIgBgMg");
	this.shape_20.setTransform(24.6,33.8,0.845,0.664);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKARQgBgGACAAQAJgDAAgHIgBgNIABgRQADAIgBARIgBAOQABAIAHAFQAHAGgQABQgIgGgCgHg");
	this.shape_21.setTransform(34.7,67.7,0.845,0.664);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLAOQgGgCgDgIIgDgMIABgKQAEACACAEIAEAGIAGAFQADABACgBQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBIgBgFIABgIQADADAAABQgBAJAFAGQADAEAKAGQACADAAACQAAADgFAAQgSgBgLgEg");
	this.shape_22.setTransform(50.8,69,0.845,0.664);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKAbIgBgGQgFgUABgHQABgOANgJIAHAEQAEADgCAIQgBAFAFAIQAEAJABAFIgDACIgNgDQgFgBABAHIgBAMQgFAAgBgDg");
	this.shape_23.setTransform(31.9,65.6,0.845,0.664);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTALQAAgIgDgEQgEgHAEgJQAFgKABgFQABgDAIACQANABAMgDQAGALABAQQgGgVgYAEIgFABQAIAQAHAaIgGgGQgDgEgDACQgDABAAAFIAAAIIABAGIgFAGg");
	this.shape_24.setTransform(48.5,66.3,0.845,0.664);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAKAgIgGgEIgEgGQgCgFgDgBIgBAKIgGgGQgEgEgEAHIAAgFIAAgJQAAgFACgBQAEgCADAEIAGAGQgIgagHgQIAEgBQAZgEAGAWQAMARgKANIAAAHIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCAAIgDgBg");
	this.shape_25.setTransform(49.4,66.7,0.845,0.664);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AguAQQgIgFgCgFIAQgOQALgEATgEIAcgEIACABQABAHgGALQgBAIACABQAEADAGgFIAfgYQAAAPgFANQgDAIgJgCQgNgBgXADQgZAEgKAAQgGgBgJgFg");
	this.shape_26.setTransform(45.7,16.7,0.845,0.664);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAEAfQgFgKgIgEQAEANgDAKQgEgDgCgJQgDgHgEgDQgCADAAAHQAAAGgCADQABgIgCgLIgFgSQgFgQAIgeIADAOQACAIAEAAQATABAHgQQACAHgBADQgBADgEAEQgHAFAAAEQAAADAIAEIAVAIQAIAFABAFQgEACgIgFQgHgEgEACIgDAAIAAACIASAeIgIgBQgFAAABAJIgKgQg");
	this.shape_27.setTransform(30.7,26.6,0.845,0.664);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AANApQgBgBABgFQACgKgLAAQgIgCgDgDQgCgEACgJQADgOgHgGQgEgEgGABIgJAEIgPAGQgFgEAGgJQAMgOAcgFQAbgFARAIIAEAFIgBAaQAAADADAHQADAIgBAFQgDABgCgDIgDgEIgEgDQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABABIACADIgBACQgJgCgBAKQgCAKgCACQgCABgDAAIgBAAg");
	this.shape_28.setTransform(48.6,7.5,0.845,0.664);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag9AcQACgKgEgJQgIgSARgKQAJgFAJgNQAMgRAWAEIATABQANAAAHADQADAFAFABQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAMAPQAHAIABAIQgBAbgSAMQgGAAADgFIACgHIAAgIQABgMgHgHQgGgFgMgEQgUgFgQARQgFAFgDAFIgEAHQgCACgGgEQgHgEgEAMQgBAFAEAOQADAOgOAAQgLgHACgQg");
	this.shape_29.setTransform(36.6,10.3,0.845,0.664);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgtA2IgmgOIAbgIQAOgDAKgGQAKgFAEgKQAQgeAEgmIABgHQABgEAFABQALAHAVABQAQABANAOQAMANABASQACAUgNAYQgFgCgKgGQgKgGgHgCQgYgDgJAGQgGAGgGAYIgEAbQgNgKgXgIg");
	this.shape_30.setTransform(54.1,19.1,0.845,0.664);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABaCkQgkgKgngoIgYgYQgKgKgMABIgbADQgHABgDAHQgIAQgTADQgRAEgNgKQgOgMgDgUQgCgUAMgOIAKgMQgXAKgMAaIgRAwQgRgsAOgfIACgFQAAAAAAgBQAAAAgBAAQgBgBAAAAQgBAAgCAAIAFgGQAOgGAHgQIAMgbQAEgHgIgGQAOAAgEgPQgDgOABgEQADgNAHAFQAGAEADgDIAEgHQADgGAEgEQASgRATAFQANADAFAGQAHAHgBAMIAAAIIgCAIQgCAFAFAAIADAHQABAEgEADIgUAZQgMAOgPABQgHABgBAQQgBAIAOAAIAUAAQAHAAABgDQADgGAFgBIAJAAQACAFAJAGQAIAFAGAAQALAAAZgEQAWgDAOABQAJACACgIQAFgOABgNIggAXQgGAFgDgCQgCgCABgJQAFgKgBgHQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBgBIgCABIgeAFQgRADgLAFQABgDgCgCIgEgFQALABAQgDIAYgEQAHgBACgEQAAgGgHgCQgGgBAAgHIgBgEQgJgCgDgKIgEgRQgDgEAEgKQAEgQgFgMQgDgFACgHIADgNIAPgHIAKgDQAGgBADAEQAHAGgDAPQgBAJACAEQACADAKABQALABgDAKQgBAFABABQADABAEgDQACgCABgJQABgKAJACQAIAMgEAIQgDAGADAGIAEALQABADADAAQABABAAAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgDQAFgHgEgEQgDgFgCgJIgEgOQgCgFgEAAIgDgEQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIAEADIADAEQACACADAAQAAgFgDgIQgDgIAAgDIABgaQAPgEAEAVQAJAkABANQAEAcgGAWQgCAJAGAIQgFAAgCAEIgBAGQgEAmgQAfQgFAJgKAGQgJAFgOAEIgbAHIAmAPQAWAIANAJIAEgaQAHgYAHgGQAJgHAYAEQAHACAJAFQALAHAEACQgBAJgGANIgJAXQgDALgPALQgJAHgBAFQgEAAgFAEIgHAHQgJAIgNAAIgMgCgAhcgiQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABQABAJAKABQAKAAAAgFQAAgEgFgCIgJgCIgEAAg");
	this.shape_31.setTransform(44.6,16.4,0.845,0.664);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AiYDCQgKgQgLgFQgIgFgDgLIgQgUIgKgYQABgGgDgDIAAgFIADgUQACgLAEgIIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIABgEIAngoQAQgMAEgRIABgFQACgCAAgHIAAgDQACgDAAgGQABgHABgDQAFACACAIQADAJAEACQACgJgEgNQAIAEAGAJIALARQgCgJAFAAIAIABIgRgeIACgCQAEgCAIAEQAHAEAFgBQgCgGgHgEIgVgJQgJgEAAgDQgBgEAIgFQAFgEABgDQAAgDgCgHQgHAQgTgBQgEgBgCgHIgDgOIgCgkQgCgWAQgTQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAIgCAFQgOAfARAsIASgwQAMgaAWgKIgKAMQgLAOACAUQACAUAPAMQAMAKASgEQASgDAJgQQADgHAHgBIAagDQALgBALAKIAYAYQAnAoAlAKQAUAFANgLIAIgHQAEgEAFAAIAAACIgJAYQgQAlAaAcQAMAMAAAXQAAAGADAKIAFAPIghgFQgSgCgPACIg4ALQggAGgVgVQgDgDgRgJIANg5QADgJgDgHQgDgKACgNQADgNgGgRIgIgbQAAgGgHgIIgCAOQgFANgFADQgIAIgDALQgCAHgBAPIgLAbIgDAFQgFAEgFALIgJANQgRAWACAjQABAGAEADIAgAdQABAFgEAAQgSAEgUAPIgiAaIgjAXQgFADgFAAQgDAAgEgCg");
	this.shape_32.setTransform(40.2,31.2,0.845,0.664);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ADBENIgJgIQgKgVgbgJQgcgKgBgnQgBgaACgoIAChCQABgngFgSIgCgGQACgRgKgSQgHgLgPgRQgXgagjgtIgPgUQgMgQgRAOQgIAGgJANIgQAVQgCADABACIACAFQAWAkgBAfQAAAcAHAjIAPA+IAIArIAHAsQgLADgOgBQgIgCAAADQgBAFgGAKQgDAJAEAHQACAFAAAIIhCAVQgFABgJAIQgIAHgGACQgJACgRgBQgEAAgBgDQgBgDADgCQAQgLACgTQAAgEgDgeQgEgggPgoIgDgEQgLAQgDAcIAAAsIAAARIAAAOQAAAHgIADQgCAAABAGQACAHAHAGIgMAAQgHAAgFgEQgCgBgEABIgGABIAAgSQAHADAAgJIAAgJQAAgFgHgCQgBgHAHABIAMADQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgFgFgKQgEgJABgEQABgIgDgDIgJgFQAFgPAAgUIgDgjQgDgeABgSQABgbAKgUQABgDAAgFIgCgtQAAgEgEgEQgWgXgOgJQgUgNgCgUQAIAEAJgFIAjgXIAigaQAUgPASgEQAEgBgBgEIAsg8QARAKADADQAVAUAggGIA3gKQAPgDASACIAhAGQAWAiAFAPQACAGAHAKQANAbANAsIALAnIAKAmQAEASAKAZIARAqQAVA4AGAYIAIAgQAEATgBAOQgCATgTAPIgPAMQgIAHABALQAAAGgJAEQgFACgDAAQgEAAgCgCgAhmg/QgLACgEAKQgFAKAHAJIAbAkIACgBIAAg0QgBgPgMAAIgDABg");
	this.shape_33.setTransform(49.2,53.3,0.845,0.664);

	this.kizumba_h = new cjs.Text("קיזומבה", "25px 'Arial'");
	this.kizumba_h.name = "kizumba_h";
	this.kizumba_h.textAlign = "center";
	this.kizumba_h.lineHeight = 30;
	this.kizumba_h.lineWidth = 69;
	this.kizumba_h.parent = this;
	this.kizumba_h.setTransform(47.5,73.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(153,153,153,0.008)").s().p("AnpItIAAxZIPTAAIAARZg");
	this.shape_34.setTransform(49,55.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#990000").s().p("AgBAAIACAAIgBABg");
	this.shape_35.setTransform(31.5,27.1,0.845,0.664);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#990000").s().p("AgBAAIACAAQAAAAAAAAQABAAgBAAQAAABAAAAQAAAAgBAAg");
	this.shape_36.setTransform(47.4,15.3,0.845,0.664);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#990000").s().p("AgKgDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAEgBIAIADQAFABABAEQgBAFgJAAQgKgBgBgJg");
	this.shape_37.setTransform(37.4,14.5,0.845,0.664);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("AADAYQgDAAgBgDIgEgLQgCgGADgFQAEgIgIgMIABgCQAEAAACAFIADAOQADAIADAFQADAEgFAHIgBADIgCABIAAAAg");
	this.shape_38.setTransform(52.1,10.3,0.845,0.664);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AgDAHIABgNQAGAHABAGg");
	this.shape_39.setTransform(41.5,24.6,0.845,0.664);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#990000").s().p("AgHAIQAFgKAEgFQAEAAABADQABABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgHAIgFAAIgCAAg");
	this.shape_40.setTransform(37.6,31.5,0.845,0.664);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990000").s().p("AgHANIAKgaQAGALgBAEQgBAGgHAFIgDABIgEgBg");
	this.shape_41.setTransform(38.7,29.8,0.845,0.664);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990000").s().p("AgBAAIACgBQABABAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgBABIgBgCg");
	this.shape_42.setTransform(33.2,66.6,0.845,0.664);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#990000").s().p("AgMgCQgGgJAEgKQAFgKAKgCQAOgCABAQIABA0IgDABg");
	this.shape_43.setTransform(40.5,51.3,0.845,0.664);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#990000").s().p("AAAAAIAAAAIAAAAIABAAIgBABg");
	this.shape_44.setTransform(57.9,27.2,0.845,0.664);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#990000").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_45.setTransform(57,27.9,0.845,0.664);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#990000").s().p("AgDgCIAHAAQABABgBAEQgEgBgDgEg");
	this.shape_46.setTransform(40.1,7.4,0.845,0.664);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#990000").s().p("AADgEQAAAGgCADQgGgGAIgDg");
	this.shape_47.setTransform(28.3,29.6,0.845,0.664);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990000").s().p("AABgEQACAEgBAFQgHgDAGgGg");
	this.shape_48.setTransform(22.2,38.5,0.845,0.664);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#990000").s().p("AgHgJIAPATIgDAAQgLAAgBgTg");
	this.shape_49.setTransform(23.9,41,0.845,0.664);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#990000").s().p("AgCgGQABgEABgBQADAAABAFIgBASQgIgIADgKg");
	this.shape_50.setTransform(31.3,68.7,0.845,0.664);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#990000").s().p("AACgLIADAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAGIgBAJQgBAEgGABg");
	this.shape_51.setTransform(56.2,27.1,0.845,0.664);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#990000").s().p("AgEgDQADgMAHgDQgEAHgCALIgCATQgEgLACgLg");
	this.shape_52.setTransform(22.5,36.5,0.845,0.664);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#990000").s().p("AgCgCQAFgKAHgCQgEARgPAMQAAgIAHgJg");
	this.shape_53.setTransform(27.4,31.2,0.845,0.664);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#990000").s().p("AAAAAIgLgNQAEgEAEADIAFAFQAIAFACAHQACAJgGAFQgBgIgHgJg");
	this.shape_54.setTransform(41.6,8.7,0.845,0.664);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#990000").s().p("AgPAEQACgGAKAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBAAgBQABgEACgBQAKgEAEAAIgeAfIgBgMg");
	this.shape_55.setTransform(24.6,33.8,0.845,0.664);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#990000").s().p("AgKARQgBgGACAAQAJgDAAgHIgBgNIABgRQADAIgBARIgBAOQABAIAHAFQAHAGgQABQgIgGgCgHg");
	this.shape_56.setTransform(34.7,67.7,0.845,0.664);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#990000").s().p("AgLAOQgGgCgDgIIgDgMIABgKQAEACACAEIAEAGIAGAFQADABACgBQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBIgBgFIABgIQADADAAABQgBAJAFAGQADAEAKAGQACADAAACQAAADgFAAQgSgBgLgEg");
	this.shape_57.setTransform(50.8,69,0.845,0.664);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#990000").s().p("AgKAbIgBgGQgFgUABgHQABgOANgJIAHAEQAEADgCAIQgBAFAFAIQAEAJABAFIgDACIgNgDQgFgBABAHIgBAMQgFAAgBgDg");
	this.shape_58.setTransform(31.9,65.6,0.845,0.664);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#990000").s().p("AgTALQAAgIgDgEQgEgHAEgJQAFgKABgFQABgDAIACQANABAMgDQAGALABAQQgGgVgYAEIgFABQAIAQAHAaIgGgGQgDgEgDACQgDABAAAFIAAAIIABAGIgFAGg");
	this.shape_59.setTransform(48.5,66.3,0.845,0.664);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#990000").s().p("AAKAgIgGgEIgEgGQgCgFgDgBIgBAKIgGgGQgEgEgEAHIAAgFIAAgJQAAgFACgBQAEgCADAEIAGAGQgIgagHgQIAEgBQAZgEAGAWQAMARgKANIAAAHIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCAAIgDgBg");
	this.shape_60.setTransform(49.4,66.7,0.845,0.664);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#990000").s().p("AguAQQgIgFgCgFIAQgOQALgEATgEIAcgEIACABQABAHgGALQgBAIACABQAEADAGgFIAfgYQAAAPgFANQgDAIgJgCQgNgBgXADQgZAEgKAAQgGgBgJgFg");
	this.shape_61.setTransform(45.7,16.7,0.845,0.664);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#990000").s().p("AAEAfQgFgKgIgEQAEANgDAKQgEgDgCgJQgDgHgEgDQgCADAAAHQAAAGgCADQABgIgCgLIgFgSQgFgQAIgeIADAOQACAIAEAAQATABAHgQQACAHgBADQgBADgEAEQgHAFAAAEQAAADAIAEIAVAIQAIAFABAFQgEACgIgFQgHgEgEACIgDAAIAAACIASAeIgIgBQgFAAABAJIgKgQg");
	this.shape_62.setTransform(30.7,26.6,0.845,0.664);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#990000").s().p("AANApQgBgBABgFQACgKgLAAQgIgCgDgDQgCgEACgJQADgOgHgGQgEgEgGABIgJAEIgPAGQgFgEAGgJQAMgOAcgFQAbgFARAIIAEAFIgBAaQAAADADAHQADAIgBAFQgDABgCgDIgDgEIgEgDQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABABIACADIgBACQgJgCgBAKQgCAKgCACQgCABgDAAIgBAAg");
	this.shape_63.setTransform(48.6,7.5,0.845,0.664);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#990000").s().p("Ag9AcQACgKgEgJQgIgSARgKQAJgFAJgNQAMgRAWAEIATABQANAAAHADQADAFAFABQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAMAPQAHAIABAIQgBAbgSAMQgGAAADgFIACgHIAAgIQABgMgHgHQgGgFgMgEQgUgFgQARQgFAFgDAFIgEAHQgCACgGgEQgHgEgEAMQgBAFAEAOQADAOgOAAQgLgHACgQg");
	this.shape_64.setTransform(36.6,10.3,0.845,0.664);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#990000").s().p("AgtA2IgmgOIAbgIQAOgDAKgGQAKgFAEgKQAQgeAEgmIABgHQABgEAFABQALAHAVABQAQABANAOQAMANABASQACAUgNAYQgFgCgKgGQgKgGgHgCQgYgDgJAGQgGAGgGAYIgEAbQgNgKgXgIg");
	this.shape_65.setTransform(54.1,19.1,0.845,0.664);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#990000").s().p("ABaCkQgkgKgngoIgYgYQgKgKgMABIgbADQgHABgDAHQgIAQgTADQgRAEgNgKQgOgMgDgUQgCgUAMgOIAKgMQgXAKgMAaIgRAwQgRgsAOgfIACgFQAAAAAAgBQAAAAgBAAQgBgBAAAAQgBAAgCAAIAFgGQAOgGAHgQIAMgbQAEgHgIgGQAOAAgEgPQgDgOABgEQADgNAHAFQAGAEADgDIAEgHQADgGAEgEQASgRATAFQANADAFAGQAHAHgBAMIAAAIIgCAIQgCAFAFAAIADAHQABAEgEADIgUAZQgMAOgPABQgHABgBAQQgBAIAOAAIAUAAQAHAAABgDQADgGAFgBIAJAAQACAFAJAGQAIAFAGAAQALAAAZgEQAWgDAOABQAJACACgIQAFgOABgNIggAXQgGAFgDgCQgCgCABgJQAFgKgBgHQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBgBIgCABIgeAFQgRADgLAFQABgDgCgCIgEgFQALABAQgDIAYgEQAHgBACgEQAAgGgHgCQgGgBAAgHIgBgEQgJgCgDgKIgEgRQgDgEAEgKQAEgQgFgMQgDgFACgHIADgNIAPgHIAKgDQAGgBADAEQAHAGgDAPQgBAJACAEQACADAKABQALABgDAKQgBAFABABQADABAEgDQACgCABgJQABgKAJACQAIAMgEAIQgDAGADAGIAEALQABADADAAQABABAAAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgDQAFgHgEgEQgDgFgCgJIgEgOQgCgFgEAAIgDgEQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIAEADIADAEQACACADAAQAAgFgDgIQgDgIAAgDIABgaQAPgEAEAVQAJAkABANQAEAcgGAWQgCAJAGAIQgFAAgCAEIgBAGQgEAmgQAfQgFAJgKAGQgJAFgOAEIgbAHIAmAPQAWAIANAJIAEgaQAHgYAHgGQAJgHAYAEQAHACAJAFQALAHAEACQgBAJgGANIgJAXQgDALgPALQgJAHgBAFQgEAAgFAEIgHAHQgJAIgNAAIgMgCgAhcgiQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABQABAJAKABQAKAAAAgFQAAgEgFgCIgJgCIgEAAg");
	this.shape_66.setTransform(44.6,16.4,0.845,0.664);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#990000").s().p("AiYDCQgKgQgLgFQgIgFgDgLIgQgUIgKgYQABgGgDgDIAAgFIADgUQACgLAEgIIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIABgEIAngoQAQgMAEgRIABgFQACgCAAgHIAAgDQACgDAAgGQABgHABgDQAFACACAIQADAJAEACQACgJgEgNQAIAEAGAJIALARQgCgJAFAAIAIABIgRgeIACgCQAEgCAIAEQAHAEAFgBQgCgGgHgEIgVgJQgJgEAAgDQgBgEAIgFQAFgEABgDQAAgDgCgHQgHAQgTgBQgEgBgCgHIgDgOIgCgkQgCgWAQgTQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAIgCAFQgOAfARAsIASgwQAMgaAWgKIgKAMQgLAOACAUQACAUAPAMQAMAKASgEQASgDAJgQQADgHAHgBIAagDQALgBALAKIAYAYQAnAoAlAKQAUAFANgLIAIgHQAEgEAFAAIAAACIgJAYQgQAlAaAcQAMAMAAAXQAAAGADAKIAFAPIghgFQgSgCgPACIg4ALQggAGgVgVQgDgDgRgJIANg5QADgJgDgHQgDgKACgNQADgNgGgRIgIgbQAAgGgHgIIgCAOQgFANgFADQgIAIgDALQgCAHgBAPIgLAbIgDAFQgFAEgFALIgJANQgRAWACAjQABAGAEADIAgAdQABAFgEAAQgSAEgUAPIgiAaIgjAXQgFADgFAAQgDAAgEgCg");
	this.shape_67.setTransform(40.2,31.2,0.845,0.664);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#990000").s().p("ADBENIgJgIQgKgVgbgJQgcgKgBgnQgBgaACgoIAChCQABgngFgSIgCgGQACgRgKgSQgHgLgPgRQgXgagjgtIgPgUQgMgQgRAOQgIAGgJANIgQAVQgCADABACIACAFQAWAkgBAfQAAAcAHAjIAPA+IAIArIAHAsQgLADgOgBQgIgCAAADQgBAFgGAKQgDAJAEAHQACAFAAAIIhCAVQgFABgJAIQgIAHgGACQgJACgRgBQgEAAgBgDQgBgDADgCQAQgLACgTQAAgEgDgeQgEgggPgoIgDgEQgLAQgDAcIAAAsIAAARIAAAOQAAAHgIADQgCAAABAGQACAHAHAGIgMAAQgHAAgFgEQgCgBgEABIgGABIAAgSQAHADAAgJIAAgJQAAgFgHgCQgBgHAHABIAMADQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgFgFgKQgEgJABgEQABgIgDgDIgJgFQAFgPAAgUIgDgjQgDgeABgSQABgbAKgUQABgDAAgFIgCgtQAAgEgEgEQgWgXgOgJQgUgNgCgUQAIAEAJgFIAjgXIAigaQAUgPASgEQAEgBgBgEIAsg8QARAKADADQAVAUAggGIA3gKQAPgDASACIAhAGQAWAiAFAPQACAGAHAKQANAbANAsIALAnIAKAmQAEASAKAZIARAqQAVA4AGAYIAIAgQAEATgBAOQgCATgTAPIgPAMQgIAHABALQAAAGgJAEQgFACgDAAQgEAAgCgCgAhmg/QgLACgEAKQgFAKAHAJIAbAkIACgBIAAg0QgBgPgMAAIgDABg");
	this.shape_68.setTransform(49.2,53.3,0.845,0.664);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.kizumba_h},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_34},{t:this.kizumba_h},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,133.2);


(lib.mc_cha_cha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.cha_cha_h = new cjs.Text("צ'ה צ'ה צ'ה", "25px 'Arial'");
	this.cha_cha_h.name = "cha_cha_h";
	this.cha_cha_h.textAlign = "center";
	this.cha_cha_h.lineHeight = 30;
	this.cha_cha_h.lineWidth = 74;
	this.cha_cha_h.parent = this;
	this.cha_cha_h.setTransform(47.9,72.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AgFgDIAIgGIADATg");
	this.shape.setTransform(62.2,72,0.435,0.339);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A0A0A").s().p("AgBAFQgIgFgBgMQATgEACAeIgMgJg");
	this.shape_1.setTransform(23.6,30.3,0.435,0.339);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A0A0A").s().p("AgBAJQgGgCgCgPIATAAIAAAPIgKACIgBAAg");
	this.shape_2.setTransform(22,29.5,0.435,0.339);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#070707").s().p("AgLgPQALgBAFAGQAIAHAAATIAAAAIgTABQgJgJAEgXg");
	this.shape_3.setTransform(21.8,28.7,0.435,0.339);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A0A0A").s().p("AgBAjQgFgFgMAAIAGgyQAGgcANgNQgBAIAKA1QAIAmgSAYQAAgUgHgHg");
	this.shape_4.setTransform(22.1,27.1,0.435,0.339);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABNGPQgOgEgJgQQgIgRADgUQAEgVgHgUQgDgMgMgVIgNgdQgIgSgIgIIgXAsQgNAagFAYQgBAIgHAQQgGAPgCAKQgBAKgGgBQgEgCgFgIQgDgGAAgJIABgRIgBgGIgEACQgJgHACgIQACgFAHgEQANgHAFgQQADgIAEgYQADgXAOgXIAagoQANgWAGgQQAIgXgBgYQgCgbAFgMQAFgMAQgFQA4gUgmg+QgIgNgJgCQgIgCgKALQgRATghAXQgmAYgPANQgIAHgNgHQgPgJgHgCQgHgDgPgKQgNgKgJgBQgCgJAGgFIAIgIIAYgBQAJAAADACQAFAEABAMQABAOAKADQAJAEAMgJIArghQAXgUANgVQAIgNATgQQAUgRAIgLIAKgQQACgIgMgJQgIgFACgNQABgNAIgIQAPgPAHgWQAHgTABgeQACgeAMg1IADgBIACgBQACAKADABQABAAADgFIAEgHQACgCACAFQgBAHADARQABAPgNAHQgDABAAAIQAAAIADADQAGAHAAALIAAAUIACAcQADAOAMAHQAHADgCAVQgBAVgJANQgJAPAAAJQABALAOAHIAEAEIAEAEQAOALAEAJQAGANgHAVQgEAMgEAVIgIAjQgEAQgMAfQgNAggEAQQgDAMgCAXQgDAYgDAMQgKAngPAbQgLATAAAZQAAAHAFAlIAFAWIAFAXIACANIAEAKIAGAJQADAFgCAGQgDAGgFAAIgKgCg");
	this.shape_5.setTransform(69.8,40);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#070707").s().p("AFAOVQghgWgwgKQg3gKgcgHQgOgEgFgSQgDgMABgaQAHh7gshtQgxh5gaisQgGgmgRgvQgVgzgJgbQgKgcgLABQgNAAgIAkQgdCKgxC1QgRA/gnBrQgqBygQA2QgEAPgIAFQgHAEgIgFQgggUgdANQgZAMgcApQgOATgTAEQgTAEgVgMQAEgkAUghQAdgwADgHQAUgxAZhQIAqiEIAghvQAShDAVgkQACgFABgKQABhLAZhyQAeiJAFgvQAKhagCguQgEhJgegyQgDgfgTAEIgIAEQgFAAgDgGIAAgRQARgYgHgmQgKg2ABgIQAThKAxgjQAjgZARgkQAfg/A9AcQAtAUAJgMQAKgLAIhPQAHg8A0gSQAzgTAfAuQAeAtACAfQACAggYA5IgNAvQgHAdgPAMQgJAHAIANQACAFAOAQQBnB4AtAsQBVBTBNAiQAOAHADALQACAKgJAUQgCAEgSAUQgNAOAEAZQgIAUgNABQgHAAgSgIQg1gZhBg3IhxhlQgRgPgIADQgJAEgJAcIgRA5QgLAfgMAOQgZAdAEAdQACAQATAlQA0BoASCeQANBtAiCvQAoDPALBKQAHAsAWAwQAXAvAcAeIAOAOQAIALgDAPQgCAUgLADIgEAAQgHAAgGgFgAg3qJQgVAigKAoQgkCWAjCFQADANACAeQAFAXAPgBQAfgCAQgzQAIgdAVg+QAUg6AKgiQAVhJAAg5QAAgPgRgGQgVgHgFgIQgQgUgGgMQgLgUgBgaQgjAugIAMg");
	this.shape_6.setTransform(33.9,43.7,0.435,0.339);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(153,153,153,0.008)").s().p("AnpITIAAwlIPTAAIAAQlg");
	this.shape_7.setTransform(49,55.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AgBAFQgIgFgBgMQATgEACAeIgMgJg");
	this.shape_8.setTransform(23.6,30.3,0.435,0.339);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AgBAJQgGgCgCgPIATAAIAAAPIgKACIgBAAg");
	this.shape_9.setTransform(22,29.5,0.435,0.339);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AgLgPQALgBAFAGQAIAHAAATIAAAAIgTABQgJgJAEgXg");
	this.shape_10.setTransform(21.8,28.7,0.435,0.339);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AgBAjQgFgFgMAAIAGgyQAGgcANgNQgBAIAKA1QAIAmgSAYQAAgUgHgHg");
	this.shape_11.setTransform(22.1,27.1,0.435,0.339);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("ABNGPQgOgEgJgQQgIgRADgUQAEgVgHgUQgDgMgMgVIgNgdQgIgSgIgIIgXAsQgNAagFAYQgBAIgHAQQgGAPgCAKQgBAKgGgBQgEgCgFgIQgDgGAAgJIABgRIgBgGIgEACQgJgHACgIQACgFAHgEQANgHAFgQQADgIAEgYQADgXAOgXIAagoQANgWAGgQQAIgXgBgYQgCgbAFgMQAFgMAQgFQA4gUgmg+QgIgNgJgCQgIgCgKALQgRATghAXQgmAYgPANQgIAHgNgHQgPgJgHgCQgHgDgPgKQgNgKgJgBQgCgJAGgFIAIgIIAYgBQAJAAADACQAFAEABAMQABAOAKADQAJAEAMgJIArghQAXgUANgVQAIgNATgQQAUgRAIgLIAKgQQACgIgMgJQgIgFACgNQABgNAIgIQAPgPAHgWQAHgTABgeQACgeAMg1IADgBIACgBQACAKADABQABAAADgFIAEgHQACgCACAFQgBAHADARQABAPgNAHQgDABAAAIQAAAIADADQAGAHAAALIAAAUIACAcQADAOAMAHQAHADgCAVQgBAVgJANQgJAPAAAJQABALAOAHIAEAEIAEAEQAOALAEAJQAGANgHAVQgEAMgEAVIgIAjQgEAQgMAfQgNAggEAQQgDAMgCAXQgDAYgDAMQgKAngPAbQgLATAAAZQAAAHAFAlIAFAWIAFAXIACANIAEAKIAGAJQADAFgCAGQgDAGgFAAIgKgCg");
	this.shape_12.setTransform(69.8,40);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AFAOVQghgWgwgKQg3gKgcgHQgOgEgFgSQgDgMABgaQAHh7gshtQgxh5gaisQgGgmgRgvQgVgzgJgbQgKgcgLABQgNAAgIAkQgdCKgxC1QgRA/gnBrQgqBygQA2QgEAPgIAFQgHAEgIgFQgggUgdANQgZAMgcApQgOATgTAEQgTAEgVgMQAEgkAUghQAdgwADgHQAUgxAZhQIAqiEIAghvQAShDAVgkQACgFABgKQABhLAZhyQAeiJAFgvQAKhagCguQgEhJgegyQgDgfgTAEIgIAEQgFAAgDgGIAAgRQARgYgHgmQgKg2ABgIQAThKAxgjQAjgZARgkQAfg/A9AcQAtAUAJgMQAKgLAIhPQAHg8A0gSQAzgTAfAuQAeAtACAfQACAggYA5IgNAvQgHAdgPAMQgJAHAIANQACAFAOAQQBnB4AtAsQBVBTBNAiQAOAHADALQACAKgJAUQgCAEgSAUQgNAOAEAZQgIAUgNABQgHAAgSgIQg1gZhBg3IhxhlQgRgPgIADQgJAEgJAcIgRA5QgLAfgMAOQgZAdAEAdQACAQATAlQA0BoASCeQANBtAiCvQAoDPALBKQAHAsAWAwQAXAvAcAeIAOAOQAIALgDAPQgCAUgLADIgEAAQgHAAgGgFgAg3qJQgVAigKAoQgkCWAjCFQADANACAeQAFAXAPgBQAfgCAQgzQAIgdAVg+QAUg6AKgiQAVhJAAg5QAAgPgRgGQgVgHgFgIQgQgUgGgMQgLgUgBgaQgjAugIAMg");
	this.shape_13.setTransform(33.9,43.7,0.435,0.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.cha_cha_h}]}).to({state:[{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape},{t:this.cha_cha_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,132.7);


(lib.mc_bolero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.bolero_h = new cjs.Text("בולרו", "25px 'Arial'");
	this.bolero_h.name = "bolero_h";
	this.bolero_h.textAlign = "center";
	this.bolero_h.lineHeight = 30;
	this.bolero_h.lineWidth = 73;
	this.bolero_h.parent = this;
	this.bolero_h.setTransform(45.3,71.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("AxHSiQAogcAYg4QAOgiANg9QAmiqCJkaQBOiiAZg6QA3h9AdhmQAThCAkgsQAagiABgdQABgmgrgYQgtgYAegnICUi/QBVhvBBhOQAeglANglQAMgngDgvIhUAnQg3AZg8gNQg9gOgNgrQgRg6AdglQAWgbA+gfQANgGCLgxQBdggAugtQAigiAkgEQAegEAoATQA6AcBOgJQAugFBbgRQApgGAHgjQAUhvB3guIB2AAQCWA6AZCnIhMAiQgmBFg3AxQg6AyhDASQhFASABAXQAAAKAoA0QAcAlALAjQANArgKAwQgMA5AyARIAuALQAdAGANAJQARAMAIAAQANABAEgWQARhaBCgVQAlgMBoAHIA8AIQAkAEAZgEQBdAhAMBYQAMBehEB3QgUAiAeAbQAeAaAegTQAKAzgQAzQgLAlggA0QgsBJgZAmQgkA4gkAWQgzAfg/gWQg8gWgNgwQgJgfALhGQAFgkAAg4QAAhNABgRQAGhwhtAgIhoAcQg7AOgwgBQhmgCgcAqQgcAqAoBZQBWDEAcBlQAvCpgYCVQgFAcgFA2QgGAxgPAjQgnBZAXCGQAGAhAjAOQAuATAIAIIARASQAHALgDALQgFAOgPAGQgJAFgUADQgmAHhAgSQhGgVgcABQhAACgVgdQgRgWgBg/QgIjxAki0QAKgfACgOQAEgcgUgKQgwgYgXg7QgThFgRggQggg9gXgaQglgrgygCQgegBgnAoQgiAkgdA6QgdA6gKAzQgKA3ASAaQBaCCBBDJQARA5ANAWQAXAoAqARQAeANABBWQABBVgdAUQgXAQgPgEQgSgGAAghQAAglgQgCQgLgBgcARQhDAsgjACQgiABhSglQAGgNAogKQAkgKADgkQi6AyjEhmQgigTgQADQgVAEgNApQgNApgbARQgWAOgwAFQgIABgGAJQgrBDhPATQgkAJhxAEg");
	this.shape.setTransform(48.1,47.3,0.237,0.237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.008)").s().p("AnpITIAAwlIPTAAIAAQlg");
	this.shape_1.setTransform(49,53.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AxHSiQAogcAYg4QAOgiANg9QAmiqCJkaQBOiiAZg6QA3h9AdhmQAThCAkgsQAagiABgdQABgmgrgYQgtgYAegnICUi/QBVhvBBhOQAeglANglQAMgngDgvIhUAnQg3AZg8gNQg9gOgNgrQgRg6AdglQAWgbA+gfQANgGCLgxQBdggAugtQAigiAkgEQAegEAoATQA6AcBOgJQAugFBbgRQApgGAHgjQAUhvB3guIB2AAQCWA6AZCnIhMAiQgmBFg3AxQg6AyhDASQhFASABAXQAAAKAoA0QAcAlALAjQANArgKAwQgMA5AyARIAuALQAdAGANAJQARAMAIAAQANABAEgWQARhaBCgVQAlgMBoAHIA8AIQAkAEAZgEQBdAhAMBYQAMBehEB3QgUAiAeAbQAeAaAegTQAKAzgQAzQgLAlggA0QgsBJgZAmQgkA4gkAWQgzAfg/gWQg8gWgNgwQgJgfALhGQAFgkAAg4QAAhNABgRQAGhwhtAgIhoAcQg7AOgwgBQhmgCgcAqQgcAqAoBZQBWDEAcBlQAvCpgYCVQgFAcgFA2QgGAxgPAjQgnBZAXCGQAGAhAjAOQAuATAIAIIARASQAHALgDALQgFAOgPAGQgJAFgUADQgmAHhAgSQhGgVgcABQhAACgVgdQgRgWgBg/QgIjxAki0QAKgfACgOQAEgcgUgKQgwgYgXg7QgThFgRggQggg9gXgaQglgrgygCQgegBgnAoQgiAkgdA6QgdA6gKAzQgKA3ASAaQBaCCBBDJQARA5ANAWQAXAoAqARQAeANABBWQABBVgdAUQgXAQgPgEQgSgGAAghQAAglgQgCQgLgBgcARQhDAsgjACQgiABhSglQAGgNAogKQAkgKADgkQi6AyjEhmQgigTgQADQgVAEgNApQgNApgbARQgWAOgwAFQgIABgGAJQgrBDhPATQgkAJhxAEg");
	this.shape_2.setTransform(48.1,47.3,0.237,0.237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.bolero_h}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.bolero_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,108.9);


(lib.mc_bachata = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.bachata_h = new cjs.Text("בצ'אטה", "25px 'Arial'");
	this.bachata_h.name = "bachata_h";
	this.bachata_h.textAlign = "center";
	this.bachata_h.lineHeight = 30;
	this.bachata_h.lineWidth = 67;
	this.bachata_h.parent = this;
	this.bachata_h.setTransform(44.6,67.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#141313").s().p("AgSANQABgOAAgHIAEgZQAEAAADADIAEAGIATATQAEADgEACQgNALgSAXQgFgJABgMg");
	this.shape.setTransform(40.9,46,0.855,0.672);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#141313").s().p("AgKApIgLgHQgCgGgNgUQgGgJACgHQACgHAKgHQARgMAJgBQADgBAEgEIAGgHIAAgBIAAAAIAAABIABAAIABgBQAFAFgCAEIgFAHIgGAFQgEADABACQACAFANACQANACAIAEQAEACAAACQgBAEgFgBIgcgEQgHgCgBADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAFABIAZAFQAIADgBADQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgFgBIgXgDQgHgCgBACQgBADAHAFIAUAKQAEABgCAFQgBABgFgBQgRgEgKgHQgFgDgCACQgCACADAEIAMAPQABACgBADQgEgBgGgGg");
	this.shape_1.setTransform(37.3,15.3,0.855,0.672);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020202").s().p("AiBHxQgKgHACgKQAFgOACgDQAKgNgLgPQgJgOAAgLQAAgUATAAQAJAAAGgFQAEgDAEgJQAFgLAEgRIAGgcQAFgVAEgUQACgJgBgGQgHgxAIgfQAHgYAWgOQAAAHgBAPQgBAMAFAJQATgXANgLQAEgDgEgDIgUgTIgEgGQgDgDgEAAQAAgEgDgDIgHgGQgrgsgOgQQgFgGgIADIgdALQABgQgEgmIgDgUQgBgMABgJQAKgwAyggIAegQQAJgFABgEQACgEgEgIQgPgbgLghQgGgRgBgIQgDgOACgMIALAHQAGAFAEACQACgDgCgCIgMgPQgDgEACgCQACgCAFADQALAHARAEQAFABABgCQACgEgEgCIgUgKQgIgEABgDQABgCAIACIAXADIAFABQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBQABgEgIgCIgZgGIgFgBQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgDAHACIAcAEQAFABABgEQAAgCgEgCQgIgEgNgCQgNgCgCgFQgBgDAEgDIAGgEIAFgHQACgFgFgEQAAAAABgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQgDAAgEACQgFADgCAAIgFACIgGgBIALgGQAGgEgCgHQgKAJgRgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIADABQAKABAFgFQAFgGgDgIQgCgIgGgMIgKgTQgRgnAVgfQAMgQAXgBQAYgBAMASQADAEAEAAQAQAAAaAPQAAAQADAKQACAFgBAGQgBAGACAHIAGAMQACAQgNAWIgHAJQgGAJgFACQgEABgMgEQgHgDgBABQgCABABAIQAAAZAeASQAmAXgIAtQgFAZgFAMQgJAWATAZIAvA/IAWAcQAOAQAPAHQAGADgCAKQgCAGgFAGIgLAKQgCABgEgCIgSgUQgJgLgDgMQgBgFgDgDQgKgKgagXQgYgVgMgOIgSBMQgDANALAbIAsB3QAJAYACAMQADAagTAPQgRAOgPAWQgJANgPAcQgEADgDAJIghBgQgCAGABAKIABAPQAAALAEAUQACATASAIQAJAEgBAEQgBACgJACQgRADgRgHQgFgCAAgFQgCgPgGgKQgEgGgDgBQgHgFgDABQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIAAAGIgFAhQgBAKAIAFIAIAEQAEACgBAEQgCAHgPAAIgFAAQgXAAgKgIgAhTndQgKAUAIAeQAAgeAEgMQAIgWAbgJQgaADgLAUg");
	this.shape_2.setTransform(43.2,35.8,0.855,0.672);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#141313").s().p("AglH9IgFgCIgJgFQgFgDABgFQABgDAFgBIAIgBQAQgDAMgMQgNgGgRACIgyAEIgQgBQgIgBAAgFQAAgFAHgBQAegEAigbQAMgJACgJQABgJgHgOIgmAYQgCgSgIgRQgDgGgHACQgMADgDgBQgCgBgGgLIglhSQAQgcAIgNQAPgWASgOQASgPgDgaQgBgMgJgYIgth4QgKgaACgNIAShMQAMAOAYAVQAbAXAJAKQAEADABAFQADAMAJALIASATQADADADgCIAKgKQAGgFAAgGQACgKgEgDQgQgHgNgQIgWgcIgwg/QgSgZAIgWQAFgMAFgZQAIgtglgXQgfgSgBgZQAAgIABgBQACgBAIADQALAEAFgBQAEgCAHgJIAGgJIAHgBQAMgCAIgKQABgCgDgEIgGgHIgIgMIgFgMQgDgHABgGQACgGgCgFQgEgKAAgQQABgHAHgaQACgIANgHQASgJAYADQAXADAPAMQANALgDAUIgDAeQAAAMgJAIQgEADABAGQABAGAFACIAyAXIgIACQgFABAAAEQgBAEAEADIAHAEQAIAHAIADQAbANAQAiIAVAwQAMAeAKARQANAZAJAOQAIANgDAQQgEATgLAXQgFALgRAdIgVAiQgDAGgFgEIgfgXQgIAVgWAkQgCAFAAAHIABANIABAGQgBADgEABQgKACgHgEQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAQAAgBABAAIAEAAQABAAAAAAQAAAAABAAQAAgBAAAAQABgBAAgBQAAgGgFgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgDADIgGAFQgEABgEgCQgDgCgCAHIg1CNQgCAGADAHQAEAKAJALIAPAUQAfArAXBAQAZBEAdAhQAHAJgEAHQgGALgLgBQgYgDgQATQgPASgaAAQgJAAgJgCgAAFG6QAFgOgIgQIgCAAgAAsi7QgIAOgDALQgNAogIBNIAAAFIgBAEQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQAHACADgFIAHgKQAQgkAYgrQAKgQgIgQIgPgeQgEgGgDAAQgCABgEAFg");
	this.shape_3.setTransform(56.4,34.9,0.855,0.672);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(153,153,153,0.008)").s().p("AnpITIAAwlIPTAAIAAQlg");
	this.shape_4.setTransform(49,53.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgSANQABgOAAgHIAEgZQAEAAADADIAEAGIATATQAEADgEACQgNALgSAXQgFgJABgMg");
	this.shape_5.setTransform(40.9,46,0.855,0.672);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#444444").s().p("AAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(38.2,12.1,0.855,0.672);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AgKApIgLgHQgCgGgNgUQgGgJACgHQACgHAKgHQARgMAJgBQADgBAEgEIAGgHIABAAIABgBQAFAFgCAEIgFAHIgGAFQgEADABACQACAFANACQANACAIAEQAEACAAACQgBAEgFgBIgcgEQgHgCgBADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAFABIAZAFQAIADgBADQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgFgBIgXgDQgHgCgBACQgBADAHAFIAUAKQAEABgCAFQgBABgFgBQgRgEgKgHQgFgDgCACQgCACADAEIAMAPQABACgBADQgEgBgGgGg");
	this.shape_7.setTransform(37.3,15.3,0.855,0.672);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AiBHxQgKgHACgKQAFgOACgDQAKgNgLgPQgJgOAAgLQAAgUATAAQAJAAAGgFQAEgDAEgJQAFgLAEgRIAGgcQAFgVAEgUQACgJgBgGQgHgxAIgfQAHgYAWgOQAAAHgBAPQgBAMAFAJQATgXANgLQAEgDgEgDIgUgTIgEgGQgDgDgEAAQAAgEgDgDIgHgGQgrgsgOgQQgFgGgIADIgdALQABgQgEgmIgDgUQgBgMABgJQAKgwAyggIAegQQAJgFABgEQACgEgEgIQgPgbgLghQgGgRgBgIQgDgOACgMIALAHQAGAFAEACQACgDgCgCIgMgPQgDgEACgCQACgCAFADQALAHARAEQAFABABgCQACgEgEgCIgUgKQgIgEABgDQABgCAIACIAXADIAFABQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBQABgEgIgCIgZgGIgFgBQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgDAHACIAcAEQAFABABgEQAAgCgEgCQgIgEgNgCQgNgCgCgFQgBgDAEgDIAGgEIAFgHQACgFgFgEQAAAAABgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQgDAAgEACQgFADgCAAIgFACIgGgBIALgGQAGgEgCgHQgKAJgRgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIADABQAKABAFgFQAFgGgDgIQgCgIgGgMIgKgTQgRgnAVgfQAMgQAXgBQAYgBAMASQADAEAEAAQAQAAAaAPQAAAQADAKQACAFgBAGQgBAGACAHIAGAMQACAQgNAWIgHAJQgGAJgFACQgEABgMgEQgHgDgBABQgCABABAIQAAAZAeASQAmAXgIAtQgFAZgFAMQgJAWATAZIAvA/IAWAcQAOAQAPAHQAGADgCAKQgCAGgFAGIgLAKQgCABgEgCIgSgUQgJgLgDgMQgBgFgDgDQgKgKgagXQgYgVgMgOIgSBMQgDANALAbIAsB3QAJAYACAMQADAagTAPQgRAOgPAWQgJANgPAcQgEADgDAJIghBgQgCAGABAKIABAPQAAALAEAUQACATASAIQAJAEgBAEQgBACgJACQgRADgRgHQgFgCAAgFQgCgPgGgKQgEgGgDgBQgHgFgDABQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIAAAGIgFAhQgBAKAIAFIAIAEQAEACgBAEQgCAHgPAAIgFAAQgXAAgKgIgAhTndQgKAUAIAeQAAgeAEgMQAIgWAbgJQgaADgLAUg");
	this.shape_8.setTransform(43.2,35.8,0.855,0.672);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AggFWIgEgBIgHgEQgEgCAAgDQABgCAEgBIAHAAQAOgCAKgIQgLgEgOABIgrADIgOgBQgHgBAAgDQAAgEAGAAQAagDAdgSQAKgGACgGQABgGgGgKIghARQgCgNgHgLQgCgEgGABQgKACgCgBQgDAAgEgIIggg3IAVgbQAMgPAPgJQAQgKgCgSQgCgIgHgQIgmhQQgJgRACgKIAPgzQAKAKAVAOQAXAPAIAHQADACABADQACAJAIAHIAPAMQADADACgCIAJgHQAFgDAAgEQACgGgEgDQgNgEgLgLIgTgTIgpgqQgQgRAIgPQAEgIAEgQQAHgfgggPQgbgMAAgRQAAgFABgBQABgBAHACQAKADAEgBQADgBAGgGIAGgGIAFgBQALgBAGgHQABAAAAAAQAAgBAAAAQgBgBAAAAQgBgBAAgBIgFgFIgHgHIgFgIQgCgFABgEQABgEgBgEQgDgHAAgKIAGgWQACgFALgFQAPgGAVABQAUACANAJQAKAHgCANIgDAVQAAAIgIAFQgDACABAEQABAEAEACIArAPIgHABQgEABAAACQgBADADACIAGADQAHAFAHACQAXAJANAWIASAhQALAUAJALQAKARAIAJQAHAJgCALQgEANgKAPQgEAHgOAUIgSAXQgCAEgFgDIgagPQgHAOgTAXQgCAEAAAFIABAIIABAEQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgJACgGgDQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABgBIAEAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAgEgEgBIgDABIgCACIgGADQgDABgDgBQgDgBgBAFIguBeQgCAEADAFQADAGAIAIIANANQAaAdAUArQAVAuAZAWQAGAGgEAFQgFAHgJgBQgUgBgOAMQgNAMgXAAIgPgBgAAFEpQAEgKgHgKIgCAAgAAlh9QgGAJgDAIQgLAbgHAzIAAAEIAAACQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAGABADgDIAFgHQAOgXAVgdQAIgLgHgLQgJgRgDgDQgDgEgDAAQgCAAgEAEg");
	this.shape_9.setTransform(56.4,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.bachata_h}]}).to({state:[{t:this.shape_4},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.bachata_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,127.4);


(lib.kizumba_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.kiz_music_txt = new cjs.Text("", "15px 'Verdana'");
	this.kiz_music_txt.name = "kiz_music_txt";
	this.kiz_music_txt.textAlign = "center";
	this.kiz_music_txt.lineHeight = 20;
	this.kiz_music_txt.lineWidth = 171;
	this.kiz_music_txt.parent = this;
	this.kiz_music_txt.setTransform(5.5,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPB0QgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAhBIBQgSIAABWQAAALgIAHQgGAGgIAAQgHAAgGgEQgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAgrIg8AMIAAA3QgBAKgGAHQgHAGgJAAQgHAAgFgEgAhXBDQgggfAAgtQAAgtAgghQAhggAtAAQArAAAfAfQAgAdADAsIgUAEQgBglgagZQgbgagjAAQgmAAgZAbQgbAZAAAmQAAAkAbAbQAZAaAmAAIAJAAQgHAIgCAMIAAAAQgtAAghghgAhCAuQgPgOgFgVIAKAAQAFAQAMAMQANANAQAEIgBAKQgUgFgPgPgAhCAJIALgBQAHAUAVAIIgBAKQgdgJgJgcgAgfALQgIgJAAgLQAAgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAJQgJAJgLAAQgNAAgJgJgAgYgYQgFAHAAAIQAAAIAFAFQAHAGAIAAQAIAAAFgGQAGgFAAgIQAAgIgGgHQgFgFgIAAQgIAAgHAFgAAIg3IABgLQAcAJAJAdIgKABQgIgVgUgHgAAng7QgMgMgQgFIAAgKQAVAFAOAPQAPAPAFAUIgKABQgEgQgNgNg");
	this.shape.setTransform(0.5,0.5,2.833,2.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AtqJ1IAAzpIbTAAIAAN2IACAAIAAFzg");
	this.shape_1.setTransform(5.5,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.kiz_music_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kizumba_music, new cjs.Rectangle(-82,-48.8,175,125.9), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlgCkIAAlHILBAAIAAFHg");
	mask.setTransform(35.6,16.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,0,1).p("AlZhoQAAgVAQgQQAQgPAVAAIJJAAQAWAAAPAPQAQAQAAAVIAADRQAAAWgQAPQgPAPgWAAIpJAAQgVAAgQgPQgQgPAAgWg");
	this.shape.setTransform(35.3,16.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.3,0.3,70.6,32.9), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkkCdQgVAAgQgPQgQgQAAgVIAAjRQAAgVAQgQQAQgPAVAAIJJAAQAWAAAPAPQAQAQAAAVIAADRQAAAVgQAQQgPAPgWAAg");
	mask.setTransform(34.6,15.7);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.254,0.317);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,69.1,31.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkkCdQgVAAgQgPQgPgPAAgWIAAjRQAAgVAPgQQAQgPAVAAIJJAAQAWAAAPAPQAPAQAAAVIAADRQAAAWgPAPQgPAPgWAAg");
	mask.setTransform(34.5,15.7);

	// Layer_3
	this.instance = new lib.Image_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.276,0.273);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,69.1,31.4), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlgClIAAlJILBAAIAAFJg");
	mask_1.setTransform(35.5,16.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,0,1).p("AlYhoQAAgVAPgQQAQgPAVAAIJJAAQAWAAAPAPQAPAQAAAVIAADRQAAAWgPAPQgPAPgWAAIpJAAQgVAAgQgPQgPgPAAgWg");
	this.shape.setTransform(35.3,16.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0.3,0.3,70.6,33), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkmCdQgWAAgPgPQgQgPAAgWIAAjRQAAgVAQgQQAPgPAWAAIJOAAQAVAAAPAPQAQAQAAAVIAADRQAAAVgQAQQgPAPgVAAg");
	mask_1.setTransform(34.8,15.7);

	// Layer_3
	this.instance_1 = new lib.Image_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.195,0.191);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,69.6,31.4), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AliClIAAlJILGAAIAAFJg");
	mask_2.setTransform(35.8,16.7);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,0,1).p("AlbhoQAAgVAQgQQAPgPAWAAIJOAAQAVAAAPAPQAQAQAAAVIAADRQAAAVgQAQQgPAPgVAAIpOAAQgWAAgPgPQgQgPAAgWg");
	this.shape_1.setTransform(35.5,16.5);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0.3,0.3,71.1,33), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AkQCdQgVAAgQgPQgPgPAAgWIAAjRQAAgVAPgQQAQgPAVAAIIhAAQAWAAAPAPQAPAQAAAVIAADRQAAAWgPAPQgPAPgWAAg");
	mask_2.setTransform(32.5,15.7);

	// Layer_3
	this.instance_2 = new lib.Image_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.193,0.218);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,65,31.4), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AlMClIAAlJIKZAAIAAFJg");
	mask_3.setTransform(33.5,16.7);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,0,1).p("AlEhoQAAgVAQgQQAPgPAWAAIIgAAQAWAAAPAPQAPAQAAAVIAADRQAAAWgPAPQgPAPgWAAIogAAQgWAAgPgPQgQgPAAgWg");
	this.shape_2.setTransform(33.3,16.5);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0.3,0.3,66.6,33), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AkmCdQgWAAgPgPQgQgPAAgWIAAjRQAAgVAQgQQAPgPAWAAIJOAAQAVAAAPAPQAQAQAAAVIAADRQAAAVgQAQQgPAPgVAAg");
	mask_3.setTransform(34.8,15.7);

	// Layer_3
	this.instance_3 = new lib.Image_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.233,0.245);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(0,0,69.6,31.4), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AliClIAAlJILGAAIAAFJg");
	mask_4.setTransform(35.8,16.7);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,0,1).p("AlbhoQAAgVAQgQQAPgPAWAAIJOAAQAVAAAPAPQAQAQAAAVIAADRQAAAVgQAQQgPAPgVAAIpOAAQgWAAgPgPQgQgPAAgWg");
	this.shape_3.setTransform(35.5,16.5);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0.3,0.3,71.1,33), null);


(lib.ClipGroup_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AkkCdQgVAAgQgPQgPgPAAgWIAAjRQAAgVAPgQQAQgPAVAAIJJAAQAWAAAPAPQAPAQAAAVIAADRQAAAWgPAPQgPAPgWAAg");
	mask_4.setTransform(34.5,15.7);

	// Layer_3
	this.instance_4 = new lib.Image_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.193,0.191);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_4, new cjs.Rectangle(0,0,69.1,31.4), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AlgClIAAlJILBAAIAAFJg");
	mask_5.setTransform(35.5,16.7);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,0,1).p("AlYhoQAAgVAPgQQAQgPAVAAIJJAAQAWAAAPAPQAPAQAAAVIAADRQAAAWgPAPQgPAPgWAAIpJAAQgVAAgQgPQgPgPAAgWg");
	this.shape_4.setTransform(35.3,16.5);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0.3,0.3,70.6,33), null);


(lib.copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhUBVQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjQAjAjAAAxQAAAxgjAkQgkAjgxAAQgxAAgjgjgAhGhGQgdAeAAAoQAAAqAdAdQAeAdAoAAQAqAAAdgdQAdgdAAgqQAAgogdgeQgdgdgqAAQgoAAgeAdgAgqArQgRgSAAgZQAAgYARgSQARgRAZAAQAfAAASAaIgSAMQgMgQgTAAQgPAAgLALQgLALAAAPQAAAPALAMQALALAPAAQATAAAMgRIASAMQgSAbgfAAQgYAAgSgRg");
	this.shape.setTransform(7.4,7.4,0.617,0.617);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AhTBUIAAinICnAAIAACng");
	this.shape_1.setTransform(7.2,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copyright, new cjs.Rectangle(-1.1,-0.9,16.8,16.8), null);


(lib.clubs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.clubs_text = new cjs.Text("", "20px 'Arial'");
	this.clubs_text.name = "clubs_text";
	this.clubs_text.textAlign = "center";
	this.clubs_text.lineHeight = 30;
	this.clubs_text.lineWidth = 351;
	this.clubs_text.parent = this;
	this.clubs_text.setTransform(0.5,62.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A7wChIAAlBMA3hAAAIAAFBg");
	this.shape.setTransform(0.5,76.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.clubs_text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clubs, new cjs.Rectangle(-177.2,60.5,355.5,32.1), null);


(lib.close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AAACcIi2C2IicibIC2i3Ii2i2ICcicIC2C2IC3i2ICbCcIi2C2IC2C3IibCbg");
	this.shape.setTransform(0.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F05228").s().p("AjuI1QhuguhVhVQhVhVgvhuQgwhyAAh9QAAh8AwhyQAvhuBVhVQBVhVBugvQBygwB8AAQB9AAByAwQBuAvBVBVQBVBVAuBuQAxByAAB8QAAB9gxByQguBuhVBVQhVBVhuAuQhyAxh9AAQh8AAhygxgAC3FSICbibIi2i3IC2i2IibicIi3C2Ii2i2IicCcIC2C2Ii2C3ICcCbIC2i2g");
	this.shape_1.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.close, new cjs.Rectangle(-60.8,-60.8,122.8,122.8), null);


(lib.cha_cha_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.cha_music_txt = new cjs.Text("", "15px 'Verdana'");
	this.cha_music_txt.name = "cha_music_txt";
	this.cha_music_txt.textAlign = "center";
	this.cha_music_txt.lineHeight = 20;
	this.cha_music_txt.lineWidth = 171;
	this.cha_music_txt.parent = this;
	this.cha_music_txt.setTransform(5.5,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPB0QgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAhBIBQgSIAABWQAAALgIAHQgGAGgIAAQgHAAgGgEQgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAgrIg8AMIAAA3QgBAKgGAHQgHAGgJAAQgHAAgFgEgAhXBDQgggfAAgtQAAgtAgghQAhggAtAAQArAAAfAfQAgAdADAsIgUAEQgBglgagZQgbgagjAAQgmAAgZAbQgbAZAAAmQAAAkAbAbQAZAaAmAAIAJAAQgHAIgCAMIAAAAQgtAAghghgAhCAuQgPgOgFgVIAKAAQAFAQAMAMQANANAQAEIgBAKQgUgFgPgPgAhCAJIALgBQAHAUAVAIIgBAKQgdgJgJgcgAgfALQgIgJAAgLQAAgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAJQgJAJgLAAQgNAAgJgJgAgYgYQgFAHAAAIQAAAIAFAFQAHAGAIAAQAIAAAFgGQAGgFAAgIQAAgIgGgHQgFgFgIAAQgIAAgHAFgAAIg3IABgLQAcAJAJAdIgKABQgIgVgUgHgAAng7QgMgMgQgFIAAgKQAVAFAOAPQAPAPAFAUIgKABQgEgQgNgNg");
	this.shape.setTransform(0.5,0.5,2.833,2.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AucMpIAA5RIc5AAIAAZRg");
	this.shape_1.setTransform(0.5,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.cha_music_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cha_cha_music, new cjs.Rectangle(-92,-84.8,185,161.9), null);


(lib.bolero_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.bol_music_txt = new cjs.Text("", "15px 'Verdana'");
	this.bol_music_txt.name = "bol_music_txt";
	this.bol_music_txt.textAlign = "center";
	this.bol_music_txt.lineHeight = 20;
	this.bol_music_txt.lineWidth = 171;
	this.bol_music_txt.parent = this;
	this.bol_music_txt.setTransform(5.5,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPB0QgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAhBIBQgSIAABWQAAALgIAHQgGAGgIAAQgHAAgGgEQgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAgrIg8AMIAAA3QgBAKgGAHQgHAGgJAAQgHAAgFgEgAhXBDQgggfAAgtQAAgtAgghQAhggAtAAQArAAAfAfQAgAdADAsIgUAEQgBglgagZQgbgagjAAQgmAAgZAbQgbAZAAAmQAAAkAbAbQAZAaAmAAIAJAAQgHAIgCAMIAAAAQgtAAghghgAhCAuQgPgOgFgVIAKAAQAFAQAMAMQANANAQAEIgBAKQgUgFgPgPgAhCAJIALgBQAHAUAVAIIgBAKQgdgJgJgcgAgfALQgIgJAAgLQAAgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAJQgJAJgLAAQgNAAgJgJgAgYgYQgFAHAAAIQAAAIAFAFQAHAGAIAAQAIAAAFgGQAGgFAAgIQAAgIgGgHQgFgFgIAAQgIAAgHAFgAAIg3IABgLQAcAJAJAdIgKABQgIgVgUgHgAAng7QgMgMgQgFIAAgKQAVAFAOAPQAPAPAFAUIgKABQgEgQgNgNg");
	this.shape.setTransform(0.5,0.5,2.833,2.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AtqJ1IAAzpIbTAAIAAN2IACAAIAAFzg");
	this.shape_1.setTransform(5.5,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.bol_music_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bolero_music, new cjs.Rectangle(-82,-48.8,175,125.9), null);


(lib.bachata_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.bac_music_txt = new cjs.Text("", "15px 'Verdana'");
	this.bac_music_txt.name = "bac_music_txt";
	this.bac_music_txt.textAlign = "center";
	this.bac_music_txt.lineHeight = 20;
	this.bac_music_txt.lineWidth = 171;
	this.bac_music_txt.parent = this;
	this.bac_music_txt.setTransform(5.5,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPB0QgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAhBIBQgSIAABWQAAALgIAHQgGAGgIAAQgHAAgGgEQgFgEAAgJQAAgHAIgHQAHgGAKAAIAFAAIAAgrIg8AMIAAA3QgBAKgGAHQgHAGgJAAQgHAAgFgEgAhXBDQgggfAAgtQAAgtAgghQAhggAtAAQArAAAfAfQAgAdADAsIgUAEQgBglgagZQgbgagjAAQgmAAgZAbQgbAZAAAmQAAAkAbAbQAZAaAmAAIAJAAQgHAIgCAMIAAAAQgtAAghghgAhCAuQgPgOgFgVIAKAAQAFAQAMAMQANANAQAEIgBAKQgUgFgPgPgAhCAJIALgBQAHAUAVAIIgBAKQgdgJgJgcgAgfALQgIgJAAgLQAAgNAIgJQAJgIANAAQALAAAJAIQAJAJAAANQAAALgJAJQgJAJgLAAQgNAAgJgJgAgYgYQgFAHAAAIQAAAIAFAFQAHAGAIAAQAIAAAFgGQAGgFAAgIQAAgIgGgHQgFgFgIAAQgIAAgHAFgAAIg3IABgLQAcAJAJAdIgKABQgIgVgUgHgAAng7QgMgMgQgFIAAgKQAVAFAOAPQAPAPAFAUIgKABQgEgQgNgNg");
	this.shape.setTransform(0.5,0.5,2.833,2.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AtqJ1IAAzpIbTAAIAAN2IACAAIAAFzg");
	this.shape_1.setTransform(5.5,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.bac_music_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bachata_music, new cjs.Rectangle(-82,-48.8,175,125.9), null);


(lib.zuk_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.zuk_music = new lib.zuk_music();
	this.zuk_music.parent = this;
	this.zuk_music.setTransform(404.1,43.1,0.713,0.713,0,0,0,5.5,14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBEQAMgwAEhJQACgdgCgJQgCgOAKgQQAHAKAEABQABAIgEAQQgEAQABAIQADAXgEAjIgGA4IgDAfIgCAWQgBADgMAOQgKgcAGgag");
	this.shape.setTransform(251.7,27.6,0.949,0.705);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDACQABgJgDgEQADgGADAEQADAFABgBIgEAWIgBACQgCgEgBgJg");
	this.shape_1.setTransform(264.5,29.7,0.949,0.705);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABANQgBgDgEADIAAgSQACgKAHgFIgCAoIgCgHg");
	this.shape_2.setTransform(263.4,30.5,0.949,0.705);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiACQAAgCACgEQANAHAUgBIAigCQgNAEgTABIgfAAIgCAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_3.setTransform(255.9,39.9,0.949,0.705);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBARIABgHQAAgUgDgKQAEADACAHIABAMIAAASIgBABQgDAAgBgEg");
	this.shape_4.setTransform(246.8,71.9,0.949,0.705);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLAMQgCgPACgIQAGgGgEgHQAAgBgBgBQAAgBAAAAQAAgBAAAAQAAAAABAAIADgBQABgBAAAAQABAAAAgBQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQgCALAFAFQADADAJADQgCAFABALQgBAUgLAAQgJgBgCgTg");
	this.shape_5.setTransform(245.8,74.7,0.949,0.705);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMBIQACgJgDgEQgCgEgHgDIgLgEQgIgDgDgFQAKgCAHgMIAHgXQAHgRAAggQAAgFADgNQADgNAAgJQAEAHAAANIAABCQAAAVgFAKQgFANADAQQABAJAGASQgNgDAEgMg");
	this.shape_6.setTransform(253.1,69.1,0.949,0.705);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAFDcQgHgDgEgDQgGgFADgLQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAABQgBAAAAABIgEABQAAAAgBAAQAAAAAAABQAAAAABABQAAABABAAQAEAIgGAGQgHgBAAgLIAAgeQAFgRgFgLIAAgqQgJg1gEgsQgCgSgFgIQADgNgJgUQgKgWALgTQAagsAOgVQAWgiAWgZQABAKgDAnQgCAdAEASQACAPACAFQAOAjABAlQgGAFgEARQgKAPADAFQABADAQAGIAEAAIgBA7QgFAAgHgHIgfgcQgLgKAAAPIgEAnQgDAYACAPQgFAQAIAWQACALAAAUIgBAHQABAEAFAAIAAAOgAgDhZQgNAPgBAMQgDAZAQAlQAVhQAGgRQACgHgGAAQgKABgMAOg");
	this.shape_7.setTransform(246.6,58.9,0.949,0.705);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAZQAFgLAPgWQAOgWAGgOIABAFQgHAtgUAiQgDgGgCABQgCABgHAIQgFgJAFgKg");
	this.shape_8.setTransform(258.2,44.8,0.949,0.705);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLgJQABgZAOgKQgCAKACAMIAEAWQAEAPgBAEQgBALgMAEQgCAAgCAEIgFAHg");
	this.shape_9.setTransform(257.2,51.2,0.949,0.705);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAZQgCgGgFgEQgHgEgBgDQgDgDADgHQAIgOAEgDQAIgIAJAEIADgDQACAAAFgCQAEAAABAFQgEAFADAGQAEAHgBADIgDAOQgDAHgGAAQgCAAgJAIQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgDAAgCgEg");
	this.shape_10.setTransform(277.4,31.4,0.949,0.705);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAdQgFgHgEgMIgIgTQgBgUACgJQAZAlAfgDQAAAEgFAKQgEAJABAGQgGgBgGAGIgJAJQgEgBgHgJg");
	this.shape_11.setTransform(253.6,17,0.949,0.705);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAQBcQgGgFgOgLQgMgKgHgIQAMACABgQQAEglgFgUQgDgRABgWIACgnIAFAPIACAQIAJBAQAHAnABAbQAAAFAFAGQAFAHABAEg");
	this.shape_12.setTransform(259.1,71.7,0.949,0.705);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhCBUQgIgGAFgKIAGgLQAFgGAGADQAWAHAPgHQAPgIAIgYIAkhvIAJAVQAHAQAMgCQgIAJgIAPIgOAaIgSAkIgTAlQgGAOgbAFQgJACgHAAQgOAAgIgGg");
	this.shape_13.setTransform(230.5,33.6,0.949,0.705);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjAbQgRghAHgcQAEgSAJAHQAGAEAEgDQADgBAEgGQAGgIAEgBQAFgCAFAHQAFAHAIgGQAFgGAEAEQACACACAHQADALABANIADATQABAKAFAIQAFAIgCALQgDALgIAHIgPAKIgEAAQgcAAgYgig");
	this.shape_14.setTransform(254.4,12.4,0.949,0.705);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag3BuIABgSQABgKgNACIgiACQgVACgNgIQgBgQAFgFQAEgFAPAAQAKAAAHgFQAFgDAGAEIALAIIAHAFQAEACADgHQAHAHADABIA9AJQALABADgOQALgrACgVQACgQgEgGQgDgGgNgBQgPgBgHASIgBAGQgBAEgCABIgbALQgQAHgMgFIAOgSQAIgKAJgFQABAAAAgLQAEgEABAEIADAHIACgpQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQADAEgBAJQAAAKACAEIADgDIAEgXQAGACAJgGQAJgHAJABQALAAABgCQABgDgFgNIANADQAHACAFAAQANgBAGgJQAHgKAGgBQAHAAAJAJQAWAUAEATQgJgDgNADQgOAEgHAAQgEABAAAJIAAAbQgIAOgHAVIgMAlIgJAfQgIAWgMAHQgLAHgTgHIgkgSQgLgFgDADQgDACgBAOIgCAKg");
	this.shape_15.setTransform(265.6,33.9,0.949,0.705);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVCMIgPgfQgPglANgqQAHgYABgMQACgUgIgRQgDgIADgLQAIgdgHgnIAAgbQAAgKAEAAQAHgBAPgEQAMgCAIADIAAACIgDADQgJgEgIAIQgEADgIAOQgDAIADADQABADAHAEQAFAEACAGQAEAHAEgFQAJgIACAAQAGAAADgHIADgPQABgDgEgHQgDgGAEgFQAPAKgCAVQgCAZAIAdQAHAWgIApIgLAxQgCAKgBAQIAAAbQgSgPgCglQgHAPAGAXQAEAOgEAQIgIAkQgFAVgCARQgDgPgJgTg");
	this.shape_16.setTransform(277.3,41.4,0.949,0.705);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAGCGQgKgGgggbQgGgMAIgQQAMgXgIgVQgFgOALgUIAFgLQADgHgCgIQgIAJgZANQgWAJgJAQQgCAEgKAIQgJAHgCAIQgMADgHgQIgJgWIgCgGQgBgDAGgCQAIgCADgGQAKgQAagWQAagWAJgQQAKgRAPABQAPABAMgJQAKgGALgPIANgOIAHAUQAFAMAEAGQgLAQADAOQACAJgCAdQgFBJgLAwQgHAaAKAcQAOgOABgDIABgWIADgfIAGg5QAEgigCgXQgBgIAEgQQAEgQgCgIIAKgJQAGgGAGABQAHAfAYAJQAHAEABAKIADAcQABAQgCAMQgBAGADABIAHgBQgEAIgLAGQgLAIgEAFQgkAtgLA7QgCAJgEACIgHAAQgUAAgVgNg");
	this.shape_17.setTransform(247.4,26.7,0.949,0.705);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhfEhQgIgggLgMQgFgHABgMIABgUQADgDgBgEIAfh8QALgvAPgdQARgiADgqQAGhUAphZQADgHAFgZIADgSQACgLAGgFQAgAbALAGQAYAPAYgCQgUAngIAyQgWAYgXAjQgOAVgaArQgKATAJAWQAJAUgDANQgnBLgRBTIgBAOIgGAkQgEAWAAAPQAFAJAKAHIARANQAHALgCAFQgCAEgNAHQgpgCgUgag");
	this.shape_18.setTransform(241.2,56.2,0.949,0.705);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AARF5QgBgFgFgGQgFgGgBgGQgBgagFgoIgKhBIgDgPIgEgQIgDAoQAAAWADARQAFAUgEAmQgBAQgMgCQgEAAgGgDIgJgFQgGgSgBgJQgDgQAFgNQAFgKAAgVIAAhDQAAgNgEgHQAAAJgDANQgDANAAAFQAAAggHASIgIAXQgHAMgKACQgJgKAGgTIAMgiIABgWQABgNgCgKIAAg7QAFgcgIgXQgCgmgNghQgCgGgDgOQgEgTACgdQADgnAAgJQAIgyAUgnQADgCACgJQALg7AkgtQAEgFAMgIQAJgGAEgIIAcgcQASgUAXATQAFAFAHAJIALAPQAFANgBACQgBACgLAAQgJAAgJAGQgJAHgHgCQgBABgEgFQgDgEgDAGQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgJAFgBAKIAAATQAAALgBABQgJAFgIAKIgOATQgFAaAGAWQgCAHgEgDIgHgEIgLgIQgGgFgFADQgHAFgKAAQgPAAgEAGQgFAFABAPQgCAFAAACQABADAFAAIAgAAQATgBANgFQAMgCgBALIgBARQgFAOgPAWQgPAXgGALQgEAKAFAJQAHgIACgBQABgBAEAFIgBAGQgPAKgBAZIAAA2QgBAQAHARQAEAKAKASQAIAOgBAJQgBAdAJAgQAEATAPAlIAIAYQACAEABAMQABAKACAGQAAAFADACQgBAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAHADAGQAhAwAoAAQgIAUgfACIgJABQgXAAgVgLg");
	this.shape_19.setTransform(259.8,51.7,0.949,0.705);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDACQADgGAEAGg");
	this.shape_20.setTransform(236.4,79.1,0.949,0.705);

	this.zuk_text = new cjs.Text("זוק הוא ריקוד זוגי חושני ורומנטי. שורשיו של ריקוד הזוק מגיעים מריקוד הלמבדה שהתפתח בברזיל. הריקוד התפשט מאמריקה הלטינית לאירופה ועד אוסטרליה ויפן. הודות לתנועותיו הטבעיות והזורמות,\n התפרסם זוק בעולם כ-The Yoga of Dance. \nהזוק מבוסס על תנועות ארוכות ורהוטות, הריקוד כולל סיבובים גליים ומתמשכים ותנועות ירכיים זורמות, עם דגש על תנועה טבעית ושחרור. \nמשמעותה של המילה זוק היא \"מסיבה\" בקריאולית צרפתית. המוזיקה מתבססת על מקצבים לטינו-אמריקאים ואפריקאיים ומשלבת צלילי סינטסייזר אלקטרוני עם תופים אתניים\n", "15px 'Arial'");
	this.zuk_text.name = "zuk_text";
	this.zuk_text.textAlign = "right";
	this.zuk_text.lineHeight = 19;
	this.zuk_text.lineWidth = 444;
	this.zuk_text.parent = this;
	this.zuk_text.setTransform(474,102.9);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(251.2,176.4,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.zuk_text},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.zuk_music}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.zuk_info, new cjs.Rectangle(0,-1.8,502.4,358.8), null);


(lib.tango_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.tango_music = new lib.tango_music();
	this.tango_music.parent = this;
	this.tango_music.setTransform(405.1,52.9,0.692,0.692,0,0,0,6.2,14.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("Ag+CEQhIgvgXhMQgNgrAHgoQAIgwAigXQAmgbAqAPQAkAMAOAhQAdgMAgAIQAqALAaAlQAYAkAEAtQADAvgTAlQgVApgpAPQgbAKgbAAQgvAAgxgfg");
	this.shape.setTransform(232.3,40.2,0.226,0.26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#040404").s().p("AgRAMIAVgcIAOAPQgFASgNAAQgIAAgJgFg");
	this.shape_1.setTransform(264.7,71,0.226,0.26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#040404").s().p("AKvUUQghgdgMhKQgOhPgYgcIgPgPQASg/AEgIQASgnAogQQgkgXhMgfQhGgegigXQgegVgpAKQgoALgkAlQgyA1gLBDQgIA0AOBPQALA4gWAaQgUAZg8AGQiWAOh6gCQgZADgMgBQgVgCgGgTQgHgYAUgNQALgHAcgKQA4gaAfhdQAhhcgeg1QgHgNgNgDIgZgDQhugIh6gdQhkgXh/grQgigMgRgBQgdgCgcAPIkICQQiVBVhnBSQh6Bfg1AXQhtAuhrg3IAAhAQA/gtC4hUQCihJBQhMQDHi8EEhwQBtgvBmhyQA6hDBriPQAggqAAglQgBgwg/gUQgbgIgPgUQgPgVAFgUQAYhgg3gpQgfgXhlgWQgggSgRgFQgcgJgSAmQgiBEhDAPQgxAKhOgTQg8gOgsg6QgOgTgyhdQgHgLA4hcQA3hcAQgJQAWgMAogYQAlgQApAOQCuA8BJAHQCNAMBrhWQAagVAUgbQAYgegLgFQhFgjgrhRQgphhgZgwQgfg3ANgiQAJgbAugaQB9hKB+ARQAwAGAjAbQAhAaAYAwQAKATgBBNQAAA6AlAIQAnAIAkg0QAthGATgLQBrhBgMiCQgFg6ADgYQAGguAfgdIA/AAQAYASA8BUQAvBEA1APQArANA3AkQBSA1AKAFQAzAbAmAwQAnAxAAApQgBAvgzAkQguAfhBAMQgdAFgqAOIhFAYQgjALgOAQQgVAVAGAiQARBeATA7QAbBQAsBBQAlA0BOBmQBDBcAeBJQAQAoACAMQAEAegUAZQhDBQAFAVQAGAWBhAfQBIAXAWAsQAVArgZBCIgjBfQgXA3gfAjQghAlABAbQACAmA/AeQAyAWDmBNQCsA6BgBDIAAAqQiKA+gxBSQgtBNhJAGQgbADgpgGIhLgNIAPgSQAGgIAFgEQAOgKAogNQAfgOgIgfQgKgjgfgTQgfgSgsAEQgoADgvgQQgbgJg4gbQgSgLgJgDQgRgFgIATQgPAqg1BOQgjBJAuBBgAMLHdQgkAUADAsQACAZAKA0IAxiHIgPgFIgIgCIgFABgAGvvaQgoA0AbAaQAlAnBHgDQAxgCBNgZQgTgzg5gwIhhhSQACAfgyA/g");
	this.shape_2.setTransform(251.5,42.5,0.226,0.26);

	this.tango_text = new cjs.Text("הטנגו הוא ריקוד זוגות שבו הגבר מוביל את האישה. הזוג רוקד צמוד בחלק העליון, אזור הלב. הריקוד באירועים נרקד שהזוגות נעים ברחבה נגד כיוון השעון. הריקוד הוא מינימליסטי וגם אם הוא כולל אלתורים והרמות רגליים התנועות הגרנדיוזיות באמת נשמרות למופעים. הרמות הרגליים מתבצעות בעזרת הרגל החופשית (הרגל שאין עליה את משקל הגוף). \nמקור הריקוד בברים ובבתי הזונות של בואנוס איירס בארגנטינה והוא נוצר במאה ה-19 בהשפעת המוני המהגרים אשר הציפו את העיר באותה עת, תוך שהוא משלב מוסיקה אירופאית ומקצבים אפריקאים. כאשר הגיע הריקוד לאירופה הוא אומץ ע\"י החברה הגבוהה, והדבר השפיע על מעמדו בארגנטינה, שם טיפס במעלה הסולם החברתי והגיע גם לשכבות הגבוהות בחברה הארגנטינאית.\n", "15px 'Arial'");
	this.tango_text.name = "tango_text";
	this.tango_text.textAlign = "right";
	this.tango_text.lineHeight = 19;
	this.tango_text.lineWidth = 445;
	this.tango_text.parent = this;
	this.tango_text.setTransform(475,105.9);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(251.2,176.4,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.tango_text},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.tango_music}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tango_info, new cjs.Rectangle(0,0,502.4,387.9), null);


(lib.studioB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// flash0.ai
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(0.6,0.7,1,1,0,0,0,35.6,16.6);

	this.instance_1 = new lib.ClipGroup_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,0.5,1,1,0,0,0,34.8,15.7);

	this.studioB_h = new cjs.Text("סטודיו בי", "10px 'Arial'");
	this.studioB_h.name = "studioB_h";
	this.studioB_h.textAlign = "center";
	this.studioB_h.lineHeight = 13;
	this.studioB_h.lineWidth = 65;
	this.studioB_h.parent = this;
	this.studioB_h.setTransform(0.9,-32.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("Ak9ikIJ7AAQBFAAAABFIAAC/QAABFhFAAIp7AAQhFAAAAhFIAAi/QAAhFBFAAg");
	this.shape.setTransform(3.1,2.4,0.909,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Ak9ClQhEAAAAhFIAAi/QAAhFBEAAIJ7AAQBFAAAABFIAAC/QAABFhFAAg");
	this.shape_1.setTransform(3.1,2.4,0.909,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.studioB_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-15.9,71.4,33.2);


(lib.samba_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.samba_music = new lib.samba_music();
	this.samba_music.parent = this;
	this.samba_music.setTransform(409.1,47,0.638,0.638,0,0,0,5.5,21.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOABIALgKIAHAAIALAJQgHAKgIAAQgGAAgIgJg");
	this.shape.setTransform(241.4,18.9,0.121,0.121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAEIAJgdIARAoQgCAIgJADQgRgIACgOg");
	this.shape_1.setTransform(241.1,18.6,0.121,0.121);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAgQAKgRgFgRQgDgRgWgWQAmASAFARQAFAOgSAhQgIAAgCgJg");
	this.shape_2.setTransform(241.4,18.4,0.121,0.121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040003").s().p("AgCAoQgWgQgMgYQgQghAPgSQAPgSAjALQAOAFAIAKQAJAKABAPIAABRQgegKgRgNg");
	this.shape_3.setTransform(253.7,23.1,0.121,0.121);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFBFC").s().p("AhigDQgEhSABgUIDNAsQghAchBA4Qg7A0gyAfQAJgugEg/g");
	this.shape_4.setTransform(244.2,26.1,0.121,0.121);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah/DDIgYieQgMAAgHALQgFANgFAFIgOAVQgKAKgNgEQgUgFgFgjIgHhTIgCgUQgBgLgEgIQgDgFgSgKQgOgIADgLQAMgpAdg8QAKgVAiAIQAnAJAOAFQAdAKASARQAGAFBhBEQA9ArAYAxQAIANAbACIAsADIAXABQAOAAAFAJQAGAMgOAHQgRAJgBAIQAMAOAXACIAmADQALADAVACQAMAHgWAgQgVAggTABQgMABgdgQQgVgLgYAIIA8AwQATAPgMAPQgLAOgUgNQgmgYgYgVQgfgcgUgeQgXgigJgKQgggigtALQgSAFgJARQgFALgDAWQgDAUgBAcIgCAvQgBAOgCAFQgEAJgMACIgFAAQgWAAgDgZg");
	this.shape_5.setTransform(258.1,25.3,0.121,0.121);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66003D").s().p("AgEgaQAPAMgCAOQgCAKgMASQgGgfAHgXg");
	this.shape_6.setTransform(232.8,15.9,0.121,0.121);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#191518").s().p("AgEAWQgYgBgMgVIAqgRQA0gRgRA0QgZAEgNAAIgDAAg");
	this.shape_7.setTransform(245.8,74.1,0.121,0.121);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#010001").s().p("AAEBpIg4gGQgigEgXADIgCjGQAngHA1ACQAdACA9AHQAUABACAHQAOA2ADAaQAFAtgMAiQgKAcgfAGQgHACgPAAIgkgCg");
	this.shape_8.setTransform(230.8,74.8,0.121,0.121);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABNDSQgFgEgKgEIgQgGQglg/hPg4Qh9hWA4iIQAHgQANgXIAVgnQANB1BxgKQAHAAAJADIARAHQAXAIgCAVQgBANgJAEQgGACgNAAQgcgDgNAAQgVACgIATQgPAoAtAwQApAqBKAkQAaANADATQACAPgOAYQgQAbgUAAQgPAAgRgOg");
	this.shape_9.setTransform(234.7,34.9,0.121,0.121);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ADEDBQgHgHAAgSQABgZAAgMQgBgWgLgNQgMgWgZACQgcAFgOgCQgbAHgVAXQgMANgVAgQgaAogwgCQhggChhABQhAAAAWg7QASgPAwgUQAsgTATgUQAGgIAOAAIAXADQBBAFATgHQASgHAtgxIhwgjQgPgDgHgDQgMgGAGgRQAFgSAMgCQAIgCASAFIA8AOIA8AOQAuAIAdgQQAegPAUgrQAQggAUgUQAZgYAYACQASABAIAgQACAIAGAxQAKBKgjAsQgaAiAHAnIgDBVQAAAQgFAHQgGAIgQAAIgCAAQgQAAgHgGg");
	this.shape_10.setTransform(244.1,73.1,0.121,0.121);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjfE/Qg3gBgLgoQgGgUAOgPIAegWIA6giQAkgUATgTQAVgNAdABQARAAAiAFQAkAEAOgCQAcgEAPgXQALgQgDg1QgDgygLgQQgHgIgMgEIgVgFQgYgHgzAAQgzAAgYgHQgEgIABgLIAEgUQBAgKAggDQA1gFArADQAaACAFgSIADgfQAJhgAkhHQBCAoAbA1QAdA5gNBLQgGAgAQAmQAJAXAXApQAJAUAAAFQABAMgQAHQgQAIgHgLQgGgPgDgHQgQgkgKgRQgQgdgVgRQgpA1gTBIQgQA3gGBSQgFAzgPAQQgQAQgxADIh3AIQgvACgoAAIggAAg");
	this.shape_11.setTransform(231.1,74.2,0.121,0.121);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AguC/IgKloQgBgfgRgIQgRgIgaASQgiAZgfAyQgIAPgLAFQgNAHgNgHQgOgHABgPQABgJAHgRIAagwQAQgfAIgSQAQglAFgyQACgWABhEQABgbAIhIQABgMAHgGQAHgIALABQARACADAYIACAjQABAVADAOQACAIgDAWQAAASASAAIAsABQAZgDANgSQAEgFAGgMQAOgSAEgDQALgJAPAGQANAHAAANIgGAZQgCAGABADQAAAEgJAWQgGAQANAHQALAGAOgJIAXgRQAKgFAUgQQASgLALAOQALAOgMASQgKANgSALQgqAXgHAiQgHAcAPAyQAnB9AoCtQAXBkArDKIgFACQhigEg2AjQg1AjgjBcQghiYgKjPg");
	this.shape_12.setTransform(232.8,8.7,0.121,0.121);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjkD7QgogIgdgiQgjgrgKgmQgOgvAWguQAkhPA/hLQAzg+BOhFQAygGA6AMQAhAGBHAXQCLAtBoABQgWAZgKAqQgFAYgIAxIgSBUQgMAxgQAhQhBgBgpgHQg5gKgrgbQgVgBgOAPQgJAKgMAVQg4BJhXAfQggAMgbAAQgLAAgLgCg");
	this.shape_13.setTransform(242.3,23.7,0.121,0.121);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsGYQhSgHgxgIQhLgLgSgiQgTgiAhhGQAVgrAhg/IA4hqQAkhDANggQAWg6AEgzIADgbQACgQgEgMIgCgPQAPhhBIgwQBJgvBVAgIAhADQgPBKgBBhIAFCsQABA4AyBHQAeAsgCA4QgCA6gjAnQgdAhguAuIhNBNQgigEhhgIg");
	this.shape_14.setTransform(233.6,18.3,0.121,0.121);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AixFgQgigygPgbIggg3QAKgIAMADQAFABAPAIQAfAQASgiQAPgcgggSIgzgeQgdgSgSgTQgegegJgQQgWgnANgaQAOgaAtgFIANgCQAIgCAGgGQgIgOgSgGQgHgCgZgEQhAgIgTgWQgSgVABhAIgSixIAFgIQADgFABgEQAHgeALgHQAOgIAbAVQASAPAdAGQARAEAjADQBfAJCEAXIDgApQAXAEAIAKQAIAKgEAZQgEAUABAsQAAAqgEAWQgDAPAKAKQAHAIAQAHQAWAKAUAfIA0BMIA1BLIAOAUQAHAMgGAMQAIBKgNAWQgOAUhIAeQiUA7h1gCQg3gCg2AgQgPAJhMA4QgKgkgdgug");
	this.shape_15.setTransform(238.4,34.6,0.121,0.121);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAQIIQhQgCg5gLQhJgPg5giQgLgGABgKIAFgSQAEgZATgmQAWgsAFgRQAcg/gIhPQgEgogZhkQgBgFgIgGQg4gtgIgsQgHgsAjhEQADgHgBgKIgCgRQAAgwACgVQADgnAKgeQAsiAB/gUQBGgKA1AJQA/AMAyAnQB6BjgYCYQgDASAAAGQABAMAIALQAgAqgKAvQgKAvguAaIgLAFQgGADgCAGQggBUgJAlQgRBFAKA7QADAOAKAMQAGAHAPAOIhUBfQgvA4gfAsQgFAJgEAEQgFAGgGAAIgBAAg");
	this.shape_16.setTransform(258.3,15.4,0.121,0.121);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Al6I0QgYgagGgCIA+hdQAMgjAeghQAPgRApgmQBBg8AJg3QAIg3gshKQgqhHAAhGQgBicABhOQAAgeAEgOQAFgXASgOIAuhTQA5hoB9gHQB9gIBEBiQAcApAkAQQAjAQARAjQAOAdADAsQAGBbgWBXQgLAtAGAzQAFApASA0QAHAUATARQALAKAYARQAVASgFARQgDAJgKgCIgRgBIgPABQhXAFgfgKQg6gSgQhKQgeAYgGAiQgEAZAJAmQhnBXg6A8QhVBVg3BTQgNATgcAHIhGAPQgoAJgcAOQgHADgHAAQgNAAgLgMg");
	this.shape_17.setTransform(238.9,18.1,0.121,0.121);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AGZLRQgmgCg7ABIhhAAQg4gBgSgoQgGgNgBAAQgmAHgcgiIgWgdQgNgRgLgIQgngdgRgnQgTgrANgwQAEgQgBgHQgCgLgNgIQhWgzhRhUQg6g7hQhoQgSgXgUgGQgSgGgdAHQgqAJgxAeQgdAQg3AkQgOhBAWhCQARgzArhAQAYgiAkguIBAhNQAMgPADgLQAEgOgHgRQgKgWABgiIACg6QBDhmB4gDQB4gECNgzQBAgXARgVQASgWAEhAQAQgJAOAIQAIAGAKAPQAfAyAtAlQAqAjA7AbQAqATAtAwQAaAbAyA5QARASgCAXQgBAQAGAQQAFAKAMARQAhArgaA2QgLAYAEAmIAIA/QAAAEAEAPQADAMgCAIQAIASAFAcIAIAxQAHAcgEAPQgFAVgZAKQgOAGgCALQgBAIAFAQQAFAMAHAiQAHAdAHAQQALAcgBA1QAAA4AIAaQAHASAGAfIAKAzQAKAugLAPQgLAQguACQgkACgHAEQgTAIgFAhQgEAWgVAUQgYAXgfAAIgEAAg");
	this.shape_18.setTransform(241.8,45,0.121,0.121);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AEyLiQg/gMhXgkQgegMgKgeQgPghABgvQAFg2ABgbQAAgJAEgZQADgWgBgNQgyAVhCAMQgdAEhbALQgmAEgZgYQgZgXgDgqIgIhAIgJhBQgDgYgNgHQgNgHgXAHQgwAPgyAcQgnAVgzAlIg0AnIg0AmQghAWgSAJQgeAOgcABQgtgNAGg1QACgRgBgeQgBgiABgNQACgbgLgNQgKgNgagEIjQgmQh6gVhYgIIgmgEQgVgEgOgHQgfgRgYADQgaACgWAaQg0gpgUhSQgVhUAahJQArh1BJg0QAsAcA9gPQAigJBEgUQAPgCAOgPIAVgdQBeiBCkiKIAPgMQAJgFALAEIAnAWQACAPgKALQgGAGgPALQh4Btg8B6QgXAvAJAzQAJAyAlAkQAgAeAoACQAoACAygZQBAggA1hEQAWgbACgBQARgNAWASQAHAfABArIAABLQABArAfgcIBMhAQAugmAcgdQASgrAOhCQAPhKAIglQAIglAEgIQAKgXAYgIIEHgEQArAAAZgWQB2hkCMgUQBPgLBeg+QAKAUgLAWQgFAMgPAXQgTAtAFAOQAFANAsAVQBGAiBdABQAcAAAUgKQATgKAPgXQASgcAjgoIA5hBQAJgMAHgEQAKgHALAAQAQgIAXAJICNAxQBSAdA5AZQBiAtAfBCQAdBBgcBqQgEAPAGAMQACAGAMAPQA4BEAQBIQAIAkgJAZQgKAdgeALQgtARgoAvQgqA3gXAaQgUAXgLAHQgTANgXgEQgWgEgaAbQgLAKgHADQgLAFgLgHQgagRgLALQgGAGgIAfQgxC1ApCuQgMAcgqAMQgqANjUBLQibA3hoAUQghAHgjAAQgqAAgtgKg");
	this.shape_19.setTransform(249.8,28.1,0.121,0.121);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AbMZ9QgsgJghgbIgSgOIgSgNQhBg4g9gPQhFgShNAgQgzAVgdgOQgcgOgNgxQhAj/irmNQhdjVgthqQhNi4gwiMQhakGg/igQhbjlhfi1QgQgdgMAAQgKgBgRAYQg0BIg3BpQgfA9g9B8IhwDkQgtBdg+A3QgSAQgKAXQgIASgFAdQgbCdgeD+QgnFDgNBXQgIBBgZAiQgJALAAAPQAAAIAEASQAHAnAFBBQAGBOADAaQAGApgVBCQgXBIAAAhQAAAOgOAFQgGACgTACIg5AEIg5ACQgQgRADgUQADgNAOgWQAuhHgchcQgIgYgMgDQgLgCgSAQQgYAVgMAaQgWAqgeARQgeARgvgEQgUgCgegGIgwgMQgRgFgJgCQgQgCgNAKQARANAdAIIAuAPQAcANADALQADALgUAXQguA1g3gMQgdgHgbAGQgZAGgbASQgaASgSAIQgaAMgZAAIgdgJQgagGgEgXQgEgZAcgPICBg/QAVgKALgJQARgLAJgPQgMgKgrgHQgigHgHgUQgGgSAEggIAHg2QAEicAbjJQAJhFAtkeQAZifAFiVIAAgQQgBgJgHgHQgngogag8QgSgogVhIQgUhEgshYIhNiXQgGgNgGgBQgFgBgLAKQiABxhxBgQhOBBgeBXQgcBTAOBoQAaDKgqDcQgiC1hWDgQgLAcgaA4QgSAxAOAqQgEAkgPA/QgQBFgEAeQgCAKgHAIQgIAHgLAAQgigCg+AIQhCAIgegBQgEAAgJgHQAAieArhzQAth3AHiRQAFhpgPiiQgRizgJi9QgDg+gYhPQgticBOiXQAlhKA3hZQAggzBFhqICTjmQAjguA3gbQAsgWBDgNQAXgFATAPQALAIAVAZIBpB/QA+BGA6AqIAQANQAJAHAHAEQAkATAOAXQAQAbgKAnQgGAYANAaQAHAOAUAaQAeAlAVAVQAeAdAfAQIAIADQAEACACACQAxA2BUABQAVABA0gEQAvgEAZACQAXABAUgTQARgQAIgYQAKgbAQgLQAPgLAcgCQAvgDALgQQAKgPgNguQgghxAEhXQABgYgKgjQgOgmgFgTQgIgbACgQQADgWAVgQQANgJADgRIgBghIgLg1QgHggAIgWQAlgpArhLQA6hlANgUQAggvgFg9QgFhAAAhZIACiaQABgUAFgLQAGgQARgGQBKAxBNAUQCVAnCpg4ICzg/QBrglBJgUQAPgEAcgQQAagQARgEQApAeAOAdQARAkgRAsQgFANAGAMQADAHALANQAUAYAJAdQAIAbgBAjQgDB8AzBsQAsBdAlB0QAbBVAhCCQAcBzA5ChIBhEPQBDDDB/FMQCSF/A0CPQARAxAmBiQAeBWAJBBIAGApQADAXgEAPQgWBHAgBIQALAXBBBiIAMAQQAHAKADAHQAOAhgWAhQgVAhgmACIgcABQgfAAgYgFg");
	this.shape_20.setTransform(252.4,54.8,0.121,0.121);

	this.samba_text = new cjs.Text("סמבה היא הסגנון המוזיקלי והריקוד המסורתי הנפוץ ביותר בברזיל, ואף נחשב לאחד הסמלים הלאומיים. מקור השם \"סמבה\" הוא כנראה מהמונח \"מֶסֵמבה\" (mesemba) - מקצב דתי שמקורו באנגולה. \nעד תחילת שנות העשרים של המאה העשרים הייתה הסמבה מחוץ לחוק בגלל האופי הגס והמוחצן של הריקוד. הסמבה התפתחה בריו דה ז'נירו  בהשפעת מהגרים שחורים מבאהיה. בסוף שנות העשרים נפתחו בתי הספר הראשונים לסמבה, ובראשית שנות ה-30 הפכה הסמבה למקובלת ולחלק אינטגרלי מהקרנבל. הסמבה מתבססת על תנועות רגליים מהירות ותנועות אגן חושניות\n\n", "20px 'Arial'");
	this.samba_text.name = "samba_text";
	this.samba_text.textAlign = "right";
	this.samba_text.lineHeight = 24;
	this.samba_text.lineWidth = 448;
	this.samba_text.parent = this;
	this.samba_text.setTransform(476.2,95.9);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(251.2,176.4,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.samba_text},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.samba_music}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.samba_info, new cjs.Rectangle(0,-12.9,502.4,449.7), null);


(lib.salsa_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.salsa_text = new cjs.Text("סלסה הוא סגנון ריקוד לטיני שהתפתח בשנות ה-50 וה-60 של המאה ה-20 בקובה ,והפך לריקוד פופולרי בכל העולם.  הסלסה הקובנית התפתחה במקור מצעדי הבסיס של ריקוד הסון הקובני בשילוב אלמנטים מריקוד הממבו, הצ'ה צ'ה צ'ה, ומגוון ריקודים אפרו-קובניים אחרים. הריקוד נרקד על מוזיקה לטינית במקצב של 8 פעימות, כאשר משתמשים ב-3 צעדים על כל 4 פעימות (מדלגים על פעימה לאחר כל 3 צעדים). מוזיקת סלסה אופיינית משלבת ביצוע מוזיקלי מסובך עם כ-180 פעימות בדקה! \nהסגנון הקובני הוא מהסגנונות הראשונים והפופולאריים בעולם. הסגנון הוא של ריקוד עגול, ללא קווים או מגבלות (בניגוד לסגנונות אחרים) ואופייני בתנועות גוף רבות.", "20px 'Arial'");
	this.salsa_text.name = "salsa_text";
	this.salsa_text.textAlign = "right";
	this.salsa_text.lineHeight = 24;
	this.salsa_text.lineWidth = 446;
	this.salsa_text.parent = this;
	this.salsa_text.setTransform(477,95.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYgLQAJAAARgCQAPAAAIANQgCgBgaANQgEACgEAAQgLAAgCgZg");
	this.shape.setTransform(203.3,22.9,0.332,0.354);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAUQgDgCAAgLQAAgLAEgFQANgSAXABQANABAcAFIAAAdIgnAOQgIAEgJAAQgMAAgKgHg");
	this.shape_1.setTransform(199.9,22,0.332,0.354);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiMFNQgFgFgLAAQgLABgEgGIgBgVQAAgQgKgCQgFgCgDAEIgEAIQgFAHAAADQgBAGAHAEQAFAEACADQADAEgCAGQgWABgKgBQgSgCgJgTQgBgEgKgCQgKgCgCgDQgHgLAEgLQADgKAKgHQALgIAOgSQARgVAHgGQAQgPgDgmQgDglgRgSQgZgZgWgMQgQgJgIgfQgIgfAJgUQALgYgJgaQgNgegFgPQgCgHgEAAQgDgBgGADIgOAIIgOAGQgUAKgRgBQgSgBgQgQIgJgGIgJgGQgDgFgFAAIgJABIgMgBIAAgLQAdgYAZAZQAOAPASgCQAOgCAPgNIAfgaIAfgYQAHgGABgMIABgTQAGguAXgMQAYgMAlAXQAMAIAEAUQADAVgKAJQgEAEgGALQgFAJgFAEQgHAGACAJQABAJAIAEQATAKAUAWIAhAlQAJAJAHABQAIACAKgGIAogUQAYgMAPgNQAIgJAJgCQANgCAGASIADADQABABAAAAQABAAAAAAQABABAAAAQABAAAAgBQAYgKAlAJIAfAGQARAEAOgBQAQgBAVgLIAhgSQAMgGATgOQAVgRAJgFQAMgHADgGQAGgLgYgEQgGgBgCgIIgDgNQgFgOgCgTQgBgLgBgWQAAgLANgDQANgEABgIIAWAAQABAHAGAAIAJABQAbANAHAPQAHASgOAdQgIARAKAKQAGAGAOAFQAmAMAUAkQALAUANA1QADANgMANIgYAVIgGADIgGADQgXAMgKAQQgMARACAZQABAMgFAGQgFAHgMAEQgZAKgTAaQgLAPgSAjQgDAIACAHQACAGAIAHQASANAlAlQAhAjAXAPQAIAFABAJQAAAJgGAJQgQAXgfAGQgfAFgbgPQAEgFAHAAIAKABQALgCACgGQABgGgFgJIgFgEIhBg3IAABTQABAJgBACQgCAGgHAAQgmABgWgCQghgEgagKIADgGIADgCIAcgIQAKgDAEgGQAGgIAAgoIgBgqQgBgXgFgSQgGgZALgaQAIgVASgUQAVgWAMgiQAEgMAMgxQACgLAHgTIAKggIgQADQgJACgFADQgjAXgpgDQgfgDgtgUQgmgRgkAEQgkAEggAbIgJAHIgJAHQgqAdgpghQgYgTAAAhQABAnAFAWQAIAgATAXQALAPAHATQAGATAAAUIABBMQABAsgEAfQgDARADAJQAFAMAPADIAEAEIADAFIgEAEQgDACgCAAIgVAEIgDABQgKAAgGgHg");
	this.shape_2.setTransform(247.5,36.5);

	this.salsa_music = new lib.salsa_music();
	this.salsa_music.parent = this;
	this.salsa_music.setTransform(404.5,48,0.691,0.691,0,0,0,5.5,21.8);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(251.2,176.4,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.salsa_music},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.salsa_text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.salsa_info, new cjs.Rectangle(0,-8,502.4,420.4), null);


(lib.rotev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// flash0.ai
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(0.6,0.7,1,1,0,0,0,35.6,16.6);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,0.5,1,1,0,0,0,34.8,15.7);

	this.rotev_h = new cjs.Text("רוטב סלסה", "10px 'Arial'");
	this.rotev_h.name = "rotev_h";
	this.rotev_h.textAlign = "center";
	this.rotev_h.lineHeight = 13;
	this.rotev_h.lineWidth = 65;
	this.rotev_h.parent = this;
	this.rotev_h.setTransform(0.9,-30.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("Ak9ikIJ7AAQBFAAAABFIAAC/QAABFhFAAIp7AAQhFAAAAhFIAAi/QAAhFBFAAg");
	this.shape.setTransform(3.7,3.1,0.909,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Ak9ClQhEAAAAhFIAAi/QAAhFBEAAIJ7AAQBFAAAABFIAAC/QAABFhFAAg");
	this.shape_1.setTransform(3.7,3.1,0.909,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.rotev_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-15.9,71.4,33.2);


(lib.roomba_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.roomba_music = new lib.roomba_music();
	this.roomba_music.parent = this;
	this.roomba_music.setTransform(404.1,42.1,0.684,0.684,0,0,0,5.5,14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("AgFAAQAAgEAFgBQAAAAABAAQAAABABAAQAAAAABABQAAABAAAAQAAABABABQAAAAAAAAQAAAAABAAQAAAAABAAQABAEgFABIgCABQgEAAgBgGg");
	this.shape.setTransform(226.5,16.3,1.006,0.71);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("AADgCQAAAFgFAAQACgEADgBg");
	this.shape_1.setTransform(273.2,73.2,1.006,0.71);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050505").s().p("AgBABIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAgBABQAAAAgBABg");
	this.shape_2.setTransform(226.4,33.3,1.006,0.71);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2C2C").s().p("AgBAAIABgBIACACIgBABg");
	this.shape_3.setTransform(272.6,29.2,1.006,0.71);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#020202").s().p("AgBgCIADAAIAAAEIgBABg");
	this.shape_4.setTransform(272.2,28.9,1.006,0.71);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020202").s().p("AAHAJQgMgGgFgMIABAAQAGACAFAHIAJAJg");
	this.shape_5.setTransform(271.3,28.1,1.006,0.71);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020202").s().p("AgBAHQgGgBAEgEQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIgGgDQAFgEADACIAHAEQADABgDAFQgBAEgFAAIgCgBg");
	this.shape_6.setTransform(269.3,20.3,1.006,0.71);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020202").s().p("AgCAJQgGgBgCgGQgBgCAAgIQANAIAKAAQgEAJgHAAIgDAAg");
	this.shape_7.setTransform(270.3,24.6,1.006,0.71);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#050505").s().p("AgBAEIgDgNQgCgHAFAAQAFgBgBAIQgBADACAJQACAJgDAGQgDgGgBgIg");
	this.shape_8.setTransform(224.6,40.3,1.006,0.71);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#050505").s().p("AgEgLIAEgBIAFAMQABAHgDAGIgHgYg");
	this.shape_9.setTransform(221.3,38.9,1.006,0.71);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#050505").s().p("AgDAAQAAgKADgHQAEAEgBAGIAAAKIgGAPIAAgSg");
	this.shape_10.setTransform(221.4,22.8,1.006,0.71);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#050505").s().p("AgIgNIACgDIADAAQAMAQAGAEQgGAFgEgFIgGgHIgEAMQgCAIgHAAg");
	this.shape_11.setTransform(224.5,24.2,1.006,0.71);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#020202").s().p("AgIA2QgCg8AHghQACgKACgFIAGAuQADAagBAUQAAAOgDACQgBABgFAAIgIgBg");
	this.shape_12.setTransform(270.1,53,1.006,0.71);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#020202").s().p("AABAPQgMgKABgIQABgMAJAAQAHAEACAHQACAEABAKIgFAFIgDABIgDgBg");
	this.shape_13.setTransform(267.1,23.1,1.006,0.71);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020202").s().p("AAGAWIgFgQQgDgHgDgCQgFgFgIAAQgKAAgCgEQgBgEAGgJQAGgKADAAQACAAAKAHQAIAHAJARQAKARAIAGIgPARQgGgEgEgKg");
	this.shape_14.setTransform(265.3,14.6,1.006,0.71);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020202").s().p("AgigKIAPgRQATgEAKABQAYACACAcIgGgFQgIAHgMgCQgMgFgHAAQgGAAgDACQgDACgBAFQgBAEgEAKQgEAIAAAGQgGgQADgag");
	this.shape_15.setTransform(270.4,18,1.006,0.71);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#020202").s().p("AAfAfQACgMgBgGQAAgIgBgEQgCgEgKADQgHgNgHAFQgHAIgEABQgDACgEgCQgDgBgBgDQgCgFgCgBQgBAAgEADQgDABgDAHQgEAGgEACQAAgWAJgKQAHgIATgCIAPgCQAdAJACAcIgEAdIgEADIgBAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBg");
	this.shape_16.setTransform(225.2,14.5,1.006,0.71);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#020202").s().p("AgcAIQADgOADgGQAGgKALgEQAEgCACgGIADgKQATgBAGAMIgGAeQgEARgIALQgCACgBAJQgCAHgEADQgCgdgcgJg");
	this.shape_17.setTransform(229.1,11.4,1.006,0.71);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020202").s().p("AgkArIAGgLQAEgGABgFIAGgPQAJgGAAgNIgCgVIgCgFQAHgNgLgIQgJgIAEgKQAFgNgGgMQAEgBAEgHQADgHADgCQAEgDABABQABAAACAFQACAEACABQAEACADgBQAEgCAIgIQAHgFAHAMQAJgDADAGQABADAAAIQABAGgCAMQAAACAAABQAAAAAAABQAAAAABABQAAAAABgBIAEgDQAHAKgJAJQgXAXARAXIgNAKQgJAEgDgIQgBgFgKgBQgJgBgBgGQgBAFAFAKQAGAIgFAGIgCAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgFAgQgDAFgJAHIgMALQgNAPgDAJQgEAIgFAbQgGglAYgrgAAchcQgGABABAFQABAGAHgBQAEgBgBgEQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBgBAAIAAAAg");
	this.shape_18.setTransform(223.7,22.5,1.006,0.71);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020202").s().p("AgDAAIAHgGQAAAEgDADIgEAGg");
	this.shape_19.setTransform(272.6,73.8,1.006,0.71);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020202").s().p("AgCAAQABgFAFgCIAAAJQAAAGgHAAIABgIg");
	this.shape_20.setTransform(256.4,34.6,1.006,0.71);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#020202").s().p("AgGgIIAGADQAAADAGACQADAEgHAFQgIgHAAgKg");
	this.shape_21.setTransform(270.9,77.6,1.006,0.71);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#050505").s().p("AgDAJIAAgGIADgOQAEAEAAAHQgDABABADIABAFQABADgEAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_22.setTransform(235.2,60.4,1.006,0.71);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#020202").s().p("AABAFQgFgGgFgCIgBgLQAGACAFAJQAGAIAEACIAAAIQgEgBgGgJg");
	this.shape_23.setTransform(274.5,73.2,1.006,0.71);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#020202").s().p("AgNAGIAAgIIAVgCQAHAEgCAGQgKgGgQAGg");
	this.shape_24.setTransform(273.3,70.1,1.006,0.71);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#020202").s().p("AgNACQgBgDADgEQAFgCAGACQAIACADAAQAAACACACQACAEgBACQgRgHgKACg");
	this.shape_25.setTransform(269.7,68.2,1.006,0.71);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#020202").s().p("AgNgHIANAAQAIAAAGADIgIAEQgFADABAFQgGgCgJgNg");
	this.shape_26.setTransform(267.8,30.9,1.006,0.71);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#050505").s().p("AAAA3QABgGgDgRQACgLgCgTQgDgUABgJIAEgcIADAEIACA0QACAfgEAVIgBADIAAAAIgCgBg");
	this.shape_27.setTransform(223.5,44.9,1.006,0.71);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020202").s().p("AgPAIQgFgFgBgMQAFAEAFgDQALgGANAGIABAFQAAACAFADQAEADgDADQgCADgOABIgEAAQgKAAgFgEg");
	this.shape_28.setTransform(274.6,78.3,1.006,0.71);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020202").s().p("AgBAjIgIggQABgPACgHQAEgNALgFQACAHgCALIgDASQgDASABAVg");
	this.shape_29.setTransform(270.4,74.5,1.006,0.71);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#050505").s().p("AgxgSQAEgDALAFQAZANAagLQARgHARACQgUAFgFADIgYAKQAEAGAGACIAMAEQAMADgLAHg");
	this.shape_30.setTransform(241.8,33.3,1.006,0.71);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#020202").s().p("AgCAPQgDgLgLgDIAEgYQAKgCAQAHIAAASQABALACAIIgFABQgFAEgDAAQgEAAgCgJg");
	this.shape_31.setTransform(269.6,70.1,1.006,0.71);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#020202").s().p("AgEAgQgGgFgBgPIgCgVQAAgMgFgJQAFgJAGAKIAJAOIAIAfQgBAKAKAHIgMACQgHAAgEgDg");
	this.shape_32.setTransform(269.2,75.9,1.006,0.71);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#020202").s().p("AAIANQgFgJgGgCIABAMQgEABgBAEIAAAAIgIAGQgDgKAAgNIAAgXQARgFAJAFIAHAWQAEAOAAAKQgEgCgHgKg");
	this.shape_33.setTransform(273.8,72,1.006,0.71);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#020202").s().p("AgDASQgGgJgFAJQgHAAgDADIACgcQACgQAMgIQAKACADALQAEAQALgLIAFgBIgBAGQgLAFgFAMQgBAHgBAQIgJgOg");
	this.shape_34.setTransform(268.8,72.4,1.006,0.71);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#020202").s().p("AgPAgQgEgJABgOIAAgXIAFgGQADgEAAgDQAGAAgBgGQAFACAFAHQAGAJAFABQAEADgBAFIgBAHIAAAfQgNgFgKAFIgFACQgDAAgCgCg");
	this.shape_35.setTransform(274.1,75.4,1.006,0.71);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#050505").s().p("AAAAxQgCgDgDgRQgCABgDAIQgDAGgGABQgCgGADgHIAEgNQABAAABgBQABAAAAgBQAAAAAAgBQgBAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAIAAACIgFABQABgHAFgJIAJgOQALgcACgKIAIANQAFAIgBAHIgKAiQgEAUAEAQIgHABQgBAAAAAAQgBAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_36.setTransform(227.8,32,1.006,0.71);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#050505").s().p("AgUBZQgEgCABgFQAGgQgDgVIgIgkIgCgnQgBgXADgRIADgSIARAaQAIAPAFANQABAEAEAAQAIABAFAHIAIAMQACAEgFAHQgGAHgFgBQgKgBADAIQAEATgKATQgEALgOAWQgBAEgDAAIgCAAg");
	this.shape_37.setTransform(242.4,71.5,1.006,0.71);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#050505").s().p("AgDBjQgGgCgCgJIgYhUQADgNAAgmQAAgiAHgSQACAGAAAOQAAAOACAIQAGgPAAgYQAGACAAAIIgDAPIAAAGQAAABAAAAQAAABABAAQAAABABAAQABAAAAAAQAFAAgBgDIgBgFQgBgDADgCQAQAVAYAvIgDARQgDARABAXIACAoQgSAEgGADQgEADgEAAIgEgBg");
	this.shape_38.setTransform(236.1,65.7,1.006,0.71);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#050505").s().p("AgDBsQgFgDgCgHIgCgNIADgJQACgFgDgDQgEgDgPADQgJACgEgEQgDgEgCgLQgEghAQgzQAKgDARAFQAQAFAIgFQAIgFAFgSIAUg6QAABEgMBVQgBAIgFAOQgDANAEAKQAGAQgLAHQgHAEgHAAQgIAAgIgFg");
	this.shape_39.setTransform(224.4,71.3,1.006,0.71);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#050505").s().p("AALC0QgFgVgEgIIgGgPQgBgLAEgRIADgcIAEgeQACgSAAgNQgGAZgRApQgUAtgGAVQgCgRAHgPQAIgYAahYQACgGgCgBQgBAAgGADIAHgdQACgSABgMQAHgvgIglQgCgJgFgDQgEgDgJAAIgLACQgGAAgCgHIAWAAQAFAAACgCQABgDgFgEQgCgDgBgBQgLgBgFgJQgDgFgDgNIAcgHQAEANAJAPIATAYQAVAbgNAnQgKAdACAlQABAQAHAxIANBCQAAAZgGAPQgCgJAAgOQAAgOgCgGQgHATAAAiQAAAmgDAOQgFgKgGgTg");
	this.shape_40.setTransform(230.3,51.2,1.006,0.71);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#020202").s().p("AgHCxQgBgEgCgBIgFABQgEABgIgCQgHgCgEABQAAgPgFgjQgFghACgSQACgOAEgOQADgJgDgDQADgBACgEQACgGACgBQANACACgDQADgCAAgOQABgTgDgaIgGguQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAPgOAGgVQAEgOADgaQABgNAJgSQABAHAAAMQAAALACAFQAFAPAGAFQASAOgEAZIgIA5QgEAkgGAVIgHAVQgHAAgBAFIACAJIAEAlQABAWgBAQQgCAVAAA7IgVADIgDgYg");
	this.shape_41.setTransform(272.4,55.6,1.006,0.71);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#020202").s().p("AA+BkIgVgoIgHgKQgBgEAFgEIAIgEQgGgDgIAAIgOAAQgIAAgHAEIgWAQQgOAJgHAJQgFAEgJADIgQADIgEABQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgFACgBAEIgBAJQgDAEgBAAQgMAAgIAIQgFAFgJANQgCgNgDgHQgDgKgMgCQgBgHADgIIAGgOQAHAAAOgDQAMAAAIACQAEABAEgCIAHgEIAQgLQAKgGAJAAQADAAADgCIAWgWQANgMADgMQAEgPASgEQAMgDAEgLQAEgKgHgMQgBgLgBgEQgDgIgIgDIgBgNQAAgIAEgEQAAgGAEgJQAEgJABgEQABgHADgBQADgCAGAAQAHAAANAEQAMAEAIgIIAGAEQABAHgBARQgBAOABAIQABAEgBACQgPARAJASQAFALAOAUQADAHAIAGQAEADAMAGQAIACACAEIgKANQgFAEgEgCQgNgGgSAGQgHADgGgDIgDgDIAAgGIgKgKQgFgGgHgCIgBAAIABAAQAFAMANAGIADAHIADACQgEASAFAXQACAMAIAaQAEAPgKAOQgJAPgPACQAJgWgIgYgAAugrQACAGAGABQALACAEgLQgKAAgOgJQAAAHABAEgAAmhvIAFAEQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBABQgDAFAFABQAIABACgFQACgFgCgCIgHgEIgDAAQgDAAgDACg");
	this.shape_42.setTransform(264.6,27.8,1.006,0.71);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#050505").s().p("AgSDhQgQgFgKADIAGgZQADgOABgLQAKhRAChNIAEhJIADABIAAgDQAEgVgBgfIgDg1IgEgEIgEAcQAAAJACAVQACATgBALQgQgqgFgoQgDgRgHgJQgKgMAJgJIAHAAIAIAZQAEgGgCgHIgEgNQAJgHAPgDIAYgFQADANADAFQAFAIALACQACAAACADQAEAEgBADQgBADgGAAIgWAAQACAGAHAAIAKgBQAJgBAFADQAEAEACAJQAJAkgGAwQgBAMgEASIgHAeQAGgEABABQADABgDAGQgaBXgIAXQgGAQACAQQAFgUAUgtQATgpAFgYQAAAMgCARIgEAfIgEAcQgDAQABAMQgEAFAAALQAAAMgCAFIgTA6QgFASgIAFQgEACgGAAQgGAAgJgCgAgIjDQgGAAADAHIACAOQACAIAEAGQADgGgCgJQgCgKAAgDQACgHgFAAIgBAAg");
	this.shape_43.setTransform(225.4,53,1.006,0.71);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#020202").s().p("AAOAOQgHgMgRABIgNgBIANgGQAHgEADgFIAIAAQABAEAIAFQAJAEgCAEIgDAGQgCAEgEAAIgBAAg");
	this.shape_44.setTransform(230.7,8,1.006,0.71);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#050505").s().p("AiZBdQgHgWgCgQIgDgFIAAhJQAFAAAAgJQABgZANgaQAJgTASgbIABAGIACAVQABAMgJAIIAAgLQACgGgFgFQgDAIAAALIAAASQgBAFgEAGIgHALQgXArAGAkQAFgbADgHQAEgJAMgQIANgKQAJgHADgGQAHAAACgIIADgNIAHAIQAFAFAFgFQgGgEgNgRQAFgHgGgIQgGgKABgFQACAFAJACQAKABABAFQADAIAIgFIAOgJIACADQADANAEAGQAGAJALACQALACAMASQAUAdAvAPQAjALAQAQQAWAWATAFIAIAGQAFAEAFAAIgHAPQgCAHABAHQgIgEgKACIgRAGQgKAEgOgKQALgGgMgDIgMgEQgGgCgDgHIAYgLQAFgCATgFQgQgDgRAIQgcALgYgNQgLgFgFADQgZgGgfgSQgFgDgHAGQABgHgFgIIgIgNQgCAKgMAbIgIAPQgGAJAAAIIAEgBIACABIgFAMQgCAIACAGQAFgBADgGQADgIADgBQACARACACQACADAJgDIADANIgcAHIgZAFQgPADgJAHIgNABIgNgkg");
	this.shape_45.setTransform(234.2,28.9,1.006,0.71);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#020202").s().p("AhoDoQgMgBgEgIQgEgFAIgLIAHgHQAGgFgDgGQgCgGgIABQgLACgDgBQgIAAgDgGQgDgHAFgGIAJgMQALgPADgHQAEgKgEgFQgEgEgKACQghAFAHghIAGgVQAEgRgPACIgQAAQAGgPAFgHQAIgKAMgDQAigKA5ggQAOgJAFgPQAIgaAagOQAOgCAJgOQAKgOgEgQQgIgagCgMQgFgXAEgRIABgBQAGADAHgCQASgHANAHQAEACAFgFIAKgNQANgEAAAOQABALgBAFQgCAIgIAFQgFADADAHQAUBAgUA3QgDAHAFAIQATAiATA4QAKAdAfAzIAQAYIAAAGQgNAOgTgLQgGgDgDABQgEACAAAIQAAAJgEADQgEADgKgDQgJgCgLALIgJALQgEAEgEAAQgFAAgCgFQgIgRgXAGQgDABgCgCIAHgVQAGgWAEgjIAIg6QAEgYgSgPQgGgFgFgNQgCgGAAgLQAAgMgBgGQgJARgBANQgDAagEAOQgHAVgOANQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQgDAFgCAKQgHAhACA9QgCABgCAGQgCAEgDABIgMgEQgKgBgDAEQgDAEAFAIQAGAJgFAIQgFAGgLgFQgQgGgHAOQgGALgKAAIgBAAg");
	this.shape_46.setTransform(271,44.7,1.006,0.71);

	this.roomba_text = new cjs.Text("רומבה הינו ריקוד זוגות רומנטי. הריקוד התפתח בעיקר בקובה, אך בין היתר גם במקומות נוספים כגון האיים הקריביים ואמריקה הלטינית.\nבמקורו, ריקוד הרומבה העממי מלא בתשוקה ונרקד במהירות כאשר ניתן בו דגש לתנועות אגן. הגברים רוקדים בחושניות בעוד והנשים נוקטות בגישה הגנתית כלפי הגברים. בין היתר, במוזיקה של הריקוד משתמשים בכלי נגינה כגון: מרקס (תרמילים הממולאים בזרעים או בחצץ וכד'), קלאווה ותופים. רומבה הינה במקצב של 4/4 פעימות. ישנם מספר סגנונות רומבה, וכל סגנון נרקד בצורה שונה. ניתן לרקוד בריבוע (Box Step) או אחד מול השני (Side By Side). בכל מקרה חשוב להרגיש את בן\\בת הזוג על מנת לבצע את הריקוד בצורה הטובה ביותר בשילוב תנועות אגן.\n", "15px 'Arial'");
	this.roomba_text.name = "roomba_text";
	this.roomba_text.textAlign = "right";
	this.roomba_text.lineHeight = 19;
	this.roomba_text.lineWidth = 444;
	this.roomba_text.parent = this;
	this.roomba_text.setTransform(474,105.9);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(251.2,176.4,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.roomba_text},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.roomba_music}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.roomba_info, new cjs.Rectangle(0,-1,502.4,361), null);


(lib.merngue_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.merngue_music = new lib.mernguemusic();
	this.merngue_music.parent = this;
	this.merngue_music.setTransform(404.1,44.1,0.666,0.666,0,0,0,5.5,14.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOAhQgggYgMgWQgHgNAFgIQAOAgAgAUQAEADAKACIAFgBQABAAAAABQAAAAABAAQAAABAAABQAAABAAABQgBAIgHAAIgNgCg");
	this.shape.setTransform(246.2,10.3,0.923,0.642);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F0D8").s().p("AgCAAQACgFgDgEIAAgEQADADABAIIADALQAAABAAABQAAABAAABQgBAAAAABQgBAAAAAAIgFAAg");
	this.shape_1.setTransform(256.9,17.6,0.923,0.642);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAAIgEgDIAAgBQAEAAAHgEQAHgCADAFQADAEgCAKQgEgOgOAFg");
	this.shape_2.setTransform(261.5,14.8,0.923,0.642);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAEQADgHAKgEQAEgCAAAHQgDAKgIAAQgHAAABgEg");
	this.shape_3.setTransform(264.8,16.3,0.923,0.642);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4F0D8").s().p("AgBAAIADAAIgDABg");
	this.shape_4.setTransform(270.8,46.2,0.923,0.642);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAAIABgCIAEACIAAADQgDAAgCgDg");
	this.shape_5.setTransform(260.5,14.8,0.923,0.642);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4F0D8").s().p("AgCgNQACAEAAAHQAAAHADAEQACACgGACQgDgMACgOg");
	this.shape_6.setTransform(241.8,38.8,0.923,0.642);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4F0D8").s().p("AgFABQAFgBACgIQAEgMALABQgPAUgSATQgCgRANgCg");
	this.shape_7.setTransform(238.9,15.7,0.923,0.642);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020202").s().p("AACAWQgBgIAFgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgIABgEgCQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAEAAIAEAAQAAAAABgBQABAAAAAAQAAgBABAAQAAgBAAAAQACgHgHgCIADgCQABgBAAAAQAAgBAAAAQAAAAgBgBQAAgBgBAAIgJgEIASgLQADAigIAgIgDADIgBgNg");
	this.shape_8.setTransform(270.5,24.9,0.923,0.642);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#020202").s().p("AABAWQgHgDgFACQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBIgBgGIgDgRQgBgGADgBQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAIABAEIACAJQACAGADAFIACgbQABgJAEAAQAEABABADIAAAGIAAAOIgBAFQAAAEABABQABAAAAABQABAAAAAAQABAAABgBQAAAAABgBIADgFQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQACACgBAEIgGAPIgBABQgEAAgHgDg");
	this.shape_9.setTransform(254,8.2,0.923,0.642);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#020202").s().p("AAJAfQgGgBgDgFIAAgHQgJgHgDgPQgFgTgDgGQAFgCAEADIAFAHQABAFAHACQANACAFAQQgCABgEgDQgDgDgDABIANAeIgJABIgDAAg");
	this.shape_10.setTransform(252.7,10.9,0.923,0.642);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#020202").s().p("AgBAaQgRgDgHAAQgDAAgBgDIgBgHIABgIQAAgFgEgCIgBgDQAHgGAOgGIAWgJQACAGgEADIgHAHQAJAEAIgEQAIgEADgMIADgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAEACANQACAKgFAGIgTAMIAKADQABABAAAAQABABAAAAQAAABAAAAQAAABgBAAIgDACIgDAAQgIAAgLgCg");
	this.shape_11.setTransform(268.5,22.2,0.923,0.642);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgrA2QgBgHAJgEIAFgCQAMAAAMgIIATgQQAGgEABgLIABgRQACgNgCgTQAAgNAKACQAIAFABALIAEAoIgBAGQgIAAgDAJIgGANQgDAFACAFQABAEgCADQgCADgFgCQgDgCgDADQgHAJgNABQgTACgEABIgFABQgFAAgBgFgAAcgZQgDACADAGIAHAMQACgEgCgEIgCgIQgBgEgCAAIgCAAg");
	this.shape_12.setTransform(262.4,67.7,0.923,0.642);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAWQgRgMgHgKQgEgEgDAAIAEgKQACgGgEgFIAAgHIAAgFQAAgBABgBQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIADAEQAUATAwAYQgDAHgJALQgJALgDAIQgGgHgTgOg");
	this.shape_13.setTransform(244.6,14.4,0.923,0.642);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#020202").s().p("AgJAmIgGAAQgEgBgBgEQACgMgEgbIAAgEQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAJgIgIgLQgGgIgBgEIALgBQAEAFAGABIALgBQAKAAADAMQAEAPADAgIAAAFQgCAEADAFIgBAPQgKgFgZgEg");
	this.shape_14.setTransform(254.1,15.6,0.923,0.642);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AABAYQgBgFgJgDQgKgEgCgFIgDADQgBAFACACIAFAEQACADgCADQgCADgJAAQgKgBgPgHIAIgLQATgSAPgVQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBABgBIACgDQADABAEAEQAGAKASANQATAMAHAHIAGAGQACADgHADQgFADAAAEIgZADQgNAAgGgLg");
	this.shape_15.setTransform(241.7,16.3,0.923,0.642);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAzQgMgFgEgEQgHgGgCgLIgHgOQgFgIgGgDQAUAAAXAEQANADADgOQAGgfgEgQQAFACgBAGIAAAIIABAHQAAADAEAAQAGAAARADQAPADAJgBQAGADgBAGQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgFAAIgEAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQAFADAIgBQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQgEAEAAAIIABAOIAAAEQgDAQgMAEQgEACgTACIgPABQgMAAgLgEg");
	this.shape_16.setTransform(265.3,25.5,0.923,0.642);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAnAqIgJgbQgBgDADgEQAFgFgDgKQgEgNgHABQgEABgBAFIgBAIQgPgWgSgDQgLgCgKAIQgNAJgCAJQgCAIAGASIAAACIgCACQgSgLgBgWQgBgWARgPQAagXAbAEQAcAFAVAeQAMASAFAOQAGASgDATQgFAUgMAHQgIgJgFgPg");
	this.shape_17.setTransform(264.9,13.2,0.923,0.642);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnBAQACgrgKgeQgIgaAAgnQABAKAHAHQAEAEANAEQAQAHAVgDQATgDAEgBQAMgEADgQQABAFgDARQgFAuASAkIABACQgmAmgugLQgKgCAAANQgCgDAAgIg");
	this.shape_18.setTransform(266.5,32,0.923,0.642);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAdBBQgvgZgUgUIgEgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBABQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAAGIAAAGQgDgCABgGQABgQgMgKQgJgHgEgYQgCgMAIgHQAIgGALAFQANAFAEgBQAIgCAHgJQANgSALASIAIALQAFAEAIAAQAGgBAFAGQAGAHgBAJIAAAUQgDAZAYAJQAAAEAGAIQAJALgJAJIgCADIgBAFIgFAAQgSAAgQgFgAgYgSQAMAWAhAYIAMACQAHAAABgIQABgBgBgBQAAgBAAgBQAAAAgBAAQAAgBgBAAIgFABQgJgCgFgDQgfgUgPggQgEAIAGANg");
	this.shape_19.setTransform(245.6,10.6,0.923,0.642);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AADBZIgKgBQgjgKgigqQgGgHACgKQAOgaAOgMQAIgHACgJQABgHgCgMQAAgNALACQAtALAmgmIADACIAEADQAPASAEAZQACARgDAdQgEAoABARQABAIACACQAGAIgBACQgBACgJAEQgTAHgJgCIgEAAIgMgBQgHAAgEADIgBABQgEgDgIgBg");
	this.shape_20.setTransform(267,40.3,0.923,0.642);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABWBdQgYgEgSAAQhLADgzgQQgdgKgRANQgCADgFgBQgPgDgMAPQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgGAFgEIAIgJQgEgBgKAAQgJAAgFgCIgGgDQgDgDABgFQABgFAIABQAEABAPgGIgKgEQgHgDgDgDQAAgFACgBQAPAIAJAAQAKAAACgDQABgDgCgDIgEgEQgCgCABgFIACgCQADAEAJAEQAJAEADAFQAFAKAOAAIAsgFIAZgCQAPgBAJgFQABAEAEAAIAGABQAZAEAKAEIAGAAQAAAAABAAQAAgBABAAQAAgBAAgBQAAgBAAgBIgDgMQgBgIgEgDQgDgggEgQQgDgLgKAAIgNgfQADgBADAEQAEADADgBQgGgRgMgCQgIgCAAgGQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBABAAIABgGIABAGQAAABAAABQABABAAAAQAAABABAAQAAAAABAAQAEgBAIACQAIADAEAAQAAAFADAFIAGAIQAHAMAQAoQANAfAMASQAHAKAEADQAHAEAJgDQAJgEASAAQgBgJgHgBQgQAAgNgVIgNgRIAAgEQAPgFADAPQADgKgDgFQgEgFgHADQgHADgEAAQgGgSACgJQACgJAMgJQAKgIAMABQATAEAPAWIABgJQAAgEAEgBQAIgBADANQAEALgFAFQgDAEABADIAIAaQAGAOAHAKIAJAYQAFAOABAJQgDAMgIAEQgIAEgKgEIAIgHQAEgDgCgGIgXAJQgOAGgHAHIgrgIgACBAHQgLAEgDAIQgBAEAHAAQAJAAADgLQAAgFgCAAIgCAAg");
	this.shape_21.setTransform(253.4,15.4,0.923,0.642);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgODgIAQgpQAJgXAAgVQAAgKgFgNQgIgWgegzQgNgYgIglQgEgVgJgMQgZgjAYgsQAEgJAAgIQANgKACgRQALgKAKgWQADgCADgHQACgGAEgCQgBAKAFAHQAiAqAiAJIAMACQAHABAEADIgNAXIgNASQgJALgDAIQgZAgASApQAVA0gQA+QgCAHADAHIAGAMQgLgCAAANQACATgCANIAAASQgBALgGAEIgVAQQgKAIgLAAIgBAAg");
	this.shape_22.setTransform(261,55.9,0.923,0.642);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhBCkIgLgGIgLgDQgHgBgFABQgHADgCgEQgCgDAAgHQAAgRgIgQQgGAKgDAOIgDAXQgPgKgSgBQgNABgVAFQgFAAAAgFIABgGQAEgbALgTQAdgyAHhRQACgiADgRQAFgcAJgVIAJgSQAFgKAHgFQADADAHADIAKAEQgPAGgEgBQgIgBgBAFQgBAFADADIAGADQAFACAJAAQAKAAAEABIgIAJQgFAEAAAGQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQAMgPAPADQAFABACgDQARgNAdAKQAyAQBMgDQASAAAYAEIArAIIABACQAEAQgHAfQgDAPgNgCQgYgGgUABIg6ADQgjACgZgRQgEgDgCACIgEAFQgJAUgJAcIgRAwQgFAPgKAIQgPAOABAYIAAAXQgDAGACAHIgBAIQgCAOADANIABABQgFgBgHgEg");
	this.shape_23.setTransform(246.7,28.9,0.923,0.642);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaEVQgIgFgFgKIgKgSQgCgFgCgBQgGgBgGgIIgKgNQgNgJAHgSQAMgiAOgdQAEgKAGgXQAHgWAEgLIARgjQAQgfgGgdQgCgLgHgLIgMgTIgfgoQgSgYgIgTQgCgFgHgEQgMgGgJgOQgEgIgHgTQgCgGACgIIAEgNQAVgFAMAAQATABAPAKIADgYQADgOAFgJQAJAQgBAQQAAAIACADQADAEAHgDQAFgCAHACIALADIAJAGQAIAEAEABQABAEADADIAGAGQAfAjARAXQAiAtAKAiQANAogNAjQgJAXgWAsQgaBAgDAzQgDAfADAnQABANgDADQgDADgMACIgKABQgFABgDAHQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgZABQgPgBgKgGg");
	this.shape_24.setTransform(239.8,54.3,0.923,0.642);

	this.merngue_text = new cjs.Text("מרנגה הוא הריקוד הלאומי של הרפובליקה הדומיניקנית ושל האיטי, אשר התפתח ע\"י העבדים שחיקו את הריקודים שאדוניהם רקדו, אך במקום לעשותם אחידים ומשעממים הוסיפו להם העבדים מוטיביים קצביים ומקפיצים. הריקוד פופולארי בעולם והוא מלא כיף, הנאה ושמחה. שם הריקוד, מקורו בקצף אוורירי ולבן העשוי סוכר וביצים המשול לאופי הריקוד, לקצבו המהיר יחסית והדייקנות שבו. המרנגה המקורי לא נרקד בזוגות אלא במעגל (בשונה מימינו). כל זוג עמד והחזיק ידיים. הרקדנים עמדו בריחוק יחסי אחד מהשני. התנועות המקוריות של ריקוד זה היו ניעור הכתפיים ותנועות מהירות של הרגליים.\n\n", "15px 'Arial'");
	this.merngue_text.name = "merngue_text";
	this.merngue_text.textAlign = "right";
	this.merngue_text.lineHeight = 19;
	this.merngue_text.lineWidth = 444;
	this.merngue_text.parent = this;
	this.merngue_text.setTransform(474,102.9);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(251.2,176.4,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.merngue_text},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.merngue_music}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.merngue_info, new cjs.Rectangle(0,0,502.4,357), null);


(lib.kizumba_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.kizumba_music = new lib.kizumba_music();
	this.kizumba_music.parent = this;
	this.kizumba_music.setTransform(404.1,43.1,0.685,0.685,0,0,0,5.5,14.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0C0C").s().p("AgBAAIACAAIgBABg");
	this.shape.setTransform(237.2,26.3,0.845,0.664);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0C0C").s().p("AgBAAIACAAQAAAAAAAAQABAAgBAAQAAABAAAAQAAAAgBAAg");
	this.shape_1.setTransform(253.1,14.5,0.845,0.664);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKgDQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAEgBIAIADQAFABABAEQgBAFgJAAQgKgBgBgJg");
	this.shape_2.setTransform(243.1,13.7,0.845,0.664);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0C0C").s().p("AADAYQgDAAgBgDIgEgLQgCgGADgFQAEgIgIgMIABgCQAEAAACAFIADAOQADAIADAFQADAEgFAHIgBADIgCABIAAAAg");
	this.shape_3.setTransform(257.8,9.5,0.845,0.664);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C0C0C").s().p("AgDAHIABgNQAGAHABAGg");
	this.shape_4.setTransform(247.2,23.8,0.845,0.664);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C0C0C").s().p("AgHAIQAFgKAEgFQAEAAABADQABABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgHAIgFAAIgCAAg");
	this.shape_5.setTransform(243.3,30.7,0.845,0.664);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C0C0C").s().p("AgHANIAKgaQAGALgBAEQgBAGgHAFIgDABIgEgBg");
	this.shape_6.setTransform(244.4,28.9,0.845,0.664);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C0C0C").s().p("AgBAAIACgBQABABAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgBABIgBgCg");
	this.shape_7.setTransform(238.9,65.7,0.845,0.664);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMgCQgGgJAEgKQAFgKAKgCQAOgCABAQIABA0IgDABg");
	this.shape_8.setTransform(246.2,50.4,0.845,0.664);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C0C0C").s().p("AAAAAIAAAAIAAAAIABAAIgBABg");
	this.shape_9.setTransform(263.6,26.3,0.845,0.664);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C0C0C").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_10.setTransform(262.7,27.1,0.845,0.664);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C0C0C").s().p("AgDgCIAHAAQABABgBAEQgEgBgDgEg");
	this.shape_11.setTransform(245.8,6.6,0.845,0.664);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C0C0C").s().p("AADgEQAAAGgCADQgGgGAIgDg");
	this.shape_12.setTransform(234,28.7,0.845,0.664);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C0C0C").s().p("AABgEQACAEgBAFQgHgDAGgGg");
	this.shape_13.setTransform(227.9,37.6,0.845,0.664);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C0C0C").s().p("AgHgJIAPATIgDAAQgLAAgBgTg");
	this.shape_14.setTransform(229.6,40.2,0.845,0.664);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C0C0C").s().p("AgCgGQABgEABgBQADAAABAFIgBASQgIgIADgKg");
	this.shape_15.setTransform(237,67.9,0.845,0.664);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0C0C0C").s().p("AACgLIADAAQAAABABAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAGIgBAJQgBAEgGABg");
	this.shape_16.setTransform(261.9,26.3,0.845,0.664);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0C0C0C").s().p("AgEgDQADgMAHgDQgEAHgCALIgCATQgEgLACgLg");
	this.shape_17.setTransform(228.2,35.7,0.845,0.664);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0C0C0C").s().p("AgCgCQAFgKAHgCQgEARgPAMQAAgIAHgJg");
	this.shape_18.setTransform(233.1,30.3,0.845,0.664);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0C0C0C").s().p("AAAAAIgLgNQAEgEAEADIAFAFQAIAFACAHQACAJgGAFQgBgIgHgJg");
	this.shape_19.setTransform(247.3,7.8,0.845,0.664);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0C0C0C").s().p("AgPAEQACgGAKAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBAAgBQABgEACgBQAKgEAEAAIgeAfIgBgMg");
	this.shape_20.setTransform(230.3,32.9,0.845,0.664);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKARQgBgGACAAQAJgDAAgHIgBgNIABgRQADAIgBARIgBAOQABAIAHAFQAHAGgQABQgIgGgCgHg");
	this.shape_21.setTransform(240.4,66.8,0.845,0.664);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLAOQgGgCgDgIIgDgMIABgKQAEACACAEIAEAGIAGAFQADABACgBQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBIgBgFIABgIQADADAAABQgBAJAFAGQADAEAKAGQACADAAACQAAADgFAAQgSgBgLgEg");
	this.shape_22.setTransform(256.5,68.2,0.845,0.664);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKAbIgBgGQgFgUABgHQABgOANgJIAHAEQAEADgCAIQgBAFAFAIQAEAJABAFIgDACIgNgDQgFgBABAHIgBAMQgFAAgBgDg");
	this.shape_23.setTransform(237.6,64.8,0.845,0.664);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTALQAAgIgDgEQgEgHAEgJQAFgKABgFQABgDAIACQANABAMgDQAGALABAQQgGgVgYAEIgFABQAIAQAHAaIgGgGQgDgEgDACQgDABAAAFIAAAIIABAGIgFAGg");
	this.shape_24.setTransform(254.2,65.4,0.845,0.664);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAKAgIgGgEIgEgGQgCgFgDgBIgBAKIgGgGQgEgEgEAHIAAgFIAAgJQAAgFACgBQAEgCADAEIAGAGQgIgagHgQIAEgBQAZgEAGAWQAMARgKANIAAAHIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCAAIgDgBg");
	this.shape_25.setTransform(255.1,65.9,0.845,0.664);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AguAQQgIgFgCgFIAQgOQALgEATgEIAcgEIACABQABAHgGALQgBAIACABQAEADAGgFIAfgYQAAAPgFANQgDAIgJgCQgNgBgXADQgZAEgKAAQgGgBgJgFg");
	this.shape_26.setTransform(251.4,15.9,0.845,0.664);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAEAfQgFgKgIgEQAEANgDAKQgEgDgCgJQgDgHgEgDQgCADAAAHQAAAGgCADQABgIgCgLIgFgSQgFgQAIgeIADAOQACAIAEAAQATABAHgQQACAHgBADQgBADgEAEQgHAFAAAEQAAADAIAEIAVAIQAIAFABAFQgEACgIgFQgHgEgEACIgDAAIAAACIASAeIgIgBQgFAAABAJIgKgQg");
	this.shape_27.setTransform(236.4,25.7,0.845,0.664);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AANApQgBgBABgFQACgKgLAAQgIgCgDgDQgCgEACgJQADgOgHgGQgEgEgGABIgJAEIgPAGQgFgEAGgJQAMgOAcgFQAbgFARAIIAEAFIgBAaQAAADADAHQADAIgBAFQgDABgCgDIgDgEIgEgDQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABABIACADIgBACQgJgCgBAKQgCAKgCACQgCABgDAAIgBAAg");
	this.shape_28.setTransform(254.3,6.7,0.845,0.664);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag9AcQACgKgEgJQgIgSARgKQAJgFAJgNQAMgRAWAEIATABQANAAAHADQADAFAFABQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAMAPQAHAIABAIQgBAbgSAMQgGAAADgFIACgHIAAgIQABgMgHgHQgGgFgMgEQgUgFgQARQgFAFgDAFIgEAHQgCACgGgEQgHgEgEAMQgBAFAEAOQADAOgOAAQgLgHACgQg");
	this.shape_29.setTransform(242.3,9.5,0.845,0.664);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgtA2IgmgOIAbgIQAOgDAKgGQAKgFAEgKQAQgeAEgmIABgHQABgEAFABQALAHAVABQAQABANAOQAMANABASQACAUgNAYQgFgCgKgGQgKgGgHgCQgYgDgJAGQgGAGgGAYIgEAbQgNgKgXgIg");
	this.shape_30.setTransform(259.8,18.2,0.845,0.664);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABaCkQgkgKgngoIgYgYQgKgKgMABIgbADQgHABgDAHQgIAQgTADQgRAEgNgKQgOgMgDgUQgCgUAMgOIAKgMQgXAKgMAaIgRAwQgRgsAOgfIACgFQAAAAAAgBQAAAAgBAAQgBgBAAAAQgBAAgCAAIAFgGQAOgGAHgQIAMgbQAEgHgIgGQAOAAgEgPQgDgOABgEQADgNAHAFQAGAEADgDIAEgHQADgGAEgEQASgRATAFQANADAFAGQAHAHgBAMIAAAIIgCAIQgCAFAFAAIADAHQABAEgEADIgUAZQgMAOgPABQgHABgBAQQgBAIAOAAIAUAAQAHAAABgDQADgGAFgBIAJAAQACAFAJAGQAIAFAGAAQALAAAZgEQAWgDAOABQAJACACgIQAFgOABgNIggAXQgGAFgDgCQgCgCABgJQAFgKgBgHQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBgBIgCABIgeAFQgRADgLAFQABgDgCgCIgEgFQALABAQgDIAYgEQAHgBACgEQAAgGgHgCQgGgBAAgHIgBgEQgJgCgDgKIgEgRQgDgEAEgKQAEgQgFgMQgDgFACgHIADgNIAPgHIAKgDQAGgBADAEQAHAGgDAPQgBAJACAEQACADAKABQALABgDAKQgBAFABABQADABAEgDQACgCABgJQABgKAJACQAIAMgEAIQgDAGADAGIAEALQABADADAAQABABAAAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgDQAFgHgEgEQgDgFgCgJIgEgOQgCgFgEAAIgDgEQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIAEADIADAEQACACADAAQAAgFgDgIQgDgIAAgDIABgaQAPgEAEAVQAJAkABANQAEAcgGAWQgCAJAGAIQgFAAgCAEIgBAGQgEAmgQAfQgFAJgKAGQgJAFgOAEIgbAHIAmAPQAWAIANAJIAEgaQAHgYAHgGQAJgHAYAEQAHACAJAFQALAHAEACQgBAJgGANIgJAXQgDALgPALQgJAHgBAFQgEAAgFAEIgHAHQgJAIgNAAIgMgCgAhcgiQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAABQABAJAKABQAKAAAAgFQAAgEgFgCIgJgCIgEAAg");
	this.shape_31.setTransform(250.3,15.6,0.845,0.664);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AiYDCQgKgQgLgFQgIgFgDgLIgQgUIgKgYQABgGgDgDIAAgFIADgUQACgLAEgIIAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIABgEIAngoQAQgMAEgRIABgFQACgCAAgHIAAgDQACgDAAgGQABgHABgDQAFACACAIQADAJAEACQACgJgEgNQAIAEAGAJIALARQgCgJAFAAIAIABIgRgeIACgCQAEgCAIAEQAHAEAFgBQgCgGgHgEIgVgJQgJgEAAgDQgBgEAIgFQAFgEABgDQAAgDgCgHQgHAQgTgBQgEgBgCgHIgDgOIgCgkQgCgWAQgTQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAIgCAFQgOAfARAsIASgwQAMgaAWgKIgKAMQgLAOACAUQACAUAPAMQAMAKASgEQASgDAJgQQADgHAHgBIAagDQALgBALAKIAYAYQAnAoAlAKQAUAFANgLIAIgHQAEgEAFAAIAAACIgJAYQgQAlAaAcQAMAMAAAXQAAAGADAKIAFAPIghgFQgSgCgPACIg4ALQggAGgVgVQgDgDgRgJIANg5QADgJgDgHQgDgKACgNQADgNgGgRIgIgbQAAgGgHgIIgCAOQgFANgFADQgIAIgDALQgCAHgBAPIgLAbIgDAFQgFAEgFALIgJANQgRAWACAjQABAGAEADIAgAdQABAFgEAAQgSAEgUAPIgiAaIgjAXQgFADgFAAQgDAAgEgCg");
	this.shape_32.setTransform(245.9,30.4,0.845,0.664);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ADBENIgJgIQgKgVgbgJQgcgKgBgnQgBgaACgoIAChCQABgngFgSIgCgGQACgRgKgSQgHgLgPgRQgXgagjgtIgPgUQgMgQgRAOQgIAGgJANIgQAVQgCADABACIACAFQAWAkgBAfQAAAcAHAjIAPA+IAIArIAHAsQgLADgOgBQgIgCAAADQgBAFgGAKQgDAJAEAHQACAFAAAIIhCAVQgFABgJAIQgIAHgGACQgJACgRgBQgEAAgBgDQgBgDADgCQAQgLACgTQAAgEgDgeQgEgggPgoIgDgEQgLAQgDAcIAAAsIAAARIAAAOQAAAHgIADQgCAAABAGQACAHAHAGIgMAAQgHAAgFgEQgCgBgEABIgGABIAAgSQAHADAAgJIAAgJQAAgFgHgCQgBgHAHABIAMADQABAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgFgFgKQgEgJABgEQABgIgDgDIgJgFQAFgPAAgUIgDgjQgDgeABgSQABgbAKgUQABgDAAgFIgCgtQAAgEgEgEQgWgXgOgJQgUgNgCgUQAIAEAJgFIAjgXIAigaQAUgPASgEQAEgBgBgEIAsg8QARAKADADQAVAUAggGIA3gKQAPgDASACIAhAGQAWAiAFAPQACAGAHAKQANAbANAsIALAnIAKAmQAEASAKAZIARAqQAVA4AGAYIAIAgQAEATgBAOQgCATgTAPIgPAMQgIAHABALQAAAGgJAEQgFACgDAAQgEAAgCgCgAhmg/QgLACgEAKQgFAKAHAJIAbAkIACgBIAAg0QgBgPgMAAIgDABg");
	this.shape_33.setTransform(254.9,52.4,0.845,0.664);

	this.kizumba_text = new cjs.Text("קיזומבה, או כפי שמכונה בעולם \"טנגו אפריקאי\" הינו סגנון מוזיקלי שהתפתח בסוף שנות ה- 70. מקור הריקוד הוא באנגולה. מוזיקת הקיזומבה היא מוזיקה מודרנית המשלבת מקצב אפריקאי ומתאפיינת במקצב איטי ורומנטי. \nריקוד הקיזומבה הוא ריקוד זוגי בו הגבר נדרש למיומנות הובלה גבוהות על מנת לשמור על קצב נכון ועל איזון המשקל עם הבחורה. ריקוד הקיזומבה הוא איטי והוא מורכב מצעדים מדויקים ו\"רובוטיים\", תוך כדי דריכה חזקה של כף הרגל על הרצפה. הריקוד הוא רומנטי ובעל אופי חושני במהותו ומעביר רגש בין הרוקדים.\nמרבית שירי הקיזומבה הם בשפה הפורטוגזית אך עקב העלייה בפופולריות של הקיזומבה, ניתן למצוא שירי קיזומבה במגוון שפות.\n", "20px 'Times New Roman'");
	this.kizumba_text.name = "kizumba_text";
	this.kizumba_text.textAlign = "right";
	this.kizumba_text.lineHeight = 24;
	this.kizumba_text.lineWidth = 446;
	this.kizumba_text.parent = this;
	this.kizumba_text.setTransform(477,97.9);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(251.2,176.4,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.kizumba_text},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.kizumba_music}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kizumba_info, new cjs.Rectangle(0,0,502.4,460.1), null);


(lib.havana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,35.4,16.6);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.1,1,1,0,0,0,34.6,15.7);

	this.havana_h = new cjs.Text("הוואנה", "10px 'Arial'");
	this.havana_h.name = "havana_h";
	this.havana_h.textAlign = "center";
	this.havana_h.lineHeight = 13;
	this.havana_h.lineWidth = 65;
	this.havana_h.parent = this;
	this.havana_h.setTransform(-0.2,-30.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("Ak9ikIJ7AAQBFAAAABFIAAC/QAABFhFAAIp7AAQhFAAAAhFIAAi/QAAhFBFAAg");
	this.shape.setTransform(1.5,2.3,0.909,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Ak9ClQhEAAAAhFIAAi/QAAhFBEAAIJ7AAQBFAAAABFIAAC/QAABFhFAAg");
	this.shape_1.setTransform(1.5,2.3,0.909,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.havana_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-16.5,70.9,33.2);


(lib.complex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// flash0.ai
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(0.7,0.7,1,1,0,0,0,35.4,16.6);

	this.instance_1 = new lib.ClipGroup_1_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0.5,1,1,0,0,0,34.5,15.7);

	this.complex_h = new cjs.Text("הקומפלקס", "10px 'Arial'");
	this.complex_h.name = "complex_h";
	this.complex_h.textAlign = "center";
	this.complex_h.lineHeight = 13;
	this.complex_h.lineWidth = 65;
	this.complex_h.parent = this;
	this.complex_h.setTransform(0.4,-31.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("Ak9ikIJ7AAQBFAAAABFIAAC/QAABFhFAAIp7AAQhFAAAAhFIAAi/QAAhFBFAAg");
	this.shape.setTransform(2.3,3.3,0.909,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Ak9ClQhEAAAAhFIAAi/QAAhFBEAAIJ7AAQBFAAAABFIAAC/QAABFhFAAg");
	this.shape_1.setTransform(2.3,3.3,0.909,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.complex_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-15.9,70.8,33.2);


(lib.cha_cha_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.cha_cha_music = new lib.cha_cha_music();
	this.cha_cha_music.parent = this;
	this.cha_cha_music.setTransform(403.4,48.2,0.603,0.603,0,0,0,0,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AgFgDIAIgGIADATg");
	this.shape.setTransform(261.9,76.4,0.435,0.339);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A0A0A").s().p("AgBAFQgIgFgBgMQATgEACAeIgMgJg");
	this.shape_1.setTransform(223.3,34.7,0.435,0.339);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0A0A0A").s().p("AgBAJQgGgCgCgPIATAAIAAAPIgKACIgBAAg");
	this.shape_2.setTransform(221.7,33.9,0.435,0.339);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#070707").s().p("AgLgPQALgBAFAGQAIAHAAATIAAAAIgTABQgJgJAEgXg");
	this.shape_3.setTransform(221.5,33.1,0.435,0.339);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A0A0A").s().p("AgBAjQgFgFgMAAIAGgyQAGgcANgNQgBAIAKA1QAIAmgSAYQAAgUgHgHg");
	this.shape_4.setTransform(221.8,31.5,0.435,0.339);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABNGPQgOgEgJgQQgIgRADgUQAEgVgHgUQgDgMgMgVIgNgdQgIgSgIgIIgXAsQgNAagFAYQgBAIgHAQQgGAPgCAKQgBAKgGgBQgEgCgFgIQgDgGAAgJIABgRIgBgGIgEACQgJgHACgIQACgFAHgEQANgHAFgQQADgIAEgYQADgXAOgXIAagoQANgWAGgQQAIgXgBgYQgCgbAFgMQAFgMAQgFQA4gUgmg+QgIgNgJgCQgIgCgKALQgRATghAXQgmAYgPANQgIAHgNgHQgPgJgHgCQgHgDgPgKQgNgKgJgBQgCgJAGgFIAIgIIAYgBQAJAAADACQAFAEABAMQABAOAKADQAJAEAMgJIArghQAXgUANgVQAIgNATgQQAUgRAIgLIAKgQQACgIgMgJQgIgFACgNQABgNAIgIQAPgPAHgWQAHgTABgeQACgeAMg1IADgBIACgBQACAKADABQABAAADgFIAEgHQACgCACAFQgBAHADARQABAPgNAHQgDABAAAIQAAAIADADQAGAHAAALIAAAUIACAcQADAOAMAHQAHADgCAVQgBAVgJANQgJAPAAAJQABALAOAHIAEAEIAEAEQAOALAEAJQAGANgHAVQgEAMgEAVIgIAjQgEAQgMAfQgNAggEAQQgDAMgCAXQgDAYgDAMQgKAngPAbQgLATAAAZQAAAHAFAlIAFAWIAFAXIACANIAEAKIAGAJQADAFgCAGQgDAGgFAAIgKgCg");
	this.shape_5.setTransform(269.5,44.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#070707").s().p("AFAOVQghgWgwgKQg3gKgcgHQgOgEgFgSQgDgMABgaQAHh7gshtQgxh5gaisQgGgmgRgvQgVgzgJgbQgKgcgLABQgNAAgIAkQgdCKgxC1QgRA/gnBrQgqBygQA2QgEAPgIAFQgHAEgIgFQgggUgdANQgZAMgcApQgOATgTAEQgTAEgVgMQAEgkAUghQAdgwADgHQAUgxAZhQIAqiEIAghvQAShDAVgkQACgFABgKQABhLAZhyQAeiJAFgvQAKhagCguQgEhJgegyQgDgfgTAEIgIAEQgFAAgDgGIAAgRQARgYgHgmQgKg2ABgIQAThKAxgjQAjgZARgkQAfg/A9AcQAtAUAJgMQAKgLAIhPQAHg8A0gSQAzgTAfAuQAeAtACAfQACAggYA5IgNAvQgHAdgPAMQgJAHAIANQACAFAOAQQBnB4AtAsQBVBTBNAiQAOAHADALQACAKgJAUQgCAEgSAUQgNAOAEAZQgIAUgNABQgHAAgSgIQg1gZhBg3IhxhlQgRgPgIADQgJAEgJAcIgRA5QgLAfgMAOQgZAdAEAdQACAQATAlQA0BoASCeQANBtAiCvQAoDPALBKQAHAsAWAwQAXAvAcAeIAOAOQAIALgDAPQgCAUgLADIgEAAQgHAAgGgFgAg3qJQgVAigKAoQgkCWAjCFQADANACAeQAFAXAPgBQAfgCAQgzQAIgdAVg+QAUg6AKgiQAVhJAAg5QAAgPgRgGQgVgHgFgIQgQgUgGgMQgLgUgBgaQgjAugIAMg");
	this.shape_6.setTransform(233.6,48.1,0.435,0.339);

	this.cha_cha_text = new cjs.Text("צ'ה צ'ה צ'ה הוא ריקוד קובני במוצאו, שהתפתח מהממבו והרומבה. בתחילה נקרא \"טריפל ממבו\", כלומר ממבו שהוסיפו לו שלושה צעדים. שלושת הצעדים כונו: \"צ'ה צ'ה צ'ה\", הריקוד מביע שמחה, שובבות ואלמנטים של חיזור הדדי. המוזיקה עשירה במקצבה וכלי ההקשה המרובים בולטים מאד. תנועות האגן הבולטות הן תוצאה ישירה של עבודת הרגליים. כאשר רוקדים צ'ה צ'ה, הרגליים נשארות קרובות ככל האפשר לקרקע כך שנראה שהן מחליקות עליה.\nריקוד הצ'ה צ'ה צ'ה הממוצע כיום נרקד עם 120 ביטים בדקה כאשר על כל ביט מבוצע צעד. בנוסף לכך קיימת תנועת אגן חזקה במרווחים שבין הביטים (צעד 2) בפרט ובכל הריקוד בכלל. \n", "15px 'Arial'");
	this.cha_cha_text.name = "cha_cha_text";
	this.cha_cha_text.textAlign = "right";
	this.cha_cha_text.lineHeight = 19;
	this.cha_cha_text.lineWidth = 444;
	this.cha_cha_text.parent = this;
	this.cha_cha_text.setTransform(474,103.9);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(251.2,176.4,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.cha_cha_text},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.cha_cha_music}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cha_cha_info, new cjs.Rectangle(0,-3,502.4,361), null);


(lib.bolero_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.bolero_music = new lib.bolero_music();
	this.bolero_music.parent = this;
	this.bolero_music.setTransform(405.1,43.3,0.698,0.698,0,0,0,5.5,14.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("AxHSiQAogcAYg4QAOgiANg9QAmiqCJkaQBOiiAZg6QA3h9AdhmQAThCAkgsQAagiABgdQABgmgrgYQgtgYAegnICUi/QBVhvBBhOQAeglANglQAMgngDgvIhUAnQg3AZg8gNQg9gOgNgrQgRg6AdglQAWgbA+gfQANgGCLgxQBdggAugtQAigiAkgEQAegEAoATQA6AcBOgJQAugFBbgRQApgGAHgjQAUhvB3guIB2AAQCWA6AZCnIhMAiQgmBFg3AxQg6AyhDASQhFASABAXQAAAKAoA0QAcAlALAjQANArgKAwQgMA5AyARIAuALQAdAGANAJQARAMAIAAQANABAEgWQARhaBCgVQAlgMBoAHIA8AIQAkAEAZgEQBdAhAMBYQAMBehEB3QgUAiAeAbQAeAaAegTQAKAzgQAzQgLAlggA0QgsBJgZAmQgkA4gkAWQgzAfg/gWQg8gWgNgwQgJgfALhGQAFgkAAg4QAAhNABgRQAGhwhtAgIhoAcQg7AOgwgBQhmgCgcAqQgcAqAoBZQBWDEAcBlQAvCpgYCVQgFAcgFA2QgGAxgPAjQgnBZAXCGQAGAhAjAOQAuATAIAIIARASQAHALgDALQgFAOgPAGQgJAFgUADQgmAHhAgSQhGgVgcABQhAACgVgdQgRgWgBg/QgIjxAki0QAKgfACgOQAEgcgUgKQgwgYgXg7QgThFgRggQggg9gXgaQglgrgygCQgegBgnAoQgiAkgdA6QgdA6gKAzQgKA3ASAaQBaCCBBDJQARA5ANAWQAXAoAqARQAeANABBWQABBVgdAUQgXAQgPgEQgSgGAAghQAAglgQgCQgLgBgcARQhDAsgjACQgiABhSglQAGgNAogKQAkgKADgkQi6AyjEhmQgigTgQADQgVAEgNApQgNApgbARQgWAOgwAFQgIABgGAJQgrBDhPATQgkAJhxAEg");
	this.shape.setTransform(251.5,40.5,0.237,0.237);

	this.bolero_text = new cjs.Text("בולרו הוא ריקוד וסגנון מוזיקלי עממי שמקורו בספרד.\nנרקד בזוגות בליווי קסטנייטות. הקצב איטי, ומשקלו שלושה רבעים.\nהבולרו המפורסם ביותר נכתב על ידי צ'ייקובסקי, כחלק מ\"אגם הברבורים\"\nריקוד הבולרו במהותו מזכיר את ריקוד הוואלס.\nהבולרו מתאפיין בחיזור של הגבר לאשה וכולל בתוכו תנועות איטיות, חושניות ומדוייקות המייצרות דרמה בריקוד. \n", "15px 'Arial'");
	this.bolero_text.name = "bolero_text";
	this.bolero_text.textAlign = "right";
	this.bolero_text.lineHeight = 19;
	this.bolero_text.lineWidth = 444;
	this.bolero_text.parent = this;
	this.bolero_text.setTransform(474,96.9);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(251.2,176.4,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.bolero_text},{t:this.shape},{t:this.bolero_music}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bolero_info, new cjs.Rectangle(0,-0.6,502.4,353.5), null);


(lib.Bnation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// flash0.ai
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(0.7,0.7,1,1,0,0,0,35.4,16.6);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0.6,1,1,0,0,0,34.5,15.7);

	this.Bnation_h = new cjs.Text("בצ'אטה ניישן", "10px 'Arial'");
	this.Bnation_h.name = "Bnation_h";
	this.Bnation_h.textAlign = "center";
	this.Bnation_h.lineHeight = 13;
	this.Bnation_h.lineWidth = 65;
	this.Bnation_h.parent = this;
	this.Bnation_h.setTransform(0.6,-31.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("Ak9ikIJ7AAQBFAAAABFIAAC/QAABFhFAAIp7AAQhFAAAAhFIAAi/QAAhFBFAAg");
	this.shape.setTransform(2.6,3.8,0.909,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Ak9ClQhEAAAAhFIAAi/QAAhFBEAAIJ7AAQBFAAAABFIAAC/QAABFhFAAg");
	this.shape_1.setTransform(2.6,3.8,0.909,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.Bnation_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-15.9,70.8,33.2);


(lib.baila = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// flash0.ai
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(0.6,0.7,1,1,0,0,0,33.4,16.6);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0.5,1,1,0,0,0,32.5,15.7);

	this.baila_h = new cjs.Text("ביילה סלסה", "10px 'Arial'");
	this.baila_h.name = "baila_h";
	this.baila_h.textAlign = "center";
	this.baila_h.lineHeight = 13;
	this.baila_h.lineWidth = 65;
	this.baila_h.parent = this;
	this.baila_h.setTransform(1.4,-31.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("AkgikIJBAAQA+AAAABFIAAC/QAABFg+AAIpBAAQg+AAAAhFIAAi/QAAhFA+AAg");
	this.shape.setTransform(2.8,3.1,0.938,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AkgClQg+AAAAhFIAAi/QAAhFA+AAIJBAAQA+AAAABFIAAC/QAABFg+AAg");
	this.shape_1.setTransform(2.8,3.1,0.938,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.baila_h}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.7,-15.9,66.8,33.2);


(lib.bachata_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bachata_music = new lib.bachata_music();
	this.bachata_music.parent = this;
	this.bachata_music.setTransform(404.1,44.1,0.666,0.666,0,0,0,5.5,14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#141313").s().p("AgSANQABgOAAgHIAEgZQAEAAADADIAEAGIATATQAEADgEACQgNALgSAXQgFgJABgMg");
	this.shape.setTransform(242.4,55.4,0.855,0.672);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#141313").s().p("AgKApIgLgHQgCgGgNgUQgGgJACgHQACgHAKgHQARgMAJgBQADgBAEgEIAGgHIAAgBIAAAAIAAABIABAAIABgBQAFAFgCAEIgFAHIgGAFQgEADABACQACAFANACQANACAIAEQAEACAAACQgBAEgFgBIgcgEQgHgCgBADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAFABIAZAFQAIADgBADQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgFgBIgXgDQgHgCgBACQgBADAHAFIAUAKQAEABgCAFQgBABgFgBQgRgEgKgHQgFgDgCACQgCACADAEIAMAPQABACgBADQgEgBgGgGg");
	this.shape_1.setTransform(238.8,24.7,0.855,0.672);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020202").s().p("AiBHxQgKgHACgKQAFgOACgDQAKgNgLgPQgJgOAAgLQAAgUATAAQAJAAAGgFQAEgDAEgJQAFgLAEgRIAGgcQAFgVAEgUQACgJgBgGQgHgxAIgfQAHgYAWgOQAAAHgBAPQgBAMAFAJQATgXANgLQAEgDgEgDIgUgTIgEgGQgDgDgEAAQAAgEgDgDIgHgGQgrgsgOgQQgFgGgIADIgdALQABgQgEgmIgDgUQgBgMABgJQAKgwAyggIAegQQAJgFABgEQACgEgEgIQgPgbgLghQgGgRgBgIQgDgOACgMIALAHQAGAFAEACQACgDgCgCIgMgPQgDgEACgCQACgCAFADQALAHARAEQAFABABgCQACgEgEgCIgUgKQgIgEABgDQABgCAIACIAXADIAFABQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBQABgEgIgCIgZgGIgFgBQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgDAHACIAcAEQAFABABgEQAAgCgEgCQgIgEgNgCQgNgCgCgFQgBgDAEgDIAGgEIAFgHQACgFgFgEQAAAAABgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQgDAAgEACQgFADgCAAIgFACIgGgBIALgGQAGgEgCgHQgKAJgRgEQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIADABQAKABAFgFQAFgGgDgIQgCgIgGgMIgKgTQgRgnAVgfQAMgQAXgBQAYgBAMASQADAEAEAAQAQAAAaAPQAAAQADAKQACAFgBAGQgBAGACAHIAGAMQACAQgNAWIgHAJQgGAJgFACQgEABgMgEQgHgDgBABQgCABABAIQAAAZAeASQAmAXgIAtQgFAZgFAMQgJAWATAZIAvA/IAWAcQAOAQAPAHQAGADgCAKQgCAGgFAGIgLAKQgCABgEgCIgSgUQgJgLgDgMQgBgFgDgDQgKgKgagXQgYgVgMgOIgSBMQgDANALAbIAsB3QAJAYACAMQADAagTAPQgRAOgPAWQgJANgPAcQgEADgDAJIghBgQgCAGABAKIABAPQAAALAEAUQACATASAIQAJAEgBAEQgBACgJACQgRADgRgHQgFgCAAgFQgCgPgGgKQgEgGgDgBQgHgFgDABQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIAAAGIgFAhQgBAKAIAFIAIAEQAEACgBAEQgCAHgPAAIgFAAQgXAAgKgIgAhTndQgKAUAIAeQAAgeAEgMQAIgWAbgJQgaADgLAUg");
	this.shape_2.setTransform(244.7,45.2,0.855,0.672);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#141313").s().p("AglH9IgFgCIgJgFQgFgDABgFQABgDAFgBIAIgBQAQgDAMgMQgNgGgRACIgyAEIgQgBQgIgBAAgFQAAgFAHgBQAegEAigbQAMgJACgJQABgJgHgOIgmAYQgCgSgIgRQgDgGgHACQgMADgDgBQgCgBgGgLIglhSQAQgcAIgNQAPgWASgOQASgPgDgaQgBgMgJgYIgth4QgKgaACgNIAShMQAMAOAYAVQAbAXAJAKQAEADABAFQADAMAJALIASATQADADADgCIAKgKQAGgFAAgGQACgKgEgDQgQgHgNgQIgWgcIgwg/QgSgZAIgWQAFgMAFgZQAIgtglgXQgfgSgBgZQAAgIABgBQACgBAIADQALAEAFgBQAEgCAHgJIAGgJIAHgBQAMgCAIgKQABgCgDgEIgGgHIgIgMIgFgMQgDgHABgGQACgGgCgFQgEgKAAgQQABgHAHgaQACgIANgHQASgJAYADQAXADAPAMQANALgDAUIgDAeQAAAMgJAIQgEADABAGQABAGAFACIAyAXIgIACQgFABAAAEQgBAEAEADIAHAEQAIAHAIADQAbANAQAiIAVAwQAMAeAKARQANAZAJAOQAIANgDAQQgEATgLAXQgFALgRAdIgVAiQgDAGgFgEIgfgXQgIAVgWAkQgCAFAAAHIABANIABAGQgBADgEABQgKACgHgEQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAQAAgBABAAIAEAAQABAAAAAAQAAAAABAAQAAgBAAAAQABgBAAgBQAAgGgFgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgDADIgGAFQgEABgEgCQgDgCgCAHIg1CNQgCAGADAHQAEAKAJALIAPAUQAfArAXBAQAZBEAdAhQAHAJgEAHQgGALgLgBQgYgDgQATQgPASgaAAQgJAAgJgCgAAFG6QAFgOgIgQIgCAAgAAsi7QgIAOgDALQgNAogIBNIAAAFIgBAEQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQAHACADgFIAHgKQAQgkAYgrQAKgQgIgQIgPgeQgEgGgDAAQgCABgEAFg");
	this.shape_3.setTransform(257.9,44.3,0.855,0.672);

	this.bachata_text = new cjs.Text("הבצ'אטה היא סגנון מוסיקלי וגם סגנון ריקוד. הבצ'אטה הגיעה מהאזורים הכפריים של הרפובליקה הדומיניקנית. שירי הבצ'אטה הם לרוב רומנטיים ואיטיים, והמילים מדברות על אהבה, פרידה, ושברון לב. ריקוד הבצ'אטה הוא ריקוד פשוט, רומנטי וצמוד והוא פופולארי מאוד בישראל ובעולם. בריקוד הבצ'אטה משתמשים הגבר והאישה בהדגשת תנועת האגן וכמו כן בתנועות גוף חושניות. בצ'אטה היא מוסיקה שמתבססת על גיטרה,לרוב 2, בליווי תוף בונגו וגווירו (דלעת מיובשת עם זרעים בתוכה) או מאראקס (רעשנים עשויים מקוקוס עם אורז בתוכם), ומנוגנת במשקל 4/4 (4 רבעים). הבצ'אטה מושפעת בצורה חזקה מהמרנגה והבולרו. \nכיום קיימים גם שירים רגילים שעוברים עיבוד לקצב הבצ'אטה בשל פופולאריות הסגנון.\n", "15px 'Arial'");
	this.bachata_text.name = "bachata_text";
	this.bachata_text.textAlign = "right";
	this.bachata_text.lineHeight = 19;
	this.bachata_text.lineWidth = 444;
	this.bachata_text.parent = this;
	this.bachata_text.setTransform(474,101.9);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(251.2,176.4,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.bachata_text},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.bachata_music}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bachata_info, new cjs.Rectangle(0,0,502.4,356), null);


(lib.atr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.atr_txt = new cjs.Text("תמונת רקע\n<a href='https://www.freepik.com/free-vector/brick-wall-realistic_1537617.htm'>Designed by Macrovector</a> \nתמונת צ'ה צ'ה\n<a href=http://siteassets.pagecloud.com/lanuevasalsadehoy/images/dancerpurple-ID-cf11b7fc-72e5-4cdd-aa39-101e19e38fee.gif?nocache=f7c3b7e3-a726-4f10-a439-df3dd5529f4b>Pagecloud.com</a>\nתמונת קיזומבה\n<a href=\"https://www.kissclipart.com/bailarines-de-salsa-clipart-salsa-clip-art-9a5ru5/\" target=\"_blank\">bailarines de salsa clipart Salsa Clip art @kissclipart</a> \nתמונת סמבה\n<a href=\"https://www.kisspng.com/png-ballroom-dance-latin-dance-salsa-dance-710212/\" target=\"_blank\">Ballroom dance Latin dance Salsa - dance @kisspng</a> \nקרדיט למידע על סגנונות סלסה, בצ'אטה, רומבה, צ'ה צ'ה צ'ה, מרנגה לאתר \nhttps://www.salsa4fun.co.il\nקרדיט למידע על סגנון הטנגו לאתר\nhttp://hanirkod.com/\nתמונת X \nIcon made by https://www.flaticon.com/authors/maxim-basinski from www.flaticon.com", "13px 'Arial'");
	this.atr_txt.name = "atr_txt";
	this.atr_txt.textAlign = "right";
	this.atr_txt.lineHeight = 20;
	this.atr_txt.lineWidth = 456;
	this.atr_txt.parent = this;
	this.atr_txt.setTransform(230,-164.5);

	this.text_bg = new lib.text_bg();
	this.text_bg.parent = this;
	this.text_bg.setTransform(0.5,0.6,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_bg},{t:this.atr_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.atr, new cjs.Rectangle(-250.7,-175.8,502.4,407.3), null);


// stage content:
(lib.Latinfo_DollyGotie_HaimRaziev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		WebFontConfig = {
			google: {
				families: ['Amatic SC'] //כאן בחרו את הפונט <-------------------
			}
		};
		
		//בפונקציה הזו אין לבצע שינויים, מייבאת את הפונט הרצוי
		(function () {
			var wf = document.createElement('script');
			wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';	
			wf.type = 'text/javascript';
			wf.async = true;
			var s = document.getElementsByTagName('script')[0];
		
			s.parentNode.insertBefore(wf, s);
		})();
		
		// קוד הפרוייקט -----------------------------------
		var self=this;
		self.stop();
		//פונטים --------------------------------
		self.h1.font = "41px Amatic SC";
		self.h2.font = "30px Amatic SC";
		self.mc_salsa.salsa_h.font = "25px Amatic SC";
		self.mc_samba.samba_h.font = "25px Amatic SC";
		self.mc_cha_cha.cha_cha_h.font = "25px Amatic SC";
		self.mc_tango.tango_h.font = "25px Amatic SC";
		self.mc_bolero.bolero_h.font = "25px Amatic SC";
		self.mc_bachata.bachata_h.font = "25px Amatic SC";
		self.mc_zuk.zuk_h.font = "25px Amatic SC";
		self.mc_roomba.roomba_h.font = "25px Amatic SC";
		self.mc_merngue.merngue_h.font = "25px Amatic SC";
		self.mc_kizumba.kizumba_h.font = "25px Amatic SC";
		self.salsa_info.salsa_text.font = "15px Amatic SC";
		self.samba_info.samba_text.font = "15px Amatic SC";
		self.cha_cha_info.cha_cha_text.font = "15px Amatic SC";
		self.tango_info.tango_text.font = "15px Amatic SC";
		self.bolero_info.bolero_text.font = "15px Amatic SC";
		self.bachata_info.bachata_text.font = "15px Amatic SC";
		self.zuk_info.zuk_text.font = "15px Amatic SC";
		self.roomba_info.roomba_text.font = "15px Amatic SC";
		self.merngue_info.merngue_text.font = "15px Amatic SC";
		self.kizumba_info.kizumba_text.font = "15px Amatic SC";
		self.dance_h.font = "20px Amatic SC";
		self.clubs.clubs_text.font = "23px Amatic SC";
		self.clubs_info.font = "12px Amatic SC";
		self.salsa_info.salsa_music.sal_music_txt.font = "20px Amatic SC";
		self.samba_info.samba_music.sam_music_txt.font = "20px Amatic SC";
		self.cha_cha_info.cha_cha_music.cha_music_txt.font = "20px Amatic SC";
		self.tango_info.tango_music.tan_music_txt.font = "20px Amatic SC";
		self.bolero_info.bolero_music.bol_music_txt.font = "20px Amatic SC";
		self.bachata_info.bachata_music.bac_music_txt.font = "20px Amatic SC";
		self.zuk_info.zuk_music.zuk_music_txt.font = "20px Amatic SC";
		self.roomba_info.roomba_music.roo_music_txt.font = "20px Amatic SC";
		self.merngue_info.merngue_music.mer_music_txt.font = "20px Amatic SC";
		self.kizumba_info.kizumba_music.kiz_music_txt.font = "20px Amatic SC";
		self.atr.atr_txt.font = "12px Amatic SC";
		self.havana.havana_h.font = "10px Amatic SC";
		self.complex.complex_h.font = "10px Amatic SC";
		self.studioB.studioB_h.font = "10px Amatic SC";
		self.baila.baila_h.font = "10px Amatic SC";
		self.rotev.rotev_h.font = "10px Amatic SC";
		self.Bnation.Bnation_h.font = "10px Amatic SC";
		
		
		//טעינת סאונדים------------------
		
		createjs.Sound.registerSound("https://raw.githubusercontent.com/haimraziev/Latinfo/master/Latinfo_DollyGotie_HaimRaziev/sounds/bachata.mp3","ba");
		createjs.Sound.registerSound("https://raw.githubusercontent.com/haimraziev/Latinfo/master/Latinfo_DollyGotie_HaimRaziev/sounds/bolero.mp3","bo");
		createjs.Sound.registerSound("https://raw.githubusercontent.com/haimraziev/Latinfo/master/Latinfo_DollyGotie_HaimRaziev/sounds/cha_cha.mp3","cha");
		createjs.Sound.registerSound("https://raw.githubusercontent.com/haimraziev/Latinfo/master/Latinfo_DollyGotie_HaimRaziev/sounds/kizomba.mp3","kiz");
		createjs.Sound.registerSound("https://raw.githubusercontent.com/haimraziev/Latinfo/master/Latinfo_DollyGotie_HaimRaziev/sounds/merengue.mp3","me");
		createjs.Sound.registerSound("https://raw.githubusercontent.com/haimraziev/Latinfo/master/Latinfo_DollyGotie_HaimRaziev/sounds/roomba.mp3","roo");
		createjs.Sound.registerSound("https://raw.githubusercontent.com/haimraziev/Latinfo/master/Latinfo_DollyGotie_HaimRaziev/sounds/salsa.mp3","sal");
		createjs.Sound.registerSound("https://raw.githubusercontent.com/haimraziev/Latinfo/master/Latinfo_DollyGotie_HaimRaziev/sounds/samba.mp3","sam");
		createjs.Sound.registerSound("https://raw.githubusercontent.com/haimraziev/Latinfo/master/Latinfo_DollyGotie_HaimRaziev/sounds/tango.mp3","tan");
		createjs.Sound.registerSound("https://raw.githubusercontent.com/haimraziev/Latinfo/master/Latinfo_DollyGotie_HaimRaziev/sounds/zouk.mp3","zu");
		
		//הפעלת סאונדים-------------------
		
		self.salsa_info.salsa_music.addEventListener("click", salsa_play);
		self.samba_info.samba_music.addEventListener("click", samba_play);
		self.cha_cha_info.cha_cha_music.addEventListener("click", cha_cha_play);
		self.tango_info.tango_music.addEventListener("click", tango_play);
		self.bolero_info.bolero_music.addEventListener("click", bolero_play);
		self.bachata_info.bachata_music.addEventListener("click", bachata_play);
		self.zuk_info.zuk_music.addEventListener("click", zuk_play);
		self.roomba_info.roomba_music.addEventListener("click", roomba_play);
		self.merngue_info.merngue_music.addEventListener("click", merngue_play);
		self.kizumba_info.kizumba_music.addEventListener("click", kizumba_play);
		
		function salsa_play(){
			if (self.salsa_info.salsa_music.sal_music_txt.text == "אני רוצה לשמוע"){
			self.salsa_info.salsa_music.sal_music_txt.text = "אני רוצה להפסיק";
			createjs.Sound.play("sal");
			self.gotoAndPlay(0);}
			else {
			createjs.Sound.stop("sal"); 
			self.salsa_info.salsa_music.sal_music_txt.text = "אני רוצה לשמוע";
			}
		}
		
		function samba_play(){
			if (self.samba_info.samba_music.sam_music_txt.text == "אני רוצה לשמוע"){
			self.samba_info.samba_music.sam_music_txt.text = "אני רוצה להפסיק";
			createjs.Sound.play("sam");
			self.gotoAndPlay(0);}
			else {
			createjs.Sound.stop("sam"); 
			self.samba_info.samba_music.sam_music_txt.text = "אני רוצה לשמוע";
			}
		}
		
		function cha_cha_play(){
			if (self.cha_cha_info.cha_cha_music.cha_music_txt.text == "אני רוצה לשמוע"){
			self.cha_cha_info.cha_cha_music.cha_music_txt.text = "אני רוצה להפסיק";
			createjs.Sound.play("cha");
			self.gotoAndPlay(0);}
			else {
			createjs.Sound.stop("cha"); 
			self.cha_cha_info.cha_cha_music.cha_music_txt.text = "אני רוצה לשמוע";
			}
		}
		
		function tango_play(){
			if (self.tango_info.tango_music.tan_music_txt.text == "אני רוצה לשמוע"){
			self.tango_info.tango_music.tan_music_txt.text = "אני רוצה להפסיק";
			createjs.Sound.play("tan");
			self.gotoAndPlay(0);}
			else {
			createjs.Sound.stop("tan"); 
			self.tango_info.tango_music.tan_music_txt.text = "אני רוצה לשמוע";
			}
		}
		
		function bolero_play(){
			if (self.bolero_info.bolero_music.bol_music_txt.text == "אני רוצה לשמוע"){
			self.bolero_info.bolero_music.bol_music_txt.text = "אני רוצה להפסיק";
			createjs.Sound.play("bo");
			self.gotoAndPlay(0);}
			else {
			createjs.Sound.stop("bo"); 
			self.bolero_info.bolero_music.bol_music_txt.text = "אני רוצה לשמוע";
			}
		}
		
		function bachata_play(){
			if (self.bachata_info.bachata_music.bac_music_txt.text == "אני רוצה לשמוע"){
			self.bachata_info.bachata_music.bac_music_txt.text = "אני רוצה להפסיק";
			createjs.Sound.play("ba");
			self.gotoAndPlay(0);}
			else {
			createjs.Sound.stop("ba"); 
			self.bachata_info.bachata_music.bac_music_txt.text = "אני רוצה לשמוע";
			}
		}
		
		function zuk_play(){
			if (self.zuk_info.zuk_music.zuk_music_txt.text == "אני רוצה לשמוע"){
			self.zuk_info.zuk_music.zuk_music_txt.text = "אני רוצה להפסיק";
			createjs.Sound.play("zu");
			self.gotoAndPlay(0);}
			else {
			createjs.Sound.stop("zu"); 
			self.zuk_info.zuk_music.zuk_music_txt.text = "אני רוצה לשמוע";
			}
		}
		
		function roomba_play(){
			if (self.roomba_info.roomba_music.roo_music_txt.text == "אני רוצה לשמוע"){
			self.roomba_info.roomba_music.roo_music_txt.text = "אני רוצה להפסיק";
			createjs.Sound.play("roo");
			self.gotoAndPlay(0);}
			else {
			createjs.Sound.stop("roo"); 
			self.roomba_info.roomba_music.roo_music_txt.text = "אני רוצה לשמוע";
			}
		}
		
		function merngue_play(){
			if (self.merngue_info.merngue_music.mer_music_txt.text == "אני רוצה לשמוע"){
			self.merngue_info.merngue_music.mer_music_txt.text = "אני רוצה להפסיק";
			createjs.Sound.play("me");
			self.gotoAndPlay(0);}
			else {
			createjs.Sound.stop("me"); 
			self.merngue_info.merngue_music.mer_music_txt.text = "אני רוצה לשמוע";
			}
		}
		
		function kizumba_play(){
			if (self.kizumba_info.kizumba_music.kiz_music_txt.text == "אני רוצה לשמוע"){
			self.kizumba_info.kizumba_music.kiz_music_txt.text = "אני רוצה להפסיק";
			createjs.Sound.play("kiz");
			self.gotoAndPlay(0);}
			else {
			createjs.Sound.stop("kiz"); 
			self.kizumba_info.kizumba_music.kiz_music_txt.text = "אני רוצה לשמוע";
			}
		}
		
		//פתיחת הדף-----------------------
		    self.close.visible = false;
		    self.salsa_info.visible = false;
			self.samba_info.visible = false;
			self.cha_cha_info.visible = false;
			self.tango_info.visible = false;
			self.bolero_info.visible = false;
			self.bachata_info.visible = false;
			self.zuk_info.visible = false;
			self.roomba_info.visible = false;
			self.merngue_info.visible = false;
			self.kizumba_info.visible = false;
			
		    self.clubs.visible = false;
		    self.havana.visible = false;
		    self.complex.visible = false;
		    self.studioB.visible = false;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.Bnation.visible = false;
			self.dance_h.visible = false;
			
			self.mc_salsa.alpha = 1;
			self.mc_zuk.alpha = 1;
			self.mc_tango.alpha = 1;
			self.mc_samba.alpha = 1;
			self.mc_roomba.alpha = 1;
			self.mc_merngue.alpha = 1;
			self.mc_kizumba.alpha = 1;
			self.mc_cha_cha.alpha = 1;
			self.mc_bolero.alpha = 1;
			self.mc_bachata.alpha = 1;	
			
			self.mc_salsa.gotoAndStop(0);
			self.mc_samba.gotoAndStop(0);
			self.mc_cha_cha.gotoAndStop(0);
			self.mc_tango.gotoAndStop(0);
			self.mc_bolero.gotoAndStop(0);
			self.mc_bachata.gotoAndStop(0);
			self.mc_zuk.gotoAndStop(0);
			self.mc_roomba.gotoAndStop(0);
			self.mc_merngue.gotoAndStop(0);
			self.mc_kizumba.gotoAndStop(0);
			
			self.copyright.visible = true;
			self.atr.visible = false;
		
		//addEventListener-----------------------------
		stage.enableMouseOver(24);
		self.mc_salsa.addEventListener("click", salsaClick);
		self.mc_salsa.addEventListener("mouseover" ,salsa_hover);
		self.mc_salsa.addEventListener("mouseout" ,salsa_out);
		
		self.mc_samba.addEventListener("click", sambaClick);
		self.mc_samba.addEventListener("mouseover" ,samba_hover);
		self.mc_samba.addEventListener("mouseout" ,samba_out);
		
		self.mc_cha_cha.addEventListener("click", cha_chaClick);
		self.mc_cha_cha.addEventListener("mouseover" ,cha_cha_hover);
		self.mc_cha_cha.addEventListener("mouseout" ,cha_cha_out);
		
		self.mc_tango.addEventListener("click", tangoClick);
		self.mc_tango.addEventListener("mouseover" ,tango_hover);
		self.mc_tango.addEventListener("mouseout" ,tango_out);
		
		self.mc_bolero.addEventListener("click", boleroClick);
		self.mc_bolero.addEventListener("mouseover" ,bolero_hover);
		self.mc_bolero.addEventListener("mouseout" ,bolero_out);
		
		self.mc_bachata.addEventListener("click", bachataClick);
		self.mc_bachata.addEventListener("mouseover" ,bachata_hover);
		self.mc_bachata.addEventListener("mouseout" ,bachata_out);
		
		self.mc_zuk.addEventListener("click", zukClick);
		self.mc_zuk.addEventListener("mouseover" ,zuk_hover);
		self.mc_zuk.addEventListener("mouseout" ,zuk_out);
		
		self.mc_roomba.addEventListener("click", roombaClick);
		self.mc_roomba.addEventListener("mouseover" ,roomba_hover);
		self.mc_roomba.addEventListener("mouseout" ,roomba_out);
		
		self.mc_merngue.addEventListener("click", merngueClick);
		self.mc_merngue.addEventListener("mouseover" ,merngue_hover);
		self.mc_merngue.addEventListener("mouseout" ,merngue_out);
		
		self.mc_kizumba.addEventListener("click", kizumbaClick);
		self.mc_kizumba.addEventListener("mouseover" ,kizumba_hover);
		self.mc_kizumba.addEventListener("mouseout" ,kizumba_out);
		
		self.clubs.addEventListener("click",show_clubs);
		self.close.addEventListener("click",close);
		
		self.havana.addEventListener ("mouseover",havana_hover);
		self.havana.addEventListener ("mouseout",havana_out);
		self.complex.addEventListener ("mouseover",complex_hover);
		self.complex.addEventListener ("mouseout",complex_out);
		self.studioB.addEventListener ("mouseover",studioB_hover);
		self.studioB.addEventListener ("mouseout",studioB_out);
		self.baila.addEventListener ("mouseover",baila_hover);
		self.baila.addEventListener ("mouseout",baila_out);
		self.rotev.addEventListener ("mouseover",rotev_hover);
		self.rotev.addEventListener ("mouseout",rotev_out);
		self.Bnation.addEventListener ("mouseover",Bnation_hover);
		self.Bnation.addEventListener ("mouseout",Bnation_out);
		
		self.copyright.addEventListener ("click",copyright);
		
		//פונקציות------------------------------------
		function salsa_hover() {
		self.mc_salsa.alpha = 1;
			self.mc_zuk.alpha = 0.5;
			self.mc_tango.alpha = 0.5;
			self.mc_samba.alpha = 0.5;
			self.mc_roomba.alpha = 0.5;
			self.mc_merngue.alpha = 0.5;
			self.mc_kizumba.alpha = 0.5;
			self.mc_cha_cha.alpha = 0.5;
			self.mc_bolero.alpha = 0.5;
			self.mc_bachata.alpha = 0.5;
			self.mc_salsa.gotoAndStop(1);
			
		}
		function salsa_out(){
			self.mc_salsa.alpha = 1;
			self.mc_zuk.alpha = 1;
			self.mc_tango.alpha = 1;
			self.mc_samba.alpha = 1;
			self.mc_roomba.alpha = 1;
			self.mc_merngue.alpha = 1;
			self.mc_kizumba.alpha = 1;
			self.mc_cha_cha.alpha = 1;
			self.mc_bolero.alpha = 1;
			self.mc_bachata.alpha = 1;
			self.mc_salsa.gotoAndStop(0);
			self.mc_samba.gotoAndStop(0);
			self.mc_cha_cha.gotoAndStop(0);
			self.mc_tango.gotoAndStop(0);
			self.mc_bolero.gotoAndStop(0);
			self.mc_bachata.gotoAndStop(0);
			self.mc_zuk.gotoAndStop(0);
			self.mc_roomba.gotoAndStop(0);
			self.mc_merngue.gotoAndStop(0);
			self.mc_kizumba.gotoAndStop(0);
		}
		
		function salsaClick(){
			self.salsa_info.visible = true;
			self.clubs.visible = true;
			self.close.visible = true;
			self.dance_h.visible = true;
			self.havana.visible = false;
		    self.complex.visible = false;
		    self.studioB.visible = false;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.clubs.clubs_text.text = "לרשימת המועדונים בהם ניתן לרקוד סגנון ריקוד זה לחצו כאן";
			self.dance_h.text = "סלסה";
			self.salsa_info.salsa_music.sal_music_txt.text = "אני רוצה לשמוע";
		}
		
		function samba_hover(){
		    self.mc_salsa.alpha = 0.5;
			self.mc_zuk.alpha = 0.5;
			self.mc_tango.alpha = 0.5;
			self.mc_samba.alpha = 1;
			self.mc_roomba.alpha = 0.5;
			self.mc_merngue.alpha = 0.5;
			self.mc_kizumba.alpha = 0.5;
			self.mc_cha_cha.alpha = 0.5;
			self.mc_bolero.alpha = 0.5;
			self.mc_bachata.alpha = 0.5;
			self.mc_samba.gotoAndStop(1);
		}
		
		function samba_out(){
			salsa_out();
		}
		
		function sambaClick(){
			self.samba_info.visible = true;
			self.dance_h.visible = true;
			self.dance_h.text = "סמבה";
			self.close.visible = true;
			self.clubs.visible = true;
			self.clubs.clubs_text.font = "15px Amatic SC";
			self.clubs.clubs_text.text = "סגנון הסמבה עד כה לא נלמד במועדונים ברחבי הארץ, אך קיימים מספר בתי ספר שבהם ניתן ללמוד את סגנון הריקוד באופן פרטי ובתיאום מראש. \n'andrey dance', 'דאנסארט', 'let’s dance'";
			self.samba_info.samba_music.sam_music_txt.text = "אני רוצה לשמוע";
		}
		
		function cha_cha_hover(){
			self.mc_salsa.alpha = 0.5;
			self.mc_zuk.alpha = 0.5;
			self.mc_tango.alpha = 0.5;
			self.mc_samba.alpha = 0.5;
			self.mc_roomba.alpha = 0.5;
			self.mc_merngue.alpha = 0.5;
			self.mc_kizumba.alpha = 0.5;
			self.mc_cha_cha.alpha = 1;
			self.mc_bolero.alpha = 0.5;
			self.mc_bachata.alpha = 0.5;
			self.mc_cha_cha.gotoAndStop(1);
		}
		
		function cha_cha_out(){
			salsa_out();
		}
		
		function cha_chaClick(){
		self.cha_cha_info.visible = true;
			self.dance_h.visible = true;
			self.dance_h.text = "צ'ה צ'ה צ'ה";
			self.close.visible = true;
			self.clubs.visible = true;
			self.clubs.clubs_text.font = "15px Amatic SC";
			self.clubs.clubs_text.text = "סגנון הצ'ה צ'ה צ'ה עד כה לא נלמד במועדונים ברחבי הארץ, אך קיימים מספר בתי ספר שבהם ניתן ללמוד את סגנון הריקוד באופן פרטי ובתיאום מראש. סטודיו 'לרקוד מהלב', 'ציספרס \n', 'let’s dance'";
			self.cha_cha_info.cha_cha_music.cha_music_txt.text = "אני רוצה לשמוע";
		}
		
		function tango_hover(){
			self.mc_salsa.alpha = 0.5;
			self.mc_zuk.alpha = 0.5;
			self.mc_tango.alpha = 1;
			self.mc_samba.alpha = 0.5;
			self.mc_roomba.alpha = 0.5;
			self.mc_merngue.alpha = 0.5;
			self.mc_kizumba.alpha = 0.5;
			self.mc_cha_cha.alpha = 0.5;
			self.mc_bolero.alpha = 0.5;
			self.mc_bachata.alpha = 0.5;
			self.mc_tango.gotoAndStop(1);
		}
		
		function tango_out(){
			salsa_out();
		}
		
		function tangoClick(){
			self.tango_info.visible = true;
			self.dance_h.visible = true;
			self.dance_h.text = "טנגו";
			self.close.visible = true;
			self.clubs.visible = true;
			self.clubs.clubs_text.font = "15px Amatic SC";
			self.clubs.clubs_text.text = "סגנון הטנגו עד כה לא נלמד במועדונים ברחבי הארץ, אך קיימים מספר בתי ספר שבהם ניתן ללמוד את סגנון הריקוד באופן פרטי ובתיאום מראש. \n'andrey dance', 'דאנסארט', 'let’s dance', סטודיו 'לרקוד מהלב'";
			self.tango_info.tango_music.tan_music_txt.text = "אני רוצה לשמוע";
		}
		
		function bolero_hover(){
			self.mc_salsa.alpha = 0.5
			self.mc_zuk.alpha = 0.5;
			self.mc_tango.alpha = 0.5;
			self.mc_samba.alpha = 0.5;
			self.mc_roomba.alpha = 0.5;
			self.mc_merngue.alpha = 0.5;
			self.mc_kizumba.alpha = 0.5;
			self.mc_cha_cha.alpha = 0.5;
			self.mc_bolero.alpha = 1;
			self.mc_bachata.alpha = 0.5;
			self.mc_bolero.gotoAndStop(1);
		}
		
		function bolero_out(){
			salsa_out();
		}
		
		function boleroClick(){
			self.bolero_info.visible = true;
			self.dance_h.visible = true;
			self.dance_h.text = "בולרו";
			self.close.visible = true;
			self.clubs.visible = true;
			self.clubs.clubs_text.font = "15px Amatic SC";
			self.clubs.clubs_text.text = "עד כה לא נמצא מקום המלמד את סגנון הבולרו";
			self.bolero_info.bolero_music.bol_music_txt.text = "אני רוצה לשמוע";
		}
		
		function bachata_hover(){
			self.mc_salsa.alpha = 0.5;
			self.mc_zuk.alpha = 0.5;
			self.mc_tango.alpha = 0.5;
			self.mc_samba.alpha = 0.5;
			self.mc_roomba.alpha = 0.5;
			self.mc_merngue.alpha = 0.5;
			self.mc_kizumba.alpha = 0.5;
			self.mc_cha_cha.alpha = 0.5;
			self.mc_bolero.alpha = 0.5;
			self.mc_bachata.alpha = 1;
			self.mc_bachata.gotoAndStop(1);
		}
		
		function bachata_out(){
			salsa_out()
		}
		
		function bachataClick(){
			self.bachata_info.visible = true;
			self.clubs.visible = true;
			self.close.visible = true;
			self.dance_h.visible = true;
			self.havana.visible = false;
		    self.complex.visible = false;
		    self.studioB.visible = false;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.Bnation.visible = false;
			self.clubs.clubs_text.text = "לרשימת המועדונים בהם ניתן לרקוד סגנון ריקוד זה לחצו כאן";
			self.dance_h.text = "בצ'אטה";
			self.bachata_info.bachata_music.bac_music_txt.text = "אני רוצה לשמוע";
		}
		
		function zuk_hover(){
			self.mc_salsa.alpha = 0.5
			self.mc_zuk.alpha = 1;
			self.mc_tango.alpha = 0.5;
			self.mc_samba.alpha = 0.5;
			self.mc_roomba.alpha = 0.5;
			self.mc_merngue.alpha = 0.5;
			self.mc_kizumba.alpha = 0.5;
			self.mc_cha_cha.alpha = 0.5;
			self.mc_bolero.alpha = 0.5;
			self.mc_bachata.alpha = 0.5;
			self.mc_zuk.gotoAndStop(1);
		}
		
		function zuk_out(){
			salsa_out();
		}
		
		function zukClick(){
			self.zuk_info.visible = true;
			self.clubs.visible = true;
			self.close.visible = true;
			self.dance_h.visible = true;
			self.havana.visible = false;
		    self.complex.visible = false;
		    self.studioB.visible = false;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.Bnation.visible = false;
			self.clubs.clubs_text.text = "לרשימת המועדונים בהם ניתן לרקוד סגנון ריקוד זה לחצו כאן";
			self.dance_h.text = "זוק";
			self.zuk_info.zuk_music.zuk_music_txt.text = "אני רוצה לשמוע";
		}
		
		function roomba_hover(){
			self.mc_salsa.alpha = 0.5;
			self.mc_zuk.alpha = 0.5;
			self.mc_tango.alpha = 0.5;
			self.mc_samba.alpha = 0.5;
			self.mc_roomba.alpha = 1;
			self.mc_merngue.alpha = 0.5;
			self.mc_kizumba.alpha = 0.5;
			self.mc_cha_cha.alpha = 0.5;
			self.mc_bolero.alpha = 0.5;
			self.mc_bachata.alpha = 0.5;
			self.mc_roomba.gotoAndStop(1);
		}
		
		function roomba_out(){
			salsa_out();
		}
		
		function roombaClick(){
			self.roomba_info.visible = true;
			self.clubs.visible = true;
			self.close.visible = true;
			self.dance_h.visible = true;
			self.havana.visible = false;
		    self.complex.visible = false;
		    self.studioB.visible = false;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.Bnation.visible = false;
			self.clubs.clubs_text.text = "לרשימת המועדונים בהם ניתן לרקוד סגנון ריקוד זה לחצו כאן";
			self.dance_h.text = "רומבה";
			self.roomba_info.roomba_music.roo_music_txt.text = "אני רוצה לשמוע";
		}
		
		function merngue_hover(){
			self.mc_salsa.alpha = 0.5;
			self.mc_zuk.alpha = 0.5;
			self.mc_tango.alpha = 0.5;
			self.mc_samba.alpha = 0.5;
			self.mc_roomba.alpha = 0.5;
			self.mc_merngue.alpha = 1;
			self.mc_kizumba.alpha = 0.5;
			self.mc_cha_cha.alpha = 0.5;
			self.mc_bolero.alpha = 0.5;
			self.mc_bachata.alpha = 0.5;
			self.mc_merngue.gotoAndStop(1);
		}
		
		function merngue_out(){
			salsa_out()
		}
		
		function merngueClick(){
			self.merngue_info.visible = true;
			self.dance_h.visible = true;
			self.dance_h.text = "מרנגה";
			self.close.visible = true;
			self.clubs.visible = true;
			self.clubs.clubs_text.font = "15px Amatic SC";
			self.clubs.clubs_text.text = "סגנון המרנגה עד כה לא נלמד במועדונים ברחבי הארץ, אך קיימים מספר בתי ספר שבהם ניתן ללמוד את סגנון הריקוד באופן פרטי ובתיאום מראש.\n'andrey dance', 'דאנסארט'";
			self.merngue_info.merngue_music.mer_music_txt.text = "אני רוצה לשמוע";
		}
		
		function kizumba_hover(){
			self.mc_salsa.alpha = 1;
			self.mc_zuk.alpha = 0.5;
			self.mc_tango.alpha = 0.5;
			self.mc_samba.alpha = 0.5;
			self.mc_roomba.alpha = 0.5;
			self.mc_merngue.alpha = 0.5;
			self.mc_kizumba.alpha = 1;
			self.mc_cha_cha.alpha = 0.5;
			self.mc_bolero.alpha = 0.5;
			self.mc_bachata.alpha = 0.5;
			self.mc_kizumba.gotoAndStop(1);
		}
		
		function kizumba_out(){
			salsa_out();
		}
		
		function kizumbaClick(){
			self.kizumba_info.visible = true;
			self.clubs.visible = true;
			self.close.visible = true;
			self.dance_h.visible = true;
			self.havana.visible = false;
		    self.complex.visible = false;
		    self.studioB.visible = false;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.Bnation.visible = false;
			self.clubs.clubs_text.text = "לרשימת המועדונים בהם ניתן לרקוד סגנון ריקוד זה לחצו כאן";
			self.dance_h.text = "קיזומבה";
			self.kizumba_info.kizumba_music.kiz_music_txt.text = "אני רוצה לשמוע";	
		}
		
		function close() {
		    self.salsa_info.visible = false;
			self.samba_info.visible = false;
			self.cha_cha_info.visible = false;
			self.tango_info.visible = false;
			self.bolero_info.visible = false;
			self.bachata_info.visible = false;
			self.zuk_info.visible = false;
			self.roomba_info.visible = false;
			self.merngue_info.visible = false;
			self.kizumba_info.visible = false;
		    self.clubs.visible = false;
		    self.havana.visible = false;
		    self.complex.visible = false;
		    self.studioB.visible = false;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.Bnation.visible = false;
		    self.close.visible = false;
			self.dance_h.visible = false;
			self.atr.visible = false;
			createjs.Sound.stop("sal"); 
			createjs.Sound.stop("sam"); 
			createjs.Sound.stop("cha"); 
			createjs.Sound.stop("tan");
			createjs.Sound.stop("bo"); 
			createjs.Sound.stop("ba"); 
			createjs.Sound.stop("zu"); 
			createjs.Sound.stop("roo");
			createjs.Sound.stop("me"); 
			createjs.Sound.stop("kiz"); 
			}
		
		
		
		function show_clubs() {
			self.havana.gotoAndStop(0);
			self.complex.gotoAndStop(0);
			self.studioB.gotoAndStop(0);
			self.baila.gotoAndStop(0);
			self.rotev.gotoAndStop(0);
			self.Bnation.gotoAndStop(0);
			if (self.dance_h.text == "סלסה"){
		    self.salsa_info.visible = true;
			self.clubs.visible = true;
			self.havana.visible = true;
		    self.complex.visible = true;
		    self.studioB.visible = true;
		    self.baila.visible = true;
		    self.rotev.visible = true;
			self.Bnation.visible = false;
			self.clubs.clubs_text.text = "עברו מעל המועדונים בכדי לגלות מידע נוסף";
			}
			else if(self.dance_h.text == "בצ'אטה") {
			self.clubs.visible = true;
			self.havana.visible = true;
		    self.complex.visible = true;
		    self.studioB.visible = true;
		    self.baila.visible = true;
		    self.rotev.visible = false;
			self.Bnation.visible = true;
			self.clubs.clubs_text.text = "עברו מעל המועדונים בכדי לגלות מידע נוסף";	
			}
			else if(self.dance_h.text == "רומבה"){
			self.clubs.visible = true;
			self.havana.visible = false;
		    self.complex.visible = true;
		    self.studioB.visible = false;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.Bnation.visible = false;
			self.clubs.clubs_text.text = "עברו מעל המועדונים בכדי לגלות מידע נוסף";
			}
			else if(self.dance_h.text == "זוק"){
			self.clubs.visible = true;
			self.havana.visible = false;
		    self.complex.visible = true;
		    self.studioB.visible = true;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.Bnation.visible = false;
			self.clubs.clubs_text.text = "עברו מעל המועדונים בכדי לגלות מידע נוסף";
			}
			else if(self.dance_h.text == "קיזומבה"){
			self.clubs.visible = true;
			self.havana.visible = false;
		    self.complex.visible = true;
		    self.studioB.visible = true;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.Bnation.visible = false;
			self.clubs.clubs_text.text = "עברו מעל המועדונים בכדי לגלות מידע נוסף";
			}
			else {
			elf.clubs.visible = false;
			self.havana.visible = false;
		    self.complex.visible = false;
		    self.studioB.visible = false;
		    self.baila.visible = false;
		    self.rotev.visible = false;
			self.Bnation.visible = false;	
			}
		}
		function havana_hover() {
			self.havana.alpha = 1;
			self.complex.alpha = 0.5;
			self.studioB.alpha = 0.5;
			self.baila.alpha = 0.5;
			self.rotev.alpha = 0.5;
			self.Bnation.alpha = 0.5;
			self.havana.gotoAndStop(1);
			self.salsa_info.text_bg.visible = true;
			self.salsa_info.salsa_text.visible = false;
			self.bachata_info.bachata_text.visible = false;
			self.zuk_info.zuk_text.visible = false;
			self.roomba_info.roomba_text.visible = false;
			self.clubs_info.visible = true;
			self.clubs_info.text = "כתובת: יגאל אלון 126 תל אביב \nימי פעילות: שלישי חמישי ומוצאי שבת \nשעת הפתיחה: 21:15 \nשיעור מקדים בכל הסגנונות: 21:30 \nשיעור מקדים בכל הסגנונות: 21:30 \nהמסיבה: 23:00";
		}
		
		function havana_out() {
		    self.havana.alpha = 1;
			self.complex.alpha = 1;
			self.studioB.alpha = 1;
			self.baila.alpha = 1;
			self.rotev.alpha = 1;
			self.Bnation.alpha = 1;
			self.havana.gotoAndStop(0);
			self.complex.gotoAndStop(0);
			self.studioB.gotoAndStop(0);
			self.rotev.gotoAndStop(0);
			self.baila.gotoAndStop(0);
			self.Bnation.gotoAndStop(0);
			self.clubs_info.visible = false;
			self.salsa_info.salsa_text.visible = true;
			self.bachata_info.bachata_text.visible = true;
			self.zuk_info.zuk_text.visible = true;
			self.roomba_info.roomba_text.visible = true;
			self.kizumba_info.kizumba_text.visible = true;
			
		}
		
		function complex_hover() {
			self.havana.alpha = 0.5;
			self.complex.alpha = 1;
			self.studioB.alpha = 0.5;
			self.baila.alpha = 0.5;
			self.rotev.alpha = 0.5;
			self.Bnation.alpha = 0.5;
			self.complex.gotoAndStop(1);
			self.salsa_info.text_bg.visible = true;
			self.salsa_info.salsa_text.visible = false;
			self.bachata_info.bachata_text.visible = false;
			self.zuk_info.zuk_text.visible = false;
			self.roomba_info.roomba_text.visible = false;
			self.kizumba_info.kizumba_text.visible = false;
			self.clubs_info.visible = true;
			self.clubs_info.text = "כתובת: קרליבך 2 תל אביב, בית מעריב\nימי פעילות: שני ומוצאי שבת\nשעת הפתיחה: 21:00\nלימוד סלסה בצ'אטה ,קיזומבה, זוק ורומבה בכל הרמות: 21:30\nהמסיבה: 22:30";	
		}
		
		function complex_out() {
		    havana_out();	
			}
			
		function studioB_hover() {
			self.havana.alpha = 0.5;
			self.complex.alpha = 0.5;
			self.studioB.alpha = 1;
			self.baila.alpha = 0.5;
			self.rotev.alpha = 0.5;
			self.Bnation.alpha = 0.5;
			self.studioB.gotoAndStop(1);
			self.salsa_info.text_bg.visible = true;
			self.salsa_info.salsa_text.visible = false;
			self.bachata_info.bachata_text.visible = false;
			self.zuk_info.zuk_text.visible = false;
			self.roomba_info.roomba_text.visible = false;
			self.kizumba_info.kizumba_text.visible = false;
			self.clubs_info.visible = true;
			self.clubs_info.text = "כתובת: איבן גבירול 124 תל אביב\nימי פעילות: רביעי ושישי\nהשיעור ברביעי: 21:30\nהשיעור בשישי: 22:30\nלימוד סלסה בצ'אטה זוק וקיזומבה בכל הרמות\nהמסיבה: שעה לאחר תחילת השיעור";
		}
		
		function studioB_out() {
		havana_out();	
			}
		
		function baila_hover(){
			self.havana.alpha = 0.5;
			self.complex.alpha = 0.5;
			self.studioB.alpha = 0.5;
			self.baila.alpha = 1;
			self.rotev.alpha = 0.5;
			self.Bnation.alpha = 0.5;
			self.baila.gotoAndStop(1);
			self.salsa_info.text_bg.visible = true;
			self.salsa_info.salsa_text.visible = false;
			self.bachata_info.bachata_text.visible = false;
			self.zuk_info.zuk_text.visible = false;
			self.roomba_info.roomba_text.visible = false;
			self.kizumba_info.kizumba_text.visible = false;
			self.clubs_info.visible = true;
			self.clubs_info.text = "כתובת: משה יתום 32 רחובות\nימי פעילות: שלישי רביעי ומוצאי שבת\nשעת הפתיחה: 20:30\nלימוד בצ'אטה (רק בשלישי) בכל הרמות: 21:00\nלימוד סלסה (רביעי ומוצאי שבת) בכל הרמות: 21:30\nהמסיבה: 22:30";
		}
		
		function baila_out(){
			havana_out();
		}
		
		function rotev_hover(){
			self.havana.alpha = 0.5;
			self.complex.alpha = 0.5;
			self.studioB.alpha = 0.5;
			self.baila.alpha = 0.5;
			self.rotev.alpha = 1;
			self.Bnation.alpha = 0.5;
			self.rotev.gotoAndStop(1);
			self.salsa_info.text_bg.visible = true;
			self.salsa_info.salsa_text.visible = false;
			self.bachata_info.bachata_text.visible = false;
			self.zuk_info.zuk_text.visible = false;
			self.roomba_info.roomba_text.visible = false;
			self.kizumba_info.kizumba_text.visible = false;
			self.clubs_info.visible = true;
			self.clubs_info.text = "כתובת: המוביל 3 א.ת כפר סבא\nימי פעילות: שלישי ומוצאי שבת\nשעת הפתיחה: 21:15\nשיעור מקדים ריקודי שורות: 21:30\nלימוד סלסה בכל הרמות: 21:45\nהמסיבה: 22:50";
		}
		
		function rotev_out(){
			havana_out();
		}
		
		function Bnation_hover(){
			self.havana.alpha = 0.5;
			self.complex.alpha = 0.5;
			self.studioB.alpha = 0.5;
			self.baila.alpha = 0.5;
			self.rotev.alpha = 0.5;
			self.Bnation.alpha = 1;
			self.Bnation.gotoAndStop(1);
			self.salsa_info.text_bg.visible = true;
			self.salsa_info.salsa_text.visible = false;
			self.bachata_info.bachata_text.visible = false;
			self.zuk_info.zuk_text.visible = false;
			self.roomba_info.roomba_text.visible = false;
			self.kizumba_info.kizumba_text.visible = false;
			self.clubs_info.visible = true;
			self.clubs_info.text = "כתובת: קרליבך 2 תל אביב, בית מעריב\nימי פעילות: חמישי\nשעת פתיחה: 21:30\nלימוד בצ'אטה בכל הרמות: 22:00\nהמסיבה: 23:00";	
		}
		
		function Bnation_out(){
			havana_out();
		}
		
		function copyright(){
			self.atr.visible = true;
			self.close.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// clubs.info
	this.dance_h = new cjs.Text("", "25px 'Verdana'");
	this.dance_h.name = "dance_h";
	this.dance_h.textAlign = "center";
	this.dance_h.lineHeight = 32;
	this.dance_h.lineWidth = 345;
	this.dance_h.parent = this;
	this.dance_h.setTransform(270.7,122.5);

	this.Bnation = new lib.Bnation();
	this.Bnation.parent = this;
	this.Bnation.setTransform(76.6,373,1.007,1,0,0,0,0.7,0.7);

	this.rotev = new lib.rotev();
	this.rotev.parent = this;
	this.rotev.setTransform(157.1,372.5,1,1,0,0,0,0.7,0.7);

	this.baila = new lib.baila();
	this.baila.parent = this;
	this.baila.setTransform(237.5,372.5,1.07,1,0,0,0,0.6,0.7);

	this.studioB = new lib.studioB();
	this.studioB.parent = this;
	this.studioB.setTransform(318,372.6,1,1,0,0,0,0.7,0.7);

	this.complex = new lib.complex();
	this.complex.parent = this;
	this.complex.setTransform(398.4,372.6,1.007,1,0,0,0,0.7,0.7);

	this.havana = new lib.havana();
	this.havana.parent = this;
	this.havana.setTransform(480.2,372.6,1.007,1.002);

	this.clubs = new lib.clubs();
	this.clubs.parent = this;
	this.clubs.setTransform(273.5,330.5,1,1,0,0,0,0.5,76.5);

	this.close = new lib.close();
	this.close.parent = this;
	this.close.setTransform(64.4,74.4,0.257,0.257);

	this.clubs_info = new cjs.Text("", "20px 'Arial'");
	this.clubs_info.name = "clubs_info";
	this.clubs_info.textAlign = "center";
	this.clubs_info.lineHeight = 24;
	this.clubs_info.lineWidth = 229;
	this.clubs_info.parent = this;
	this.clubs_info.setTransform(275.8,147.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clubs_info},{t:this.close},{t:this.clubs},{t:this.havana},{t:this.complex},{t:this.studioB},{t:this.baila},{t:this.rotev},{t:this.Bnation},{t:this.dance_h}]}).wait(1));

	// copyright
	this.atr = new lib.atr();
	this.atr.parent = this;
	this.atr.setTransform(271.6,248.2,1,1,0,0,0,0.5,26.6);

	this.copyright = new lib.copyright();
	this.copyright.parent = this;
	this.copyright.setTransform(12.2,388.7,1,1,0,0,0,7.4,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.copyright},{t:this.atr}]}).wait(1));

	// text.kizumba
	this.kizumba_info = new lib.kizumba_info();
	this.kizumba_info.parent = this;
	this.kizumba_info.setTransform(274,273.1,1,1,0,0,0,251.2,229.1);

	this.timeline.addTween(cjs.Tween.get(this.kizumba_info).wait(1));

	// text.merngue
	this.merngue_info = new lib.merngue_info();
	this.merngue_info.parent = this;
	this.merngue_info.setTransform(274,224.1,1,1,0,0,0,251.2,180);

	this.timeline.addTween(cjs.Tween.get(this.merngue_info).wait(1));

	// text.roomba
	this.roomba_info = new lib.roomba_info();
	this.roomba_info.parent = this;
	this.roomba_info.setTransform(274,224.1,1,1,0,0,0,251.2,180);

	this.timeline.addTween(cjs.Tween.get(this.roomba_info).wait(1));

	// text.zuk
	this.zuk_info = new lib.zuk_info();
	this.zuk_info.parent = this;
	this.zuk_info.setTransform(274,223.3,1,1,0,0,0,251.2,180);

	this.timeline.addTween(cjs.Tween.get(this.zuk_info).wait(1));

	// text.bachata
	this.bachata_info = new lib.bachata_info();
	this.bachata_info.parent = this;
	this.bachata_info.setTransform(275.2,223.8,1,1,0,0,0,251.2,180);

	this.timeline.addTween(cjs.Tween.get(this.bachata_info).wait(1));

	// text.bolero
	this.bolero_info = new lib.bolero_info();
	this.bolero_info.parent = this;
	this.bolero_info.setTransform(275,223.8,1,1,0,0,0,251.2,180);

	this.timeline.addTween(cjs.Tween.get(this.bolero_info).wait(1));

	// text.tango
	this.tango_info = new lib.tango_info();
	this.tango_info.parent = this;
	this.tango_info.setTransform(275,226.3,1,1,0,0,0,251.2,182.5);

	this.timeline.addTween(cjs.Tween.get(this.tango_info).wait(1));

	// text.cha_cha
	this.cha_cha_info = new lib.cha_cha_info();
	this.cha_cha_info.parent = this;
	this.cha_cha_info.setTransform(276.1,219.6,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get(this.cha_cha_info).wait(1));

	// text.samba
	this.samba_info = new lib.samba_info();
	this.samba_info.parent = this;
	this.samba_info.setTransform(275.3,272.3,1,1,0,0,0,251.2,228.5);

	this.timeline.addTween(cjs.Tween.get(this.samba_info).wait(1));

	// text.salsa
	this.salsa_info = new lib.salsa_info();
	this.salsa_info.parent = this;
	this.salsa_info.setTransform(275.2,221.9,1,1,0,0,0,251.2,176.4);

	this.timeline.addTween(cjs.Tween.get(this.salsa_info).wait(1));

	// icons
	this.mc_kizumba = new lib.mc_kizumba();
	this.mc_kizumba.parent = this;
	this.mc_kizumba.setTransform(70.5,331,1,1,0,0,0,49,55.7);

	this.mc_merngue = new lib.mc_merngue();
	this.mc_merngue.parent = this;
	this.mc_merngue.setTransform(164.7,333.2,1,1,0,0,0,49,53.6);

	this.mc_roomba = new lib.mc_roomba();
	this.mc_roomba.parent = this;
	this.mc_roomba.setTransform(262.8,332.8,1,1,0,0,0,49,55.7);

	this.mc_zuk = new lib.mc_zuk();
	this.mc_zuk.parent = this;
	this.mc_zuk.setTransform(368.5,333.2,1,1,0,0,0,49,53.6);

	this.mc_bachata = new lib.mc_bachata();
	this.mc_bachata.parent = this;
	this.mc_bachata.setTransform(479.5,334.1,1,1,0,0,0,49,53.1);

	this.mc_bolero = new lib.mc_bolero();
	this.mc_bolero.parent = this;
	this.mc_bolero.setTransform(73.9,215.2,1,1,0,0,0,49,53.5);

	this.mc_tango = new lib.mc_tango();
	this.mc_tango.parent = this;
	this.mc_tango.setTransform(168.6,215.5,1,1,0,0,0,49,53.1);

	this.mc_cha_cha = new lib.mc_cha_cha();
	this.mc_cha_cha.parent = this;
	this.mc_cha_cha.setTransform(266.6,215.8,1,1,0,0,0,49,54.1);

	this.mc_samba = new lib.mc_samba();
	this.mc_samba.parent = this;
	this.mc_samba.setTransform(372.5,218.1,1,1,0,0,0,49,53.1);

	this.mc_salsa = new lib.mc_salsa();
	this.mc_salsa.parent = this;
	this.mc_salsa.setTransform(473.4,218.1,1,1,0,0,0,50.6,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_salsa},{t:this.mc_samba},{t:this.mc_cha_cha},{t:this.mc_tango},{t:this.mc_bolero},{t:this.mc_bachata},{t:this.mc_zuk},{t:this.mc_roomba},{t:this.mc_merngue},{t:this.mc_kizumba}]}).wait(1));

	// background
	this.h2 = new cjs.Text("הקליקו כדי לגלות את עולם הריקוד הלטיני", "30px 'Arial'");
	this.h2.name = "h2";
	this.h2.textAlign = "center";
	this.h2.lineHeight = 36;
	this.h2.lineWidth = 416;
	this.h2.parent = this;
	this.h2.setTransform(275.2,113.5);

	this.h1 = new cjs.Text("LATINFO", "41px 'Arial'");
	this.h1.name = "h1";
	this.h1.textAlign = "center";
	this.h1.lineHeight = 48;
	this.h1.lineWidth = 192;
	this.h1.parent = this;
	this.h1.setTransform(273.6,53.2);

	this.instance = new lib._4683();
	this.instance.parent = this;
	this.instance.setTransform(0,-1,0.122,0.119);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApLJMIAAyXISXAAIAASXg");
	this.shape.setTransform(82.8,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.h1},{t:this.h2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,199,550.4,505.1);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Latinfo_DollyGotie_HaimRaziev_atlas_.png?1539433391970", id:"Latinfo_DollyGotie_HaimRaziev_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;