import http from "http";
const PORT = 3000;
const delay = (ms)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("delay...");
            resolve();
        }, ms);
    })
}
const server = http.createServer(async (req, res)=>{
    switch (req.url) {
        case "/home":
            {
                await delay(5000);
                res.write("Hello From NodeJS")
                res.end();
                // setTimeout(() => {
                //     //async
                //     res.write("Hello From NodeJS!")
                //     res.end();
                // }, 5000);
                // const start = new Date();
                // while (new Date() - start < 5000) {
                //     console.log(new Date() - start);
                // }
                // res.write("Hello From NodeJS!")
                // res.end();
            }
            break;

        default:
            res.end("Not Found 404");
            break;    
    }
});
server.listen(PORT, () => {
    console.log(`Server start... localhost:${PORT}`);
});



// //callback function:
// setTimeout(()=>{
//     console.log("ST");
// },0)
// console.log("RUN");

// setTimeout(()=>{
//     let i = 0;
//     while (i < 50) {
//         console.log(i);
//         i++;
//     }
    
// }, 3000);
// console.log("RUN");



