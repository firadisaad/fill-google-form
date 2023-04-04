## Usage Instructions

To run the project:

1. Install dependencies by running `npm i`.
2. Run the project with `npm run start`.
3. Open this link in the browser to start the project and begin filling the Google Forms: `http://localhost:3000/fill`.

To modify the behavior of the code, add selectors to the `fill-google-form` class by modifying the `selectors` variable. To modify the number of pages opened, adjust the value of the `index` variable in the code.

### Explanation of the Code

This code uses the Puppeteer library to automate browser actions. It opens a browser page, navigates to a specified URL, sets the viewport size, and then clicks on certain selectors on the page. This process is repeated for a specified number of iterations.

Here's a breakdown of what the code does step by step:

1. The `for` loop runs 50 times (or a specified number of times), creating a new browser page on each iteration.
2. The `await browser.newPage()` method creates a new browser page.
3. The `await page.goto()` method navigates the newly created page to the specified URL.
4. The `await page.setViewport()` method sets the size of the viewport to 1400x1024.
5. The `for` loop iterates over the `selectors` array, which contains CSS selectors for elements on the page that need to be clicked.
6. The `await page.click()` method clicks on each selector in the `selectors` array.
7. Once all the selectors have been clicked, the loop moves on to the next page (or exits the loop if the desired number of iterations have been completed).
