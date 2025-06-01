import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const giphyKey = "FBEB7AR6vJI8ARTwyuZNn6WDjvEE4xYO";

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
            params: {
                api_key: giphyKey,
                limit: 3,
                offset: Math.floor(Math.random() * 499),
                rating: "g"
            }
        });
        const result = response.data.data;
        let img1URL = result[0].images.original.url;
        let img2URL = result[1].images.original.url;
        let img3URL = result[2].images.original.url;
        console.log(img1URL);
        console.log(img2URL);
        console.log(img3URL);
        res.render("index.ejs", {
            image1: img1URL,
            image2: img2URL,
            image3: img3URL
        });
    } catch (error) {
        res.status(400).send(error.response.data);
    }
});

app.post("/search", (req, res) => {
    const searchText = req.body.input;
    console.log(searchText);
    try {

    } catch (error) {

    }
});


app.listen(port, () => {
    console.log("Listening on port " + port + ".");
});