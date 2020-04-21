const puppeteer = require('puppeteer');
const { fork } = require('child_process');

jest.setTimeout(30000);
describe('E2E', () => {
  let browser = null;
  let page = null;
  let server = null;
  const url = 'http://localhost:9000';
  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', () => {
        reject();
      });
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppeteer.launch(
      {
        // headless: false,
        // slowMo: 100,
        // devtools: true,
      },
    );
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();
  });
  describe('Tests', () => {
    test('Should add .no_op', async () => {
      await page.goto(url);
      const input = await page.$('.input');
      await input.type('371449635398431');
      const submit = await page.$('.button');
      await submit.click();
      await page.waitForSelector('.no_op');
    });

    test('Should add .block', async () => {
      await page.goto(url);
      const input = await page.$('.input');
      await input.type('375');
      const submit = await page.$('.button');
      await submit.click();
      await page.waitForSelector('.block');
    });
  });
});
