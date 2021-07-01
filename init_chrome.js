const puppeteer = require('puppeteer');
var fs = require('fs');



let input=process.argv.slice(2);
console.log("input",input);



    (async () => {
      const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:["--start-maximized"],
        userDataDir: "./user_data",
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        slowMo:50
    }
      );
      if(input.includes("-l")){
      const page = await browser.newPage();
      await page.goto('https://www.linkedin.com/login');
    }
    if(input.includes("-y")){
      const page = await browser.newPage();
      await page.goto('https://www.youtube.com/');
    }
    if(input.includes("-p")){
      const page = await browser.newPage();
      await page.goto('https://www.pepcoding.com/resources/');
    }
    if(input.includes("-g")){
      const page = await browser.newPage();
      await page.goto('https://mail.google.com/');
    }
    if(input.includes("-f")){
      const page = await browser.newPage();
      await page.goto('https://www.facebook.com/');
    }
    if(input.includes("-i")){
      const page = await browser.newPage();
      await page.goto('https://www.instagram.com/');
    }
    if(input.includes("-github")){
      const page = await browser.newPage();
      await page.goto('https://github.com/');
    }
    if(input.includes("-w")){
      const page = await browser.newPage();
      await page.goto('https://web.whatsapp.com/');
    }

    if(input.includes("-cf")){
      const page = await browser.newPage();
      await page.goto('https://codeforces.com/problemset');
    }

    if(input.includes("-cc")){
      const page = await browser.newPage();
      await page.goto('https://www.codechef.com/problems/school/?itm_medium=navmenu&itm_campaign=problems');
    }
    if(input.includes("-leet")){
      const page = await browser.newPage();
      await page.goto('https://leetcode.com/problemset/all/');
    }
    if(input.includes("-gfg")){
      const page = await browser.newPage();
      await page.goto('https://practice.geeksforgeeks.org/explore/?company%5B%5D=Amazon&problemType=functional&page=1&sortBy=submissions&company%5B%5D=Amazon');
    }
    

    })();
  


