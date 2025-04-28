//Exercício 1
const myName = "Elias Paiva";
const birthCity = "Rio de Janeiro";
const birthYear = 1991;
console.log(myName, birthCity, birthYear);

//Exercício 2
const base = 5;
const height = 8;
const area = base * height;
const perimeter = 2 * (base + height);
console.log(perimeter);

//Exercício 3
const grade = 85;

if (grade >= 80) {
  let message = "Parabéns, você faz parte do grupo de pessoas aprovadas!";
  console.log(message);
} else if (grade < 80 && grade >= 60) {
  let message = "Você está na nossa lista de espera.";
  console.log(message);
} else {
  let message = "Você foi reprovado.";
  console.log(message);
}

//Exercício 4
const currentHour = 4;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar!";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour <= 11) {
  message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

// Exercício 5
let num1 = 20;
let num2 = 5;
let adicao = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;
console.log("A soma dos números é: " + adicao);
console.log("A subtração dos números é: " + subtracao);
console.log("A multiplicação dos números é: " + multiplicacao);
console.log("A divisão dos números é: " + divisao);
console.log("O resto da divisão é: " + resto);

// Exercício 6
let numOne = 5;
let numTwo = 1;

if (numOne > numTwo) {
  console.log("O maior número é: " + numOne);
} else if (numTwo === numOne) {
  console.log("Os números sao iguais");
} else {
  console.log("O maior número é o: " + numTwo);
}

// Exercício 7
let numero1 = 151;
let numero2 = 150;
let numero3 = 15;

if (numero1 > numero2 && numero1 > numero3) {
  console.log("O maior número é: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log("O maior número é: " + numero2);
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log("O maior número é o: " + numero3);
} else if (numero1 === numero2 && numero2 === numero3) {
  console.log("Todos os números sao iguais");
} else console.log("Nao há um número maior, há numeros iguais");

// Exercício 8
//Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

//👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.
const ang1 = 180;
const ang2 = 1;
const ang3 = 0;
const angle = ang1 + ang2 + ang3;

if (angle === 180) {
  console.log("válido");
} else if (angle < 0) {
  console.log("inválido");
}

// Exercício 9
//Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.

const numeroOne = 1;
const numeroTwo = 2;
const numeroThree = 3;

if (numeroOne % 2 == 0 || numeroTwo % 2 == 0 || numeroThree % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

// Exercício 10
// Altere o valor da variável menuServices para que ela passe a ter o valor "Serviços". Isso deve ser feito através da variável menu.
const menu = ["Home", "Serviços", "Portfólio", "Links"];
const menuServices = menu[1];
console.log(menuServices);

// Exercício 10
//Adicione o valor "Contato" no final do array menu.
const array = ["Home", "Serviços", "Portfólio", "Links"];
array.push("Contato");
console.log(array);

// Exercício 11 for loop - multiplique cada elemento por 2
const lotteryNumbers = [4, 8, 15, 16, 23, 42];
for (let i = 0; i < lotteryNumbers.length; i++) {
  console.log(lotteryNumbers[i] * 2);
  console.log(`Número ${i} = ${lotteryNumbers[i]}`);
}

// Exercício 12 for loop
for (let i = 0; i < lotteryNumbers.length; i++) {
  console.log(lotteryNumbers[i] * 2);
  console.log(`Número ${i} = ${lotteryNumbers[i]}`);
}

// Exercício 13 for loop - jogar na loteria
const numerosLoteria = [];
const myGame = [4, 8, 15, 16, 23, 42];
for (let i = 0; i < 6; i++) {
  numerosLoteria.push(Math.ceil(Math.random() * 60));
}

console.log(numerosLoteria);

// Exercício 14 Utilize o for para imprimir os elementos da lista groceryList através de console.log():

const groceryList = ["Arroz", "Feijão", "Alface", "Melancia", "Macarrão"];

for (let index = 0; index < groceryList.length; index++) {
  console.log(groceryList[index]);
}

//Exercício 15
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;
for (let index = 0; index < numbers.length; index++) {}

//Exercício 16 Some todos os valores contidos no array e imprima o resultado. - 278
//for (let index = 0; index < numbers.length; index++) {
//  console.log(somaArray += numbers[index]);}

// Exercício 17 Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
//const media = somaArray / numbers.length
//console.log(media);

// Exercício 18 Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem "O valor da média aritmética é maior que 20"; e, caso não seja maior que 20, imprima a mensagem "O valor da média aritmética é menor ou igual a 20".
//if (media > 20) {
//    console.log("O valor da média aritmética é maior que 20");
//} else {
//    console.log("O valor da média aritmética é menor ou igual a 20");
//}

// Exercício 19 Utilizando for, descubra o maior valor contido no array e imprima-o.
//console.log(Math.max(...numbers));

// Exercício 20 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "Nenhum valor ímpar encontrado".
// let numerosImpares = 0;
// for (i = 0; i < numbers.length; i++) {
//    if (numbers[i] % 2 == 0) {
//        console.log("este número é par");
//    } else {
//        numerosImpares += 1;
//        console.log("este número é impar");
//   }
// }
//console.log(numerosImpares);

// Exercício 21
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 1));

//Exercício 22
const helloPeople = (name) => `Olá ${name}, tudo bem?`;
console.log(helloPeople("Elias"));

//Exercício 23
//Crie uma função que retorne o maior e o menor número de uma array

const numberArray = () => {
  const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  const maxNumber = Math.max(...numbers);
  const lowestNumber = Math.min(...numbers);
  return { maxNumber, lowestNumber };
};
console.log(numberArray());

//Exercício 23
const balance = 50;

const sumBank = (value) => {
  return value + balance;
};
console.log(sumBank(10));

const subBank = (value) => {
  return value - balance;
};
console.log(subBank(50));

const multBank = (value) => {
  return value * balance;
};
console.log(multBank(50));

const divBank = (value) => {
  return value / balance;
};
console.log(Math.ceil(divBank(35)));

const mcDonalds = {
  bigMac: 26.9,
  bigTasty: 39.9,
  mcFritasMedia: 13.9,
  topSundayChocolate: 11.9,
  isDelicious: true,
  address: {
    city: "São Paulo",
    state: "SP",
    unitName: "Shopping Tatuapé",
  },
};

console.log(Object.entries(mcDonalds));

//Exercício 24
/* 
RELATÓRIO DE ITEMS VENDIDOS NO MC DONALDS
Crie uma função que retorna um relatório com a quantidade de cada item vendido. Esse relatório precisa estar no seguinte formato:
{
  sanduiches: 0,
  acompanhamentos: 0,
  sobremesas: 0,
  bebidas: 0,
}
*/
 const menu = require("./data");

  const getMcInfo = () => {
   const report = {
        sanduiches: 0,
        acompanhamentos: 0,
        sobremesas: 0,
        bebidas: 0,
      };

       const keys = Object.entries(menu);
       console.log(keys);
       
       for (let index = 0; index < keys.length; index +=1) {
        report[keys[index]] = menu[keys[index]].length;

       };

       return report;
  };
  console.log(getMcInfo());



//Exercício 25
// Crie uma função que retorne a quantidade total de itens vendidos.

const totalItems = () => {
  const items = getMcInfo();

  const values = Object.values(items);
  console.log(values);
  let sum = 0;

  for( let index = 0; index < values.length; index += 1) {
    sum += values[index]
  }

  return sum;
};

console.log(totalItems());

//Exercício 25
/* 
Crie uma variável chamada player e atribua a ela um objeto que reúna todas as informações das variáveis listadas.

const name = 'Marta';
const lastName = 'Silva';
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
*/


/* 
Exercício 26
Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave, concatene as informações e armazene na variável message no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
*/
const player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

const fullMessage = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`;
console.log(fullMessage);


/* 
Exercício 27
Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave, concatene as informações e armazene na variável message no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
*/

const fullMessageTwo = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.`;

console.log(fullMessageTwo);



//Exercício 28
//Com base neste objeto, faça os exercícios a seguir.

const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

console.log(reader);

//Print this: O livro favorito de Julia Pessoa se chama 'O Senhor dos Anéis - a Sociedade do Anel'."

const thisReader = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}`;
console.log(thisReader);



/* 
Exercício 29
Com base neste objeto, faça os exercícios a seguir.

const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

 Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

 {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}
*/


reader.favoriteBooks.push({
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
})

console.log(reader);

/* 
Exercício 30
Com base neste objeto, faça os exercícios a seguir.

const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

 Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:

"Julia tem {quantidade} livros favoritos."

{quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:

"Julia tem 1 livro favorito."
*/

console.log(reader.favoriteBooks.length);

if (reader.favoriteBooks.length == 1 ) {
  console.log(`${reader.name} tem 1 livro favorito`)
} else {
  console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos`);
}
;

/* 
Exercício 31

Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

Questão 1: Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.

Questão 2: Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.

Modifique o nome da pessoa compradora para Luiz Silva;
Modifique o valor total da compra para R$ 50,00.
*/

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  // Questão 1: Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.

  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Número: ${order.address.number}, AP:${order.address.apartment}.`
}

console.log(customerInfo(order));


const orderPizza = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Luiz Silva',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};


const orderModifier = (fullOrder) => {
  // Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.

  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Número: ${order.address.number}, AP:${order.address.apartment}.`
}

console.log(orderModifier(order));



/* 
Exercício 32

Questão 1: Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

Questão 2: Crie uma função que retorne a soma do número total de estudantes em todos os cursos.


Questão 3: Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

Questão 4: Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
*/


const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

// Questão 1
const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(school, 0));

// Questão 2
const sumStudents = () => {

let totalStudents = 0

   school.lessons.forEach(lesson => {
     totalStudents += lesson.students
  });
     return totalStudents;
}

console.log(sumStudents());

// Questão 3
const verifyProp = (obj, key) => {
  for (let index = 0; index < obj.lessons.length; index += 1) 
    { if (obj.lessons[index][key] === undefined) 
      { return false; } } return true; } 
      console.log(verifyProp(school, 'professor')); // false 



const dataMap = require("./dataMap")
console.log(dataMap.cards.name);


// Exexício 33
// Por meio do array de frutas chamado basket, crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.

const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Create an empty object to store counts
const counts = {};

for (const str of strings) {
  counts[str] = (counts[str] || 0) + 1;
}

console.log(counts);


// Exexício 34
const dataCards = require("./dataMap");

const newArray = [];

for (let index = 0; index < dataCards.types.length; index +=1) {
  newArray.push(dataCards.types[index].name)
}
console.log(newArray);

const dataCards = require("./dataMap");
const newArrayMap = dataCards.attributes.map((attribute) => attribute.id)
console.log(newArrayMap);



// Criar uma string para cada carta com seu ataque e defesa
const dataCardsTwo = require("./dataMap");

const getAtkDef = (cards) => {
  return cards.map((card) => {
    if (card.atk === undefined || card.def === undefined) {
      return `A carta ${card.name} não possui nem ataque nem defesa`
    } else {
      return `A carta ${card.name} tem o ataque de ${card.atk} e a defesa de ${card.def}`
    }
    
  })
};

console.log(getAtkDef(dataCardsTwo.cards));

// Exiba todas as cartas com o ataque maior que 2000
const dataCardsThree = require("./dataMap");

const getCardsByAtk = (dataCardsThree, atkNumber) => {
  const getfilteredCards =  dataCardsThree.filter((card) => card.atk > atkNumber);

  return getfilteredCards;
  }

console.log(getCardsByAtk(dataCardsThree, 2000));



// EXIBA TODAS AS CARTAS DE UM DETERMINADO TIPO DA SEGUINTE FORMA:

/*
[
  { typeId: 1, name: 'Blue-Eyes White Dragon' },
  { typeId: 1, name: 'Red-Eyes Black Dragon' },
  { typeId: 1, name: 'Dragon Queen of Tragic Endings' }
  }
  */
const dataCardsFour = require('./dataMap');
 
const getCardsByType = (data, cardType) => data
  .filter((card) => card.typeId === cardType)
  .map((card) => ({typeId: card.typeId, name: card.name}));


console.log(getCardsByType(dataCardsFour.cards, 1));


// Exercício 35
const sortNumbers = [1, 6, 3, 20, 9, 85, 5, 4, 7, 0];

const sortArray = sortNumbers.sort((a,b) => b -a);
console.log(sortArray);