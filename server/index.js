const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const app = express();
app.use(cors());

//переадрисовка и принятие стэйта переадресовка на второй авторизация

app.get("/auth/github", (req, res) => {
  const redirect_uri = "http://localhost:3000/";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&scope=user`
  );
});

// переадресовка сюда пост запрос на логин за акцес токеном и кодом забрать код с квери колбэка и сделать гет на получение юезар а потом вернуть его

app.get("/auth/github/callback", async (req, res) => {
  const tokenResponse = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(tokenResponse.data);

  res.json(tokenResponse.data);
});

app.listen(3002, () => {
  console.log("start on server 3002");
});
