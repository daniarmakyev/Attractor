const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const Crypt = require("crypto-js");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const SECRET_KEY = process.env.SECRET_KEY;
const SECRET_ACCESS = process.env.SECRET_ACCESS;

const app = express();
app.use(cors());

//переадрисовка и принятие стэйта переадресовка на второй авторизация

app.get("/auth/github", (req, res) => {
  const redirect_uri = "http://localhost:3000/";
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}`
  );
});

// переадресовка сюда пост запрос на логин за акцес токеном и кодом забрать код с квери колбэка и сделать гет на получение юезар а потом вернуть его

app.get("/auth/github/callback", async (req, res) => {
  const code = Crypt.AES.decrypt(req.query.code, SECRET_KEY).toString();

  const tokenResponse = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const access_token = Crypt.AES.encrypt(
    tokenResponse.data.access_token,
    SECRET_ACCESS
  ).toString();

  res.json({ access_token });
});

app.listen(3002, () => {
  console.log("start on server 3002");
});
