import 'jest';

import sum from '../src/sum';

describe('primeiro teste', () => {
    test('testa soma positivo', () => { 
        expect(sum(1, 5)).toBe(6);
     })

     test('testa soma negativo', () => { 
        expect(sum(-1, 5)).toBe(6);
     })
})