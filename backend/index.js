const express = require('express');
const app = express();
const PORT = 9000;

app.get('/api',(req,res) => {
    res.json({
        "id": 1,
        "name": "Szonja",
        "age": 120,
        "tummy": "in pain",
        "favourite_foods": ["blueberry", "chicken soup", "túró rudi"]
    })
})

app.listen(PORT, () => {console.log(`Server is up on ${PORT}!`)})