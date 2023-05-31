const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  describe('Sem argumentos', () => {
    it('Retorna o objeto de horários de funcionamento', () => {
      const resultado = getOpeningHours();
      expect(resultado).toEqual({
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      });
    });
  });
});
describe('Argumentos: Monday e 09:00-AM', () => {
  it('Retorna a string "The zoo is closed"', () => {
    const resultado = getOpeningHours('Monday', '09:00-AM');
    expect(resultado).toBe('The zoo is closed');
  });
});

describe('Argumentos: Tuesday e 09:00-AM', () => {
  it('Retorna a string "The zoo is open"', () => {
    const resultado = getOpeningHours('Tuesday', '09:00-AM');
    expect(resultado).toBe('The zoo is open');
  });
});

describe('Argumentos: Wednesday e 09:00-PM', () => {
  it('Retorna a string "The zoo is closed"', () => {
    const resultado = getOpeningHours('Wednesday', '09:00-PM');
    expect(resultado).toBe('The zoo is closed');
  });
});

describe('Argumentos inválidos: Thu e 09:00-AM', () => {
  it('Lança uma exceção com a mensagem "The day must be valid. Example: Monday"', () => {
    expect(() => {
      getOpeningHours('Thu', '09:00-AM');
    }).toThrow('The day must be valid. Example: Monday');
  });
});

describe('Argumentos inválidos: Friday e 09:00-ZM', () => {
  it('Lança uma exceção com a mensagem "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});

describe('Argumentos inválidos: Saturday e C9:00-AM', () => {
  it('Lança uma exceção com a mensagem "The hour should represent a number"', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrow('The hour should represent a number');
  });
});

describe('Argumentos inválidos: Sunday e 09:c0-AM', () => {
  it('Lança uma exceção com a mensagem "The minutes should represent a number"', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrow('The minutes should represent a number');
  });
});

describe('Argumentos inválidos: Monday e 13:00-AM', () => {
  it('Lança uma exceção com a mensagem "The hour must be between 0 and 12"', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-AM');
    }).toThrow('The hour must be between 0 and 12');
  });
});

describe('Argumentos inválidos: Tuesday e 09:60-AM', () => {
  it('Lança uma exceção com a mensagem "The minutes must be between 0 and 59"', () => {
    expect(() => {
      getOpeningHours('Tuesday', '09:60-AM');
    }).toThrow('The minutes must be between 0 and 59');
  });
});
