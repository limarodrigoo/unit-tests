const assert = require('assert');
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

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')) , true);
    assert.strictEqual(productDetails('X', 'Y').length, 2);

    const details = productDetails('Alcool gel', 'Máscara');
    
    assert.strictEqual(typeof details[0], 'object');
    assert.strictEqual(typeof details[1], 'object');
    assert.notStrictEqual(details[0], details[1]);

    const id1 = details[0].details.productId;
    const id2 = details[1].details.productId;

    assert.strictEqual(id1.substring(id1.length - 3), '123');
    assert.strictEqual(id2.substring(id2.length - 3), '123');
  });
});
