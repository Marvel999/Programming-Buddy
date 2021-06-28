const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"],
    userDataDir: "./user_data",
    // executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    slowMo:50
}
  );
  const page = await browser.newPage();
  await page.goto('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin');

  await page.type("[type='email']","fimin51179@pigicorn.com")
  await page.evaluate(function(){
      let qurie=document.querySelectorAll("Fimin@123")
      qurie[2].click()
  })
//   await page.click(".VfPpkd-RLmnJb")




})();