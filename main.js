document.getElementById('conversor-medidas').addEventListener('submit', function(e) {
    e.preventDefault();
   
    var alto = parseFloat(document.getElementById('alto').value);
    var ancho = parseFloat(document.getElementById('ancho').value);
    var largo = parseFloat(document.getElementById('largo').value);
    var porcentaje = parseFloat(document.getElementById('porcentaje').value);
    var opcion = document.getElementById("opcion").value;


    if (opcion == 'ampliar'){

        // Calcula los nuevos valores según el porcentaje proporcionado
    var nuevoAlto = alto + (alto * porcentaje / 100);
    var nuevoAncho = ancho + (ancho * porcentaje / 100);
    var nuevoLargo = largo + (largo * porcentaje / 100);

    } else if (opcion == 'reducir'){

    var nuevoAlto = alto - (alto * porcentaje / 100);
    var nuevoAncho = ancho - (ancho * porcentaje / 100);
    var nuevoLargo = largo - (largo * porcentaje / 100);


    }

    // Muestra los resultados en el elemento con id "resultados"
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = 'Nuevo Alto: ' + nuevoAlto.toFixed(2) + '<br>';
    resultadosDiv.innerHTML += 'Nuevo Ancho: ' + nuevoAncho.toFixed(2) + '<br>';
    resultadosDiv.innerHTML += 'Nuevo Largo: ' + nuevoLargo.toFixed(2);

});