const puppeteer = require('puppeteer');
var fs = require('fs');



let input=process.argv.slice(2);
console.log("input",input);

for(let i=0;i<input.length;i++){
  if(input[i]=='-l'){
    console.log("Hello Coder, Buddy is Starting command of LinkedInPost.");
    linkedInPost()
  }
  else if(input[i]=='-lm'){
    console.log("Hello Coder, Buddy is Starting command of LinkedInPost.");
    linkedInImagePost()
  }
  else{
    console.log("Invalid input");
    break;
  }
}


function linkedInPost(){
  var psot = fs.readFileSync("./post_content/post.txt", "utf8");
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
    await page.goto('https://www.linkedin.com/login');
  
    var item = page.$("[validation='email|tel']");
  if(item != null){
    await page.click("[class='artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view share-box-feed-entry__trigger']");
    await page.type("[data-placeholder='What do you want to talk about?']",psot)
    await page.waitForSelector('[aria-label="Save this post"]')
    await  page.click('[aria-label="Save this post"]')
   
  
  }else{
    await page.type("[validation='email|tel']","fimin51179@pigicorn.com")
    await page.type("[validation='password']","Fimin@123")
    await page.click("[type='submit']")
  }
    // const page1=await browser.newPage()
    // await page1.goto("https://medium.com/builduniversity/building-an-android-app-in-10-minutes-2746247fc6f")
  })();
}



function linkedInImagePost(){
  var psot = fs.readFileSync("./post_content/post.txt", "utf8");
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
    await page.goto('https://www.linkedin.com/login');
  
    var item = page.$("[validation='email|tel']");
  if(item != null){
    await page.click("[class='artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view share-box-feed-entry__trigger']");

    await page.waitForSelector('[type="image-icon"]')
    await page.click('[type="image-icon"]')
	  const input = await page.$('[type="image-icon"]')
		await input.uploadFile("./post_content/programmer.jpg")
	
    await page.type("[data-placeholder='What do you want to talk about?']",psot)
    
    await page.waitForSelector('[aria-label="Save this post"]')
    await  page.click('[aria-label="Save this post"]')
   
  
  }else{
    await page.type("[validation='email|tel']","fimin51179@pigicorn.com")
    await page.type("[validation='password']","Fimin@123")
    await page.click("[type='submit']")
  }
    // const page1=await browser.newPage()
    // await page1.goto("https://medium.com/builduniversity/building-an-android-app-in-10-minutes-2746247fc6f")
  })();
}


function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}