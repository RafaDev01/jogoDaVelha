let boxes = [...document.querySelectorAll('.box')]
let turnoAtualIcon = document.querySelector(".icone");
let placarXis = document.querySelector(".placar-xis")
let placarBola = document.querySelector(".placar-bola")

let block = document.querySelector(".block")
let reiniciar = document.querySelector(".textVez")

let player1 = "Xis";
let player2 = "Bola";
let xis = 0;
let bola = 0;
let vitoria = false;

//array auxiliar que armazena as jogadas
let aux = []

let turnoAtualIndex = -1;

const iniciaGame = () =>{
    block.classList.remove("fechar-jogo")
    turno = 0;
    placarXis.innerHTML = xis
    placarBola.innerHTML = bola
    vericaTurno()
}

const percorreJogadas = () =>{
    boxes.map((el,index)=>{
        if(el.firstChild != null){
            el = el.firstChild.classList[0]
            aux[index] = el    
        }
    })
    verificarJogadas()
}  

const verificarJogadas =()=>{
    if((aux[0] == "xis") && (aux[1] == "xis") && (aux[2] == "xis")){
        xis++
        vitoria = true;
    }else if((aux[0] == "bola") && (aux[1] == "bola") && (aux[2] == "bola")){
        bola++
        vitoria = true;
    }else if((aux[3] == "xis") && (aux[4] == "xis") && (aux[5] == "xis")){
        xis++
        vitoria = true;
    }else if((aux[3] == "bola") && (aux[4] == "bola") && (aux[5] == "bola")){
        bola++
        vitoria = true;
    }else if((aux[6] == "xis") && (aux[7] == "xis") && (aux[8] == "xis")){
        xis++
        vitoria = true;
    }else if((aux[6] == "bola") && (aux[7] == "bola") && (aux[8] == "bola")){
        bola++
        vitoria = true;
    }else if((aux[0] == "xis") && (aux[3] == "xis") && (aux[6] == "xis")){
        xis++
        vitoria = true;
    }else if((aux[0] == "bola") && (aux[3] == "bola") && (aux[6] == "bola")){
        bola++
        vitoria = true;
    }else if((aux[1] == "xis") && (aux[4] == "xis") && (aux[7] == "xis")){
        xis++
        vitoria = true;
    }else if((aux[1] == "bola") && (aux[4] == "bola") && (aux[7] == "bola")){
        bola++
        vitoria = true;
    }else if((aux[2] == "xis") && (aux[5] == "xis") && (aux[8] == "xis")){
        xis++
        vitoria = true;
    }else if((aux[2] == "bola") && (aux[5] == "bola") && (aux[8] == "bola")){
        bola++
        vitoria = true;
    }else if((aux[0] == "xis") && (aux[4] == "xis") && (aux[8] == "xis")){
        xis++
        vitoria = true;
    }else if((aux[0] == "bola") && (aux[4] == "bola") && (aux[8] == "bola")){
        bola++
        vitoria = true;
    }else if((aux[2] == "xis") && (aux[4] == "xis") && (aux[6] == "xis")){
        xis++
        vitoria = true;
    }else if((aux[2] == "bola") && (aux[4] == "bola") && (aux[6] == "bola")){
        bola++
        vitoria = true;
    }
    verificaVit()
}

const verificaVit = () =>{
    if(turnoAtualIndex == 9 || vitoria == true){
        turnoAtualIcon.classList.remove("xis")
        turnoAtualIcon.classList.remove("bola")
        reiniciar.textContent = "Reiniciar"
        reiniciar.parentElement.style.backgroundColor = "#47b631"
        reiniciar.parentElement.style.cursor = "pointer"

        reiniciar.parentElement.addEventListener("click", teste,false)
        finalizaGame() 
    } 
}

const teste = () =>{
        reiniciarBoxes()
        reiniciar.textContent = "Vez atual: "
        reiniciar.parentElement.style.backgroundColor = "#ffffff86"
        reiniciar.parentElement.style.cursor = "auto"
}


const vericaTurno = () =>{
    verificarJogadas()
    if(turnoAtualIndex % 2 == 0){
        turnoAtualIcon.classList.remove("xis")
        turnoAtualIcon.classList.add("bola")
        turnoAtualIndex++
    }else{
        turnoAtualIcon.classList.remove("bola")
        turnoAtualIcon.classList.add("xis")
        turnoAtualIndex++
    }
}

let elemento = undefined;

boxes.map((el)=>{
    let novoElemento = document.createElement("span")
    el.addEventListener('click', evt =>{
        elemento = evt.target
        if(elemento.contains(novoElemento)){
            console.log("Ja esta preenchido")
        }else{
            if(turnoAtualIndex % 2 == 0){  
                el.appendChild(novoElemento)
                novoElemento.setAttribute("class","xis")  
                vericaTurno() 
            }else{
                el.appendChild(novoElemento)
                novoElemento.setAttribute("class","bola")  
                vericaTurno()
            }   
        }
        verificaVit()
        percorreJogadas()
    })
})

const finalizaGame = () =>{
    block.classList.add("fechar-jogo")
    setTimeout(() => {
            placarXis.innerHTML = xis
            placarBola.innerHTML = bola
            for(i=0;i<aux.length;i++){
                aux[i] = null;
            }
        },100)
        turnoAtualIndex = 0;
        turno = 0;
        placarXis.innerHTML = xis
        placarBola.innerHTML = bola
        reiniciar.removeEventListener("click",teste,false)
    }

const reiniciarBoxes = () =>{
    boxes.map(el=>{
        if(el.firstChild != null){
            el.firstChild.remove()
        }
    })
    vitoria = false
    block.classList.remove("fechar-jogo")
}

iniciaGame()