const cheerio = require('cheerio');

exports.parse = function (html) {
    const $ = cheerio.load(html);
};