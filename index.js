const axios = require('axios');
require('console-stamp')(console, '[dd.mm.yyyy][HH:MM:ss]')
const env = process.env;
let url = env.URL;
let enlog;
let delay;
let useragent = "Mozilla/5.0 (compatible; AhrefsBot/7.0;  http://ahrefs.com/robot/)";

if (!url) {
    console.error(`"URL" Enviorment Varible is not present, quiting`);
    process.exit(9);
}
if (!env.DELAY) {
    console.warn(`"DELAY" Enviorment Varible is not present, falling back to default (1 minute)`);
    delay = 60000;
} else {
    delay = Number(env.DELAY);
}
if (!env.ENABLE_LOG) {
    console.log(`"ENABLE_LOG" env is not present, disabling by default`);
    enlog = false;
} else {
    enlog = Boolean(env.ENABLE_LOG);
}

console.log(`---------------------------`);
console.log(`Nodejs WebPing, V2.0`);
console.log(`Written By: Chokun Rojanapron`);
console.log(`https://github.com/ChokunPlayZ/`);
console.log(`---------------------------`);
console.log(`Ping URL: ${url}`);
console.log(`Ping Delay: ${delay} (ms)`);
console.log(`Requst Logging: ${enlog}`);
console.log(`System Timzone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}\n\n`);
console.log(`---------------------------`);

const sendreq = async function(u) {
    let startTime;

    axios({
        method: 'get',
        url: u,
        headers: {
            'User-Agent': useragent
        }
    })
    .then(function (res) {
        let endTime = new Date();
        let responseTime = (endTime - startTime) / 1000;
        if (enlog) {
            console.log(`Response time: ${responseTime} seconds`);
        }
    })
    .catch(function (err) {
        console.error(`Axios Error: \n ${err}`);
    });
    startTime = new Date();
    setTimeout(function() {sendreq(u);}, delay)
}
console.log('Sending First Request in a few seconds')
sendreq(url);
