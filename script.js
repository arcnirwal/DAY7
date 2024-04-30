
// console.log('hello');

// npm init to create package.json
// npm i nodemon for nodemon dependencies-----> node module folder will create 
//goto dummy.json website 
//create fs require
//read file sync


const fs = require("fs");
const http = require("http");
const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data);
// console.log(dataObj)
const cardTemplate = `
<div class='product-card'>
<h3>$TITLE$<h3>
<img src="$img_src$" alt='product-image' />
</div>
`;

let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp=cardTemplate;
    temp=temp.replace("$TITLE$",dataObj[i].title);
    temp=temp.replace("$img_src$",dataObj[i].images[0]);

    result.push(temp);
}
result=result.join(' ')
// console.log(result);
const server = http.createServer((req, res) => {
    // res.end(cardTemplate);
    res.end(result);

});
server.listen(1400);