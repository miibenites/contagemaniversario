const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Como o Coliseu de Roma foi construído?",
        alternativas: ["O Coliseu foi construído pelos escravos romanos utilizando apenas madeira e pedras.",
            "O Coliseu foi construído entre 72 e 80 d.C. durante o reinado dos imperadores Vespasiano e Tito, utilizando uma combinação inovadora de concreto e pedra. A obra envolveu tanto trabalho livre quanto escravo"
        ]

    },
    {
        enunciado: "Quando a Fontana di Trevi foi construída?",
        alternativas: [" A Fontana di Trevi foi construída no século I d.C. como parte do aqueduto Aqua Virgo, que fornecia água potável para a cidade de Roma.",
            "A Fontana di Trevi foi construída entre 1732 e 1766, ou seja, no século XVIII,A Fontana di Trevi era um monumento decorativo, encomendado pelo Papa Clemente XII para embelezar a cidade."
        ]

    },
    {
        enunciado: "Quantas janelas existem na Catedral de Milão?",
        alternativas: ["50",
            "40"
        ]

    },
    {
        enunciado: "Ao ser inaugurada qual era o grau de sua inclinação?",
        alternativas: ["1,6°",
            "1,4°"
        ]

    },
    {
        enunciado: "Quando a Casa de Julieta foi contruída?",
        alternativas: ["No século XIII",
            "No século XIV"
        ]

    } // fecha objeto de pergunta
]; //fecha lista de perguntas

let atual =0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();