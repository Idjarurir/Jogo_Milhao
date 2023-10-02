let tempoRestante = document.querySelector(".tmpRestante");
let quiz = document.getElementById("container");
let proximoBtn = document.getElementById("bntProximo");
let contPergunta = document.querySelector(".cont");
let display = document.getElementById("display");
let pts = document.querySelector(".pontos");
let reiniciar = document.getElementById("reiniciar");
let ptsUsuario = document.getElementById("pontosUsuario");
let telaInicial = document.querySelector(".telaInicial");
let comecarBnt = document.getElementById("bntComecar");
let contPer;
let contPts = 0;
let cont = 11;
let tempo;

const quizArray = [
  {
    id: "0",
    question: "Complete a canção: Levo isso a sério, Drip Hard'..",
    options: [
      "Sessão de estúdio, mic e placa",
      "Plaqtudum",
      "Fumaça na minha cabeça",
      "Subindo o ceu é o limite",
    ],
    correct: "Sessão de estúdio, mic e placa",
  },
  {
    id: "1",
    question: "Qual a linguagem principal utilizada neste trabalho?",
    options: ["C++", "Kotlin", "Javascript", "Julia"],
    correct: "Javascript",
  },
  {
    id: "2",
    question: "Qual a cor do cavalo branco de napoleão",
    options: ["Cinza", "Verde", "Preto", "Branco"],
    correct: "Branco",
  },
  {
    id: "3",
    question: "Qual é o nome do pai de Naruto Uzumaki?",
    options: ["Jiraya", "Kakashi", "Gai", "Minato"],
    correct: "Minato",
  },
  {
    id: "4",
    question: "Do que é feito a pamonha??",
    options: ["Cocô", "Banana", "Milho", "Arroz"],
    correct: "Milho",
  },
];

reiniciar.addEventListener("click", () => {
  initial();
  display.classList.remove("hide");
  pts.classList.add("hide");
});

proximoBtn.addEventListener(
  "click",
  (displayNext = () => {
    contPer += 1;
    if (contPer == quizArray.length) {
      display.classList.add("hide");
      pts.classList.remove("hide");
      ptsUsuario.innerHTML = "Sua pontuação é " + contPts + " de " + contPer;
    } else {
      contPergunta.innerHTML =
        contPer + 1 + " de " + quizArray.length + " pergunta";
      quizDisplay(contPer);
      cont = 11;
      clearInterval(tempo);
      timerDisplay();
    }
  })
);

const timerDisplay = () => {
  tempo = setInterval(() => {
    cont--;
    tempoRestante.innerHTML = `${cont}s`;
    if (cont == 0) {
      clearInterval(tempo);
      displayNext();
    }
  }, 1000);
};

const quizDisplay = (contPer) => {
  let quizCarta = document.querySelectorAll(".meio");

  quizCarta.forEach((carta) => {
    carta.classList.add("hide");
  });
  quizCarta[contPer].classList.remove("hide");
};

function criarQuiz() {
  quizArray.sort(() => Math.random() - 0.5);
  i.opcao.sort(() => Math.random() - 0.5);

  let div = document.createElement("div");
  div.classList.add("meio", "hide");
  contPer.innerHTML = 1 + " de " + quizArray.length + " pergunta";
  let pergunta_DIV = document.createElement("p");
  pergunta_DIV.classList.add("question");
  pergunta_DIV.innerHTML = i.pergunta;
  div.appendChild(pergunta_DIV);
  div.innerHTML += `
      <button class="opcao-div" onclick="checker(this)">${i.opcao[0]}</button>
       <button class="opcao-div" onclick="checker(this)">${i.opcao[1]}</button>
        <button class="opcao-div" onclick="checker(this)">${i.opcao[2]}</button>
         <button class="opcao-div" onclick="checker(this)">${i.opcao[3]}</button>
      `;
  quiz.appendChild(div);
}

function checar(opUsuario) {
  let respUsuario = opUsuario.innerText;
  let pergunta = document.getElementsByClassName("meio")[contPer];
  let opcao = pergunta.querySelectorAll(".opcao-div");
  if (respUsuario === quizArray[contPer].correto) {
    opUsuario.classList.add("correto");
    contPts++;
  } else {
    opUsuario.classList.add("incorreto");

    options.forEach((elemento) => {
      if (elemento.innerText == quizArray[contPer].correto) {
        elemento.classList.add("correto");
      }
    });
  }
  clearInterval(tempo);
  opcao.forEach((elemento) => {
    elemento.disabled = true;
  });
}

function initial() {
  quiz.innerHTML = "";
  contPer = 0;
  contPts = 0;
  cont = 11;
  clearInterval(tempo);
  timerDisplay();
  criarQuiz();
  quizDisplay(contPer);
}

comecarBnt.addEventListener("click", () => {
  telaInicial.classList.add("hide");
  display.classList.remove("hide");
  initial();
});

