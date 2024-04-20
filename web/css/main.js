function buscar(){
    var letra = document.getElementById ("caja").value;
    alert("dijitaste: "+" letra")
    switch(letra){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': 
        alert("la letra: "+letra+" es una vocal");
        break;
        default:
        alert("la letra: "+letra+" es una consonate")
        break;    
    }
}
