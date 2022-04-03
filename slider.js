	var span = document.getElementsByTagName('span');
	var div = document.getElementsByTagName('div');
	var counter = 0;
	span[1].onclick = ()=>{
		counter++; 
		for(var i of div)
		{	
			if (counter==0) {i.style.left = "0px";}
			if (counter == 1) { i.style.left = "-320px";}
			if (counter==2) {i.style.left = "-640px";}
			if (counter==3) {i.style.left = "-960px";}
			if (counter == 4) { i.style.left = "-1280px"; }
			if (counter == 5) { i.style.left = "-1600px"; }
			if (counter == 6) { i.style.left = "-1920px"; }
			
			if (counter > 6) {counter=0;}
		}
	}
	
	span[0].onclick = ()=>{
		counter--; 
		for(var i of div)
		{	
			if (counter==0) {i.style.left = "0px";}
			if (counter==1) {i.style.left = "-320px";}
			if (counter==2) {i.style.left = "-640px";}
			if (counter==3) {i.style.left = "-960px";}
			if (counter==4) {i.style.left = "-1280px";}
			if (counter < 0) {counter=4;}
		}
	}
