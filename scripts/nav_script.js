
// NAV
const navToggle = document.getElementById("nav_stack");
const navMenu = document.getElementById("nav_box__menu");
const navConfig = document.getElementById("nav_box__config");

// Obtener los elementos li originales del nav_menu
const originalNavMenuItems = Array.from(navMenu.children);

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  if (navMenu.classList.contains("show")) {
    // Agregar los elementos li de config_menu al nav_menu
    const navConfigItems = navConfig.cloneNode(true).children;
    navMenu.append(...navConfigItems);
  } else {
    // Eliminar solo los elementos li clonados del nav_menu
    const allNavMenuItems = Array.from(navMenu.children);
    const clonedItems = allNavMenuItems.filter(item => !originalNavMenuItems.includes(item));
    clonedItems.forEach(item => item.remove());
  }
});

// Obtener todas las secciones de la página
const sections = document.querySelectorAll('.bloque');

// Crear un nuevo objeto IntersectionObserver
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    // Si la sección está visible
    if (entry.isIntersecting) {
      // Obtener el ID de la sección
      const sectionId = entry.target.id;

      // Actualizar el enlace activo en el menú de navegación
      updateActiveLink(sectionId);
    }
  });
}, {
  // Ajusta este valor según tus necesidades
  rootMargin: '-20% 0px -80% 0px'
});

// Observar cada sección
sections.forEach(section => {
  observer.observe(section);
});

// Función para actualizar el enlace activo en el menú de navegación
function updateActiveLink(sectionId) {
  // Obtener todos los enlaces de navegación
  const navLinks = document.querySelectorAll('#nav_box__menu a');

  // Remover la clase 'active' de todos los enlaces
  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
  });

  // Agregar la clase 'active' al enlace correspondiente a la sección actual
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref.includes(`#${sectionId}`)) {
      link.parentElement.classList.add('active');
    }
  });
}
