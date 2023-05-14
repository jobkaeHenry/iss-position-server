const fs = require("fs");

const IssLocationController = async (req, res, next) => {
  let model = fs.readFileSync("model/db.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    return data;
  });
  res.status(200).json(JSON.parse(model));
};
module.exports = IssLocationController;
