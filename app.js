function actualizarProgreso() {
    var ahorrado = document.getElementById('ahorrado').value;
    var meta = document.getElementById('meta').value;
    var barraProgreso = document.getElementById('barra-progreso');
    var felicitacion = document.getElementById('felicitacion');
    
    
    if(ahorrado && meta) {
        var porcentaje = (ahorrado / meta) * 100;
        barraProgreso.style.width = porcentaje + '%';
        barraProgreso.textContent = porcentaje.toFixed(2) + '%';
        
        if(porcentaje >= 100) {
            felicitacion.style.display = 'block'; // Muestra el mensaje de felicitaciones
        } else {
            felicitacion.style.display = 'none'; // Oculta el mensaje si el porcentaje es menor a 100
        }
    } else {
        alert('Por favor, ingresa el dinero ahorrado y la meta de ahorro.');
    }
}
