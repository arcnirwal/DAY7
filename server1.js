// const http = require('http');
// const ap =http.createServer((req,res)=>{
//     console.log('request recieved');
//     console.log(req);
//     res.end("hello");
// });
// ap.listen(1401,()=>{
//     console.log('.............Server Started.......');})
    const http = require('http');
    const htmlTemplate=`
<html>
<body>

<h1> _Title _</h1>
<p>My _INFO_.</p>
</div>

</body>
</html>`
const ap =http.createServer((req,res)=>{
    console.log('request recieved');
    res.writeHead(200,{
        'content-type':'text/html'
    })
      
  
    console.log();
    res.end(htmlTemplate);
    
});
ap.listen(1401,()=>{
    console.log('.............Server Started.......');})
    
    
