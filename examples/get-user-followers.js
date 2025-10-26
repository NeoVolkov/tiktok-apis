import axios from "axios";

const RAPID_API_KEY = "";

// get yours rapidapi key from https://rapidapi.com/datahubapis1-datahubapis-default/api/tiktok-api45

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://tiktok-api45.p.rapidapi.com/api/v1/user/followers?sec_uid=MS4wLjABAAAAkagks5n_8XDIMWf94LZDUYs54FG5bJmEFJkWtjA__uRUN8QWaavHhzSyEO6WBPQj&count=30&min_cursor=0",
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
//       "logid": "202510200558110CE41359BE95A18AB55C",
//       "now": 1760939891000
//     },
//     "hasMore": true,
//     "isTruncated": false,
//     "log_pb": {
//       "impr_id": "202510200558110CE41359BE95A18AB55C"
//     },
//     "minCursor": 1760897938,
//     "statusCode": 0,
//     "status_code": 0,
//     "status_msg": "",
//     "total": 427682,
//     "userList": [
//       {
//         "stats": {
//           "diggCount": 97900,
//           "followerCount": 5472,
//           "followingCount": 9230,
//           "friendCount": 0,
//           "heart": 211300,
//           "heartCount": 211300,
//           "videoCount": 9893
//         },
//         "statsV2": {
//           "diggCount": "97944",
//           "followerCount": "5472",
//           "followingCount": "9230",
//           "friendCount": "0",
//           "heart": "211339",
//           "heartCount": "211339",
//           "videoCount": "9893"
//         },
//         "user": {
//           "avatarLarger": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/0c45a58f1ac9676c6b825a199ef6e315~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=584185b5&x-expires=1761109200&x-signature=lar36eFmGOp7sb6TmLT1Eeg3IDM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "avatarMedium": "https://p19-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/0c45a58f1ac9676c6b825a199ef6e315~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=8150b443&x-expires=1761109200&x-signature=Hr9RGMje2AbThAYkoWYILK0%2F1zc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/0c45a58f1ac9676c6b825a199ef6e315~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=579eab05&x-expires=1761109200&x-signature=ttngsQ8Ml0Rivikl0gulI%2Bdpvpw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "commentSetting": 0,
//           "downloadSetting": 3,
//           "duetSetting": 0,
//           "ftc": false,
//           "id": "7420366745511658502",
//           "isADVirtual": false,
//           "nickname": "kkkkkkk",
//           "openFavorite": false,
//           "privateAccount": false,
//           "relation": 0,
//           "secUid": "MS4wLjABAAAAfB-Hra5rrB4tbXLKjDZEtylI5Fmr8zqWZPLRfg2VS33aqVZCacPD8JsWX0-fmbjV",
//           "secret": false,
//           "signature": "lsdlan   soogaltiktok.com/@waankutaaera❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
//           "stitchSetting": 0,
//           "ttSeller": false,
//           "uniqueId": "waankutaaera",
//           "verified": false
//         }
//       },
//       {
//         "stats": {
//           "diggCount": 114,
//           "followerCount": 3,
//           "followingCount": 95,
//           "friendCount": 0,
//           "heart": 6,
//           "heartCount": 6,
//           "videoCount": 2
//         },
//         "statsV2": {
//           "diggCount": "114",
//           "followerCount": "3",
//           "followingCount": "95",
//           "friendCount": "0",
//           "heart": "6",
//           "heartCount": "6",
//           "videoCount": "2"
//         },
//         "user": {
//           "avatarLarger": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/f1afe61d403bf09802d12b693bb2aafe~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=ed78bdb6&x-expires=1761109200&x-signature=mrxqfURa8d4CjTyhR%2FpCk445AeE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "avatarMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/f1afe61d403bf09802d12b693bb2aafe~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=be06e0fb&x-expires=1761109200&x-signature=WeTukPOeWZMmqWXbYRtUFaOaO6A%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/f1afe61d403bf09802d12b693bb2aafe~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=da51173c&x-expires=1761109200&x-signature=MQsNCElkkqlsPXDs0WL16CAcQa0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "commentSetting": 0,
//           "downloadSetting": 0,
//           "duetSetting": 0,
//           "ftc": false,
//           "id": "7455102459049985030",
//           "isADVirtual": false,
//           "nickname": "林可",
//           "openFavorite": false,
//           "privateAccount": false,
//           "relation": 0,
//           "secUid": "MS4wLjABAAAA1vexAfuKM2dFVj6hY0p9oNKkvPHfShlSKaoobITmWEE4fTUv8wnC3ZWRciMT0Wrc",
//           "secret": false,
//           "signature": "這裡很少私信➕飛機✈️Telegram：kk12352",
//           "stitchSetting": 0,
//           "ttSeller": false,
//           "uniqueId": "user3386115433738",
//           "verified": false
//         }
//       }

//     ]
//   }
// }
