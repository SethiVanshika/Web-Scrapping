const url = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-punjab-kings-53rd-match-1254094/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
const { copyFileSync } = require("fs");
console.log("Before");
request(url, cb);
function cb(err, response, html){
    if(err){
        console.log(err);
    }else{
        extractHTML(html);
    }
}
function extractHTML(html){
   let $ = cheerio.load(html);
   //Full page search
   let teamsArr = $(".match-info.match-info-MATCH .team");
   let wteamName;
   for(let i = 0;i < teamsArr.length; i++){
       let hasclass = $(teamsArr[i]).hasClass("team-gray");
       if(hasclass == false) {
           let teamNameElem = $(teamsArr[i]).find(".name");
           wteamName = teamNameElem.text().trim();
       }
      
   }
   let innings = $(".card.content-block.match-scorecard-table>.Collapsible")
   let htmlStr = "";
   for(let i = 0; i < innings.length; i++){
    //    let cHtml = $(innings[i]).html();
    //    htmlStr += cHtml;
    // team names
    let teamNameElem = $(innings[i]).find(".header-title.label");
    let teamName = teamNameElem.text();
    teamName = teamName.split("INNINGS")[0];
    teamName = teamName.trim();
    // team table
    // console.log(teamName);
    let hwtName = "";
    let hwt = 0;
    if(wteamName == teamName){
        console.log(teamName);
        let tableElem = $(innings[i]).find(".table.bowler");
        let allBowlers = $(tableElem).find("tr");
        for(let j = 0; j < allBowlers.length;j++){
            let allColsOfPlayer = $(allBowlers[j]).find("td");
            let playerName = $(allColsOfPlayer[0]).text();
            let wickets = $(allColsOfPlayer[0]).text();
           // console.log(`Winning Team ${wteamName} playerName: ${playerName} wickets: ${wickets}`);
           if(wickets >= hwt){
               hwt = wickets;
               hwt = playerName;
           }
        }   
    }
    console.log(`Winning Team ${wteamName} highest wicket Taker Playername: ${playerName} wickets:`)

   }
   console.log(htmlStr);
}
