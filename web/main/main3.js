function validar(){
    var user = "Desarrolladores"
    var pass = "TrayectoWeb"
    var cajauser = document.getElementById("usuario").value;
    var cajapass = document.getElementById("pass").value;
    if(cajauser == ""){
        alert ( " El  campo usuario esta vacio");
    }
    else if (cajapass == ""){
        alert ( " El campo password esta vacio");
        
    }
    else {
        if(user == cajauser && pass == cajapass ){
            alert ( " bienvenida: "+user );
   
        }
        else{
            alert ( " No eres un usuario");

        }
    }
}