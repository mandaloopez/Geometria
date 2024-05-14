function calcularAreaRectangulo() {


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
       // Grosor de línea
       contexto.lineWidth = 6;
        // Dibujar el rectángulo solicitado 
        contexto.strokeRect(50, 50, base, altura);
        contexto.fillRect(50, 50, base, altura);
        // Color de línea
        contexto.strokeStyle = "#00ff00";
         // Grosor de línea
       contexto.lineWidth = 3;
       contexto.beginPath();
        // Nos posicionamos en el punto de partida
        contexto.moveTo(50, 50);//(x,y)
        // Dibujamos una línea hacia la esquina inferior derecha
        contexto.lineTo(base+50, altura+50);
        // Hacemos que se dibuje la recta
        contexto.stroke();
         
        // Color de relleno
        contexto.fillStyle = "#000000";
        // Color de línea
        contexto.strokeStyle = "#000000";
        //imprimo a y b, luego calculo y la imprimo
        contexto.fillText("a: "+alturaOriginal.toFixed(2),2,((altura/2)+50));
        contexto.fillText("b: "+baseOriginal.toFixed(2),((base/2)+25),(70+altura));

        //Calculo diagonal
        let diagonal=Math.sqrt(Math.pow(baseOriginal,2)+ Math. pow(alturaOriginal,2));
        contexto.fillText("c: "+diagonal.toFixed(2),(base/2)+55,((altura/2)+45));
        
        

        //Calculo el area que es lo ultimo que me falta
        let area=(baseOriginal*alturaOriginal).toFixed(2);
        let perimetro=((baseOriginal+alturaOriginal)*2).toFixed(2);
        //creo textoResultado, que es donde meto todo para imprimirlo debajo 
        let textoResultado = "<h2>Resultados:</h2>" +
                     "<b>El área es: " + area + "u²</b>"+"<br><br>" +
                     "<b>El perímetro es: " + perimetro + "</b>"+"<br><br>" +
                     "<b>La diagonal es: "+diagonal.toFixed(2)+"</b>"+"<br></br>";

        //let textoResultado="<h2>Resultados:</h2><br>"<h4>El area es:</h4><br> "+area+"u² <br> "<h4>El perimetro es:<br> "+perimetro+"+"<br><h4> El diagonal es:</h4> "<br>"+diagonal.toFixed(2);
        
        document.getElementById('resultado').innerHTML = textoResultado;
    }
    
}

