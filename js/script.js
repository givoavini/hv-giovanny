// 🌙 MODO OSCURO
const modoBtn = document.getElementById("modo-btn");

modoBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modoBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// 🟦 ANIMACIÓN BARRAS IDIOMA
window.addEventListener("DOMContentLoaded", () => {

  const niveles = document.querySelectorAll(".nivel");

  niveles.forEach(barra => {

    const valor = barra.getAttribute("data-nivel");

    setTimeout(() => {
      barra.style.width = valor + "%";
    }, 400);

  });

});


// 🌍 CAMBIO DE IDIOMA
const idiomaBtn = document.getElementById("idioma-btn");
let idiomaActual = "es";

idiomaBtn.addEventListener("click", () => {

  const es = idiomaActual === "es";
  idiomaActual = es ? "en" : "es";

  idiomaBtn.textContent = es ? "🇪🇸 ES" : "🇬🇧 EN";


  if (es) {

    // ===== INGLÉS =====

    document.title = "Resume - Giovanny Vera";

    document.getElementById("perfil-titulo").textContent = "Profile";
    document.getElementById("perfil-texto").textContent =
      "Systems Engineer with experience in IT support, infrastructure, and cloud technologies. Skilled in technical troubleshooting, system maintenance, and network administration. Knowledge in HTML, CSS, JavaScript, PHP, SQL/MySQL and AWS cloud services. Focused on process improvement and service optimization.";

    document.getElementById("contacto-titulo").textContent = "Contact";

    document.getElementById("aptitudes-titulo").textContent = "Skills";

    const skills = document.querySelectorAll("#aptitudes-lista li");

    skills[0].textContent = "Decision making";
    skills[1].textContent = "Leadership";
    skills[2].textContent = "Analytical thinking";
    skills[3].textContent = "Problem solving";

    document.getElementById("idiomas-titulo").textContent = "Languages";

    document.getElementById("exp-titulo").textContent = "Work Experience";

    document.getElementById("edu-titulo").textContent = "Education";

    document.getElementById("cert-titulo").textContent = "Certificates";

    document.querySelector("footer p").textContent =
      "© 2025 Giovanny Vera | Made with 💻 and ☕";

  } else {

    // ===== ESPAÑOL =====

    document.title = "Hoja de Vida - Giovanny Vera";

    document.getElementById("perfil-titulo").textContent = "Perfil";

    document.getElementById("perfil-texto").textContent =
      "Ingeniero de Sistemas con más de 4 años de experiencia en soporte técnico N1/N2, administración de infraestructura tecnológica y gestión de incidentes bajo cumplimiento de SLA. Con conocimientos en desarrollo web (HTML, CSS, JavaScript, PHP), bases de datos SQL/MySQL y servicios Cloud AWS.";

    document.getElementById("contacto-titulo").textContent = "Contacto";

    document.getElementById("aptitudes-titulo").textContent = "Aptitudes";

    const skills = document.querySelectorAll("#aptitudes-lista li");

    skills[0].textContent = "Toma de decisiones";
    skills[1].textContent = "Liderazgo";
    skills[2].textContent = "Capacidad de análisis";
    skills[3].textContent = "Resolución de problemas";

    document.getElementById("idiomas-titulo").textContent = "Idiomas";

    document.getElementById("exp-titulo").textContent = "Experiencia Laboral";

    document.getElementById("edu-titulo").textContent = "Educación";

    document.getElementById("cert-titulo").textContent = "Certificados";

    document.querySelector("footer p").textContent =
      "© 2025 Giovanny Vera | Hecho con 💻 y ☕";

  }

});
// === 📄 DESCARGAR CV EN PDF ===

const pdfBtn = document.getElementById("pdf-btn");

pdfBtn.addEventListener("click", () => {

  const cv = document.getElementById("cv");

  html2canvas(cv, {
    scale: 2,
    useCORS: true
  }).then(canvas => {

    const imgData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("Giovanny_Vera_CV.pdf");

  });

});