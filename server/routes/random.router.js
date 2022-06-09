const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=&rating=pg-13`).then((response) => {
        res.send(response.data);
}).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
})



module.exports = router;