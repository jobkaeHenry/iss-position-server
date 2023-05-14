const getISSPosition = require("../utils/getISSPosition");
const fs = require("fs");
const 위치차구하기 = async () => {
  getISSPosition()
    .then((res) => {
      const 첫째위치 = res;
      return 첫째위치;
    })
    .then((첫째위치) => {
      setTimeout(() => {
        getISSPosition().then((res) => {
          const 둘째위치 = res;
          fs.writeFileSync(
            "model/db.txt",
            JSON.stringify(보간구하기(첫째위치, 둘째위치))
          );
        });
      }, 2000);
    });
};

const 보간구하기 = (first, second) => {
  const 총프레임 = 120;
  const 프레임차 = {
    longitude: (second.longitude - first.longitude) / 총프레임,
    latitude: (second.latitude - first.latitude) / 총프레임,
    altitude: (second.altitude - first.altitude) / 총프레임,
  };

  const 빈배열 = Array.from({ length: 120 }, () => {});

  const 보간배열 = 빈배열.map((e, i) => ({
    longitude: first.longitude + 프레임차.longitude * i + 1,
    latitude: first.latitude + 프레임차.latitude * i + 1,
    altitude: first.altitude + 프레임차.altitude * i + 1,
  }));
  return 보간배열;
};

const intervalFunc = () => {
  return setInterval(async () => {
    위치차구하기();
  }, 2000);
};
module.exports = intervalFunc;
