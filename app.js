//Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número por favor:");

console.log(numeroUsuario);
/*Este codigo realiza la comparació*/

if (numeroUsuario == numeroSecreto) {
    //Acertamos la condición
    alert(`Acertaste, el número es : ${numeroUsuario}`);
} else{
    //No Acertamos la condición
    alert('Lo siento, no acertaste el número');
}

