// import puppetteer from 'puppeteer';

var puppetteer = require('puppeteer');

jest.setTimeout(30000); 
describe('Validation form', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';
    beforeAll(async () => {
        browser = await puppetteer.launch({
        headless: false,
        slowMo: 100,
        devtools: true,
        });
        page = await browser.newPage();
    });
    afterAll(async () => {
        await browser.close();
    });
    describe('Validate card', () => {
        test('Should add .no_op', async () => {
            
        await page.goto(baseUrl);
        const input = await page.$('.input');
        await input.type('371449635398431');
        const submit = await page.$('.button');
        submit.click();
        await page.waitForSelector('.no_op');
        });


    });

    describe('Validate error', () => {
        test('Should add .block', async () => {
            
        await page.goto(baseUrl);
        const input = await page.$('.input');
        await input.type('375');
        const submit = await page.$('.button');
        submit.click();
        await page.waitForSelector('.block');
        });


    });

});