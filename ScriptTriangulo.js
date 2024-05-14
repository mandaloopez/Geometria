function calcularAreaTriangulo() {

    
    let base=parseFloat(document.getElementById("phBase").value);
    let altura=parseFloat(document.getElementById("phAltura").value);
    ocultarImagenEjemplo("imagenEjemplo");
    if(!base || !altura|| base<=0||altura<=0){
        alert("Datos erroneos o faltantes.");
    }else{

        var baseOriginal=base;
        var alturaOriginal=altura;
        let tamañoAImprimir=250;

        



        //Calculo base y altura para redimensionarlo
        [base,altura]=calcularTamanoParaImprimirBAT(base,altura,tamañoAImprimir);

        const ALTURA_CANVAS = altura+120;
        const ANCHURA_CANVAS = base+120;
        
        const contexto=crearCanvas(ANCHURA_CANVAS, ALTURA_CANVAS);
        contexto.beginPath();
            // Grosor de línea
        contexto.lineWidth = 6;
        // Nos posicionamos en el punto de partida
        contexto.moveTo(50, 50);//(x,y)
        // Dibujamos una línea hacia abajo
        contexto.lineTo(50, 50+altura);
        // Desde el fin de esa línea, 
        // dibujamos una hacia la derecha
        contexto.lineTo(50+base, 50+altura);
        // Y dejamos que JS cierre nuestro dibujo
        contexto.closePath();
        // Hacemos que se dibuje
        contexto.stroke();
        // Lo rellenamos
        contexto.fill();
        //cambio la fuente
        contexto.font="bold italic 12px arial";
        // Color de relleno
        contexto.fillStyle = "#000000";

        contexto.beginPath();
        
        //Calculo hipotenusa
        let hipotenusa=Math.sqrt(Math.pow(baseOriginal,2)+ Math. pow(alturaOriginal,2));
        contexto.fillText("c: "+hipotenusa.toFixed(2),(base/2)+55,((altura/2)+45));

        //calculo los angulos y los imprimo
        let alfa=Math.asin(alturaOriginal/hipotenusa)*180/Math.PI;
        let beta=Math.acos(alturaOriginal/hipotenusa)*180/Math.PI;
        contexto.fillText(beta.toFixed(2)+" °",60,45);
        contexto.fillText(alfa.toFixed(2)+" °",73+base,55+altura);
        
        //imprimo las imagenes de beta y alfa, son los angulos no rectos del triangulo
        imprimirImagenCanvas(contexto, "Imagenes/beta.png",42, 33);
        imprimirImagenCanvas(contexto, "Imagenes/alfa.png",55+base,40+altura);

        
        //imprimo a y b, luego calculo y la imprimo
        contexto.fillText("a: "+alturaOriginal.toFixed(2),5,((altura/2)+50));
        contexto.fillText("b: "+baseOriginal.toFixed(2),((base/2)+25),(70+altura));

        
        contexto.closePath();

        //Calculo el area y perimetro que es lo ultimo que me falta
        let area=(baseOriginal*alturaOriginal/2).toFixed(2);
        let perimetro=(baseOriginal+alturaOriginal+hipotenusa).toFixed(2);
        //creo textoResultado, que es donde meto todo para imprimirlo debajo   
        let textoResultado="<h2>Resultados:</h2>"+
        "<b>El area es "+area+"u² "+"<br><br>"+
        "<b>El perimetro es "+perimetro+" <br><br>"+
        "<b>La Hipotenusa es: "+hipotenusa.toFixed(2)+"<br><br>"+
        "<b>El angulo alfa es: "+alfa.toFixed(2)+"<br><br>"+
        "<b>El angulo beta es: "+beta.toFixed(2)+"<br><br>";
        
        document.getElementById('resultado').innerHTML = textoResultado;
    }
    
}

