
$(function(){
	$("#slides").slidesjs({
	
	width: 940,
	height: 450,
		
	navigation: {
		active:true,
		effect:"slide"
	},
	
	pagination: {
		active:false,
	},

	effect: {
  		slide: {
    		speed: 1000
  
  		}	
  	},

  	play: {
  		effect: "slide",
  		interval:5000,
  		auto:false,
  		pauseOnHover:true
  	}
});
});
