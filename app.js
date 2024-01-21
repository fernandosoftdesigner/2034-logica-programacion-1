//Variables
let numeroSecreto = 4;
let numeroUsuario = prompt("Me indicas un número por favor:");

console.log(numeroUsuario);
/*Este codigo realiza la comparació*/

if (numeroUsuario == numeroSecreto) {
    //Acertamos la condición
    alert(`Acertaste, el número es : ${numeroUsuario}`);
} else{
    if (numeroUsuario > numeroSecreto) {
        alert('El número secreto es menor');
    } else {
        alert('El numero secreto es mayor');
    }
    //No Acertamos la condición
    alert('Lo siento, no acertaste el número');
}

