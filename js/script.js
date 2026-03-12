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
// 📊 ANIMACIÓN BARRAS IDIOMA
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
"Systems Engineer with experience in IT support, infrastructure and cloud technologies.";

document.getElementById("contacto-titulo").textContent = "Contact";

document.getElementById("aptitudes-titulo").textContent = "Skills";

document.getElementById("idiomas-titulo").textContent = "Languages";

document.getElementById("exp-titulo").textContent = "Work Experience";

document.getElementById("edu-titulo").textContent = "Education";

document.getElementById("cert-titulo").textContent = "Certificates";

document.querySelector("footer p").textContent =
"© 2025 Giovanny Vera | Made with 💻 and ☕";

}else{

// ===== ESPAÑOL =====

document.title = "Hoja de Vida - Giovanny Vera";

document.getElementById("perfil-titulo").textContent = "Perfil";

document.getElementById("perfil-texto").textContent =
"Ingeniero de Sistemas con experiencia en soporte IT, infraestructura y cloud.";

document.getElementById("contacto-titulo").textContent = "Contacto";

document.getElementById("aptitudes-titulo").textContent = "Aptitudes";

document.getElementById("idiomas-titulo").textContent = "Idiomas";

document.getElementById("exp-titulo").textContent = "Experiencia Laboral";

document.getElementById("edu-titulo").textContent = "Educación";

document.getElementById("cert-titulo").textContent = "Certificados";

document.querySelector("footer p").textContent =
"© 2025 Giovanny Vera | Hecho con 💻 y ☕";

}

});


// ============================
// 📄 DESCARGAR PDF
// ============================

document.getElementById("pdf-btn").addEventListener("click", () => {

const element = document.getElementById("cv");

const opt = {

margin:0,

filename:"Giovanny_Vera_CV.pdf",

image:{type:"jpeg",quality:1},

html2canvas:{scale:3},

jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}

};

html2pdf().set(opt).from(element).save();

});

document.getElementById("pdf-btn").addEventListener("click", function(){

const element = document.getElementById("cv-pdf");

const options = {

margin:10,

filename:"CV_Giovanny_Vera.pdf",

image:{
type:"jpeg",
quality:1
},

html2canvas:{
scale:3
},

jsPDF:{
unit:"mm",
format:"a4",
orientation:"portrait"
}

};

html2pdf().set(options).from(element).save();

});