const stations = [
    { id: 201, name: "시청" },
    { id: 202, name: "을지로입구" },
    { id: 203, name: "을지로3가" },
    { id: 204, name: "을지로4가" },
    { id: 205, name: "동대문역사문화공원" },
    { id: 206, name: "신당" },
    { id: 207, name: "상왕십리" },
    { id: 208, name: "왕십리" },
    { id: 209, name: "한양대" },
    { id: 210, name: "뚝섬" },
    { id: 211, name: "성수" },
    { id: 212, name: "건대입구" },
    { id: 213, name: "구의" },
    { id: 214, name: "강변" },
    { id: 215, name: "잠실나루" },
    { id: 216, name: "잠실" },
    { id: 217, name: "잠실새내" },
    { id: 218, name: "종합운동장" },
    { id: 219, name: "삼성" },
    { id: 220, name: "선릉" },
    { id: 221, name: "역삼" },
    { id: 222, name: "강남" },
    { id: 223, name: "교대" },
    { id: 224, name: "서초" },
    { id: 225, name: "방배" },
    { id: 226, name: "사당" },
    { id: 227, name: "낙성대" },
    { id: 228, name: "서울대입구" },
    { id: 229, name: "봉천" },
    { id: 230, name: "신림" },
    { id: 231, name: "신대방" },
    { id: 232, name: "구로디지털단지" },
    { id: 233, name: "대림" },
    { id: 234, name: "신도림" },
    { id: 235, name: "문래" },
    { id: 236, name: "영등포구청" },
    { id: 237, name: "당산" },
    { id: 238, name: "합정" },
    { id: 239, name: "홍대입구" },
    { id: 240, name: "신촌" },
    { id: 241, name: "이대" },
    { id: 242, name: "아현" },
    { id: 243, name: "충정로" },
  ];

  const interval = 167, travel = 37;
  const terminal = 201;
  
  export const stationNames = stations.map((station) => station.name);

  export const now = () => Math.floor(Date.now() / 1000);

  export const stationName2Id = name => {
    const f = stations.find(station => station.name === name)
    if (f) return f.id;
    return null;
  };

  export const getRemaining = id => {
    let r = (travel * (id - terminal) - now()) % interval;
    return r < 0 ? r + interval : r;
  };
  export const getNextTrainId = id => (now() - getRemaining(id)) / interval;

  export default stationNames;
  
//   export default now;
//   export default stationName2Id;
//   export default remaining;
//   export default nextTrainId;
  

  