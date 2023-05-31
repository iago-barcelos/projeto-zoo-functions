const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade elefantes quando for passado o argumento "count"', () => {
    const resultado = handlerElephants('count');
    expect(resultado).toBe(4);
  });
  it('Retorna média de idade próxima a 10.5 para o argumento "averageAge"', () => {
    const resultado = handlerElephants('averageAge');
    expect(resultado).toBeCloseTo(10.5, 1);
  });
  it('Retorna um array contendo "Jefferson" para o argumento "names"', () => {
    const resultado = handlerElephants('names');
    expect(resultado).toContain('Jefferson');
  });
  it('Retorna a localização dos elefantes para o argumento "location"', () => {
    const resultado = handlerElephants('location');
    expect(resultado).toBe('NW');
  });
  it('Retorna um array que não contém "Monday" para o argumento "availability"', () => {
    const resultado = handlerElephants('availability');
    expect(resultado).not.toContain('Monday');
  });
  it('Retorna popularidade igual ou maior a 5 para o argumento "popularity"', () => {
    const resultado = handlerElephants('popularity');
    expect(resultado).toBeGreaterThanOrEqual(5);
  });
  it('Retorna a string "Parâmetro inválido, é necessário uma string" quando o argumento for um objeto vazio ', () => {
    const resultado = handlerElephants({});
    expect(resultado).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Retorna null quando um argumento inválido é fornecido', () => {
    const resultado = handlerElephants('invalidArgument');
    expect(resultado).toBeNull();
  });
});
