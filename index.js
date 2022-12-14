const express = require("express");
const app = express();
const PORT = 3000;
const pets = require("./helper.js");
//const obj = JSON.stringify(pets);

//app.use(express.json());
app.get("/", (req, res)=>{
    res.send(`<h1>Adopt a Pet!</h1><p>Browse through the links below to find your new furry friend:</p><ul><li><a href="/animals/dogs">Dogs</a></li><li><a href="/animals/cats">Cats</a></li><li><a href="/animals/rabbits">Rabbits</a></li></ul>`)
})

app.get('/animals', (req,res)=>{
    res.send("<h1>List of pets</h1>");
})

app.get("/animals/:pet_type", (req,res,next)=>{   
    const { pet_type } =req.params;
    //console.log({pet_type})
    const html = `<h1>List of ${pet_type}</h1> <ul>
     ${pets[pet_type].map((pet,index)=>` <li><a href= /animals/${pet_type}/${index}>${pet.name}</a></li>`).join('')}</ul>`;
    res.send(html);
})

app.get("/animals/:pet_type/:pet_id", (req,res)=>{
    const {pet_type, pet_id} = req.params;
   //console.log(pets[pet_type][pet_id])
   const pet= pets[pet_type][pet_id];
    res.send(`<h1>${pet.name}</h1><img src=${pet.url}/> <p>${pet.description}</p> <ul><li>${pet.breed}</li><li>${pet.age}</li></ul>`)
})
 

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}.`);
})