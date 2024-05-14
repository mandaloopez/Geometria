function calcularAgujero(){

    let diametro=parseFloat(document.getElementById("phDiametro").value);
    let agujeros = document.getElementById('phAgujeros').value;
    ocultarImagenEjemplo("imagenEjemplo");

    const ALTURA_CANVAS = 600;
    const ANCHURA_CANVAS = 600;
    const contexto=crearCanvas(ANCHURA_CANVAS, ALTURA_CANVAS);
    
    dibujarFondoAgujeros(contexto);    

    let angulo=360/agujeros;
    let anguloActual=0;
    console.log("angulo: "+angulo);
    // Convertir el ángulo a radianes
    var anguloEnRadian = 0;
    //dibujo el primer agujero
    dibujarAgujeros(contexto,anguloEnRadian);
    //dibujo el resto
    for(let i=0;i<agujeros;i++){
        anguloEnRadian = anguloActual * Math.PI / 180;
        dibujarAgujeros(contexto,anguloEnRadian);        
        anguloActual+=angulo;
    }
    let cuerda=(2*(diametro/2)*Math.sin((angulo/57.3)/2)).toFixed(2);
    let perimetro=(2*Math.PI*(diametro/2)).toFixed(2);
    let textoResultado = "<h2>Resultados:</h2>"+
    "<b>El espacio entre puntos debe ser de: " + cuerda + "</b>"+"<br><br>"+
    "<b>El perímetro del círculo es: " + perimetro + "</b>"+"<br><br>"+
    "<b>El angulo entre puntos respecto al centro es: " + angulo.toFixed(2) + "</b>"+"<br><br>";


    document.getElementById('resultado').innerHTML = textoResultado;


}

function dibujarFondoAgujeros(contexto) {
    
    const radius = canvas.width / 2.5;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    // Establecer el color de fondo del canvas
    contexto.fillStyle = "#ED2E65";
     // Dibujar un rectángulo que ocupe todo el canvas
     dibujarRectanguloCurvo(contexto, 10, 10, canvas.width-20, canvas.height-20, 30,20);

    contexto.fillStyle = "#00AFEF";
    // Dibujar el círculo
    contexto.beginPath();
    contexto.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    contexto.stroke();
    contexto.fill();// Lo rellenamos
    contexto.closePath();
       
}

function dibujarAgujeros(contexto,anguloEnRadian){
    const radius = canvas.width / 2.5;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    // Calcular las coordenadas (x, y) del punto en el círculo
    var x = centerX + radius * Math.cos(anguloEnRadian);
    var y = centerY + radius * Math.sin(anguloEnRadian);

    contexto.beginPath();
    contexto.fillStyle = "#FFF212";
    contexto.arc(x, y, 5, 0, 2 * Math.PI);
    contexto.stroke();
    contexto.fill();// Lo rellenamos
    contexto.closePath();
}