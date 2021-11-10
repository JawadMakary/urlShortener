const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema(
  {
    urlCode: String,
    longUrl: String,
    shortUrl: String,
  },
  {
    // each URL will have createdAt,updatedAt (have a type of date)
    timestamps: true,
  }
);
module.exports = mongoose.model("Url", urlSchema);
// mongoDb take lowercase and add s--> urls
