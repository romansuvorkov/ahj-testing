// import puppetteer from 'puppeteer';

const puppetteer = require('puppeteer');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../../webpack.config');

const server = new WebpackDevServer(webpack(config), {});
server.listen(9000, 'localhost', (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send('ok');
  }
});

jest.setTimeout(30000); 
    describe('Validation form', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';
    beforeAll(async () => {
        browser = await puppetteer.launch({
        headless: true,
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


