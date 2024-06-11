const caixaPrincipal = document.querySelector('.caixa-principal')
const caixaPerguntas = document.querySelector('.caixa-perguntas')
const caixaAlternativas = document.querySelector('.caixa-alternativas')
const caixaResultado = document.querySelector('.caixa-resultado')
const textoResultado = document.querySelector('.texto-resultado')

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
        enunciado: "Pergunta 3",
        alternativas: ["Arternativa 1",
            "Alternativa 2"
        ]

    },
    {
        enunciado: "Pergunta 4",
        alternativas: ["Arternativa 1",
            "Alternativa 2"
        ]

    },
    {
        enunciado: "Pergunta 5",
        alternativas: ["Arternativa 1",
            "Alternativa 2"
        ]

    } // fecha objeto de pergunta
]; //fecha lista de perguntas