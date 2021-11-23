const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");
//Feature -> request
console.log("Before");
request('https://www.worldometers.info/coronavirus/', cb);
console.log("After");
function cb(error, response, html){
    if(error){
        console.log('error:',error);
        //print the error if one occurred
    }else{
        handleHtml(html);
        //print the HTML for the google homepage
    }
}
function handleHtml(html){
    let selTool = cheerio.load(html);
    let contentArr = selTool("#maincounter-wrap span");
    //[i] -> wrap selTool
    // for(let i = 0;i < contentArr.length;i++){
    //    let data = selTool(contentArr[i]).text();
    //    console.log("data", data);
    let total = selTool(contentArr[0]).text();
    let deaths = selTool(contentArr[1]).text();
    let recovered = selTool(contentArr[2]).text();
    console.log(chalk.magenta("Total Cases "+total));
    console.log(chalk.red("deaths "+deaths));
    console.log(chalk.white("recovered "+recovered));
}