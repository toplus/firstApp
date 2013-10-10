function traduci(nome){
	if(nome == "mattia")
		document.getElementById('nome2').innerHTML = 'Rutto di culo';
	else{
		
		switch(Math.ceil(Math.random()*4)){
			case 1: nome2 = 'Rombo di Tuono';
				break;
			case 2: nome2 = 'Toro seduto';
				break;
			case 3: nome2 = 'Nuvola rossa';
				break;
			case 4: nome2 = 'Occhio di volpe';
				break;
		}
		document.getElementById('nome2').innerHTML = nome2;	
	}
}