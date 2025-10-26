import axios from "axios";

const RAPID_API_KEY = "";

// get yours rapidapi key from https://rapidapi.com/datahubapis1-datahubapis-default/api/tiktok-api45

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://tiktok-api45.p.rapidapi.com/api/v1/user/detail?unique_id=zg.520",
  headers: {
    "x-rapidapi-host": "tiktok-api45.p.rapidapi.com",
    "x-rapidapi-key": RAPID_API_KEY,
  },
};

const response = await axios.request(config);

console.log(response.data);

// Example Response
// {
//   "data": {
//     "extra": {
//       "fatal_item_ids": [],
//       "logid": "202510200557048273E7C6782628975A0F",
//       "now": 1760939824000
//     },
//     "log_pb": {
//       "impr_id": "202510200557048273E7C6782628975A0F"
//     },
//     "shareMeta": {
//       "desc": "@zg.520 — 427.7k followers, 176 following, 6.8M likes — Watch amazing short videos created by Xiao Zou Travel 🇨🇳.",
//       "title": "小邹旅行🇨🇳 on TikTok"
//     },
//     "statusCode": 0,
//     "status_code": 0,
//     "status_msg": "",
//     "userInfo": {
//       "stats": {
//         "diggCount": 0,
//         "followerCount": 427700,
//         "followingCount": 176,
//         "friendCount": 53,
//         "heart": 6800000,
//         "heartCount": 6800000,
//         "videoCount": 1605
//       },
//       "statsV2": {
//         "diggCount": "0",
//         "followerCount": "427682",
//         "followingCount": "176",
//         "friendCount": "53",
//         "heart": "6764096",
//         "heartCount": "6764096",
//         "videoCount": "1605"
//       },
//       "user": {
//         "UserStoryStatus": 0,
//         "avatarLarger": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/7358329883632042001~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=f1e75321&x-expires=1761109200&x-signature=wl1zM3kqMTswNvcPaOdzcw%2ByYZM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//         "avatarMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/7358329883632042001~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=bbc4b576&x-expires=1761109200&x-signature=JCgdnwyC804voff1lfcVSsRySpE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//         "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/7358329883632042001~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=c68fd12d&x-expires=1761109200&x-signature=5EVCVoqkAyManPj26EgcDKG6K3w%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//         "canExpPlaylist": true,
//         "commentSetting": 0,
//         "commerceUserInfo": {
//           "category": "Travel & Tourism",
//           "categoryButton": false,
//           "commerceUser": true
//         },
//         "downloadSetting": 0,
//         "duetSetting": 0,
//         "followingVisibility": 1,
//         "ftc": false,
//         "id": "6799838955094836230",
//         "isADVirtual": false,
//         "isEmbedBanned": false,
//         "nickNameModifyTime": 1752997307,
//         "nickname": "小邹旅行🇨🇳",
//         "openFavorite": false,
//         "privateAccount": false,
//         "profileEmbedPermission": 1,
//         "profileTab": {
//           "showPlayListTab": false
//         },
//         "relation": 0,
//         "secUid": "MS4wLjABAAAAkagks5n_8XDIMWf94LZDUYs54FG5bJmEFJkWtjA__uRUN8QWaavHhzSyEO6WBPQj",
//         "secret": false,
//         "signature": "账号出售，需要的联系VX:zmk1086",
//         "stitchSetting": 0,
//         "ttSeller": false,
//         "uniqueId": "zg.520",
//         "verified": false
//       }
//     }
//   }
// }
