let puppeteer = require("puppeteer");
(async function(){
    const browser = await puppeteer.launch({
        headless:false,
        slowMo:500,
        defaultViewport:null,
        args:["--start-maximized"]
    });
    let newPage = await browser.newPage();
    await newPage.goto("https://www.google.com/");
    await newPage.waitForSelector("input[type='text']",{visible:true})
    await newPage.type("input.gLFyf.gsfi","Zomato");
    await newPage.keyboard.press("Enter");
    await newPage.waitForSelector(".CCgQ5.vCa9Yd.QfkTvb.MUxGbd.v0nnCb>span",{visible:true})
    await newPage.click(".CCgQ5.vCa9Yd.QfkTvb.MUxGbd.v0nnCb>span");
    await newPage.waitForSelector("img[alt='Restaurant Card']",{visible:true});
    let arr = await newPage.$$("img[alt='Restaurant Card']");
    await arr[0].click();
    await newPage.waitForSelector("span.dmsiBQ",{visible:true});
    let arr1 = await newPage.$$("span.dmsiBQ");
    await arr1[0].click();
    // await newPage.waitForSelector("img[src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png']",{visible:true})
    await newPage.waitForSelector(".jetOJt",{visible:true});
    await newPage.click(".jetOJt");
    await newPage.waitForSelector(".eXneOi",{visible:true});
    let arr2 = await newPage.$$(".eXneOi");
    await arr2[0].click();
    
    // await newPage.waitForSelector("img[src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png']",{visible:true})
    // await newPage.click("img[src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png']")
    // await newPage.waitForSelector("img[src='https://b.zmtcdn.com/data/pictures/8/19540068/c468da08b08e8279330b6bbe18e9d911_o2_featured_v2.jpg']",{visible:true})
    // await newPage.hover("img[src='https://b.zmtcdn.com/data/pictures/8/19540068/c468da08b08e8279330b6bbe18e9d911_o2_featured_v2.jpg']")
    // await newPage.waitForSelector("img[src='https://b.zmtcdn.com/data/dish_photos/506/3872f85b603ad74cd965eabf1f6b3506.jpg']",{visible:true})
    // await newPage.click("img[src='https://b.zmtcdn.com/data/dish_photos/506/3872f85b603ad74cd965eabf1f6b3506.jpg']")
    // console.log("script executed")
})()
