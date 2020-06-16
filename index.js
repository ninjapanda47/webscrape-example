const puppeteer = require('puppeteer');
const { url, selector } = require('./custom');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.addScriptTag({
    url: 'https://code.jquery.com/jquery-3.2.1.min.js',
  });
  // Get the text extraction
  const extractedText = await page.evaluate((selector) => {
    return $(selector).text().trim();
  }, selector);

  console.log('Text extracted:', extractedText);

  await browser.close();
})();
