
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado(lado){
    return  lado * lado;
} 
console.groupEnd();




console.group("Triangulos");

function perimetroTriangulo (lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo (base,altura){
    return (base*altura)/2;
}

console.groupEnd(); 



//Codigo del Circulo
console.group("Circulos");

//Diametro

function diametro(radio){
    return radio*2;
}
    

    //Pi
const Pi = Math.PI;
console.log("PI es: "+Pi+"cm");

    //Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
return (radio * radio) * PI;
};

console.groupEnd(); 

//Interactuamos con HTML

/*Para buscar elementos de nuestro html utilizamos

    document.getElementById("Nombre del input")  --> Esto nos mostrara una etiqueta de html

*/

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo 

function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert (perimetro)
}

function calcularAreaTriangulo(){
    const input = document.getElementById("inputTriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
    alert (area);
}

//Circulo 

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value 

    const perimetro =  perimetroCirculo(value); 
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value 

    const area = areaCirculo(value);
    alert(area);
}