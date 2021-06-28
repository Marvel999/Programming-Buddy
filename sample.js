const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')
const pathFile = __dirname.split('\\').slice(0, 4).join('/')
const fileExitst = fs.existsSync(`./post_content/programmer.jpg`)

const scraperRunner = async () => {
	const browser = await puppeteer.launch({ headless: false, args: ['--no-sanbox'] })
	const page = await browser.newPage()
	await page.goto('https://anonfiles.com', { waitUntil: 'networkidle2' })

	await page.waitForSelector('input[type="file"]')
	const input = await page.$('input[type="file"]')
	if (fileExitst) {
		await input.uploadFile("./post_content/programmer.jpg")
	}
}

scraperRunner()