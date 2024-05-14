function calcularTrapecio(){

         
    let base=parseFloat(document.getElementById("phBase").value);
    let techo=parseFloat(document.getElementById("phTecho").value);
    let altura=parseFloat(document.getElementById("phAltura").value);

    ocultarImagenEjemplo("imagenEjemplo");
    

    if(!base || !altura|| !techo|| base<=0||altura<=0|| techo<=0){
        alert("Datos erroneos o faltantes.");
    }else{
        var baseOriginal=base;
        var alturaOriginal=altura;
        var techoOriginal=techo;
        let tamañoAImprimir=250;

        //Calculo base y altura para redimensionarlo
        [base,techo,altura]=calcularTamanoParaImprimirBATT(base,altura,tamañoAImprimir,techo);
        //Genero el Canvas
        let ALTURA_CANVAS = altura+140;
        let ANCHURA_CANVAS;
        if(techo>base){
            ANCHURA_CANVAS = techo+140; 
        }else{
            ANCHURA_CANVAS = base+140; 
        }
               
        const contexto=crearCanvas(ANCHURA_CANVAS, ALTURA_CANVAS);


        contexto.beginPath();
        // Nos posicionamos en el punto de partida 
        //comenzamos a dibujar arriba a la izquierda
        contexto.moveTo(50, 50);
        //movemos el lapiz hacia abajo para empezar la base
        contexto.lineTo(50, 50+altura);//(x,y)
        //movemos el lapiz a la derecha para dibujar la base
        contexto.lineTo((50+base), (50+altura));//(x,y)
        //nos movemos al punto final donde termina el techo
        contexto.lineTo(50+techo, 50);//(x,y)
        //cerramos el dibujo y en el proceso se realiza el techo    
        // Y dejamos que JS cierre nuestro dibujo
        contexto.closePath();
        // Hacemos que se dibuje
        contexto.stroke();
        // Lo rellenamos
        contexto.fill();

         
        //la superficie es la superficie de su rectangulo mas la sup de su triangulo
        let superficie=(alturaOriginal*((baseOriginal+techoOriginal)/2)).toFixed(2);
        let baseTriangulo;
        if(techoOriginal>baseOriginal){
            baseTriangulo=techoOriginal-baseOriginal;
        }else{
            baseTriangulo=baseOriginal-techoOriginal;
        }
        let hipotenusa=Math.sqrt(Math.pow(baseTriangulo,2)+ Math.pow(alturaOriginal,2));

        let perimetro=(alturaOriginal+baseOriginal+techoOriginal+hipotenusa).toFixed(2);
        
         // Color de relleno
         contexto.fillStyle = "#000000";
        //imprimo a y b, luego calculo y la imprimo
        contexto.fillText("a: "+alturaOriginal.toFixed(2),2,((altura/2)+50));
        contexto.fillText("b: "+baseOriginal.toFixed(2),((base/2)+25),(70+altura));
        contexto.fillText("c: "+techoOriginal.toFixed(2),((techo/2)+25),40);
        contexto.fillText("d: "+hipotenusa.toFixed(2),((base+techo)/2)*1.5,((altura/2))+55);


        let textoResultado ="<h2>Resultados:</h2>"+
        "<b>El area es: "+superficie+"u²</b>"+"<br><br>"+ 
        "<b>El perimetro es: "+perimetro+"</b>"+"<br><br>"+
        "<b>Longitud del lado D es:"+hipotenusa.toFixed(2)+"</b>"+"<br><br>";
        
        document.getElementById('resultado').innerHTML = textoResultado;

    }
}