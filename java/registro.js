document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = loginForm.querySelector('input[type="email"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;

            // Simulación de validación
            if (email && password) {
                alert('Inicio de sesión exitoso');
            } else {
                alert('Por favor, complete todos los campos');
            }
        });
    }
});
