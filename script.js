// Esperar a que cargue el contenido
document.addEventListener('DOMContentLoaded', () => {
  
  // LOGICA DEL VOLUMEN
  const video = document.getElementById('heroVideo');
  const volumeBtn = document.getElementById('volumeToggle');
  const volIcon = document.getElementById('volIcon');

  if (volumeBtn && video) {
    volumeBtn.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        volIcon.textContent = '🔊';
      } else {
        video.muted = true;
        volIcon.textContent = '🔇';
      }
    });
  }

  // LOGICA DE FILTROS DE TRABAJO
  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      document.querySelectorAll(".project").forEach(project => {
        const visible = filter === "all" || project.dataset.category === filter;
        project.classList.toggle("hidden", !visible);
      });
    });
  });
});
