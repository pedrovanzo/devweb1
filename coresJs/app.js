//Array completo de todos os nomes de cores do HTML5
let coresCompleto = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgrey",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "grey",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred ",
  "indigo ",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgrey",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen"
];

//Variáveis
let nivel;
let coresDez = [];
let numAleatorioComp;
let tentativas = document.getElementById("numTent");

//Funcao para retornar numeros aleatorios do tamanho do array completo de cores
function numA() {
  let numA = Math.floor(Math.random() * 148);
  return numA;
}

function preencheVetorMenor() {
  //Preenchimento do array menor
  for (let i = 0; i < 10; i++) {
    //Verificação de elementos repetidos
    let elemNumA = numA();
    if (coresDez.includes(coresCompleto[elemNumA])) {
      console.log(coresCompleto[elemNumA]);
      elemNumA = numA();
      console.log("numero repetido");
    }
    //Inserção de dados no array menor
    coresDez.push(coresCompleto[elemNumA]);
  }
  coresDez.sort();

  return coresDez;
}

function criarElementos() {
  //Mostrando a lista menor no HTML
  for (let i = 0; i < coresDez.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = coresDez[i];
    // li.id = "corId";
    li.id = coresDez[i];
    li.style.backgroundColor = coresDez[i];

    document.getElementById("lista").append(li);
  }
  return document.getElementById("lista");
}

//Definindo a cor do computador
function numComp() {
  numAleatorioComp = coresDez[Math.floor(Math.random() * 10)];
  console.log(numAleatorioComp);
  return numAleatorioComp;
}

//Niveis de dificuldade
function dificuldade() {
  nivel = prompt(
    "Escolha o nivel de dificuldade:\nf = Facil\nm = Medio\nd = Dificil"
  )
    .charAt(0)
    .toLowerCase();
  if (nivel != "f" && nivel != "m" && nivel != "d") {
    dificuldade();
  }
}

dificuldade();
if (nivel == "f") {
  tentativas.innerHTML = 10;
}
if (nivel == "m") {
  tentativas.innerHTML = 5;
}
if (nivel == "d") {
  tentativas.innerHTML = 3;
}

preencheVetorMenor();
criarElementos();
numComp();

function jogadaAcertou() {
  alert("Parabéns, você acertou minha cor!");
  document.location.reload();
}

function jogadaErrou() {
  //Usa uma tentativa
  tentativas.innerHTML -= 1;
  //Gameover
  if (tentativas.innerHTML == 0) {
    alert("Gameover, tente novamente");
    document.location.reload();
  }
  return;
}
//Jogadas
for (let i = 0; i < coresDez.length; i++) {
  document.getElementById(coresDez[i]).addEventListener("click", function(e) {
    //Quando cor for clicada
    if (coresDez[i] == numAleatorioComp) {
      jogadaAcertou();
    } else {
      jogadaErrou();

      if (nivel == "f") {
        document.getElementById(coresDez[i]).style.opacity = "0.4";
        //Dicas
        if (coresDez[i] < numAleatorioComp) {
          alert("Dica: A primeira letra da minha cor vem depois no alfabeto");
        } else {
          alert("Dica: A primeira letra da minha cor vem antes no alfabeto");
        }
      }
      if (nivel == "m") {
        //Dicas
        if (coresDez[i] < numAleatorioComp) {
          alert("Dica: Minha cor é maior");
        } else {
          alert("Dica: Minha cor é menor");
        }
      }
      if (nivel == "d") {
        //Dicas
        if (coresDez[i] < numAleatorioComp) {
          alert("Dica: abc>");
        } else {
          alert("Dica: <abc");
        }
      }
    }
    if (tentativas.innerHTML < 4) {
      tentativas.style.color = "yellow";
      tentativas.style.textShadow = "0 0 3px black";
    }
    if (tentativas.innerHTML < 2) {
      tentativas.style.color = "red";
      tentativas.style.textShadow = "0 0 3px black";
    }
  });
}
