const fs = require('fs');
const xml2js = require('xml-js');

// XML dosyasını oku
const xmlData = fs.readFileSync('./data.xml', 'utf8');


// XML verisini JSON'a dönüştür
const jsonData = xml2js.xml2json(xmlData, { compact: true, spaces: 2 });

// JSON verisini bir dosyaya yaz
fs.writeFileSync('./data.json', jsonData);

