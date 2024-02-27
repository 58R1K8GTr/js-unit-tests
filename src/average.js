/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (values) => {
  // adicione seu código aqui
  let sum = 0;
  if (!values.length) return undefined;
  for (let indexValue = 0; indexValue < values.length; indexValue += 1) {
    if (typeof values[indexValue] !== 'number') return undefined;
    sum += values[indexValue];
  }
  return Math.round(sum / values.length);
};

module.exports = average;
