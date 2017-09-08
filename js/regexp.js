
	
	var Nombre = document.getElementById('nombre');
	var Formulario = document.getElementsByTagName('form')[0];

		Formulario.onsubmit = function( ){
			
			var Expreg = /^\d{5}[\(]\d{4}[A-Z]{3}[\)][\[][\-]\d{2}[\]]$/;
			
			var Repuesta = Expreg.test (Nombre.value);
			if(Repuesta == false){
				alert('no coincide');
			return false;
			}else { 
    			alert('coincide');
    		return false;
			}
			
		}

