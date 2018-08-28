<!--
	window.onload = function() {
		var reproducirVideo1 = document.getElementById('reproducir_video1');
		reproducirVideo1.addEventListener("click", reproducirPrimerVideo);
		
		var pausarVideo1 = document.getElementById('pausar_video1');
		pausarVideo1.addEventListener("click", pausarPrimerVideo);
		
		var detenerVideo1 = document.getElementById('detener_video1');
		detenerVideo1.addEventListener("click", detenerPrimerVideo);
		
		var reproducirVideo2 = document.getElementById('reproducir_video2');
		reproducirVideo2.addEventListener("click", reproducirSegundoVideo);
		
		var pausarVideo2 = document.getElementById('pausar_video2');
		pausarVideo2.addEventListener("click", pausarSegundoVideo);
		
		var detenerVideo2 = document.getElementById('detener_video2');
		detenerVideo2.addEventListener("click", detenerSegundoVideo);
	}
	
	function reproducirPrimerVideo() {
		var primerVideo = document.getElementById('videoPlayer1');
		primerVideo.play();
	}
	
	function pausarPrimerVideo() {
		var primerVideo = document.getElementById('videoPlayer1');
		primerVideo.pause();
	}
	
	function detenerPrimerVideo() {
		var primerVideo = document.getElementById('videoPlayer1');
		primerVideo.load();
	}
	
	function reproducirSegundoVideo() {
		var segundoVideo = document.getElementById('videoPlayer2');
		segundoVideo.play();
	}
	
	function pausarSegundoVideo() {
		var segundoVideo = document.getElementById('videoPlayer2');
		segundoVideo.pause();
	}
	
	function detenerSegundoVideo() {
		var segundoVideo = document.getElementById('videoPlayer2');
		segundoVideo.load();
	}
	
//-->