import axios from "axios";

const RAPID_API_KEY = "";

// get yours rapidapi key from https://rapidapi.com/datahubapis1-datahubapis-default/api/tiktok-api45

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://tiktok-api45.p.rapidapi.com/api/v1/user/followings?sec_uid=MS4wLjABAAAAkagks5n_8XDIMWf94LZDUYs54FG5bJmEFJkWtjA__uRUN8QWaavHhzSyEO6WBPQj&count=30&min_cursor=0",
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
//       "logid": "20251020060032372716629AD764A82C55",
//       "now": 1760940032000
//     },
//     "hasMore": true,
//     "isTruncated": false,
//     "log_pb": {
//       "impr_id": "20251020060032372716629AD764A82C55"
//     },
//     "maxCursor": 0,
//     "minCursor": 1745042188,
//     "statusCode": 0,
//     "status_code": 0,
//     "status_msg": "",
//     "total": 176,
//     "userList": [
//       {
//         "stats": {
//           "diggCount": 1241,
//           "followerCount": 3092,
//           "followingCount": 0,
//           "friendCount": 0,
//           "heart": 154500,
//           "heartCount": 154500,
//           "videoCount": 10
//         },
//         "statsV2": {
//           "diggCount": "1241",
//           "followerCount": "3092",
//           "followingCount": "0",
//           "friendCount": "0",
//           "heart": "154503",
//           "heartCount": "154503",
//           "videoCount": "10"
//         },
//         "user": {
//           "avatarLarger": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/1cc59c73e791063f49c8c51a301ef255~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=50207c46&x-expires=1761112800&x-signature=LUrIag8XjJYUOsBvACCcPaonoeQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "avatarMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/1cc59c73e791063f49c8c51a301ef255~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=c774580e&x-expires=1761112800&x-signature=KxbHMcYMvYPGGoVd8RjDOjn8dpo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/1cc59c73e791063f49c8c51a301ef255~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=562244ec&x-expires=1761112800&x-signature=9FwtZmWrkv9O1JuOYr7ac%2Bvgwwc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "commentSetting": 0,
//           "downloadSetting": 0,
//           "duetSetting": 0,
//           "ftc": false,
//           "id": "7539740651619009544",
//           "isADVirtual": false,
//           "nickname": "jingyii11",
//           "openFavorite": false,
//           "privateAccount": false,
//           "relation": 0,
//           "secUid": "MS4wLjABAAAAAzP64DXXa7cqrk_iKC-ySjh_s4pLITtJOX5H6yrmxKi2dEdCvGsH1DsLA8pixePK",
//           "secret": false,
//           "signature": "",
//           "stitchSetting": 0,
//           "ttSeller": false,
//           "uniqueId": "jingyii11",
//           "verified": false
//         }
//       },
//       {
//         "stats": {
//           "diggCount": 4260,
//           "followerCount": 72,
//           "followingCount": 1122,
//           "friendCount": 0,
//           "heart": 14,
//           "heartCount": 14,
//           "videoCount": 3
//         },
//         "statsV2": {
//           "diggCount": "4260",
//           "followerCount": "72",
//           "followingCount": "1122",
//           "friendCount": "0",
//           "heart": "14",
//           "heartCount": "14",
//           "videoCount": "3"
//         },
//         "user": {
//           "avatarLarger": "https://p19-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=1638bd74&x-expires=1761112800&x-signature=lKRK%2FesnObjLTXWsbxnKbL2SZ4Y%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "avatarMedium": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=5aa0158d&x-expires=1761112800&x-signature=yIIDOkdhkcdftrEw2gDb9mjaimY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=e7a4242a&x-expires=1761112800&x-signature=y5ndpQ%2BLhhQv3mHkzp11oda639Y%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "commentSetting": 0,
//           "downloadSetting": 0,
//           "duetSetting": 0,
//           "ftc": false,
//           "id": "7089075067078771718",
//           "isADVirtual": false,
//           "nickname": "user2619219551502",
//           "openFavorite": false,
//           "privateAccount": false,
//           "relation": 0,
//           "secUid": "MS4wLjABAAAAf2yDPrxep8q3tZE2O5-SyW6CSOm3LnZNM1f9fqk27n4n_vlewBkKf-3a8w1TH1AY",
//           "secret": false,
//           "signature": "",
//           "stitchSetting": 0,
//           "ttSeller": false,
//           "uniqueId": "user2619219551502",
//           "verified": false
//         }
//       }
//     ]
//   }
// }
