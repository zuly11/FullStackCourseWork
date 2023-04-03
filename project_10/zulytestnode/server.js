const http = require("http");


const server = http.createServer((req, res) => {
    if(req.url ==="/");{
        res.write("hello world");
        res.end();
    }
    else if(req.url === "'/foo"){
        res.write("This is the Foo page");
         res.end()}
    else{
        res.statusCode = 404;
        res.write('This page does not exsit');
        }
    
 

const port = process.env.PORT || 3000;
server.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})
