
function cambiarPizzarra(){
    let variable= document.getElementById('calculo').options[document.getElementById('calculo').selectedIndex].value;

   
    switch(variable){
        case "areaRectangulo":
            llamarPizzarra('./html/areaRectangulo.html');    
        break;
        case "areaTriangulo":
            llamarPizzarra('./html/areaTriangulo.html');
            break;
        case "Trapecio":
            llamarPizzarra('./html/trapecio.html');
            break;
        case "areaCirculo":
            llamarPizzarra('./html/areaCirculo.html');
            break;
        case "agujeroCirculo":
            llamarPizzarra('./html/agujeroCirculo.html');
            break;
    }

    
}

function llamarPizzarra(direccion){
    fetch(direccion)
    .then(response => response.text())
    .then(data => {
        document.getElementById('div-pizzarra').innerHTML = data;
    });
}




function calcularTamanoParaImprimirBAT(base,altura,tamañoAImprimir){

    
  

    if(base<=altura){
        base=base/altura*tamañoAImprimir;
        altura=1*tamañoAImprimir;
    }else{
        altura=altura/base*tamañoAImprimir;
        base=1*tamañoAImprimir;
    }
    return [base, altura];
}
function calcularTamanoParaImprimirBATT(base,altura,tamañoAImprimir,techo){
    
    if(techo>=base&&techo>=altura){
        base=base/techo*tamañoAImprimir;
        altura=altura/techo*tamañoAImprimir;
        techo=tamañoAImprimir;
    }else if(base>=techo&&base>=altura){
        techo=techo/base*tamañoAImprimir;
        altura=altura/base*tamañoAImprimir;
        base=tamañoAImprimir;
    }else{
        techo=techo/altura*tamañoAImprimir;
        base=base/altura*tamañoAImprimir;
        altura=tamañoAImprimir;
    }
    return [base, techo,altura];
}

function imprimirImagenCanvas(contexto, dirImagen,x, y){
    let img = new Image();
    img.src = dirImagen;
    
    img.onload = function() {
        // El código para dibujar la imagen en el canvas irá aquí
        if (img.width > img.height) {
            ancho = 15;
            alto = (ancho / img.width) * img.height;
          } else {
            alto = 15;
            ancho = (alto / img.height) * img.width;
        }
        contexto.drawImage(img, x, y, 15, 15);
    }
}

function crearCanvas(ANCHURA_CANVAS, ALTURA_CANVAS){

    var divCanvas = document.getElementById('div-canvas').offsetWidth;
    console.log("creo canvas con ancho: "+divCanvas);
    
   
    // Obtener el elemento del DOM
    const canvas = document.getElementById("canvas");
    
    canvas.width = ANCHURA_CANVAS;
    canvas.height = ALTURA_CANVAS;
    canvas.style.width = (divCanvas*0.9)+'px';
    canvas.style.height = 'auto';
   
    // Del canvas, obtener el contexto para poder dibujar
    const contexto = canvas.getContext("2d");
   
    // Establecer el color de fondo del canvas
    contexto.fillStyle = "#ED2E65";
     // Dibujar un rectángulo que ocupe todo el canvas
     dibujarRectanguloCurvo(contexto, 5, 5, canvas.width-10, canvas.height-10, 30,10);
    // Grosor de línea
    contexto.lineWidth = 3;
    // Color de línea
    contexto.strokeStyle = "#000000";
    // Color de relleno
    contexto.fillStyle = "#00AFEF";
    //cambio la fuente
    contexto.font="bold italic 12px arial";
    return contexto;
}


function ocultarImagenEjemplo(idImagen){
    let imagenEjemplo=document.getElementById(idImagen);
    imagenEjemplo.style.display = "none";
    let aside=document.getElementById("aside");
    aside.style.display= "inline-block";
    let canvas=document.getElementById("canvas");
    canvas.style.display="block";
}