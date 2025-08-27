function simulador(){
    let cNombres = document.getElementById('nombres_apellidos');
    let cTelefono = document.getElementById('telefono');
    let cEmail = document.getElementById('email');
    let cMonto = document.getElementById('monto_invertido');
    let cOpciones = document.getElementById('tiempo_inversion');
    
    // CAPTURAMOS EL ID DE LOS CAMPOS EN UNA CONSTANTE
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');

    // HACEMOS LA ACCIÓN DE QUITAR LA CLASE DISABLE DEL CONTPOST PARA PONERSELA AL CONTPRE
    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');
}

document.addEventListener('DOMContentLoaded' , function (){
    document.getElementById('calcular').addEventListener('click', simulador);
});