const bloco = document.querySelector('#bloco');
const bloco2 = document.querySelector('#bloco2');
const bloco3 = document.querySelector('#bloco3');
const bloco4 = document.querySelector('#bloco4');
const bloco5 = document.querySelector('#bloco5');
const bloco6 = document.querySelector('#bloco6');
var mensagem = document.querySelector('#mensagem');
var imprimir = document.querySelector('#imprimir');

function moverBloco(elemento, event) {
    
    const blocoAtual = elemento;

    const offsetX = event.clientX - blocoAtual.offsetLeft;
    const offsetY = event.clientY - blocoAtual.offsetTop;

    function onMouseMove(event) {
        
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;

        blocoAtual.style.left = x + 'px';
        blocoAtual.style.top = y + 'px';

    }

    function onMouseUp() {
        
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

/* Verificar colisões dos blocos 1, 2 e 3*/

function verificarColisao2(){
    const retangulo1 = bloco.getBoundingClientRect();
    const retangulo3 = bloco3.getBoundingClientRect();

    return !(
        retangulo1.right < retangulo3.left ||
        retangulo1.left > retangulo3.right ||
        retangulo1.bottom < retangulo3.top ||
        retangulo1.top > retangulo3.bottom
    );
}

function verificarColisao() {
    const retangulo1 = bloco.getBoundingClientRect();
    const retangulo2 = bloco2.getBoundingClientRect();

    return !(
        retangulo1.right < retangulo2.left||
        retangulo1.left > retangulo2.right||
        retangulo1.bottom < retangulo2.top ||
        retangulo1.top > retangulo2.bottom 
    )

}

function verificarColisao1_3(){
    const retangulo1 = bloco.getBoundingClientRect();
    const retangulo3 = bloco3.getBoundingClientRect();

    return !(
        retangulo3.right < retangulo1.left||
        retangulo3.left > retangulo1.right||
        retangulo3.bottom < retangulo1.top ||
        retangulo3.top > retangulo1.bottom 
    )
}

function verificarColisao3_2(){
    const retangulo2 = bloco2.getBoundingClientRect();
    const retangulo3 = bloco3.getBoundingClientRect();

    return !(
        retangulo2.right < retangulo3.left||
        retangulo2.left > retangulo3.right||
        retangulo2.bottom < retangulo3.top ||
        retangulo2.top > retangulo3.bottom 
    )
}

function verificarColisao2_3(){
    const retangulo2 = bloco2.getBoundingClientRect();
    const retangulo3 = bloco3.getBoundingClientRect();

    return !(
        retangulo3.right < retangulo2.left||
        retangulo3.left > retangulo2.right||
        retangulo3.bottom < retangulo2.top ||
        retangulo3.top > retangulo2.bottom 
    )
}

/* Verificar colisões dos blocos 4, 5 e 6*/

function verificarColisao4_5(){
    const retangulo4 = bloco4.getBoundingClientRect();
    const retangulo5 = bloco5.getBoundingClientRect();

    return !(
        retangulo4.right < retangulo5.left ||
        retangulo4.left > retangulo5.right ||
        retangulo4.bottom < retangulo5.top ||
        retangulo4.top > retangulo5.bottom
    );
}

function verificarColisao4_6() {
    const retangulo4 = bloco4.getBoundingClientRect();
    const retangulo6 = bloco6.getBoundingClientRect();

    return !(
        retangulo4.right < retangulo6.left||
        retangulo4.left > retangulo6.right||
        retangulo4.bottom < retangulo6.top ||
        retangulo4.top > retangulo6.bottom 
    )

}

function verificarColisao6_4(){
    const retangulo6 = bloco6.getBoundingClientRect();
    const retangulo4 = bloco4.getBoundingClientRect();

    return !(
        retangulo6.right < retangulo4.left||
        retangulo6.left > retangulo4.right||
        retangulo6.bottom < retangulo4.top ||
        retangulo6.top > retangulo4.bottom 
    )
}

function verificarColisao5_6(){
    const retangulo5 = bloco5.getBoundingClientRect();
    const retangulo6 = bloco6.getBoundingClientRect();

    return !(
        retangulo5.right < retangulo6.left||
        retangulo5.left > retangulo6.right||
        retangulo5.bottom < retangulo6.top ||
        retangulo5.top > retangulo6.bottom 
    )
}

function verificarColisao6_5(){
    const retangulo6 = bloco6.getBoundingClientRect();
    const retangulo5 = bloco5.getBoundingClientRect();

    return !(
        retangulo6.right < retangulo5.left||
        retangulo6.left > retangulo5.right||
        retangulo6.bottom < retangulo5.top ||
        retangulo6.top > retangulo5.bottom 
    )
}



function mostrarMensagem(texto) {
    mensagem.textContent = texto;
    mensagem.style.display = 'block';
}

/* Evento quando conecta o bloco com outro para os elementos 1, 2 e 3 */

function handleClick1(){
    bloco2.removeEventListener('mousemove', handleClick2);
 
    if (verificarColisao()) {
        bloco.style.left = bloco2.offsetLeft + bloco2.offsetWidth + 'px';
        bloco.style.top = bloco2.offsetTop + 'px';
     } else {
        bloco2.addEventListener('mousemove', handleClick2);
        mensagem.style.display = 'none';
    }
}

function handleClick1_3(){
    bloco3.removeEventListener('mousemove', handleClick3);
    if (verificarColisao1_3()) {
        bloco.style.left = bloco3.offsetLeft + bloco3.offsetWidth + 'px';
        bloco.style.top = bloco3.offsetTop + 'px';
     } else {
        bloco3.addEventListener('mousemove', handleClick3);
        mensagem.style.display = 'none';
    }   
}

function handleClick2(){
        bloco.removeEventListener('mousemove', handleClick1);
        if (verificarColisao()) {
            bloco2.style.left = bloco.offsetLeft + bloco.offsetWidth + 'px'
            bloco2.style.top = bloco.offsetTop + 'px';
        } else {
            bloco.addEventListener('mousemove', handleClick1);
            mensagem.style.display = 'none';
        }
}

function handleClick3(){
    bloco1_3.removeEventListener('mousemove', handleClick1_3);

    if (verificarColisao2()) {
        bloco3.style.left = bloco.offsetLeft + bloco.offsetWidth + 'px'
        bloco3.style.top = bloco.offsetTop + 'px';
    } else {
        bloco1_3.addEventListener('mousemove', handleClick1_3);
        mensagem.style.display = 'none';
    }    
}

function handleClick3_2(){
    bloco3.removeEventListener('mousemove', handleClick3);

    if (verificarColisao3_2()) {
        bloco2.style.left = bloco3.offsetLeft + bloco3.offsetWidth + 'px'
        bloco2.style.top = bloco3.offsetTop + 'px';
    } else {
        bloco3.addEventListener('mousemove', handleClick3);
        mensagem.style.display = 'none';
    }    
}

function handleClick2_3(){
    bloco2.removeEventListener('mousemove', handleClick2);

    if (verificarColisao2_3()) {
        bloco3.style.left = bloco2.offsetLeft + bloco2.offsetWidth + 'px'
        bloco3.style.top = bloco2.offsetTop + 'px';
    } else {
        bloco2.addEventListener('mouseout', handleClick2);
        mensagem.style.display = 'none';
    }    
}

/* Evento quando conecta o bloco com outro para os elementos 4, 5 e 6 */

function handleClick4(){
    bloco5.removeEventListener('mousemove', handleClick5);
 
    if (verificarColisao4_5()) {
        bloco4.style.left = bloco5.offsetLeft + bloco5.offsetWidth + 'px';
        bloco4.style.top = bloco5.offsetTop + 'px';
     } else {
        bloco5.addEventListener('mousemove', handleClick5);
        mensagem.style.display = 'none';
    }
}

function handleClick4_6(){
    bloco6.removeEventListener('mousemove', handleClick6);
    if (verificarColisao4_6()) {
        bloco4.style.left = bloco6.offsetLeft + bloco6.offsetWidth + 'px';
        bloco4.style.top = bloco6.offsetTop + 'px';
     } else {
        bloco6.addEventListener('mousemove', handleClick6);
        mensagem.style.display = 'none';
    }   
}

function handleClick5(){
        bloco4.removeEventListener('mousemove', handleClick4);
        if (verificarColisao4_5()) {
            bloco5.style.left = bloco4.offsetLeft + bloco4.offsetWidth + 'px'
            bloco5.style.top = bloco4.offsetTop + 'px';
        } else {
            bloco4.addEventListener('mousemove', handleClick4);
            mensagem.style.display = 'none';
        }
}

function handleClick6(){
    bloco4_6.removeEventListener('mousemove', handleClick4_6);

    if (verificarColisao4_6()) {
        bloco6.style.left = bloco4.offsetLeft + bloco4.offsetWidth + 'px'
        bloco6.style.top = bloco4.offsetTop + 'px';
    } else {
        bloco4_6.addEventListener('mousemove', handleClick4_6);
        mensagem.style.display = 'none';
    }    
}


function handleClick6_5(){
    bloco6.removeEventListener('mousemove', handleClick6);

    if (verificarColisao6_5()) {
        bloco5.style.left = bloco6.offsetLeft + bloco6.offsetWidth + 'px'
        bloco5.style.top = bloco6.offsetTop + 'px';
    } else {
        bloco6.addEventListener('mousemove', handleClick6);
        mensagem.style.display = 'none';
    }    
}


function handleClick5_6(){
    bloco5.removeEventListener('mousemove', handleClick5);

    if (verificarColisao5_6()) {
        bloco6.style.left = bloco5.offsetLeft + bloco5.offsetWidth + 'px';
        bloco6.style.top = bloco5.offsetTop + 'px';
    } else {
        bloco5.addEventListener('mouseout', handleClick5);
        mensagem.style.display = 'none';
    }    
}

/* Verificar colisões dos bloco 1 para os blocos 4, 5 e 6*/

function verificarColisao4_1(){
    const retangulo4 = bloco4.getBoundingClientRect();
    const retangulo1 = bloco.getBoundingClientRect();

    return !(
        retangulo4.right < retangulo1.left||
        retangulo4.left > retangulo1.right||
        retangulo4.bottom < retangulo1.top ||
        retangulo4.top > retangulo1.bottom 
    )
}

function handleClick4_1(){
    bloco.removeEventListener('mousemove', handleClick1);

    if (verificarColisao4_1()) {
        bloco4.style.left = bloco.offsetLeft + bloco.offsetWidth + 'px';
        bloco4.style.top = bloco.offsetTop + 'px';
    } else {
        bloco.addEventListener('mouseout', handleClick1);
        mensagem.style.display = 'none';
    }    
}

function validar(){
    var bloco1 = document.getElementById('bloco');
    var bloco2 = document.getElementById('bloco2');
    var bloco3 = document.getElementById('bloco3');
  

    var posicao1 = bloco1.getBoundingClientRect();
    var posicao2 = bloco2.getBoundingClientRect();
    var posicao3 = bloco3.getBoundingClientRect();
 

    if (posicao2.right === posicao1.left && posicao1.right === posicao3.left){
        setTimeout(()=>{
            $(imprimir).css('display','block');
            imprimir.innerHTML = `<p> 
                Imprimindo:
                  <br>  
                  maça
                  <br>
                  Uva
                  <br>
            </p>`
            var codigoDestacado = `
                const frutas = ["Maçã","Uva"];          
                }
            `
            alert(`A função utilizada para estar resolvendo esse problema em JavaScript é:\n ${codigoDestacado}`);   
        },1000);
        setTimeout(()=>{
            location.reload();
        },12000);
    } else {
        mostrarMensagem('Sequencia invalida! Tente novamente');
        setTimeout(()=>{
            mensagem.style.display = 'none';
        },3000);
    }
}

bloco.addEventListener('mousedown', (event) => {
    moverBloco(bloco, event);
});

bloco2.addEventListener('mousedown', (event) => {
    moverBloco(bloco2, event);
});

bloco3.addEventListener('mousedown' , (event)=>{
    moverBloco(bloco3 , event);
})

bloco4.addEventListener('mousedown', (event) => {
    moverBloco(bloco4, event);
});

bloco5.addEventListener('mousedown', (event) => {
    moverBloco(bloco5, event);
});

bloco6.addEventListener('mousedown' , (event)=>{
    moverBloco(bloco6 , event);
})

const bloco1_3 = document.querySelector('#bloco');
const bloco4_1 = document.querySelector('#bloco');
const bloco3_2 = document.querySelector('#bloco2');
const bloco2_3 = document.querySelector('#bloco3');
const bloco4_6 = document.querySelector('#bloco4');
const bloco6_5 = document.querySelector('#bloco5');
const bloco5_6 = document.querySelector('#bloco6');


bloco1_3.addEventListener('mousemove', handleClick1_3);

bloco4_1.addEventListener('mousemove', handleClick4_1);

bloco3_2.addEventListener('mousemove', handleClick3_2);

bloco2_3.addEventListener('mousemove', handleClick2_3);

bloco4_6.addEventListener('mousemove', handleClick4_6);

bloco6_5.addEventListener('mousemove', handleClick6_5);

bloco5_6.addEventListener('mousemove', handleClick5_6);

bloco.addEventListener('mousemove', handleClick1);

bloco2.addEventListener('mousemove', handleClick2);

bloco3.addEventListener('mousemove', handleClick3);

function posicaoBloco1(){
    var posicaoBloco = document.querySelector('#bloco');
    var posicao = posicaoBloco.getBoundingClientRect();
    var novaPosition = posicao.left + 50;
    posicaoBloco.style.left = novaPosition + 'px';
}

function positionBloco2(){
    const meuBloco2 = document.getElementById('bloco2');
    const posicaoAtual = meuBloco2.getBoundingClientRect();
    const novaPosicao = posicaoAtual.left + 130;
    meuBloco2.style.left = novaPosicao + 'px';
}

function positionBloco3(){
    const meuBloco3 = document.getElementById('bloco3');
    const posicaoAtual = meuBloco3.getBoundingClientRect();
    const novaPosicao = posicaoAtual.top + 14;
    meuBloco3.style.top = novaPosicao + 'px';
}

function posicaoBloco4(){
    var posicaoBloco4 = document.querySelector('#bloco4');
    var posicao = posicaoBloco4.getBoundingClientRect();
    var novaPosition = posicao.top + 14;
    posicaoBloco4.style.top = novaPosition + 'px';
}

function positionBloco5(){
    var meuBloco5 = document.getElementById('bloco5');
    var posicaoAtual = meuBloco5.getBoundingClientRect();
    var novaPosicao = posicaoAtual.left + 111;
    meuBloco5.style.top = novaPosicao + 'px'
}

function positionBloco6(){
    const meuBloco6 = document.getElementById('bloco6');
    const posicaoAtual = meuBloco6.getBoundingClientRect();
    const novaPosicao = posicaoAtual.top + 274;
    meuBloco6.style.top = novaPosicao + 'px';
}