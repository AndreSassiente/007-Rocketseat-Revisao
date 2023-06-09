//  Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
function ex01() {
    alert("Hello World!");
}


//  Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
function ex02() {
    let n1 = Number(prompt("Digite um numero: "));
    let n2 = Number(prompt("Digite outro numero: "));

    let soma = n1 + n2;

    alert("A soma dos dois números é igual a " + soma);
}


//  Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
function ex03() {
    let valor = "Andre";

    if (typeof valor === 'number') {
        alert("É um número");
    } else {
        alert("Não é um número");
    }
}


//  Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
function ex04() {
    let valor = 99;

    if (typeof valor === 'string') {
        alert("É uma string.")
    } else {
        alert("Não é uma string.")
    }
}


//  Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
function ex05() {
    let valor = true;

    if (typeof valor === 'boolean') {
        alert("É um booleano.")
    } else {
        alert("Não é um booleano.")
    }
}


//  Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
function ex06() {
    let n1 = Number(prompt("Primeiro número: "));
    let n2 = Number(prompt("Segundo número:"));
    let sub = n1 - n2;

    alert(n1 + " - " + n2 + " é igual a " + sub);
}


//  Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
function ex07() {
    let n1 = Number(prompt("Primeiro número: "));
    let n2 = Number(prompt("Segundo número:"));
    let multi = n1 * n2;

    alert(n1 + " x " + n2 + " é igual a " + multi);
}


//  Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
function ex08() {
    let n1 = Number(prompt("Primeiro número: "));
    let n2 = Number(prompt("Segundo número:"));
    let div = n1 / n2;

    alert(n1 + " divido por " + n2 + " é igual a " + div);
}


//  Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
function ex09() {
    let numero = 3;

    if (numero % 2 == 0) {
        alert("É um número par.")
    } else {
        alert("Não é um número par.")
    }
}


//  Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
function ex10()  {
    let numero = 3;

    if (numero % 2 == 0) {
        alert("Não é um número íimpar.")
    } else {
        alert("É um número ímpar.")
    }
}
