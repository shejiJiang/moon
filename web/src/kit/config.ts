export interface IConfig {
  cardApi: string;
  memberApi: string;
  imgApi: string;
  commonServer: string;
  loginServer: string;
  socket: string;
  upload: string;
}

export type IApi = "cardApi" | "memberApi" | "memberApi";

//线上0
var env = 0;

const config: Array<IConfig> = [
  {
    //线上
    cardApi: "https://card-api.1000.com",
    memberApi: "https://member-api.1000.com",
    imgApi: `https://img.1000.com/qm-a-img/prod/`,
    commonServer: `https://commserver.1000.com`,
    loginServer: "https://www.1000.com",
    socket: "https://ws-broker.1000.com",
    upload: "https://upload.1000.com"
  },
  {
    //测试1
    cardApi: "http://card-api.1000.com:8080",
    memberApi: "http://member-api.1000.com:8080",
    imgApi: `http://img.1000.com/qm-a-img/test${env}/`,
    commonServer: `http://commserver.1000.com:8080/`,
    loginServer: "http://172.19.68.37:8080",
    socket: "http://172.19.68.25:8080",
    upload: "https://upload.1000.com"
  },
  {
    //测试2
    cardApi: "http://card-api.1000.com:8080",
    memberApi: "http://member-api.1000.com:8080",
    imgApi: `http://img.1000.com/qm-a-img/test${env}/`,
    commonServer: `http://commserver.1000.com:8080/`,
    loginServer: "http://172.19.68.37:8080",
    socket: "http://172.19.68.25:8080",
    upload: "https://upload.1000.com"
  },
  {
    //测试3
    cardApi: "http://card-api.1000.com:8080",
    memberApi: "http://member-api.1000.com:8080",
    imgApi: `http://img.1000.com/qm-a-img/test${env}/`,
    commonServer: `http://commserver.1000.com:8080/`,
    loginServer: "http://172.19.68.37:8080",
    socket: "http://172.19.68.25:8080",
    upload: "https://upload.1000.com"
  },
  {
    //测试4
    cardApi: "http://card-api.1000.com:8080",
    memberApi: "http://member-api.1000.com:8080",
    imgApi: `http://img.1000.com/qm-a-img/test${env}/`,
    commonServer: `http://commserver.1000.com:8080`,
    loginServer: "http://172.19.68.37:8080",
    socket: "http://172.19.68.25:8080",
    upload: "http://172.19.68.112:8080"
  }
];
let result = config[env];
export default result;
