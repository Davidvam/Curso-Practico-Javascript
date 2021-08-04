
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