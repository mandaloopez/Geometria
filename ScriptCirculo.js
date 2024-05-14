function calcularCirculo(){

    let radio=parseFloat(document.getElementById("phRadio").value);
    let angulo = document.getElementById('phAngulo').value;
    ocultarImagenEjemplo("imagenEjemplo");

    const ALTURA_CANVAS = 250;
    const ANCHURA_CANVAS = 250;
    const contexto=crearCanvas(ANCHURA_CANVAS, ALTURA_CANVAS);
    console.log("antes de entrar a dibujar");
    dibujarCirculo(contexto,radio,angulo);

    let superficie=(Math.PI*(radio**2)).toFixed(2);
    let perimetro=(2*Math.PI*radio).toFixed(2);
    // Calcular el área del sector circular
    let area = (angulo / 360) * Math.PI * Math.pow(radio, 2);
    
    let perimetroArco= radio*(angulo/57.3);
    let cuerda=2*radio*Math.sin((angulo/57.3)/2);

    let textoResultado="La superficie del circulo es "+superficie+"u² (unidades cuadradas) </br> El perimetro del circulo es "+perimetro
    +" </br> El area del sector circular es "+area.toFixed(2)+"u² (unidades cuadradas). </br> Perimetro del sector circular "+(perimetroArco+radio*2).toFixed(2)+
    " </br> El perimetro del arco de circuferencia es "+perimetroArco.toFixed(2)+"</br> La cuerda es: "+cuerda.toFixed(2)+".";
        
    document.getElementById('resultado').innerHTML = textoResultado;


}
function dibujarCirculo(contexto,radio, angle) {
    console.log("Dibujo todo");
    const radius = canvas.width / 2.5;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    // Establecer el color de fondo del canvas
    contexto.fillStyle = "#ED2E65";
    // Dibujar un rectángulo que ocupe todo el canvas
    dibujarRectanguloCurvo(contexto, 5, 5, canvas.width-10, canvas.height-10, 30,10);

    contexto.fillStyle = "#00AFEF";
    // Dibujar el círculo
    contexto.beginPath();
    contexto.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    contexto.stroke();
    contexto.fill();// Lo rellenamos

    // Dibujar el sector circular
    // Color de línea
    contexto.strokeStyle = "#FFFFFF";
    contexto.beginPath();
    contexto.moveTo(centerX, centerY);
    contexto.arc(centerX, centerY, radius, -((angle / 180) * Math.PI), 0);
    contexto.closePath();
    contexto.fillStyle = 'red';
    contexto.fill();


    
}
function dibujarRectanguloCurvo(contexto, x, y, width, height, borderRadius, grosorLinea) {
    contexto.beginPath();
    contexto.moveTo(x + borderRadius, y);
    contexto.lineTo(x + width - borderRadius, y);
    contexto.arcTo(x + width, y, x + width, y + borderRadius, borderRadius);
    contexto.lineTo(x + width, y + height - borderRadius);
    contexto.arcTo(x + width, y + height, x + width - borderRadius, y + height, borderRadius);
    contexto.lineTo(x + borderRadius, y + height);
    contexto.arcTo(x, y + height, x, y + height - borderRadius, borderRadius);
    contexto.lineTo(x, y + borderRadius);
    contexto.arcTo(x, y, x + borderRadius, y, borderRadius);
    contexto.closePath();
    contexto.lineWidth = grosorLinea;
    contexto.stroke();
    contexto.fill();
    contexto.lineWidth = 3;
  }