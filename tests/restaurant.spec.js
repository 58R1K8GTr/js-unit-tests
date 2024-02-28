const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');
    let result = createMenu({food: {}, drinks: {}}).fetchMenu();
    expect(result).toHaveProperty('food');
    expect(result).toHaveProperty('drinks');
    expect(result).toEqual({food: {}, drinks: {}});
    expect(result).toHaveProperty('consumption', []);
  });
});
