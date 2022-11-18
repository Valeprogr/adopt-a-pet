const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res)=>{
    res.send(`<h1>Adopt a Pet!</h1><p>Browse through the links below to find your new furry friend:</p><ul><li><a href="/animals/dogs">Dogs</a></li><li><a href="/animals/cats">Cats</a></li><li><a href="/animals/rabbits">Rabbits</a></li></ul>`)
})

app.get('/animals', (req,res)=>{
    res.send("<h1> List of pets</h1>")
})

app.get("/animals/:pet_type", (req,res,next)=>{   
    console.log(req.params.pet_type);
    res.send(`<h1>List of ${req.params.pet_type}</h1>`);
})
 

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}.`);
})