const dotenv = require("dotenv");
const urlModel = require("../models/urlModel");
const validUrl = require("valid-url");
const shortId = require("shortid");
dotenv.config();
//  when we deal with db operations we use async
exports.createShortUrl = async (req, res) => {
  const longUrl = req.body.longUrl;
  const urlCode = req.body.urlCode;
  const baseUrl = process.env.BASE_URL;
  const customUrlCode = urlCode ? urlCode : shortId.generate();

  //   check if the url is valid
  if (validUrl.isUri(longUrl)) {
    try {
      // check if the url is already in the database
      let url = await urlModel.findOne({ longUrl });
      if (url) {
        return res.status(409).json({
          message: "the url already exists",
          data: url,
        });
      } else {
        // create short url --> ex:bit.ly/theProgessClick
        //  the output of url : http://localhost:8000/theProgressClick
        const newShortUrl = baseUrl + "/" + customUrlCode;
        const newUrl = await urlModel.create({
          longUrl: req.body.longUrl,
          shortUrl: newShortUrl,
          urlCode: customUrlCode,
        });
        res.status(201).json(newUrl);
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json("internal server error");
    }
  } else {
    return res.status(400).json("invalid long url");
  }
};
