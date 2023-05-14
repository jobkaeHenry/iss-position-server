let 보간배열 = [];

const fs = require("fs");
const useModel = async () => {
  let model = fs.readFile("model/db.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    return data;
  });

  const setModel = (value) => {
    fs.writefile("model/db.txt", String(value));
  };
  return [model, setModel];
};
module.exports = useModel;
