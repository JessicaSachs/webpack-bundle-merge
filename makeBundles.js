const fs = require('fs');

const templateFile = fs.readFileSync('./bundles/template.js');
for (let i = 0; i < 280; i++) {
  const fileName = `bundle_${i}.js`;
  const content = templateFile.toString().replace(/FILENAME/g, fileName);
  fs.writeFileSync(`./bundles/${fileName}`, content);
}
