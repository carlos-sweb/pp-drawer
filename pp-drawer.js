/*!!
 * Power Panel Events <https://github.com/carlos-sweb/pp-events>
 * @author Carlos Illesca
 * @version 1.0.5 (2020/03/24 22:27 PM)
 * Released under the MIT License
 */
(function(global , factory ){
  	
  	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  	
  	typeof define === 'function' && define.amd ? define('ppDrawer', factory) :
	
	(global = global || self, (function () {
        
    var exports = global.ppDrawer = factory();    

	}()
	
));

})( this,(function(  ) {

	return function( identy ){


		function ___lisenAnimation(event){

			var animation = event.animationName, target = event.target;	

			if( animation == 'fadeOut' ){target.classList.add('hidden')}

			if( animation == 'pp-drawer--close' ){target.classList.add('hidden_drawer')}

			target.classList.remove(animation);			
		}	

		this.__srimClose = true;

		this.scrimClose = function( val ){
			if( val == true || val == false ){
				if( val != this.__srimClose ){ 
					this.__srimClose = val;
				}				
			}
		}
		this.__open = false;

		this.isOpen = function (){
			return this.__open;
		}

		this.drawer = null;

		this.scrim = null;
		// ------------------------------------------------------------------------
		this.init = function( __identy ){
			if( typeof __identy == 'string' ){
			var drawer = document.querySelector(".pp-drawer[drawer-id='"+__identy+"']");
			var scrim = document.querySelector(".pp-drawer-scrim[drawer-id='"+__identy+"']");
			if(drawer != null  && scrim != null  ){
				
				this.drawer = drawer;
				this.scrim = scrim;
				this.scrim.addEventListener('animationend',___lisenAnimation);
				this.drawer.addEventListener('animationend',___lisenAnimation);
				this.scrim.addEventListener('click',function(){
					if( this.__srimClose == true ){
						this.close();	
					}
				}.bind(this));


			}else{console.warn("pp-drawer say :  drawer-id='"+__identy+"' no found");}			
		}else{ console.warn("pp-drawer say : drawer-id must be string") }

		}
		// ------------------------------------------------------------------------
		this.open = function( ){
			if( this.drawer != null && this.scrim != null && this.__open == false ){

				this.drawer.classList.remove("hidden_drawer");	
				this.drawer.classList.add("pp-drawer--open");

				this.scrim.classList.add("fadeIn");
				this.scrim.classList.remove("hidden");
				this.__open = true;

			}
		}
		// ------------------------------------------------------------------------
		this.close = function(){
			 if( this.drawer != null && this.scrim != null && this.__open == true ){			 				 	
		 		this.__open = false;
				this.drawer.classList.add("pp-drawer--close");
				this.scrim.classList.add("fadeOut");
			 }
		}
		// ------------------------------------------------------------------------
		this.init(identy);
		
	}

}))