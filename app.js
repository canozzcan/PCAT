const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    const photo = {
        id: 1,
        name: "Photo Name",
        description:"Photo Description"
    }
    res.send(photo);
});



app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});