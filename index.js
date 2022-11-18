const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Adopt a Pet!</h1><p>Browse through the links below to find your new furry friend:</p><ul><li>Dogs</li><li>Cats</li><li>Rabbits</li></ul>")
})

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}.`);
})