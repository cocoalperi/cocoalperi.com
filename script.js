window.onload = function() {
    // Filtros de la sección "Work"
    const filters = document.querySelectorAll(".filter");
    
    if (filters.length > 0) {
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
    }
};
            });
        };
    });
};
