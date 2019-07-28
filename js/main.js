let secciones = [];
let botones = [];
window.onload = init;

function init()
{
  secciones[1] = document.getElementById("seccion_1");
  secciones[2] = document.getElementById("seccion_2");
  secciones[3] = document.getElementById("seccion_3");
  secciones[4] = document.getElementById("seccion_4");
  secciones[5] = document.getElementById("seccion_5");
  
  botones[1] = document.getElementById("btn_1");
  botones[2] = document.getElementById("btn_2");
  botones[3] = document.getElementById("btn_3");
  botones[4] = document.getElementById("btn_4");
  botones[5] = document.getElementById("btn_5"); 
}
function ocultar()
{
  for(let i=1;i<secciones.length;i++)
  {            secciones[i].classList.add("ocultar");
  }
}
function removerSeleccion(){
  for(i in botones)
    {
  botones[i].classList.remove("seleccionado")
    }
}
function seleccionar(seccion_id)
{
  removerSeleccion();
  botones[seccion_id].classList.add("seleccionado");
}
function cambiarSeccion(target)
{
  let id = target.id.split("_")[1];
  ocultar();
  seleccionar(id);
  secciones[id].classList.remove("ocultar");
}