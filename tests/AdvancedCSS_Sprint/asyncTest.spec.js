const fs = require('fs');
const readline = require('readline');
const puppeteer = require('puppeteer');
const path = require("./main.js")

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

test("Test if sign up link and page exists",async () => {
        let browser = await puppeteer.launch();
        let page = await browser.newPage();
    try{

        await page.goto('http://localhost:3300/index.html');

        const signUp = await page.$eval('.sign-up',el => {console.log(el);return el.href})
        urlArray = signUp.split("/")
        const pageExists = await fs.existsSync(`./Sprint-Challenge--Advanced-CSS/${urlArray[urlArray.length-1]}`);
        expect(pageExists).toBe(true)
        await page.click('.sign-up', {button:"left"})
        await page.screenshot({path: 'signUp.png'});

        browser.close();
    }catch(err){
        browser.close()
        throw ("test failed")
    }
})
////////////////////////////////////////////////////////////
test("Does the viewport meta tag exist",async () => {
        let browser = await puppeteer.launch();
        let page = await browser.newPage();
    try{
        await page.goto('http://localhost:3300/index.html');
        //const head = await page.$('head').innerHTML
        const head = await page.evaluate(() => document.querySelector("head").innerHTML);

        expect(head).toContain(`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`)
        browser.close();
    }catch(err){
        browser.close()
        throw ("test failed")
    }
})
////////////////////////////////////////////////////////////
test("Get Mobile Screenshot",async () => {
        let browser = await puppeteer.launch();
        let page = await browser.newPage();
    try{
        await page.setViewport({width:500,height:1000,isMobile:true})
        await page.goto('http://localhost:3300/index.html');
        await page.screenshot({path: 'mobile.png'});

        expect(true).toBe(true)
        browser.close();
    }catch(err){
        browser.close()
        throw ("test failed")
    }
})
////////////////////////////////////////////////////////////
test("Get Background Color",async () => {
        let browser = await puppeteer.launch();
        let page = await browser.newPage();
    try{
    await page.goto('http://localhost:3300/index.html');

    // const connection = page.connection();
    // const CSS = await connection.send('CSS.getBackgroundColors');

    await page.hover('.home .walk .walk-text a .btn')
    const signUp = await page.evaluate(() => {
        
        const test = document.querySelector('.home .walk .walk-text a .btn');
        return JSON.parse(JSON.stringify(getComputedStyle(test)));
    });

    expect(signUp["background"].split(" none")[0]).toBe('rgb(255, 255, 255)')
    browser.close();
    }catch(err){
        browser.close()
        throw ("test failed")
    }
})
////////////////////////////////////////////////////////////

// test("Test if less files are present",async (done) => {
//     let browser = await puppeteer.launch();
//     let page = await browser.newPage();
//     await page.goto('http://localhost:3300/index.html');
//      fs.existsSync(`./footer.iss`)
//     const files = await Promise.all([
//         fs.existsSync(`./less/footer.less`),
//         fs.existsSync(`./less/global.less`),
//         fs.existsSync(`./less/home-page.less`),
//         fs.existsSync(`./less/index.less`),
//         fs.existsSync(`./less/mixins.less`),
//         fs.existsSync(`./less/navigation.less`),
//         fs.existsSync(`./less/reset.less`),
//         fs.existsSync(`./less/variables.less`),
//     ]);
//     const allTrue = files.every(ele => ele === true);

//     expect(allTrue).toBe(true);

//     const fileContent = await fs.readFileSync(`./less/index.less`, 'utf8');

//     const rl = readline.createInterface({
//         input: fs.createReadStream(`./less/index.less`)
//       });


//     await rl.on('line', async (line) => {
//         await console.log(`Received: ${line}`);
//         done();
//         });

//     console.log(testing)


//     browser.close();
// })
////////////////////////////////////////////////////////////


    //await page.screenshot({path: 'example.png'});

//   const signUp = await page.evaluate(() => {
//     const btn = document.querySelector('.btn');
//     return getComputedStyle(btn);
// });
//     console.log(signUp)
