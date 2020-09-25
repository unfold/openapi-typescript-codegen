'use strict';

const generate = require('./scripts/generate');
const copy = require('./scripts/copy');
const compile = require('./scripts/compile');
const server = require('./scripts/server');
const browser = require('./scripts/browser');

describe('v2.fetch', () => {

    beforeAll(async () => {
        await generate('v2', 'fetch');
        await copy('v2', 'fetch');
        await compile('v2', 'fetch');
        await server.start('v2', 'fetch');
        await browser.start();
    }, 30000);

    afterAll(async () => {
        await server.stop();
        await browser.stop();
    });

    it('complexService', async () => {
        const result = await browser.evaluate(async () => await window.test.complexService.complexTypes());
        expect(result).toBe('');
    });
});
