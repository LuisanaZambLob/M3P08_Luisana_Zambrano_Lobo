
function calcularFactorial() {
    var numero = parseInt(document.getElementById('numero').value);

    // Mensaje indicando que el número introducido no es correcto y volverá a preguntar
    if (numero < 0 || numero > 10) {
    alert('El número introducido no es correcto. Introduce un número entre 0 y 10.');
    return;
    }
    
    // Calcular el factorial
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
      factorial *= i;
    }

    // Mostrar el resultado en la página
    document.getElementById('resultado').textContent = 'El factorial de ' + numero + ' es: ' + factorial;
}