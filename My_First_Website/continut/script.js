(function(){
	
	var preload = document.getElementById("preload");
	var loading = 0;
	var id= setInterval(frame, 64);
	
	function frame(){
		if(loading == 100){
			clearInterval(id);
			window.open("continut/Cadre.html", "_self");
		}else{
			loading = loading + 1;
			 if(loading == 90){
				 preload.stylel.animation = "fadeaout 1s ease"
			 }
		}
	}
	
})();