
const minus = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"></path></svg>'
const plus ='<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg>'
const toggle =(indice)=>{
    const respuesta = document.getElementById(`respuesta-${indice}`)
    respuesta.classList.toggle("respuesta-mostrar")
    boton[indice].value = boton[indice].value==="1" ? "0" : "1"
    boton[indice].innerHTML = boton[indice].value==="1" ? plus : minus
}

const preguntas = document.getElementsByClassName("pregunta")

let boton=[]
for (let i = 0; i < preguntas.length; i++) {
    boton[i] = document.getElementById(`pregunta-${i}`)  
    boton[i].innerHTML=plus // inicialmente todos en "+"
    boton[i].addEventListener("click",()=>toggle(i))
}

const menu = document.getElementById('btn-menu')
const opciones = document.getElementById("menu-opciones")

menu.addEventListener('click',()=>opciones.classList.toggle("menu-mostrar"))


// Funcionamineto del Modal
let btn = document.getElementById("btnModal");
let btnCerrar = document.getElementsByClassName("close")[0];
let modal = document.getElementById("tvesModal");
let body = document.getElementsByTagName("body")[0];


let leyendaContacto = document.getElementById("leyendaContacto")
let tituloContacto = document.getElementById("tituloContacto")

btn.addEventListener("click",()=>{
    const nombre = document.getElementById("name").value
    const email = document.getElementById("email").value
    if (nombre === "" || email === "" ){
        tituloContacto.innerHTML = "<span style='color:red;'>Error</span>"
        leyendaContacto.innerHTML = "<span>Debes ingresar un nombre y un correo electronico para que podamos contactarte.</span> "
    } else {
        tituloContacto.innerHTML = "Gracias !"
        leyendaContacto.innerHTML = "<span>Pronto nuestro equipo se estara contactando con usted, para programar la primer reunion.</span> "
    }
    modal.style.display = "block";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
})

btnCerrar.addEventListener("click",()=>{
    modal.style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
})

window.addEventListener("click",(event)=>{
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
})