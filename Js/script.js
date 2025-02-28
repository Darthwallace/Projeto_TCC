const mostrar = document.getElementById('mostrar_mensagem');
const estrutura = document.getElementById('estrutura');
const atribuicao = document.getElementById('atribuicao');
const operacoes = document.getElementById('operacoes');
const interatividade = document.getElementById('interatividade');
const contatenacao = document.getElementById('contatenacao');
const condicionais = document.getElementById('condicionais');
const btn_7 = document.getElementById('btn_7');
const dados = document.getElementById('dados');
const variavel = document.getElementById('variavel');
const sequencial = document.getElementById('sequencial');


$(estrutura).mousemove(function(){
    $(mostrar).css('display','block');
    mostrar.innerHTML = "<p> Conteúdos sobre estrutura de dados. </p>"
});
    
$(estrutura).mouseout(function(){
    $(mostrar).css('display','none');
});

$(atribuicao).mousemove(function(){
    $(mostrar).css('display','block');
    mostrar.innerHTML = "<p> Consiste em armazenar um valor em uma variável usando o operador de atribuição (=). O valor pode ser fixo (ex: x = 10) ou proveniente de cálculos e entradas do usuário. Essa operação é essencial para manipular dados e controlar a lógica do programa. </p>"
});
    
$(atribuicao).mouseout(function(){
    $(mostrar).css('display','none');
});

$(operacoes).mousemove(function(){
    $(mostrar).css('display','block');
    mostrar.innerHTML = "<p> Realiza cálculos em um programa, utilizando operadores como adição (+), subtração (-), multiplicação (*), divisão (/) e outros. Também incluem operações avançadas, como exponenciação (**) e módulo (%). São fundamentais para processar e manipular dados numéricos em algoritmos. </p>"
});
    
$(operacoes).mouseout(function(){
    $(mostrar).css('display','none');
});

$(interatividade).mousemove(function(){
    $(mostrar).css('display','block');
    mostrar.innerHTML = "<p> Permite a entrada e saída de dados em um programa, tornando-o dinâmico. Isso é feito com comandos como input() para receber informações e print() para exibi-las. Essa comunicação é essencial para criar aplicações interativas e personalizadas. </p>"
});
    
$(interatividade).mouseout(function(){
    $(mostrar).css('display','none');
});

$(contatenacao).mousemove(function(){
    $(mostrar).css('display','block');
    mostrar.innerHTML = "<p> É a operação de unir textos em uma única sequência, utilizando o operador + ou funções específicas. Por exemplo, em Python: 'Olá, '  + 'mundo!' resulta em 'Olá, mundo!.' Essa técnica é útil para formatar mensagens e manipular textos dinamicamente. </p>"
});
    
$(contatenacao).mouseout(function(){
    $(mostrar).css('display','none');
});

$(condicionais).mousemove(function(){
    $(mostrar).css('display','block');
    mostrar.innerHTML = "<p> Permitem que um programa tome decisões com base em condições lógicas. Utilizam comandos como if, elif e else para executar diferentes blocos de código conforme a veracidade de uma expressão. São essenciais para controlar fluxos de execução e criar programas dinâmicos. </p>"
});
    
$(condicionais).mouseout(function(){
    $(mostrar).css('display','none');
});

$(btn_7).mousemove(function(){
    $(mostrar).css('display','block');
    mostrar.innerHTML = "<p> Permitem a execução repetida de um bloco de código enquanto uma condição for verdadeira. Os principais tipos são o for (para repetições com um número definido de vezes) e o while (para repetições baseadas em uma condição). Elas são essenciais para automatizar tarefas e processar grandes quantidades de dados. </p>"
});
    
$(btn_7).mouseout(function(){
    $(mostrar).css('display','none');
});

$(dados).mousemove(function(){
    $(mostrar).css('display','block');
    mostrar.innerHTML = "<p> Definem o tipo de valor que uma variável pode armazenar, como números, textos ou valores lógicos. Exemplos comuns incluem inteiros (int), reais (float), textos (string) e booleanos (bool). Eles são essenciais para a correta manipulação e processamento das informações em um programa. </p>"
});
    
$(dados).mouseout(function(){
    $(mostrar).css('display','none');
});

$(variavel).mousemove(function(){
    $(mostrar).css('display','block');
    mostrar.innerHTML = "<p> são espaços na memória do computador usados para armazenar dados que podem ser alterados durante a execução do programa. Elas possuem um nome, um tipo de dado e um valor atribuído. São fundamentais para manipulação e processamento de informações em qualquer linguagem de programação. </p>"
});
    
$(variavel).mouseout(function(){
    $(mostrar).css('display','none');
});

$(sequencial).mousemove(function(){
    $(mostrar).css('display','block');
    mostrar.innerHTML = "<p> Executa comandos de forma linear, seguindo a ordem em que foram escritos, sem desvios ou repetições. É usada para operações diretas, como cálculos e exibição de mensagens. É a base da programação, sendo essencial para o entendimento de lógica computacional. </p>"
});
    
$(sequencial).mouseout(function(){
    $(mostrar).css('display','none');
});


