/*

Queremos realizar un programa de descuentos, donde queremos saber cual es el precio final
luego del descuento, para esto tendremos que restar el porcentaje de descuento al precio 
y asi sabremos caunto sera su precio real

formula : 

Precio real * (100% - % de descuento)/100
*/

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100

    return precioConDescuento;
}



function precioConDescuento(){
    const inputPrice = document.getElementById("inputPrice"); //Esta parte del codigo llama a el input que llevara el precio
    const priceValue = inputPrice.value;  // Esta variable con el atributo value recopge el valor (value) que pondran los usuarios en ese input

    const inputDiscount = document.getElementById("inputDiscount"); //Este es el input donde se ingresara el precio de descuento
    const discountValue = inputDiscount.value; //Esta variable tomara el valor que se ponga en el input

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con descuento son: $" + precioConDescuento;
}