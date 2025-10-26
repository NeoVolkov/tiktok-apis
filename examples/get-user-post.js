import axios from "axios";

const RAPID_API_KEY = "";

// get yours rapidapi key from https://rapidapi.com/datahubapis1-datahubapis-default/api/tiktok-api45

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://tiktok-api45.p.rapidapi.com/api/v1/user/posts?sec_uid=MS4wLjABAAAAkagks5n_8XDIMWf94LZDUYs54FG5bJmEFJkWtjA__uRUN8QWaavHhzSyEO6WBPQj&count=30&cursor=0",
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
//     "cursor": "1758331327601",
//     "extra": {
//       "fatal_item_ids": [],
//       "logid": "20251020060221357EDA4002EEAF98947D",
//       "now": 1760940141000
//     },
//     "hasMore": true,
//     "itemList": [
//       {
//         "AIGCDescription": "",
//         "CategoryType": 120,
//         "author": {
//           "UserStoryStatus": 0,
//           "avatarLarger": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/7358329883632042001~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=afcd991c&x-expires=1761112800&x-signature=oW%2BqIWMG7gzndS9F%2FyylrbAdX0g%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "avatarMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/7358329883632042001~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=a8eb0755&x-expires=1761112800&x-signature=UE1ySWupbfGNJwOl74hrElf1vU0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "avatarThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/7358329883632042001~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=1f08e08e&x-expires=1761112800&x-signature=6yqellQfsDuTA2YZrt%2B8jkzfIEM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "commentSetting": 0,
//           "downloadSetting": 0,
//           "duetSetting": 0,
//           "ftc": false,
//           "id": "6799838955094836230",
//           "isADVirtual": false,
//           "isEmbedBanned": false,
//           "nickname": "小邹旅行🇨🇳",
//           "openFavorite": false,
//           "privateAccount": false,
//           "relation": 0,
//           "secUid": "MS4wLjABAAAAkagks5n_8XDIMWf94LZDUYs54FG5bJmEFJkWtjA__uRUN8QWaavHhzSyEO6WBPQj",
//           "secret": false,
//           "signature": "账号出售，需要的联系VX:zmk1086",
//           "stitchSetting": 0,
//           "uniqueId": "zg.520",
//           "verified": false
//         },
//         "authorStats": {
//           "diggCount": 1114,
//           "followerCount": 427700,
//           "followingCount": 176,
//           "friendCount": 0,
//           "heart": 6800000,
//           "heartCount": 6800000,
//           "videoCount": 1605
//         },
//         "authorStatsV2": {
//           "diggCount": "1114",
//           "followerCount": "427700",
//           "followingCount": "176",
//           "friendCount": "0",
//           "heart": "6800000",
//           "heartCount": "6800000",
//           "videoCount": "1605"
//         },
//         "backendSourceEventTracking": "",
//         "challenges": [
//           {
//             "coverLarger": "",
//             "coverMedium": "",
//             "coverThumb": "",
//             "desc": "🇨🇳🇨🇳🇨🇳中国的童鞋们，记得在视频下标注#China 或者#中国，让全球的小伙伴都能发现你们哦🤗",
//             "id": "5873",
//             "profileLarger": "",
//             "profileMedium": "",
//             "profileThumb": "",
//             "title": "china"
//           },
//           {
//             "coverLarger": "",
//             "coverMedium": "",
//             "coverThumb": "",
//             "desc": "",
//             "id": "7025577443821879297",
//             "profileLarger": "",
//             "profileMedium": "",
//             "profileThumb": "",
//             "title": "中国高铁🚅"
//           }
//         ],
//         "collected": false,
//         "contents": [
//           {
//             "desc": "高铁穿过莆田市湄洲湾跨海特大桥#china #中国高铁🚅 ",
//             "textExtra": [
//               {
//                 "awemeId": "",
//                 "end": 21,
//                 "hashtagName": "china",
//                 "isCommerce": false,
//                 "start": 15,
//                 "subType": 0,
//                 "type": 1
//               },
//               {
//                 "awemeId": "",
//                 "end": 29,
//                 "hashtagName": "中国高铁🚅",
//                 "isCommerce": false,
//                 "start": 22,
//                 "subType": 0,
//                 "type": 1
//               }
//             ]
//           }
//         ],
//         "createTime": 1749265942,
//         "creatorAIComment": {
//           "eligibleVideo": false,
//           "hasAITopic": false,
//           "notEligibleReason": 101
//         },
//         "desc": "高铁穿过莆田市湄洲湾跨海特大桥#china #中国高铁🚅 ",
//         "digged": false,
//         "duetDisplay": 0,
//         "duetEnabled": true,
//         "forFriend": false,
//         "id": "7513039993741397256",
//         "isAd": false,
//         "isPinnedItem": true,
//         "isReviewing": false,
//         "itemCommentStatus": 0,
//         "item_control": {
//           "can_repost": true
//         },
//         "music": {
//           "authorName": "HJS-Mechanical Equipment",
//           "coverLarge": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/00440bc55370b396106eed48671762e8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=73ad90ff&x-expires=1761112800&x-signature=AOKrbJYUlLWfsM1ZYty3d5w2ulg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "coverMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/00440bc55370b396106eed48671762e8~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=86cf867f&x-expires=1761112800&x-signature=p7baJEB%2FgYNikbU3WfbcWa1MG8Q%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "coverThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-avt-0068/00440bc55370b396106eed48671762e8~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=4b1f857f&x-expires=1761112800&x-signature=UbWUdLsqpW3ZMi5u1Am%2F3ieZo2w%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "duration": 17,
//           "id": "7287891047231933185",
//           "isCopyrighted": false,
//           "original": true,
//           "playUrl": "https://v19.tiktokcdn-us.com/fa9b3e20ffa9846f20fb73e54ffc69b1/68f624de/video/tos/useast5/tos-useast5-v-27dcd7c799-tx/o0vBAUlEjdIz4BXygmQkeNh4fUCJAAIBwDw7AE/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ds=5&ft=GSDrKInz7Th0ch3KXq8Zmo&mime_type=audio_mpeg&qs=13&rc=ajt5cTQ6Zm12bjMzODU8NEBpajt5cTQ6Zm12bjMzODU8NEAuLV5xcjQwaGVgLS1kMS1zYSMuLV5xcjQwaGVgLS1kMS1zcw%3D%3D&vvpl=1&l=20251020060221357EDA4002EEAF98947D&btag=e00078000",
//           "private": false,
//           "title": "原声 - Youmile",
//           "tt2dsp": {}
//         },
//         "officalItem": false,
//         "originalItem": false,
//         "privateItem": false,
//         "secret": false,
//         "shareEnabled": true,
//         "stats": {
//           "collectCount": 5012,
//           "commentCount": 1502,
//           "diggCount": 68300,
//           "playCount": 1900000,
//           "shareCount": 2528
//         },
//         "statsV2": {
//           "collectCount": "5012",
//           "commentCount": "1502",
//           "diggCount": "68300",
//           "playCount": "1900000",
//           "repostCount": "0",
//           "shareCount": "2528"
//         },
//         "stitchDisplay": 0,
//         "stitchEnabled": true,
//         "textExtra": [
//           {
//             "awemeId": "",
//             "end": 21,
//             "hashtagName": "china",
//             "isCommerce": false,
//             "start": 15,
//             "subType": 0,
//             "type": 1
//           },
//           {
//             "awemeId": "",
//             "end": 29,
//             "hashtagName": "中国高铁🚅",
//             "isCommerce": false,
//             "start": 22,
//             "subType": 0,
//             "type": 1
//           }
//         ],
//         "textLanguage": "zh-Hans",
//         "textTranslatable": true,
//         "video": {
//           "PlayAddrStruct": {
//             "DataSize": 926762,
//             "FileCs": "c:0-16701-5d97",
//             "FileHash": "1509bc332a1cddab13cdd33f8f8a6050",
//             "Height": 1024,
//             "Uri": "v14044g50000d11qqpnog65h5cgfh470",
//             "UrlKey": "v14044g50000d11qqpnog65h5cgfh470_h264_540p_404677",
//             "UrlList": [
//               "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/okDJOZA4iAtpOyxEBY7oakriIOvBhCKDvVECE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=790&bt=395&cs=0&ds=6&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=0&rc=aTM8ODs4ZzZnZjY8O2g7NEBpMzdpZms5cnN0NDMzODczNEA1Ll4yNi9eXi0xLmIuMDBhYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=485a27824e1f910826d991920bc1687c&tk=tt_chain_token",
//               "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/okDJOZA4iAtpOyxEBY7oakriIOvBhCKDvVECE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=790&bt=395&cs=0&ds=6&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=0&rc=aTM8ODs4ZzZnZjY8O2g7NEBpMzdpZms5cnN0NDMzODczNEA1Ll4yNi9eXi0xLmIuMDBhYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=485a27824e1f910826d991920bc1687c&tk=tt_chain_token",
//               "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=d1383e18e9134c0da3ad259855a9108f&is_play_url=1&item_id=7513039993741397256&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjljMDMzOTExZmY4Njk5MzgzNzViOGUyZmMzYzA0Yzhl&tk=tt_chain_token&video_id=v14044g50000d11qqpnog65h5cgfh470"
//             ],
//             "Width": 576
//           },
//           "VQScore": "52.64",
//           "bitrate": 404677,
//           "bitrateInfo": [
//             {
//               "Bitrate": 873954,
//               "BitrateFPS": 30,
//               "CodecType": "h265_hvc1",
//               "Format": "mp4",
//               "GearName": "adapt_lowest_1080_1",
//               "MVMAF": "\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": -1, \\\"v960\\\": -1, \\\"v864\\\": -1, \\\"v720\\\": -1}, \\\"ori\\\": {\\\"v1080\\\": 92.322, \\\"v960\\\": 93.005, \\\"v864\\\": 93.61, \\\"v720\\\": 94.453}}}\"",
//               "PlayAddr": {
//                 "DataSize": 2001466,
//                 "FileCs": "c:0-16838-2ff0",
//                 "FileHash": "0d461c7fd0980966abd89f1ae9871af5",
//                 "Height": 1920,
//                 "Uri": "v14044g50000d11qqpnog65h5cgfh470",
//                 "UrlKey": "v14044g50000d11qqpnog65h5cgfh470_bytevc1_1080p_873954",
//                 "UrlList": [
//                   "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/o4QHIgB0RXHQAsDoVFS5fIekc1iEmEDgUx6bBa/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1706&bt=853&cs=2&ds=4&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=15&rc=OzVpZjo5Zmg1Nmc4ZTU8aEBpMzdpZms5cnN0NDMzODczNEAtYmAyL2MyXjUxYGNiYi0yYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=184e45c74c3c470c25b0c50b324d096a&tk=tt_chain_token",
//                   "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/o4QHIgB0RXHQAsDoVFS5fIekc1iEmEDgUx6bBa/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1706&bt=853&cs=2&ds=4&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=15&rc=OzVpZjo5Zmg1Nmc4ZTU8aEBpMzdpZms5cnN0NDMzODczNEAtYmAyL2MyXjUxYGNiYi0yYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=184e45c74c3c470c25b0c50b324d096a&tk=tt_chain_token",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=5e09e2ebf5cd4382ae5cf6275ccfe208&is_play_url=1&item_id=7513039993741397256&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjA5Mjk0MDAyMGQ2YmZjNzExNGQ4OGUzZjBjOGUwYmQ2&tk=tt_chain_token&video_id=v14044g50000d11qqpnog65h5cgfh470"
//                 ],
//                 "Width": 1080
//               },
//               "QualityType": 2,
//               "VideoExtra": "{\"PktOffsetMap\":\"[{\\\"time\\\": 1, \\\"offset\\\": 139721}, {\\\"time\\\": 2, \\\"offset\\\": 211295}, {\\\"time\\\": 3, \\\"offset\\\": 305477}, {\\\"time\\\": 4, \\\"offset\\\": 406185}, {\\\"time\\\": 5, \\\"offset\\\": 508164}, {\\\"time\\\": 10, \\\"offset\\\": 1138514}]\",\"mvmaf\":\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": -1, \\\"v960\\\": -1, \\\"v864\\\": -1, \\\"v720\\\": -1}, \\\"ori\\\": {\\\"v1080\\\": 92.322, \\\"v960\\\": 93.005, \\\"v864\\\": 93.61, \\\"v720\\\": 94.453}}}\",\"ufq\":\"{\\\"enh\\\":61.585,\\\"playback\\\":{\\\"ori\\\":57.907,\\\"srv1\\\":57.907},\\\"src\\\":61.585,\\\"trans\\\":57.907,\\\"version\\\":\\\"v1.2\\\"}\",\"volume_info_json\":\"\",\"transcode_feature_id\":\"9d59a42002c1b1a8478cde47437a7b3d\",\"dec_info\":\"\",\"gearvqm\":\"\",\"audio_bit_rate\":64567}"
//             },
//             {
//               "Bitrate": 417322,
//               "BitrateFPS": 30,
//               "CodecType": "h265_hvc1",
//               "Format": "mp4",
//               "GearName": "adapt_lower_720_1",
//               "MVMAF": "\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 94.131, \\\"v960\\\": 94.815, \\\"v864\\\": 95.606, \\\"v720\\\": 97.1}, \\\"ori\\\": {\\\"v1080\\\": 86.652, \\\"v960\\\": 87.455, \\\"v864\\\": 88.409, \\\"v720\\\": 91.064}}}\"",
//               "PlayAddr": {
//                 "DataSize": 955721,
//                 "FileCs": "c:0-16833-ea51",
//                 "FileHash": "5f10134171f787bf91546fd8b0c2afed",
//                 "Height": 1280,
//                 "Uri": "v14044g50000d11qqpnog65h5cgfh470",
//                 "UrlKey": "v14044g50000d11qqpnog65h5cgfh470_bytevc1_720p_417322",
//                 "UrlList": [
//                   "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oQpAkEExvlZlAOiri4VIKDyOYEBaBVtovD3OU/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=814&bt=407&cs=2&ds=3&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=14&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmZzs0NDczZjVlMzVpZmU1aUBpMzdpZms5cnN0NDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiNiYV4tYS80NV8xNWJfNTVgYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=55d09fc3f2d401a4e33d0f6603e86ecc&tk=tt_chain_token",
//                   "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oQpAkEExvlZlAOiri4VIKDyOYEBaBVtovD3OU/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=814&bt=407&cs=2&ds=3&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=14&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmZzs0NDczZjVlMzVpZmU1aUBpMzdpZms5cnN0NDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiNiYV4tYS80NV8xNWJfNTVgYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=55d09fc3f2d401a4e33d0f6603e86ecc&tk=tt_chain_token",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=cf828bbcef8240bb827c20d401a1d8ed&is_play_url=1&item_id=7513039993741397256&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjE3NmFhOGVlNDdmYTZlZDRjNTAxZDU1OTU3ZDEyZGQ5&tk=tt_chain_token&video_id=v14044g50000d11qqpnog65h5cgfh470"
//                 ],
//                 "Width": 720
//               },
//               "QualityType": 14,
//               "VideoExtra": "{\"PktOffsetMap\":\"[{\\\"time\\\": 1, \\\"offset\\\": 76529}, {\\\"time\\\": 2, \\\"offset\\\": 103042}, {\\\"time\\\": 3, \\\"offset\\\": 144246}, {\\\"time\\\": 4, \\\"offset\\\": 187563}, {\\\"time\\\": 5, \\\"offset\\\": 231297}, {\\\"time\\\": 10, \\\"offset\\\": 522935}]\",\"mvmaf\":\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 94.131, \\\"v960\\\": 94.815, \\\"v864\\\": 95.606, \\\"v720\\\": 97.1}, \\\"ori\\\": {\\\"v1080\\\": 86.652, \\\"v960\\\": 87.455, \\\"v864\\\": 88.409, \\\"v720\\\": 91.064}}}\",\"ufq\":\"{\\\"enh\\\":61.585,\\\"playback\\\":{\\\"ori\\\":52.237,\\\"srv1\\\":59.619},\\\"src\\\":61.585,\\\"trans\\\":52.237,\\\"version\\\":\\\"v1.2\\\"}\",\"volume_info_json\":\"\",\"transcode_feature_id\":\"ed5dca180fd01ba43554ed2ff5d2ad7a\",\"dec_info\":\"\",\"gearvqm\":\"\",\"audio_bit_rate\":64567}"
//             },
//             {
//               "Bitrate": 404677,
//               "BitrateFPS": 30,
//               "CodecType": "h264",
//               "Format": "mp4",
//               "GearName": "normal_540_0",
//               "MVMAF": "\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 91.075, \\\"v960\\\": 92.467, \\\"v864\\\": 93.889, \\\"v720\\\": 95.333}, \\\"ori\\\": {\\\"v1080\\\": 83.151, \\\"v960\\\": 84.426, \\\"v864\\\": 84.811, \\\"v720\\\": 87.871}}}\"",
//               "PlayAddr": {
//                 "DataSize": 926762,
//                 "FileCs": "c:0-16701-5d97",
//                 "FileHash": "1509bc332a1cddab13cdd33f8f8a6050",
//                 "Height": 1024,
//                 "Uri": "v14044g50000d11qqpnog65h5cgfh470",
//                 "UrlKey": "v14044g50000d11qqpnog65h5cgfh470_h264_540p_404677",
//                 "UrlList": [
//                   "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/okDJOZA4iAtpOyxEBY7oakriIOvBhCKDvVECE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=790&bt=395&cs=0&ds=6&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=0&rc=aTM8ODs4ZzZnZjY8O2g7NEBpMzdpZms5cnN0NDMzODczNEA1Ll4yNi9eXi0xLmIuMDBhYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=485a27824e1f910826d991920bc1687c&tk=tt_chain_token",
//                   "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/okDJOZA4iAtpOyxEBY7oakriIOvBhCKDvVECE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=790&bt=395&cs=0&ds=6&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=0&rc=aTM8ODs4ZzZnZjY8O2g7NEBpMzdpZms5cnN0NDMzODczNEA1Ll4yNi9eXi0xLmIuMDBhYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=485a27824e1f910826d991920bc1687c&tk=tt_chain_token",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=d1383e18e9134c0da3ad259855a9108f&is_play_url=1&item_id=7513039993741397256&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjljMDMzOTExZmY4Njk5MzgzNzViOGUyZmMzYzA0Yzhl&tk=tt_chain_token&video_id=v14044g50000d11qqpnog65h5cgfh470"
//                 ],
//                 "Width": 576
//               },
//               "QualityType": 20,
//               "VideoExtra": "{\"PktOffsetMap\":\"[{\\\"time\\\": 1, \\\"offset\\\": 75423}, {\\\"time\\\": 2, \\\"offset\\\": 115828}, {\\\"time\\\": 3, \\\"offset\\\": 162201}, {\\\"time\\\": 4, \\\"offset\\\": 206741}, {\\\"time\\\": 5, \\\"offset\\\": 255108}, {\\\"time\\\": 10, \\\"offset\\\": 527397}]\",\"mvmaf\":\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 91.075, \\\"v960\\\": 92.467, \\\"v864\\\": 93.889, \\\"v720\\\": 95.333}, \\\"ori\\\": {\\\"v1080\\\": 83.151, \\\"v960\\\": 84.426, \\\"v864\\\": 84.811, \\\"v720\\\": 87.871}}}\",\"ufq\":\"{\\\"enh\\\":61.585,\\\"playback\\\":{\\\"ori\\\":49.198,\\\"srv1\\\":56.563},\\\"src\\\":61.585,\\\"trans\\\":49.198,\\\"version\\\":\\\"v1.1\\\"}\",\"volume_info_json\":\"\",\"transcode_feature_id\":\"1834aab9e1b0caae9362706a00ff9f52\",\"dec_info\":\"\",\"gearvqm\":\"\",\"audio_bit_rate\":32284}"
//             },
//             {
//               "Bitrate": 337533,
//               "BitrateFPS": 30,
//               "CodecType": "h265_hvc1",
//               "Format": "mp4",
//               "GearName": "adapt_540_1",
//               "MVMAF": "\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 94.052, \\\"v960\\\": 93.248, \\\"v864\\\": 95.014, \\\"v720\\\": 96.508}, \\\"ori\\\": {\\\"v1080\\\": 83.128, \\\"v960\\\": 84.566, \\\"v864\\\": 86.22, \\\"v720\\\": 88.489}}}\"",
//               "PlayAddr": {
//                 "DataSize": 772994,
//                 "FileCs": "c:0-16833-6a0d",
//                 "FileHash": "7ea7324e62e919e6a9f9a9c0a8a8aad1",
//                 "Height": 1024,
//                 "Uri": "v14044g50000d11qqpnog65h5cgfh470",
//                 "UrlKey": "v14044g50000d11qqpnog65h5cgfh470_bytevc1_540p_337533",
//                 "UrlList": [
//                   "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oA9EuKkIV4aiyABOZOJB4yxDmYrBDvpiLAEEt/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=658&bt=329&cs=2&ds=6&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=11&rc=NGk3ZGc8NGhoZDVlaTxpNEBpMzdpZms5cnN0NDMzODczNEBjYGAuXl8uNi8xYGBgNmBgYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=263e0d0955d6fdc50fc6862b49b41810&tk=tt_chain_token",
//                   "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oA9EuKkIV4aiyABOZOJB4yxDmYrBDvpiLAEEt/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=658&bt=329&cs=2&ds=6&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=11&rc=NGk3ZGc8NGhoZDVlaTxpNEBpMzdpZms5cnN0NDMzODczNEBjYGAuXl8uNi8xYGBgNmBgYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=263e0d0955d6fdc50fc6862b49b41810&tk=tt_chain_token",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=c1cf99cfcbc24a2e9e11b9ad1ac4cff1&is_play_url=1&item_id=7513039993741397256&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjZlM2VkOGRiODk0NTc5ZGEzMmJjMDAwZWM3MGU5NWIy&tk=tt_chain_token&video_id=v14044g50000d11qqpnog65h5cgfh470"
//                 ],
//                 "Width": 576
//               },
//               "QualityType": 28,
//               "VideoExtra": "{\"PktOffsetMap\":\"[{\\\"time\\\": 1, \\\"offset\\\": 64957}, {\\\"time\\\": 2, \\\"offset\\\": 85905}, {\\\"time\\\": 3, \\\"offset\\\": 118829}, {\\\"time\\\": 4, \\\"offset\\\": 153794}, {\\\"time\\\": 5, \\\"offset\\\": 189469}, {\\\"time\\\": 10, \\\"offset\\\": 435042}]\",\"mvmaf\":\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 94.052, \\\"v960\\\": 93.248, \\\"v864\\\": 95.014, \\\"v720\\\": 96.508}, \\\"ori\\\": {\\\"v1080\\\": 83.128, \\\"v960\\\": 84.566, \\\"v864\\\": 86.22, \\\"v720\\\": 88.489}}}\",\"ufq\":\"{\\\"enh\\\":61.585,\\\"playback\\\":{\\\"ori\\\":49.181,\\\"srv1\\\":59.54},\\\"src\\\":61.585,\\\"trans\\\":49.181,\\\"version\\\":\\\"v1.2\\\"}\",\"volume_info_json\":\"\",\"transcode_feature_id\":\"38d6bc5afa5571d8889beb5c49a0bbed\",\"dec_info\":\"\",\"gearvqm\":\"\",\"audio_bit_rate\":48426}"
//             },
//             {
//               "Bitrate": 161190,
//               "BitrateFPS": 30,
//               "CodecType": "h264",
//               "Format": "mp4",
//               "GearName": "lowest_540_0",
//               "MVMAF": "\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 83.253, \\\"v960\\\": 85.616, \\\"v864\\\": 88.177, \\\"v720\\\": 87.345}, \\\"ori\\\": {\\\"v1080\\\": 71.076, \\\"v960\\\": 73.115, \\\"v864\\\": 76.199, \\\"v720\\\": 79.16}}}\"",
//               "PlayAddr": {
//                 "DataSize": 369147,
//                 "FileCs": "c:0-16701-c999",
//                 "FileHash": "bfdc86f4bff46881e9fd4e833bf73fa0",
//                 "Height": 1024,
//                 "Uri": "v14044g50000d11qqpnog65h5cgfh470",
//                 "UrlKey": "v14044g50000d11qqpnog65h5cgfh470_h264_540p_161190",
//                 "UrlList": [
//                   "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oUxGSDg0fDshfOQHRgWbuQAAY4AesGthEFehrg/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=314&bt=157&cs=0&ds=6&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=5&rc=NzU2OzxkZzVoZzwzZjw2ZEBpMzdpZms5cnN0NDMzODczNEAyNWNeLTU0XzQxYGAvYjAxYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=01d7b5ed6c59a03fd4194b60ec770608&tk=tt_chain_token",
//                   "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oUxGSDg0fDshfOQHRgWbuQAAY4AesGthEFehrg/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=314&bt=157&cs=0&ds=6&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=5&rc=NzU2OzxkZzVoZzwzZjw2ZEBpMzdpZms5cnN0NDMzODczNEAyNWNeLTU0XzQxYGAvYjAxYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=01d7b5ed6c59a03fd4194b60ec770608&tk=tt_chain_token",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=4a33e92cc0c94d7eb27d8a09a8f38254&is_play_url=1&item_id=7513039993741397256&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjBkNjFiN2E4NjE5OTU4ZmEzNGVlMDM0ZDRmOTZjMGU4&tk=tt_chain_token&video_id=v14044g50000d11qqpnog65h5cgfh470"
//                 ],
//                 "Width": 576
//               },
//               "QualityType": 25,
//               "VideoExtra": "{\"PktOffsetMap\":\"[{\\\"time\\\": 1, \\\"offset\\\": 38300}, {\\\"time\\\": 2, \\\"offset\\\": 51664}, {\\\"time\\\": 3, \\\"offset\\\": 67634}, {\\\"time\\\": 4, \\\"offset\\\": 83771}, {\\\"time\\\": 5, \\\"offset\\\": 101325}, {\\\"time\\\": 10, \\\"offset\\\": 206038}]\",\"mvmaf\":\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 83.253, \\\"v960\\\": 85.616, \\\"v864\\\": 88.177, \\\"v720\\\": 87.345}, \\\"ori\\\": {\\\"v1080\\\": 71.076, \\\"v960\\\": 73.115, \\\"v864\\\": 76.199, \\\"v720\\\": 79.16}}}\",\"ufq\":\"{\\\"enh\\\":61.585,\\\"playback\\\":{\\\"ori\\\":40.142,\\\"srv1\\\":49.178},\\\"src\\\":61.585,\\\"trans\\\":40.142,\\\"version\\\":\\\"v1.1\\\"}\",\"volume_info_json\":\"\",\"transcode_feature_id\":\"1834aab9e1b0caae9362706a00ff9f52\",\"dec_info\":\"\",\"gearvqm\":\"\",\"audio_bit_rate\":32284}"
//             }
//           ],
//           "claInfo": {
//             "captionInfos": [
//               {
//                 "captionFormat": "webvtt",
//                 "claSubtitleID": "7513041174685354782",
//                 "expire": "1761112959",
//                 "isAutoGen": true,
//                 "isOriginalCaption": false,
//                 "language": "eng-US",
//                 "languageCode": "en",
//                 "languageID": "2",
//                 "subID": "-2084375671",
//                 "subtitleType": "4",
//                 "translationType": "0",
//                 "url": "https://v16m-webapp.tiktokcdn-us.com/4bdbc776ff40243b5d3f505d09306280/68f8737f/video/tos/alisg/tos-alisg-pv-0037/8160182ae115463e805d9c28728b3920/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1760&bt=880&cs=0&ds=4&ft=4KLMeMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=13&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmMzdpZms5cnN0NDMzODczNEBpMzdpZms5cnN0NDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiM0ZWQyMmRrbi5hLS1kMTFzYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&l=20251020060221357EDA4002EEAF98947D&btag=e00078000",
//                 "urlList": [
//                   "https://v16m-webapp.tiktokcdn-us.com/4bdbc776ff40243b5d3f505d09306280/68f8737f/video/tos/alisg/tos-alisg-pv-0037/8160182ae115463e805d9c28728b3920/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1760&bt=880&cs=0&ds=4&ft=4KLMeMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=13&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmMzdpZms5cnN0NDMzODczNEBpMzdpZms5cnN0NDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiM0ZWQyMmRrbi5hLS1kMTFzYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&l=20251020060221357EDA4002EEAF98947D&btag=e00078000",
//                   "https://v16m-webapp.tiktokcdn-us.com/4bdbc776ff40243b5d3f505d09306280/68f8737f/video/tos/alisg/tos-alisg-pv-0037/8160182ae115463e805d9c28728b3920/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1760&bt=880&cs=0&ds=4&ft=4KLMeMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=13&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmMzdpZms5cnN0NDMzODczNEBpMzdpZms5cnN0NDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiM0ZWQyMmRrbi5hLS1kMTFzYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&l=20251020060221357EDA4002EEAF98947D&btag=e00078000",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&format=webvtt&is_play_url=1&language=eng-US&line=0&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjkyN2MxZjE5YTIzYjg5ZTU3ZTJjNzU2MzhlOWJhYjQz&source=SmartPlayerSubtitleRedirect&version=4&video_id=v14044g50000d11qqpnog65h5cgfh470"
//                 ],
//                 "variant": "default"
//               },
//               {
//                 "captionFormat": "webvtt",
//                 "claSubtitleID": "7513041092443622145",
//                 "expire": "1761112959",
//                 "isAutoGen": true,
//                 "isOriginalCaption": true,
//                 "language": "cmn-Hant-CN",
//                 "languageCode": "zh-Hant",
//                 "languageID": "36",
//                 "subID": "330247152",
//                 "subtitleType": "1",
//                 "translationType": "0",
//                 "url": "https://v16m-webapp.tiktokcdn-us.com/91788a0d45779ca4f664555bfed2914c/68f8737f/video/tos/alisg/tos-alisg-pv-0037/c77fd62426374d809c9275c3d44ab509/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1760&bt=880&cs=0&ds=4&ft=4KLMeMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=13&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmMzdpZms5cnN0NDMzODczNEBpMzdpZms5cnN0NDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiM0ZWQyMmRrbi5hLS1kMTFzYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&l=20251020060221357EDA4002EEAF98947D&btag=e00078000",
//                 "urlList": [
//                   "https://v16m-webapp.tiktokcdn-us.com/91788a0d45779ca4f664555bfed2914c/68f8737f/video/tos/alisg/tos-alisg-pv-0037/c77fd62426374d809c9275c3d44ab509/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1760&bt=880&cs=0&ds=4&ft=4KLMeMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=13&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmMzdpZms5cnN0NDMzODczNEBpMzdpZms5cnN0NDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiM0ZWQyMmRrbi5hLS1kMTFzYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&l=20251020060221357EDA4002EEAF98947D&btag=e00078000",
//                   "https://v16m-webapp.tiktokcdn-us.com/91788a0d45779ca4f664555bfed2914c/68f8737f/video/tos/alisg/tos-alisg-pv-0037/c77fd62426374d809c9275c3d44ab509/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1760&bt=880&cs=0&ds=4&ft=4KLMeMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=13&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmMzdpZms5cnN0NDMzODczNEBpMzdpZms5cnN0NDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiM0ZWQyMmRrbi5hLS1kMTFzYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&l=20251020060221357EDA4002EEAF98947D&btag=e00078000",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&format=webvtt&is_play_url=1&language=cmn-Hant-CN&line=0&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjkyN2MxZjE5YTIzYjg5ZTU3ZTJjNzU2MzhlOWJhYjQz&source=SmartPlayerSubtitleRedirect&version=1%3Awhisper_lid&video_id=v14044g50000d11qqpnog65h5cgfh470"
//                 ],
//                 "variant": "whisper_lid"
//               }
//             ],
//             "captionsType": 2,
//             "enableAutoCaption": true,
//             "hasOriginalAudio": false,
//             "originalLanguageInfo": {
//               "canTranslateRealTimeNoCheck": true,
//               "language": "cmn-Hant-CN",
//               "languageCode": "zh-Hant",
//               "languageID": "36"
//             }
//           },
//           "codecType": "h264",
//           "cover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ooBvExDaAtlrZsOKBbEajAhZ4IkViyzAYDEOi~tplv-tiktokx-origin.image?dr=9636&x-expires=1761112800&x-signature=7Jegtv%2BRDjIQL7Y7t3Wdo%2FHjtDM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8",
//           "definition": "540p",
//           "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oQaDvANkhIYEKBVD2vi4ti1PEEryBZ2AOrxO8/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=850&bt=425&cs=0&ds=3&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=0&rc=ODU7NTkzNWhoZmlmZGlnN0BpMzdpZms5cnN0NDMzODczNEA1Xy4wLzRiNTQxNV8uXy5gYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=8376d3130411aa2346fcc89dad2062dd&tk=tt_chain_token",
//           "duration": 18,
//           "dynamicCover": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oAYABrIawKEAEIiDkhDOtvEJEAiWZByaO4Vxh~tplv-tiktokx-origin.image?dr=9636&x-expires=1761112800&x-signature=MEM8FDgjtyc78Zpvda4UdP%2FAra8%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8",
//           "encodeUserTag": "",
//           "encodedType": "normal",
//           "format": "mp4",
//           "height": 1024,
//           "id": "7513039993741397256",
//           "originCover": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oYqEgiXOKD4avANBlIDkB4ZErtiAAhyYVxOEI~tplv-tiktokx-origin.image?dr=9636&x-expires=1761112800&x-signature=gp4HczjmyoT0YZrdMzXCNdGJoow%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8",
//           "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/okDJOZA4iAtpOyxEBY7oakriIOvBhCKDvVECE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=790&bt=395&cs=0&ds=6&ft=4KJMyMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=0&rc=aTM8ODs4ZzZnZjY8O2g7NEBpMzdpZms5cnN0NDMzODczNEA1Ll4yNi9eXi0xLmIuMDBhYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&btag=e000b8000&expire=1761112959&l=20251020060221357EDA4002EEAF98947D&ply_type=2&policy=2&signature=485a27824e1f910826d991920bc1687c&tk=tt_chain_token",
//           "ratio": "540p",
//           "size": 926762,
//           "subtitleInfos": [
//             {
//               "Format": "webvtt",
//               "LanguageCodeName": "eng-US",
//               "LanguageID": "2",
//               "Size": 97,
//               "Source": "MT",
//               "Url": "https://v16m-webapp.tiktokcdn-us.com/4bdbc776ff40243b5d3f505d09306280/68f8737f/video/tos/alisg/tos-alisg-pv-0037/8160182ae115463e805d9c28728b3920/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1760&bt=880&cs=0&ds=4&ft=4KLMeMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=13&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmMzdpZms5cnN0NDMzODczNEBpMzdpZms5cnN0NDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiM0ZWQyMmRrbi5hLS1kMTFzYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&l=20251020060221357EDA4002EEAF98947D&btag=e00078000",
//               "UrlExpire": 1761112959,
//               "Version": "4"
//             },
//             {
//               "Format": "webvtt",
//               "LanguageCodeName": "cmn-Hant-CN",
//               "LanguageID": "36",
//               "Size": 96,
//               "Source": "ASR",
//               "Url": "https://v16m-webapp.tiktokcdn-us.com/91788a0d45779ca4f664555bfed2914c/68f8737f/video/tos/alisg/tos-alisg-pv-0037/c77fd62426374d809c9275c3d44ab509/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1760&bt=880&cs=0&ds=4&ft=4KLMeMZj8Zmo0UE0MI4jV~bCQpWrKsd.&mime_type=video_mp4&qs=13&rc=cnF8b2hsc2d3SkBwaHIxaDFybndmMzdpZms5cnN0NDMzODczNEBpMzdpZms5cnN0NDMzODczNEBjRl5Nc3FePmJKYSNvYF90aHFmOiM0ZWQyMmRrbi5hLS1kMTFzYSM0ZWQyMmRrbi5hLS1kMTFzcw%3D%3D&l=20251020060221357EDA4002EEAF98947D&btag=e00078000",
//               "UrlExpire": 1761112959,
//               "Version": "1:whisper_lid"
//             }
//           ],
//           "videoID": "v14044g50000d11qqpnog65h5cgfh470",
//           "videoQuality": "normal",
//           "volumeInfo": {
//             "Loudness": -20.6,
//             "Peak": 0.26002
//           },
//           "width": 576,
//           "zoomCover": {
//             "240": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ooBvExDaAtlrZsOKBbEajAhZ4IkViyzAYDEOi~tplv-photomode-zoomcover:240:240.avif?dr=9616&x-expires=1761112800&x-signature=b5SXhnn%2FUbC8yaevTYIIhQcp644%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8&ftpl=1",
//             "480": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ooBvExDaAtlrZsOKBbEajAhZ4IkViyzAYDEOi~tplv-photomode-zoomcover:480:480.avif?dr=9616&x-expires=1761112800&x-signature=xSPDx3bKmezWkJ%2FdkjY4oL7wMNk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8&ftpl=1",
//             "720": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ooBvExDaAtlrZsOKBbEajAhZ4IkViyzAYDEOi~tplv-photomode-zoomcover:720:720.avif?dr=9616&x-expires=1761112800&x-signature=TfE4yLc7xPXQEB5%2BlNlSB0SqEN0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8&ftpl=1",
//             "960": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ooBvExDaAtlrZsOKBbEajAhZ4IkViyzAYDEOi~tplv-photomode-zoomcover:960:960.avif?dr=9616&x-expires=1761112800&x-signature=4zoKvc21cWm7H4rDxJqWP1w4aTg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8&ftpl=1"
//           }
//         }
//       }
//     ],
//     "log_pb": {
//       "impr_id": "20251020060221357EDA4002EEAF98947D"
//     },
//     "statusCode": 0,
//     "status_code": 0,
//     "status_msg": ""
//   }
// }
