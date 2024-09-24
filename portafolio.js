// Actualizar el año en el pie de página
document.getElementById('current-year').textContent = new Date().getFullYear();

// Manejar el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando fetch para enviar los datos a un servidor

    alert('Gracias por tu mensaje. Te contactaré pronto.');
    this.reset();
});

// Animación suave al hacer clic en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});