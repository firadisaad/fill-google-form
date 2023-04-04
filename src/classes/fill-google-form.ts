import puppeteer, { Browser } from "puppeteer";

export class FillGoogleForms {
  static async scrapeWebsite(url: string) {
    const browser: Browser = await puppeteer.launch({
      headless: false,
      args: [
        "--start-maximized", // you can also use '--start-fullscreen'
      ],
    });

    for (let index = 0; index < 50; index++) {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle2" });
      await page.setViewport({
        width: 1400,
        height: 1024,
        deviceScaleFactor: 1,
      });

      const selectors = [
        ".YEVVod > div > span",
      ];

      for (let index = 0; index < selectors.length; index++) {
        await page.click(selectors[index]);
      }
    }
  }
}
