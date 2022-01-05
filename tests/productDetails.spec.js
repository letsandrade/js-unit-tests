const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/
//ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
//https://www.w3schools.com/jsref/jsref_slice_array.asp

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    //const myProducts = productDetails('Pizza', 'Fries');
    expect(typeof productDetails).toBe('function');    
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('pizza', 'fries'))).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('pizza', 'fries').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('pizza', 'fries')[0]).toBe('object');
    expect(typeof productDetails('pizza', 'fries')[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('pizza', 'fries')[0]).not.toBe(productDetails('pizza', 'fries')[1]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('pizza', 'fries')[0].details.productId.slice(-3)).toBe('123');
    expect(productDetails('pizza', 'fries')[1].details.productId.slice(-3)).toBe('123');
  });
});
