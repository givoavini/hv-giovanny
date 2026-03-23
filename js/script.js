// ============================
// 🌙 MODO OSCURO
// ============================

const modoBtn = document.getElementById("modo-btn");

modoBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

modoBtn.textContent =
document.body.classList.contains("dark") ? "☀️" : "🌙";

});


// ============================
// 📊 ANIMACIÓN BARRAS IDIOMAS
// ============================

window.addEventListener("DOMContentLoaded", () => {

const niveles = document.querySelectorAll(".nivel");

niveles.forEach(barra => {

const valor = barra.getAttribute("data-nivel");

setTimeout(() => {

barra.style.width = valor + "%";

},400);

});

});


// ============================
// 🌍 CAMBIO DE IDIOMA
// ============================

const idiomaBtn = document.getElementById("idioma-btn");

let idiomaActual = "es";

idiomaBtn.addEventListener("click", () => {

const es = idiomaActual === "es";

idiomaActual = es ? "en" : "es";

idiomaBtn.textContent = es ? "🇪🇸 ES" : "🇬🇧 EN";

if(es){

// ===== INGLÉS =====

document.title = "Resume - Giovanny Vera";

document.getElementById("perfil-titulo").textContent = "Profile";

document.getElementById("perfil-texto").textContent =
"Systems Engineer with more than 4 years of experience in N1/N2 technical support, technological infrastructure administration, and incident management under SLA compliance. Experience in equipment diagnosis and maintenance, technological asset management, and user support in corporate environments. With knowledge in web development (HTML, CSS, JavaScript, PHP), SQL/MySQL databases, and AWS Cloud services. Certified in Scrum and AWS Cloud Foundations with a focus on process optimization, task automation, and continuous improvement of technological services.";

document.getElementById("contacto-titulo").textContent = "Contact";

const contactoPs = document.querySelectorAll('#contacto-titulo ~ p');
contactoPs[0].innerHTML = "<b>Phone:</b> 3103450404";
contactoPs[1].innerHTML = "<b>Email:</b> <a href='mailto:giovanny.vera3406@hotmail.com'>giovanny.vera3406@hotmail.com</a>";
contactoPs[2].innerHTML = "<b>GitHub:</b> <a href='https://github.com/givoavini' target='_blank'>github.com/Giovanny-Vera</a>";
contactoPs[3].innerHTML = "<b>LinkedIn:</b> <a href='https://linkedin.com/in/giovanny-vera' target='_blank'>linkedin.com/in/giovanny-vera</a>";

document.getElementById("aptitudes-titulo").textContent = "Skills";

const aptitudes = document.querySelectorAll('#aptitudes-lista li');
aptitudes[0].textContent = "Decision making";
aptitudes[1].textContent = "Leadership";
aptitudes[2].textContent = "Analytical capacity";
aptitudes[3].textContent = "Problem solving";

document.getElementById("idiomas-titulo").textContent = "Languages";

document.querySelector('.idioma span').textContent = "English (B1)";

document.getElementById("exp-titulo").textContent = "Work Experience";

document.getElementById("exp1-cargo").textContent = "Senior Warranty Analyst";
document.querySelector('#exp1-cargo + p').textContent = "November 2023 – September 2025";
const exp1List = document.querySelectorAll('.experiencia:nth-of-type(1) ul li');
exp1List[0].textContent = "N1/N2 technical support for diagnosis and maintenance of computer equipment.";
exp1List[1].textContent = "Incident management through ticketing platform ensuring SLA compliance.";
exp1List[2].textContent = "Administration and control of technological assets.";
exp1List[3].textContent = "Coordination of teams in data analysis projects.";
exp1List[4].textContent = "Development of metrics and indicators for operational analysis.";
exp1List[5].textContent = "Design of application for taking technical evidence reducing diagnosis time by 8%.";

document.getElementById("exp2-cargo").textContent = "Junior Services Analyst";
document.querySelector('#exp2-cargo + p').textContent = "December 2021 – November 2023";
const exp2List = document.querySelectorAll('.experiencia:nth-of-type(2) ul li');
exp2List[0].textContent = "Handling incidents through ticket system.";
exp2List[1].textContent = "Diagnosis and repair of computer equipment.";
exp2List[2].textContent = "Installation and configuration of equipment.";
exp2List[3].textContent = "Inventory and technological asset management.";
exp2List[4].textContent = "Verification of network connectivity and infrastructure.";
exp2List[5].textContent = "Development of metrics and indicators.";

document.getElementById("exp3-cargo").textContent = "On-site Technician";
document.querySelector('#exp3-cargo + p').textContent = "June 2021 – December 2021";
const exp3List = document.querySelectorAll('.experiencia:nth-of-type(3) ul li');
exp3List[0].textContent = "On-site technical support for hardware and software maintenance.";
exp3List[1].textContent = "Verification of network infrastructure.";
exp3List[2].textContent = "Validation of network points in technical room.";
exp3List[3].textContent = "Creation of system images for mass equipment deployment.";

document.getElementById("edu-titulo").textContent = "Education";

const eduList = document.querySelectorAll('.educacion li');
eduList[0].textContent = "Systems Engineering – Ucompensar (2019 - 2024)";
eduList[1].textContent = "Technology in Systems Analysis and Development – Ucompensar (2019 - 2022)";
eduList[2].textContent = "Technique in Database Operation and Maintenance – Ucompensar (2019 - 2021)";
eduList[3].textContent = "Technique in Networks and Maintenance – Incap (2010 - 2011)";

document.getElementById("cert-titulo").textContent = "Certificates";

const certList = document.querySelectorAll('#cert-lista li');
certList[0].textContent = "Scrum Fundamentals Certified (SFC) – Scrum Academy";
certList[1].textContent = "IoT Fundamentals: Connecting Things – Cisco";
certList[2].textContent = "AWS Academy Cloud Foundations – AWS Academy Graduate";
certList[3].textContent = "CyberOps Associate – Cisco";

document.querySelector("footer p").textContent =
"© 2025 Giovanny Vera | Made with 💻 and ☕";

// Traducciones para el template PDF
document.querySelector('#cv-pdf .pdf-header p').textContent = "Systems Engineer | IT Support | Infrastructure | Cloud";
document.querySelector('#cv-pdf .pdf-header p + p').innerHTML = "📧 giovanny.vera3406@hotmail.com | 📞 3103450404 | 📍 Colombia | 🔗 <a href='https://github.com/givoavini'>GitHub</a> | <a href='https://linkedin.com/in/giovanny-vera'>LinkedIn</a>";
document.querySelector('#cv-pdf section:nth-of-type(1) h2').textContent = "Professional Profile";
document.querySelector('#cv-pdf section:nth-of-type(1) p').textContent = "Systems Engineer with more than 4 years of experience in N1/N2 technical support, technological infrastructure administration, and incident management under SLA compliance. Experience in equipment diagnosis and maintenance, technological asset management, and user support in corporate environments. With knowledge in web development (HTML, CSS, JavaScript, PHP), SQL/MySQL databases, and AWS Cloud services. Certified in Scrum and AWS Cloud Foundations with a focus on process optimization, task automation, and continuous improvement of technological services.";
document.querySelector('#cv-pdf section:nth-of-type(2) h2').textContent = "Professional Experience";
document.querySelector('#cv-pdf section:nth-of-type(2) h3:nth-of-type(1)').textContent = "Teleperformance";
document.querySelector('#cv-pdf section:nth-of-type(2) p:nth-of-type(1)').innerHTML = "<strong>Senior Warranty Analyst</strong> | November 2023 – September 2025";
const pdfExp1Lis = document.querySelectorAll('#cv-pdf section:nth-of-type(2) ul:nth-of-type(1) li');
pdfExp1Lis[0].textContent = "N1/N2 technical support for diagnosis and maintenance of computer equipment.";
pdfExp1Lis[1].textContent = "Incident management through ticketing platform ensuring SLA compliance.";
pdfExp1Lis[2].textContent = "Administration and control of technological assets.";
pdfExp1Lis[3].textContent = "Coordination of teams in data analysis projects.";
pdfExp1Lis[4].textContent = "Development of metrics and indicators for operational analysis.";
pdfExp1Lis[5].textContent = "Design of application for taking technical evidence reducing diagnosis time by 8%.";
document.querySelector('#cv-pdf section:nth-of-type(2) h3:nth-of-type(2)').textContent = "Stefanini Group";
document.querySelector('#cv-pdf section:nth-of-type(2) p:nth-of-type(2)').innerHTML = "<strong>Junior Services Analyst</strong> | December 2021 – November 2023";
const pdfExp2Lis = document.querySelectorAll('#cv-pdf section:nth-of-type(2) ul:nth-of-type(2) li');
pdfExp2Lis[0].textContent = "Handling incidents through ticket system.";
pdfExp2Lis[1].textContent = "Diagnosis and repair of computer equipment.";
pdfExp2Lis[2].textContent = "Installation and configuration of equipment.";
pdfExp2Lis[3].textContent = "Inventory and technological asset management.";
pdfExp2Lis[4].textContent = "Verification of network connectivity and infrastructure.";
pdfExp2Lis[5].textContent = "Development of metrics and indicators.";
document.querySelector('#cv-pdf section:nth-of-type(2) h3:nth-of-type(3)').textContent = "Client First Services";
document.querySelector('#cv-pdf section:nth-of-type(2) p:nth-of-type(3)').innerHTML = "<strong>On-site Technician</strong> | June 2021 – December 2021";
const pdfExp3Lis = document.querySelectorAll('#cv-pdf section:nth-of-type(2) ul:nth-of-type(3) li');
pdfExp3Lis[0].textContent = "On-site technical support for hardware and software maintenance.";
pdfExp3Lis[1].textContent = "Verification of network infrastructure.";
pdfExp3Lis[2].textContent = "Validation of network points in technical room.";
pdfExp3Lis[3].textContent = "Creation of system images for mass equipment deployment.";
document.querySelector('#cv-pdf section:nth-of-type(3) h2').textContent = "Education";
const pdfEduLis = document.querySelectorAll('#cv-pdf section:nth-of-type(3) ul li');
pdfEduLis[0].textContent = "Systems Engineering – Ucompensar (2019 - 2024)";
pdfEduLis[1].textContent = "Technology in Systems Analysis and Development – Ucompensar (2019 - 2022)";
pdfEduLis[2].textContent = "Technique in Database Operation and Maintenance – Ucompensar (2019 - 2021)";
pdfEduLis[3].textContent = "Technique in Networks and Maintenance – Incap (2010 - 2011)";
document.querySelector('#cv-pdf section:nth-of-type(4) h2').textContent = "Certificates";
const pdfCertLis = document.querySelectorAll('#cv-pdf section:nth-of-type(4) ul li');
pdfCertLis[0].textContent = "Scrum Fundamentals Certified (SFC) – Scrum Academy";
pdfCertLis[1].textContent = "IoT Fundamentals: Connecting Things – Cisco";
pdfCertLis[2].textContent = "AWS Academy Cloud Foundations – AWS Academy Graduate";
pdfCertLis[3].textContent = "CyberOps Associate – Cisco";
document.querySelector('#cv-pdf section:nth-of-type(5) h2').textContent = "Technical Skills";
const pdfSkillsLis = document.querySelectorAll('#cv-pdf section:nth-of-type(5) ul li');
pdfSkillsLis[0].textContent = "N1 / N2 technical support";
pdfSkillsLis[1].textContent = "Network infrastructure";
pdfSkillsLis[2].textContent = "SQL";
pdfSkillsLis[3].textContent = "Python";
pdfSkillsLis[4].textContent = "Cloud computing";
pdfSkillsLis[5].textContent = "Systems administration";
document.querySelector('#cv-pdf section:nth-of-type(6) h2').textContent = "Skills";
const pdfAptLis = document.querySelectorAll('#cv-pdf section:nth-of-type(6) ul li');
pdfAptLis[0].textContent = "Decision making";
pdfAptLis[1].textContent = "Leadership";
pdfAptLis[2].textContent = "Analytical capacity";
pdfAptLis[3].textContent = "Problem solving";
document.querySelector('#cv-pdf section:nth-of-type(7) h2').textContent = "Languages";
const pdfLangLis = document.querySelectorAll('#cv-pdf section:nth-of-type(7) ul li');
pdfLangLis[0].textContent = "Spanish – Native";
pdfLangLis[1].textContent = "English – Intermediate (B1)";

}else{

// ===== ESPAÑOL =====

document.title = "Hoja de Vida - Giovanny Vera";

document.getElementById("perfil-titulo").textContent = "Perfil";

document.getElementById("perfil-texto").textContent =
"Ingeniero de Sistemas con más de 4 años de experiencia en soporte técnico N1/N2, administración de infraestructura tecnológica y gestión de incidentes bajo cumplimiento de SLA. Experiencia en diagnóstico y mantenimiento de equipos, gestión de activos tecnológicos y soporte a usuarios en entornos corporativos. Con conocimientos en desarrollo web (HTML, CSS, JavaScript, PHP), bases de datos SQL/MySQL y servicios Cloud AWS. Certificado en Scrum y AWS Cloud Foundations con enfoque en optimización de procesos, automatización de tareas y mejora continua de servicios tecnológicos.";

document.getElementById("contacto-titulo").textContent = "Contacto";

const contactoPsEs = document.querySelectorAll('#contacto-titulo ~ p');
contactoPsEs[0].innerHTML = "<b>Teléfono:</b> 3103450404";
contactoPsEs[1].innerHTML = "<b>Correo:</b> <a href='mailto:giovanny.vera3406@hotmail.com'>giovanny.vera3406@hotmail.com</a>";
contactoPsEs[2].innerHTML = "<b>GitHub:</b> <a href='https://github.com/givoavini' target='_blank'>github.com/Giovanny-Vera</a>";
contactoPsEs[3].innerHTML = "<b>LinkedIn:</b> <a href='https://linkedin.com/in/giovanny-vera' target='_blank'>linkedin.com/in/giovanny-vera</a>";

document.getElementById("aptitudes-titulo").textContent = "Aptitudes";

const aptitudesEs = document.querySelectorAll('#aptitudes-lista li');
aptitudesEs[0].textContent = "Toma de decisiones";
aptitudesEs[1].textContent = "Liderazgo";
aptitudesEs[2].textContent = "Capacidad de análisis";
aptitudesEs[3].textContent = "Resolución de problemas";

document.getElementById("idiomas-titulo").textContent = "Idiomas";

document.querySelector('.idioma span').textContent = "Inglés (B1)";

document.getElementById("exp-titulo").textContent = "Experiencia Laboral";

document.getElementById("exp1-cargo").textContent = "Analista de garantías senior";
document.querySelector('#exp1-cargo + p').textContent = "Noviembre 2023 – Septiembre 2025";
const exp1ListEs = document.querySelectorAll('.experiencia:nth-of-type(1) ul li');
exp1ListEs[0].textContent = "Soporte técnico N1/N2 para diagnóstico y mantenimiento de equipos de cómputo.";
exp1ListEs[1].textContent = "Gestión de incidentes mediante plataforma de ticketing garantizando cumplimiento de SLA.";
exp1ListEs[2].textContent = "Administración y control de activos tecnológicos.";
exp1ListEs[3].textContent = "Coordinación de equipos en proyectos de análisis de datos.";
exp1ListEs[4].textContent = "Desarrollo de métricas e indicadores para análisis operativo.";
exp1ListEs[5].textContent = "Diseño de aplicación para toma de evidencias técnicas reduciendo 8% el tiempo de diagnóstico.";

document.getElementById("exp2-cargo").textContent = "Analista de servicios junior";
document.querySelector('#exp2-cargo + p').textContent = "Diciembre 2021 – Noviembre 2023";
const exp2ListEs = document.querySelectorAll('.experiencia:nth-of-type(2) ul li');
exp2ListEs[0].textContent = "Atención de incidencias mediante sistema de tickets.";
exp2ListEs[1].textContent = "Diagnóstico y reparación de equipos de cómputo.";
exp2ListEs[2].textContent = "Instalación y configuración de equipos.";
exp2ListEs[3].textContent = "Gestión de inventario y activos tecnológicos.";
exp2ListEs[4].textContent = "Verificación de conectividad e infraestructura de red.";
exp2ListEs[5].textContent = "Desarrollo de métricas e indicadores.";

document.getElementById("exp3-cargo").textContent = "Técnico en sitio";
document.querySelector('#exp3-cargo + p').textContent = "Junio 2021 – Diciembre 2021";
const exp3ListEs = document.querySelectorAll('.experiencia:nth-of-type(3) ul li');
exp3ListEs[0].textContent = "Soporte técnico en sitio para mantenimiento de hardware y software.";
exp3ListEs[1].textContent = "Verificación de infraestructura de red.";
exp3ListEs[2].textContent = "Validación de puntos de red en cuarto técnico.";
exp3ListEs[3].textContent = "Creación de imágenes de sistema para despliegue masivo de equipos.";

document.getElementById("edu-titulo").textContent = "Educación";

const eduListEs = document.querySelectorAll('.educacion li');
eduListEs[0].textContent = "Ingeniería de Sistemas – Ucompensar (2019 - 2024)";
eduListEs[1].textContent = "Tecnología en Análisis y Desarrollo de Sistemas – Ucompensar (2019 - 2022)";
eduListEs[2].textContent = "Técnica en Operación y Mantenimiento de BD – Ucompensar (2019 - 2021)";
eduListEs[3].textContent = "Técnico en Redes y Mantenimiento – Incap (2010 - 2011)";

document.getElementById("cert-titulo").textContent = "Certificados";

const certListEs = document.querySelectorAll('#cert-lista li');
certListEs[0].textContent = "Scrum Fundamentals Certified (SFC) – Scrum Academy";
certListEs[1].textContent = "IoT Fundamentals: Connecting Things – Cisco";
certListEs[2].textContent = "AWS Academy Cloud Foundations – AWS Academy Graduate";
certListEs[3].textContent = "CyberOps Associate – Cisco";

document.querySelector("footer p").textContent =
"© 2025 Giovanny Vera | Hecho con 💻 y ☕";

// Traducciones para el template PDF
document.querySelector('#cv-pdf .pdf-header p').textContent = "Ingeniero de Sistemas | Soporte IT | Infraestructura | Cloud";
document.querySelector('#cv-pdf .pdf-header p + p').innerHTML = "📧 giovanny.vera3406@hotmail.com | 📞 3103450404 | 📍 Colombia | 🔗 <a href='https://github.com/givoavini'>GitHub</a> | <a href='https://linkedin.com/in/giovanny-vera'>LinkedIn</a>";
document.querySelector('#cv-pdf section:nth-of-type(1) h2').textContent = "Perfil Profesional";
document.querySelector('#cv-pdf section:nth-of-type(1) p').textContent = "Ingeniero de Sistemas con más de 4 años de experiencia en soporte técnico N1/N2, administración de infraestructura tecnológica y gestión de incidentes bajo cumplimiento de SLA. Experiencia en diagnóstico y mantenimiento de equipos, gestión de activos tecnológicos y soporte a usuarios en entornos corporativos. Con conocimientos en desarrollo web (HTML, CSS, JavaScript, PHP), bases de datos SQL/MySQL y servicios Cloud AWS. Certificado en Scrum y AWS Cloud Foundations con enfoque en optimización de procesos, automatización de tareas y mejora continua de servicios tecnológicos.";
document.querySelector('#cv-pdf section:nth-of-type(2) h2').textContent = "Experiencia Profesional";
document.querySelector('#cv-pdf section:nth-of-type(2) h3:nth-of-type(1)').textContent = "Teleperformance";
document.querySelector('#cv-pdf section:nth-of-type(2) p:nth-of-type(1)').innerHTML = "<strong>Analista de Garantías Senior</strong> | Noviembre 2023 – Septiembre 2025";
const pdfExp1LisEs = document.querySelectorAll('#cv-pdf section:nth-of-type(2) ul:nth-of-type(1) li');
pdfExp1LisEs[0].textContent = "Soporte técnico N1/N2 para diagnóstico y mantenimiento de equipos de cómputo.";
pdfExp1LisEs[1].textContent = "Gestión de incidentes mediante plataforma de ticketing garantizando cumplimiento de SLA.";
pdfExp1LisEs[2].textContent = "Administración y control de activos tecnológicos.";
pdfExp1LisEs[3].textContent = "Coordinación de equipos en proyectos de análisis de datos.";
pdfExp1LisEs[4].textContent = "Desarrollo de métricas e indicadores para análisis operativo.";
pdfExp1LisEs[5].textContent = "Diseño de aplicación para toma de evidencias técnicas reduciendo 8% el tiempo de diagnóstico.";
document.querySelector('#cv-pdf section:nth-of-type(2) h3:nth-of-type(2)').textContent = "Stefanini Group";
document.querySelector('#cv-pdf section:nth-of-type(2) p:nth-of-type(2)').innerHTML = "<strong>Analista de Servicios Junior</strong> | Diciembre 2021 – Noviembre 2023";
const pdfExp2LisEs = document.querySelectorAll('#cv-pdf section:nth-of-type(2) ul:nth-of-type(2) li');
pdfExp2LisEs[0].textContent = "Atención de incidencias mediante sistema de tickets.";
pdfExp2LisEs[1].textContent = "Diagnóstico y reparación de equipos de cómputo.";
pdfExp2LisEs[2].textContent = "Instalación y configuración de equipos.";
pdfExp2LisEs[3].textContent = "Gestión de inventario y activos tecnológicos.";
pdfExp2LisEs[4].textContent = "Verificación de conectividad e infraestructura de red.";
pdfExp2LisEs[5].textContent = "Desarrollo de métricas e indicadores.";
document.querySelector('#cv-pdf section:nth-of-type(2) h3:nth-of-type(3)').textContent = "Client First Services";
document.querySelector('#cv-pdf section:nth-of-type(2) p:nth-of-type(3)').innerHTML = "<strong>Técnico en Sitio</strong> | Junio 2021 – Diciembre 2021";
const pdfExp3LisEs = document.querySelectorAll('#cv-pdf section:nth-of-type(2) ul:nth-of-type(3) li');
pdfExp3LisEs[0].textContent = "Soporte técnico en sitio para mantenimiento de hardware y software.";
pdfExp3LisEs[1].textContent = "Verificación de infraestructura de red.";
pdfExp3LisEs[2].textContent = "Validación de puntos de red en cuarto técnico.";
pdfExp3LisEs[3].textContent = "Creación de imágenes de sistema para despliegue masivo de equipos.";
document.querySelector('#cv-pdf section:nth-of-type(3) h2').textContent = "Educación";
const pdfEduLisEs = document.querySelectorAll('#cv-pdf section:nth-of-type(3) ul li');
pdfEduLisEs[0].textContent = "Ingeniería de Sistemas – Ucompensar (2019 - 2024)";
pdfEduLisEs[1].textContent = "Tecnología en Análisis y Desarrollo de Sistemas – Ucompensar (2019 - 2022)";
pdfEduLisEs[2].textContent = "Técnica en Operación y Mantenimiento de BD – Ucompensar (2019 - 2021)";
pdfEduLisEs[3].textContent = "Técnico en Redes y Mantenimiento – Incap (2010 - 2011)";
document.querySelector('#cv-pdf section:nth-of-type(4) h2').textContent = "Certificados";
const pdfCertLisEs = document.querySelectorAll('#cv-pdf section:nth-of-type(4) ul li');
pdfCertLisEs[0].textContent = "Scrum Fundamentals Certified (SFC) – Scrum Academy";
pdfCertLisEs[1].textContent = "IoT Fundamentals: Connecting Things – Cisco";
pdfCertLisEs[2].textContent = "AWS Academy Cloud Foundations – AWS Academy Graduate";
pdfCertLisEs[3].textContent = "CyberOps Associate – Cisco";
document.querySelector('#cv-pdf section:nth-of-type(5) h2').textContent = "Habilidades Técnicas";
const pdfSkillsLisEs = document.querySelectorAll('#cv-pdf section:nth-of-type(5) ul li');
pdfSkillsLisEs[0].textContent = "Soporte técnico N1 / N2";
pdfSkillsLisEs[1].textContent = "Infraestructura de redes";
pdfSkillsLisEs[2].textContent = "SQL";
pdfSkillsLisEs[3].textContent = "Python";
pdfSkillsLisEs[4].textContent = "Computación en la nube";
pdfSkillsLisEs[5].textContent = "Administración de sistemas";
document.querySelector('#cv-pdf section:nth-of-type(6) h2').textContent = "Aptitudes";
const pdfAptLisEs = document.querySelectorAll('#cv-pdf section:nth-of-type(6) ul li');
pdfAptLisEs[0].textContent = "Toma de decisiones";
pdfAptLisEs[1].textContent = "Liderazgo";
pdfAptLisEs[2].textContent = "Capacidad de análisis";
pdfAptLisEs[3].textContent = "Resolución de problemas";
document.querySelector('#cv-pdf section:nth-of-type(7) h2').textContent = "Idiomas";
const pdfLangLisEs = document.querySelectorAll('#cv-pdf section:nth-of-type(7) ul li');
pdfLangLisEs[0].textContent = "Español – Nativo";
pdfLangLisEs[1].textContent = "Inglés – Intermedio (B1)";

}

});


// ============================
// 📄 DESCARGAR PDF
// ============================

document.getElementById("pdf-btn").addEventListener("click", () => {

const element = document.getElementById("cv-pdf");

/* Mostrar temporalmente el template */
element.style.display = "block";

const options = {

margin: [10, 10, 10, 10],

filename:"CV_Giovanny_Vera.pdf",

image:{
type:"jpeg",
quality:0.98
},

html2canvas:{
scale:3,
useCORS:true
},

jsPDF:{
unit:"mm",
format:"a4",
orientation:"portrait"
}

};

html2pdf().set(options).from(element).save().then(() => {

/* Volver a ocultarlo */
element.style.display = "none";

});

});