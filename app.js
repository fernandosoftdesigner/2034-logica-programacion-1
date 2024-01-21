//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos= 2;
while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    /*Este codigo realiza la comparació*/

    if (numeroUsuario == numeroSecreto) {
        //Acertamos la condición
        alert(`Acertaste, el número es : ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos ==1 ? 'vez' : 'veces'}`);
    } else{
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
       // palabraVeces = 'veces';
        if (intentos > 3) {
            alert(`Llegaste al número maximo de ${maximosIntentos} intentos`);
            break;
        }
        //No Acertamos la condición
        //alert('Lo siento, no acertaste el número');
    }
}
