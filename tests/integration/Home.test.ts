import 'jest';

import request from 'supertest';
import app from '../../src/App';

describe('Home page', () => {
    test('Status code 200', async () => { 
        const response = await request(app).get('/').expect(200);
        expect(response.statusCode).toBe(200);
     })
})