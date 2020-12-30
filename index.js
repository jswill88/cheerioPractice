const axios = require('axios');
const cheerio = require('cheerio');

const fetchUrl = async url => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  console.log($('h2').eq(5).text());
  // Get the text of elements after an element
  console.log($('h2').eq(2).next().next().text());
  // loop over all elements of a type
  let sectionHeaders = [];
  $('h2').each(function (i,e) {
    // use this to reference each element
    // don't use arrow function to be sure
    // this has the correct context
    sectionHeaders.push($(this).text());
  });
  console.log(sectionHeaders);
  return;
};

fetchUrl('https://en.wikipedia.org/wiki/Wes_Montgomery');
