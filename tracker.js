const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');
request("https://www.worldometers.info/coronavirus/", printcase);
function printcase(error,response,html){
  if(error){
      console.log(error);
  }
  else{
    printcovidcount(html);
  }
}
function printcovidcount(html){
  let settool=cheerio.load(html);
  let values=settool(".maincounter-number span")
  // for(let i=0;i<values.length;i++){
  //   console.log(settool(values[i]).text());
  // }
  console.log(chalk.grey("Total covid cases:\t")+chalk.black.bgGray(" "+settool(values[0]).text()+" "));
  console.log(chalk.red("Deaths:\t\t\t")+chalk.black.bgRed(" "+settool(values[1]).text()+" "));
  console.log(chalk.green("Recovered:\t\t")+chalk.black.bgGreen(" "+settool(values[2]).text()+" "));
}