const bigMac = 26.90;
const bigTasty = 39.90;
const mcFritasMedia = 13.90;
const topSundayChocolate = 1.90;
const isDelicious = true;
const city = "São Paulo";
const state = "SP";
const unitName = "Shopping Tatuapé";

const mcDonalds = {
    bigMac: 26.90,
    bigTasty: 39.90,
    mcFritasMedia: 13.90,
    topSundayChocolate: 1.90,
    isDelicious: true,
    address: {
        city: "São Paulo",
        state: "SP",
        unitName: "Shopping Tatuapé",
    }
}

console.log(Object.entries(mcDonalds));


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
      }

      const keys = Object.keys(menu);
      
      for (let index = 0; index < keys.length; index++) {
        report[keys[index]] = menu[keys[index]].length;
      }

      return report;
}

console.log(getMcInfo());


// Crie uma função que retorne a quantidade total de items vendidos.

const totalSells = () => {
  const items = getMcInfo();
  let sum = 0;
  const values = Object.values(items);

  for (let i = 0; i < values.length; i++) {
    sum += values[i]
  }
  return sum;
}

console.log(totalSells());


// Crie uma função qie recebe uma região por parâmetro e retorne um array de objetos

/*

{
countryName: "Brazil",
pupulation: 212100000,
languages: [Portuguese]
},

*/

const countries = require("./data.json");

console.log(countries);