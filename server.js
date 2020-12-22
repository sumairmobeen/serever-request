// let express = require("express");

// let app = express();

// app.use(function middleware(req, res , next){

//     console.log("methode is: ", req.method)
//     console.log("URL is: ", req.url)
//     console.log("baseUrl is: ", req.baseUrl)
//     console.log("connection is: ", req.connection.remoteAddress)
//     console.log("connection is: ", req.connection.remotePort)
//     // res.send("some responce");
//     next();
// });
// app.get("/bulb",function (req, res , next){
//         res.send("bulb is on");
// });
// app.post("/bulb",function (req, res , next){

//     res.send("bulb is off");
// });
// app.put("/bulb" , function(req, res , next){
//         res.send("some responce");
// });
// app.delete("/bulb", function (req, res , next){   
//     res.send("Bulb is Deleted");
// });

// app.listen(3000, ()=>{
//     console.log("sent the Request")
// });


const Http = new XMLHttpRequest();
getfunction = () => {
    const url = 'https://192.168.50.177:3000/bulb';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
        document.write(Http.responseText);
    }
};
postfunction = () => {

    const url = 'https://192.168.50.177:3000/bulb';
    Http.open("Post", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
        document.write(Http.responseText);
    }
};

putfunction = () => {

    const url = 'https://192.168.50.177:3000/bulb';
    Http.open("Put", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
        document.write(Http.responseText);
    }
};
delfunction = () => {

    const url = 'https://192.168.50.177:3000/bulb';
    Http.open("Del", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
        document.write(Http.responseText);
    }
};
