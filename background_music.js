const puppeteer = require('puppeteer');
var fs = require('fs');

let musicUrl={
boolywood:"https://www.youtube.com/watch?v=zw48SrGcTwQ",
hoolywood:"https://www.youtube.com/watch?v=1EY6LLl6t7w",
Pop:"https://www.youtube.com/watch?v=mX2L_lVSkOY",
slow:"https://www.youtube.com/watch?v=qycqF1CWcXg",
};

let songUrl="";

let input=process.argv.slice(2);
console.log("input",input);

for(let i=0;i<input.length;i++){
  if(input[i]=='-B'){
    console.log("Hello Coder, Buddy is Starting background music for you.");
    songUrl=musicUrl.boolywood;
    Playsong()
  }
  else if(input[i]=='-H'){
    console.log("Hello Coder, Buddy is Starting background music for you.");
    songUrl=musicUrl.hoolywood;
    Playsong()
  }
  else if(input[i]=='-P'){
    console.log("Hello Coder, Buddy is Starting background music for you.");
    songUrl=musicUrl.Pop;
    Playsong()
  }
  else if(input[i]=='-S'){
    console.log("Hello Coder, Buddy is Starting background music for you.");
    songUrl=musicUrl.slow;
    Playsong()
  }
  else{
    console.log("Invalid input");
    break;
  }
}


function Playsong(){
  var psot = fs.readFileSync("./post_content/post.txt", "utf8");
  (async () => {
    const browser = await puppeteer.launch({
      headless:false,
      defaultViewport:null,
      args: ['--start-maximized'],
      userDataDir: "./user_data",
      // executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      slowMo:50
  }
    );
    const page = await browser.newPage();
    await page.goto(songUrl);
    await Promise.all([
        page.waitForSelector('[aria-label="Play"]'),
        page.click('[aria-label="Play"]'),
    ])
    const session = await page.target().createCDPSession();
    const {windowId} = await session.send('Browser.getWindowForTarget');
    await session.send('Browser.setWindowBounds', {windowId, bounds: {windowState: 'minimized'}});
    // var item = page.$('.ytp-ad-skip-button.ytp-button');
    // Log.e(item)
    // if(item!=undefined){
    //     await Promise.all([
    //         page.waitForSelector('.ytp-ad-skip-button.ytp-button'),
    //         page.click('.ytp-ad-skip-button.ytp-button')
    // ]);
    // }
  
  
  })();
}

