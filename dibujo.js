var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var d = document.getElementById("dibujito");
var ancho= d.width;
var lienzo = d.getContext("2d");
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}
boton.addEventListener("click", dibujoPorClick);
function dibujoPorClick()
{
var xxx =  parseInt(texto.value);
var linea= xxx;
var l= 0;
var yi,xf;
var espacio = ancho / linea;


for ( l= 0; l < linea; l++)
{
    dibujarLinea("blue", 0, yi, xf, 300);
    dibujarLinea("green", 299, yi, xf,0);
    yi = espacio * l;
    xf = espacio *(l + 1 );
}
dibujarLinea ("red", 1,1,1,299);
dibujarLinea ("red", 1,299,299,299);
dibujarLinea ( "red", 299,1,1,1);
dibujarLinea ("red", 299,299,299,1);
    
}