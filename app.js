//Variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos= 3;
console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
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
