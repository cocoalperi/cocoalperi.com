// Esperamos a que la ventana cargue totalmente
window.onload = function() {
    
    const video = document.getElementById('heroVideo');
    const volumeBtn = document.getElementById('volumeToggle');
    const volIcon = document.getElementById('volIcon');

    // Comprobamos que los elementos existen para evitar errores
    if (video && volumeBtn) {
        volumeBtn.onclick = function() {
            if (video.muted) {
                video.muted = false;
                volIcon.innerHTML = "🔊"; // Icono con sonido
            } else {
                video.muted = true;
                volIcon.innerHTML = "🔇"; // Icono silencio
            }
        };
    }

    // Filtros de la sección "Work"
    const filters = document.querySelectorAll(".filter");
    filters.forEach(button => {
        button.onclick = function() {
            const category = this.getAttribute("data-filter");
            
            // Cambiar clase activa en botones
            filters.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Filtrar proyectos
            document.querySelectorAll(".project").forEach(project => {
                if (category === "all" || project.getAttribute("data-category") === category) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        };
    });
};
