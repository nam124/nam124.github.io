var a = 0;
var i =0;
function abc() {

	a += 1;
	while (true){
		if(a==1) {
			Body.style.background = "url('image/awTZ4E.jpg') no-repeat 50% 70%  fixed";
			head.style.background = "url('image/awTZ4E.jpg') no-repeat 50% 70%  fixed";
			Body.style.color ="black";
			line3.style.color ="black";
		

			break;
		}

		if(a==2) {

			Body.style.background = "url('image/aa.jpg') no-repeat 50% 80% fixed";
			head.style.background = "url('image/aa.jpg') no-repeat 50% 80% fixed";
			Body.style.color ="#DBA901";
			line3.style.color ="#DBA901";
			break;
		}
		if (a==3) {
			Body.style.background = "none";
			head.style.background = "#E8F1F2";
			Body.style.color ="black";
			line3.style.color ="black";
			a=0; 
			break;
		}
	}
		
	};