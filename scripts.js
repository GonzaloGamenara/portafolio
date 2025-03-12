//CONTROL DE BARRA
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", ()=>{

    let currentScrollPos = window.scrollY;

    if(currentScrollPos > prevScrollPos){
        document.getElementById("header_id").style.top = "-60px"
    }else{
        document.getElementById("header_id").style.top = "0px"
    }

    prevScrollPos=currentScrollPos;
});

//BOTON SWITCH DARKMODE

let darkmode = false;
function colorSwitch(){
    
    console.log(document.getElementById("sun")); 
    console.log(document.getElementById("sun_ico")); 
    console.log(document.getElementById("moon")); 
    console.log(document.getElementById("moon_ico")); 



    if(!darkmode){
        document.documentElement.style.setProperty("--color-fondo", "#34495E");
        document.documentElement.style.setProperty("--color-ventanas", "#2C3E50");
        document.documentElement.style.setProperty("--color-texto", "#F4F4F4");
        document.getElementById("sun").style.display="block";
        document.getElementById("moon").style.display="none";
        darkmode = true;
    }else{
        document.documentElement.style.setProperty("--color-fondo", "#ffc8b4");
        document.documentElement.style.setProperty("--color-ventanas", "#dfbda5");
        document.documentElement.style.setProperty("--color-texto", "#5b5365");
        document.getElementById("sun").style.display="none";
        document.getElementById("moon").style.display="block";
        darkmode=false;
    }
}


function copiarEmail() {
    const email = "gonzagamenara@gmail.com";
    navigator.clipboard.writeText(email)
        .then(() => {
            const boton = document.getElementById("b_e");
            boton.disabled = true; // Deshabilita temporalmente el botón
            boton.style.transform = "scale(1.2)"; // Reduce el tamaño del botón

            setTimeout(() => {
                boton.disabled = false; // Habilita el botón de nuevo
                boton.style.transform = "scale(1)"; // Reduce el tamaño del botón
            }, 2000); // Vuelve a la normalidad después de 2 segundos
        })
        .catch(err => console.error("Error al copiar: ", err));
}

function abrirWhatsApp() {
    const numero = "541121592339"; // Reemplaza con tu número en formato internacional (Ej: 549 + código de área + número)
    const url = `https://wa.me/${numero}`;
    window.open(url, "_blank"); // Abre WhatsApp en una nueva pestaña

    // Muestra mensaje temporal en el botón
    boton.disabled = true;
    boton.style.transform = "scale(1.2)"; // Reduce el tamaño del botón

    setTimeout(() => {
        boton.disabled = false;
        boton.style.transform = "scale(1)"; // Reduce el tamaño del botón
    }, 2000);
}

function abrirLinkedin() {
    const linkedin_url =  "https://www.linkedin.com/in/gonzalo-gamenara-6bb130238/";
    window.open(linkedin_url, "_blank");

    boton.disabled = true;
    boton.style.transform = "scale(1.2)"; // Reduce el tamaño del botón

    setTimeout(() => {
        boton.disabled = false;
        boton.style.transform = "scale(1)"; // Reduce el tamaño del botón
    }, 2000);
}

function abrirGithub() {
    const github_url =  "https://github.com/GonzaloGamenara";
    window.open(github_url, "_blank");

    boton.disabled = true;
    boton.style.transform = "scale(1.2)"; // Reduce el tamaño del botón

    setTimeout(() => {
        boton.disabled = false;
        boton.style.transform = "scale(1)"; // Reduce el tamaño del botón
    }, 2000);
}