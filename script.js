function aleatorio(x){

    return Math.floor(Math.random() * x) + 1;
}

    var secret = aleatorio(20);

    var input = document.querySelector("input");

    function verifica(){
 
        if (input.value == ""){
            alert("Cadê o palpite");
        }
        else if(input.value == "0"){
            alert("Esse não vale, hein")
        }
        else if(input.value == secret){
            alert("Acertou,\nParabéns 🎉 " + secret);           
        }
        else if(secret>input.value){
            alert("Errou!!!\n\n O numero é maior");
        }
        else if(secret<input.value){
            alert("Errou!!!\n\n O numero é menor");
        }
    }
        
    var button = document.querySelector("button");

    button.onclick = verifica;
