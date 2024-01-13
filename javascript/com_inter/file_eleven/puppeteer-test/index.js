const puppeteer = require('puppeteer-core');

const chrome = 'C::\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const url = 'https://www.google.com';

const isHeadless = true;

async function exec () {
    const browser = await puppeteer.launch({
        executablePath: chrome,
        headless: isHeadless,
        slowMo: 500;
    });

    const page = await browser.newPage();

    await page.goto(url);

    if(isHeadless) {
        await page.pdf({path: 'page.pdf', format: 'A4'});
    }

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));

    await page.evaluate(() => {
        console.log((`url is ${location.href}`));
    });

    await page.evaluate(() > {
        Array.from(document.querySelectorAll('a')).filter(x => x.getAttribute('href') === 'https://www.google.com').forEach(x => x.click();
    });

    await browser.close();

    console.log('end');
}

exec();