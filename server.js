const http=require('http');
const fs = require('fs');
const data= fs.readFileSync('data.json','utf8');
const dataObj=JSON.parse(data);
console.log(dataObj.products);

const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <title>Node.js</title>
  <style>
    .card {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      margin: 10px;
      padding: 10px;
      float: left;
    }
  </style>
</head>
<body><h1>Hello World from template variable</h1><h2>Node.js from template variable</h2></body>
</html>
`;

const cardTemplate = `
<div class="card">
  <h1>Card Title</h1>
  <p>Card Description</p>
</div>`


const card1 = cardTemplate.replace('Card Title', 'Card 1').replace('Card Description', 'Card 1 Description');
const card12 = cardTemplate.replace('Card Title', 'Card 2').replace('Card Description', 'Card 2 Description');
const allcard = card1 + card12;
const page = htmlTemplate.replace('<h1>Hello World from template variable</h1><h2>Node.js from template variable</h2>', allcard)
// const http = require('http');


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(page);
  console.log(req.url);
  // console.log(Object.keys(req));
});
server.listen(3000, () => {
    console.log('Server is running...');
    }
);