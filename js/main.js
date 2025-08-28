function simulador() {

    // VARIABLES QUE CAPTURAN LOS VALORES DE LOS CAMPOS
    let cNombres = document.getElementById('nombres_apellidos').value;
    let cTelefono = document.getElementById('telefono').value;
    let cEmail = document.getElementById('email').value;
    let cMonto = document.getElementById('monto_invertido').value;
    let cOpciones = document.getElementById('tiempo_inversion').value;

    // CONSTANTES QUE CAPTURAN LAS ETIQUETAS SPAN EN LAS QUE SE MUESTRAN LOS VALORES POR ESO LA S DE SHOW
    const sTiempo = document.getElementById('sTiempo');
    const sInteres = document.getElementById('sInteres');
    const sTotal = document.getElementById('sTotal');
    const sGanancia = document.getElementById('sGanancia');
    const sNombres = document.getElementById('sNombres');
    const sCorreo = document.getElementById('sCorreo');



    // CAPTURAMOS EL ID DE LOS CAMPOS EN UNA CONSTANTE
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');

    // HACEMOS LA ACCIÓN DE QUITAR LA CLASE DISABLE DEL CONTPOST PARA PONERSELA AL CONTPRE


    // VARIABLES PARA REALIZAR LOS CÁLCULOS 
    let ganancia = 0;
    let total = 0;


    if (cNombres == "" || cEmail == "" || cMonto == "" || cOpciones == "") {
        alert("Por favor diligencie todos los campos");
    }
    else {

        contPost.classList.remove('disabled');
        contPre.classList.add('disabled');

        switch (cOpciones) {
            case '1':
                // En este case realizaremos el cálculo si el tiempo corresponde a un año
                ganancia = (cMonto * 0.008) * 12;
                total = parseInt(cMonto) + parseInt(ganancia);
                sTiempo.textContent = '12 meses';
                sInteres.textContent = '0.8%';
                break;

            case '2':
                // En este case realizaremos el cálculo si el tiempo corresponde a dos años
                ganancia = (cMonto * 0.013) * 24;
                total = parseInt(cMonto) + parseInt(ganancia);
                sTiempo.textContent = '24 meses';
                sInteres.textContent = '1.3%';
                break;

            case '3':
                // En este case realizaremos el cálculo si el tiempo corresponde a tres años
                ganancia = (cMonto * 0.017) * 36
                total = parseInt(cMonto) + parseInt(ganancia);
                sTiempo.textContent = '36 meses';
                sInteres.textContent = '1.7%';
                break;
        }
        sTotal.textContent = total;
        sGanancia.textContent = ganancia.toFixed(2);
        sNombres.textContent = cNombres;
        sCorreo.textContent = cEmail;

    }





}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click', simulador);
});