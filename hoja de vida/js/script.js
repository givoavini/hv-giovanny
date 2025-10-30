// === 🌙 MODO OSCURO ===
const modoBtn = document.getElementById("modo-btn");
modoBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modoBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// === 🟦 ANIMACIÓN DE BARRAS DE IDIOMA ===
window.addEventListener("DOMContentLoaded", () => {
  const niveles = document.querySelectorAll(".nivel");
  niveles.forEach(barra => {
    const valor = barra.getAttribute("data-nivel");
    setTimeout(() => {
      barra.style.width = valor + "%";
    }, 400);
  });
});

// === 🌍 CAMBIO DE IDIOMA (ES / EN) ===
const idiomaBtn = document.getElementById("idioma-btn");
let idiomaActual = "es";

if (idiomaBtn) {
  idiomaBtn.addEventListener("click", () => {
    const es = idiomaActual === "es";
    idiomaActual = es ? "en" : "es";
    idiomaBtn.textContent = es ? "🇪🇸 ES" : "🇬🇧 EN";

    if (es) {
      // ====== Inglés ======
      document.title = "Resume - Giovanny Vera";
      document.querySelector("h1").textContent = "Giovanny Antonio Vera Rodriguez";
      document.querySelector(".info p").textContent = "SYSTEMS ENGINEER";

      // Perfil
      document.querySelector("h3:nth-of-type(1)").textContent = "Profile";
      document.querySelector(".columna p").textContent =
        "Systems Engineer with experience in technical support, web development, and network administration. Specialist in process optimization and team management, with achievements in reducing operational times and improving customer satisfaction. Knowledge in HTML, CSS, PHP, JavaScript, SQL/MySQL, Cloud (AWS), and agile methodologies (Scrum).";

      // Contacto
      document.querySelectorAll("h3")[1].textContent = "Contact";
      document.querySelectorAll(".columna p b")[0].textContent = "Phone:";
      document.querySelectorAll(".columna p b")[1].textContent = "Email:";

      // Aptitudes
      document.querySelectorAll("h3")[2].textContent = "Skills";
      const skills = document.querySelectorAll(".aptitudes ul li");
      if (skills.length >= 4) {
        skills[0].textContent = "Decision making";
        skills[1].textContent = "Leadership";
        skills[2].textContent = "Analytical thinking";
        skills[3].textContent = "Problem solving";
      }

      // Experiencia
      document.querySelector("h2").textContent = "Work Experience";
      const exp = document.querySelectorAll(".experiencia");
      exp[0].querySelector("h4").textContent = "Senior Warranty Analyst";
      exp[0].querySelector(".fecha").textContent = "November 2023 – September 2025";
      exp[0].querySelector("p:last-of-type").textContent =
        "Documentation management, technical support, and coordination of teams/suppliers. Implemented process improvements in warranty handling, reducing claim times. Achievement: Developed an internal app for evidence management, cutting registration time by 3 minutes.";

      exp[1].querySelector("h4").textContent = "Junior Service Analyst";
      exp[1].querySelector(".fecha").textContent = "December 2021 – November 2023";
      exp[1].querySelector("p:last-of-type").textContent =
        "On-site technical support and configuration of computers and peripherals. Diagnosis and resolution of software and hardware issues. Implementation and maintenance of network infrastructure (structured cabling and access points).";

      exp[2].querySelector("h4").textContent = "On-site Technician";
      exp[2].querySelector(".fecha").textContent = "June 2021 – December 2021";
      exp[2].querySelector("p:last-of-type").textContent =
        "Preventive maintenance of hardware and software, with specialized technical support. Network monitoring and server validation. Achievement: Created a system image for fast deployment, doubling efficiency in equipment setup.";

      // Educación
      document.querySelectorAll("h2")[1].textContent = "Education";
      const edu = document.querySelectorAll(".educacion li");
      edu[0].innerHTML = "<b>Systems Engineering</b> – Ucompensar (2019 - 2024)";
      edu[1].innerHTML = "<b>Technology in Systems Analysis and Development</b> – Ucompensar (2019 - 2022)";
      edu[2].innerHTML = "<b>Database Operation and Maintenance</b> – Ucompensar (2019 - 2021)";
      edu[3].innerHTML = "<b>Technician in Networks and Maintenance</b> – Incap (2010 - 2011)";

      // Certificados
      document.querySelectorAll("h2")[2].textContent = "Certificates";
      const certs = document.querySelectorAll("section.centro p b");
      certs[0].textContent = "Scrum Fundamentals Certified (SFC)";
      certs[1].textContent = "IoT Fundamentals: Connecting Things";
      certs[2].textContent = "AWS Academy Cloud Foundations";
      certs[3].textContent = "CyberOps Associate";

      // Idiomas
      document.getElementById("idiomas-titulo").textContent = "Languages";

      // Footer
      document.querySelector("footer p").innerHTML = "© 2025 Giovanny Vera | Made with 💻 and ☕";
    } else {
      // ====== Español ======
      document.title = "Hoja de Vida - Giovanny Vera";
      document.querySelector("h1").textContent = "Giovanny Antonio Vera Rodriguez";
      document.querySelector(".info p").textContent = "INGENIERO DE SISTEMAS";

      document.querySelector("h3:nth-of-type(1)").textContent = "Perfil";
      document.querySelector(".columna p").textContent =
        "Ingeniero de Sistemas con experiencia en soporte técnico, desarrollo web y administración de redes. Especialista en optimización de procesos y gestión de equipos, con logros en reducción de tiempos operativos y mejora en la satisfacción del cliente. Conocimientos en HTML, CSS, PHP, JavaScript, SQL/MySQL, Cloud (AWS) y metodologías ágiles (Scrum).";

      document.querySelectorAll("h3")[1].textContent = "Contacto";
      document.querySelectorAll(".columna p b")[0].textContent = "Teléfono:";
      document.querySelectorAll(".columna p b")[1].textContent = "Correo:";

      document.querySelectorAll("h3")[2].textContent = "Aptitudes";
      const skills = document.querySelectorAll(".aptitudes ul li");
      if (skills.length >= 4) {
        skills[0].textContent = "Toma de decisiones";
        skills[1].textContent = "Liderazgo";
        skills[2].textContent = "Capacidad de análisis";
        skills[3].textContent = "Resolución de problemas";
      }

      document.querySelector("h2").textContent = "Experiencia Laboral";
      const exp = document.querySelectorAll(".experiencia");
      exp[0].querySelector("h4").textContent = "Analista de garantías senior";
      exp[0].querySelector(".fecha").textContent = "Noviembre 2023 – Septiembre 2025";
      exp[0].querySelector("p:last-of-type").textContent =
        "Gestión de documentación, soporte técnico y coordinación de equipos/proveedores. Implementación de mejoras en procesos de garantía reduciendo reclamaciones. Logro: Desarrollo de aplicación interna para gestión de evidencias, reduciendo en 3 minutos el tiempo promedio de registro.";

      exp[1].querySelector("h4").textContent = "Analista de servicios junior";
      exp[1].querySelector(".fecha").textContent = "Diciembre 2021 – Noviembre 2023";
      exp[1].querySelector("p:last-of-type").textContent =
        "Soporte técnico en sitio y configuración de equipos de cómputo y periféricos. Diagnóstico y solución de fallas en sistemas, aplicaciones y hardware. Implementación y mantenimiento de infraestructura de redes (cableado estructurado y puntos de acceso).";

      exp[2].querySelector("h4").textContent = "Técnico en Sitio";
      exp[2].querySelector(".fecha").textContent = "Junio 2021 – Diciembre 2021";
      exp[2].querySelector("p:last-of-type").textContent =
        "Mantenimiento preventivo de hardware y software, con soporte técnico especializado. Verificación del estado de red, monitoreo de servidores y validación de puntos de red. Logro: Creación de imagen de sistema para despliegue rápido, duplicando la eficiencia en el alistamiento de equipos.";

      document.querySelectorAll("h2")[1].textContent = "Educación";
      const edu = document.querySelectorAll(".educacion li");
      edu[0].innerHTML = "<b>Ingeniería de Sistemas</b> – Ucompensar (2019 - 2024)";
      edu[1].innerHTML = "<b>Tecnología en Análisis y Desarrollo de Sistemas</b> – Ucompensar (2019 - 2022)";
      edu[2].innerHTML = "<b>Técnica en Operación y Mantenimiento de BD</b> – Ucompensar (2019 - 2021)";
      edu[3].innerHTML = "<b>Técnico en Redes y Mantenimiento</b> – Incap (2010 - 2011)";

      document.querySelectorAll("h2")[2].textContent = "Certificados";
      const certs = document.querySelectorAll("section.centro p b");
      certs[0].textContent = "Scrum Fundamentals Certified (SFC)";
      certs[1].textContent = "IoT Fundamentals: Connecting Things";
      certs[2].textContent = "AWS Academy Cloud Foundations";
      certs[3].textContent = "CyberOps Associate";

      document.getElementById("idiomas-titulo").textContent = "Idiomas";
      document.querySelector("footer p").innerHTML = "© 2025 Giovanny Vera | Hecho con 💻 y ☕";
    }
  });
}
