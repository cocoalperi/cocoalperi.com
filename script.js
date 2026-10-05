document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filters .filter');
  const projects = document.querySelectorAll('.project');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Marcamos el botón activo
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      // Si hace clic en "All", sube al inicio de la lista de proyectos
      if (filterValue === 'all') {
        const workSection = document.querySelector('#work');
        if (workSection) {
          workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }

      // Busca el primer proyecto que coincida con la categoría seleccionada
      const targetProject = Array.from(projects).find(project => {
        const category = project.getAttribute('data-category');
        return category && category.toLowerCase() === filterValue.toLowerCase();
      });

      // Si lo encuentra, hace scroll suave hacia él
      if (targetProject) {
        // block: 'center' o 'start' para alinearlo
        targetProject.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
});
