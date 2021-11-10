const urlModel = require("../models/urlModel");
exports.getShortUrl = async (req, res) => {
  try {
    const url = await urlModel.findOne({
      urlCode: req.params.code,
    });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No Url was found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("internal server error");
  }
};
