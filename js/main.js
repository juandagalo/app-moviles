let secciones = [];
let botones = [];
let matriz = [];
let winner = [];
window.onload = init;

function init()
{
  secciones[1] = document.getElementById("seccion_1");
  secciones[2] = document.getElementById("seccion_2");
  secciones[3] = document.getElementById("seccion_3");
  secciones[4] = document.getElementById("seccion_4");
  secciones[5] = document.getElementById("seccion_5");
  
  botones[1] = document.getElementById("p11");
  botones[2] = document.getElementById("p12");
  botones[3] = document.getElementById("p13");
  botones[4] = document.getElementById("p21");
  botones[5] = document.getElementById("p22"); 
  botones[6] = document.getElementById("p23"); 
  botones[7] = document.getElementById("p31"); 
  botones[8] = document.getElementById("p32"); 
  botones[9] = document.getElementById("p33"); 

  matriz = [
    1,2,3,
    4,5,6,
    7,8,''
  ];

  winner = [
    1,2,3,
    4,5,6,
    7,8,''
  ]
  body = document.getElementById("ganador");
  body.value += "";
  asignarValores();
  
}

function asignarValores() {

  let count = 0;
  botones.forEach(element => {
    num = matriz[count++];
    element.value = (num)?num:"";
  });

}

function desordenar() {
  matriz = matriz.sort(function() {return Math.random() - 0.5});
  asignarValores();
  
}

function moveNumber(object) {
  
  index = matriz.indexOf(parseInt(object.value));
  
  if (matriz.indexOf(matriz[index+1]) && matriz[index+1]==='') {
    matriz[index+1] = parseInt(object.value);
    matriz[index] = '';
    
  }
  else if (matriz.indexOf(matriz[index-1]) && matriz[index-1]==='') {
    matriz[index-1] = parseInt(object.value);
    matriz[index] = '';
  }
  else if (matriz.indexOf(matriz[index+3]) && matriz[index+3]==='') {
    matriz[index+3] = parseInt(object.value);
    matriz[index] = '';
  }
  else if (matriz.indexOf(matriz[index-3]) && matriz[index-3]==='') {
    matriz[index-3] = parseInt(object.value);
    matriz[index] = '';
  }
  
  asignarValores();
  check();
}

function check() {
  console.log(matriz,winner);
  
  if (JSON.stringify(matriz)==JSON.stringify(winner)) {
    body = document.getElementById("ganador");
    body.value += "Ganaste";
  }
}


function sumar() {
  let n1 = document.getElementById("n1");
  let n2 = document.getElementById("n2");
  let resultado;
  let label = document.getElementById("resultado");
  n1 = parseInt(n1.value);
  n2 = parseInt(n2.value);

  resultado = n1+n2;
  label.placeholder = resultado;
}

