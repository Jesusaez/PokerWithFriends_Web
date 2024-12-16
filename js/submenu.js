document.addEventListener("DOMContentLoaded", () => {
    const submenu = document.getElementById("submenu");
    const footer = document.querySelector("footer");
    const fondo = document.querySelector("#fondo");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cuando el footer es visible, ocultar el submenú
            submenu.classList.add("hidden");
          } else {
            // Cuando el footer no es visible, mostrar el submenú
            submenu.classList.remove("hidden");
          }
        });
      },
      { threshold: 0.5 } // Observa si el 10% del footer es visible
    );
  
    observer.observe(footer);
    observer.observe(fondo);
  });