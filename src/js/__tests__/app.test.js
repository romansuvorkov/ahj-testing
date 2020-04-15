import puppetteer from 'puppeteer';
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
        // const propertie = await americanExpressMask.getProperty('opacity');
        // console.log(propertie);
        // const style = window.getComputedStyle(americanExpressMask);
        // console.log(style.opacity);
        // const style = getComputedStyle(americanExpressMask);

        // async function isLocatorReady(element, page) {
        // const value = await page.evaluate(() => {
        //     const americanExpress = page.$(element);
        //     const americanExpressMask = americanExpress.$('.mask');
        //     const style = window.getComputedStyle(americanExpressMask);
        //     return style
        // });
        // }

        // let x = isLocatorReady('ae', page);


        // async function isLocatorReady(element, page) {
        //     const isVisibleHandle = await page.evaluateHandle((e) => 
        //   {
        //       const style = window.getComputedStyle(e);
        //       return (style && style.display !== 'none' && 
        //       style.visibility !== 'hidden' && style.opacity !== '0');
        //    }, element);
        //     var visible = await isVisibleHandle.jsonValue();
        //     const box = await element.boxModel();
        //     if (visible && box) {
        //       return true;
        //     }
        //     return false;
        // }
        // let x = isLocatorReady(americanExpressMask, page);
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