const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');
    let result = createMenu({food: {}, drinks: {}});
    expect(result.fetchMenu()).toHaveProperty('food');
    expect(result.fetchMenu()).toHaveProperty('drinks');
    expect(result.fetchMenu()).toEqual({food: {}, drinks: {}});
    expect(result).toHaveProperty('consumption', []);
    result = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    });
    expect(result.order('teste')).toBe('Item indisponível');
    expect(result.consumption).toEqual([]);
    expect(result.order('coxinha')).toBe(undefined);
    expect(result.consumption).toEqual(['coxinha']);
    result = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    });
    result.order('coxinha');
    result.order('sanduiche');
    result.order('cerveja');
    expect(result.consumption).toEqual(['coxinha', 'sanduiche', 'cerveja']);
    result = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    });
    result.order('coxinha');
    result.order('coxinha');
    expect(result.consumption).toEqual(['coxinha', 'coxinha']);
    expect(result.pay()).toBe(8.58);
    result = createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    });
    result.order('coxinha');
    result.order('cerveja');
    expect(result.pay()).toBe(11.88);
  });
});
