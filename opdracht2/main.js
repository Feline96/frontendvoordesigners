//jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
//eslint-env browser/
//eslint 'no-console':0/


(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.vorige = this.el.querySelector( ".slider-vorige" );
			this.volgende = this.el.querySelector( ".slider-volgende" );
			this.nav = this.el.querySelector( ".slider-nav" );
			this.index = 0;
			this.total = this.slides.length;
			
			this.setup();
			this.actions();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		setup: function() {
			var slides = this.slides,
				len = slides.length,
				i;
			for( i = 0; i < len; ++i ) {
				var slide = slides[i],
					src = slide.getAttribute( "data-image" );
				
			}	
		},
		actions: function() {
			var self = this;
			
			self.el.addEventListener( "mouseover", function() {
				self.nav.style.display = "block";
				
			}, false);
			
			self.el.addEventListener( "mouseout", function() {
				self.nav.style.display = "none";
				
			}, false);
			
			self.volgende.addEventListener( "click", function() {
				self.index++;
				self.vorige.style.display = "block";
				
				if( self.index == self.total - 1 ) {
					self.index = self.total - 1;
					self.volgende.style.display = "none";
				}
				
				self._slideTo( self.index );
				
			}, false);
			
			self.vorige.addEventListener( "click", function() {
				self.index--;
				self.volgende.style.display = "block";
				
				if( self.index == 0 ) {
					self.index = 0;
					self.vorige.style.display = "none";
				}
				
				self._slideTo( self.index );
				
			}, false);
			
			document.body.addEventListener( "keydown", function( e ) {
				var code = e.keyCode;
				var evt = new Event( "click" );
				
				if( code == 39 ) {
					self.volgende.dispatchEvent( evt );
				}
				if( code == 37 ) {
					self.vorige.dispatchEvent( evt );
				}
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();



//Bron: https://codepen.io/gabrieleromanato/pen/pKrny //