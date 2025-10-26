import axios from "axios";

const RAPID_API_KEY = "";

// get yours rapidapi key from https://rapidapi.com/datahubapis1-datahubapis-default/api/tiktok-api45

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://tiktok-api45.p.rapidapi.com/api/v1/user/popular-posts?sec_uid=MS4wLjABAAAAkagks5n_8XDIMWf94LZDUYs54FG5bJmEFJkWtjA__uRUN8QWaavHhzSyEO6WBPQj&count=30&cursor=0",
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
//     "cursor": "31865",
//     "extra": {
//       "fatal_item_ids": [],
//       "logid": "20251020060348F6BEBE596C306A9A5DA6",
//       "now": 1760940228000
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
//             "id": "7298346368535134210",
//             "profileLarger": "",
//             "profileMedium": "",
//             "profileThumb": "",
//             "title": "大国基建"
//           }
//         ],
//         "collected": false,
//         "contents": [
//           {
//             "desc": "新中国第一条运河太震撼了#china #大国基建 ",
//             "textExtra": [
//               {
//                 "awemeId": "",
//                 "end": 18,
//                 "hashtagName": "china",
//                 "isCommerce": false,
//                 "start": 12,
//                 "subType": 0,
//                 "type": 1
//               },
//               {
//                 "awemeId": "",
//                 "end": 24,
//                 "hashtagName": "大国基建",
//                 "isCommerce": false,
//                 "start": 19,
//                 "subType": 0,
//                 "type": 1
//               }
//             ]
//           }
//         ],
//         "createTime": 1745842841,
//         "creatorAIComment": {
//           "eligibleVideo": false,
//           "hasAITopic": false,
//           "notEligibleReason": 101
//         },
//         "desc": "新中国第一条运河太震撼了#china #大国基建 ",
//         "digged": false,
//         "diversificationId": 10043,
//         "duetDisplay": 0,
//         "duetEnabled": true,
//         "forFriend": false,
//         "id": "7498337886933191943",
//         "isAd": false,
//         "isPinnedItem": true,
//         "isReviewing": false,
//         "itemCommentStatus": 0,
//         "item_control": {
//           "can_repost": true
//         },
//         "music": {
//           "authorName": "爱旅行的宝哥",
//           "coverLarge": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/78ca93c242c05024cc27d0b27b3845c2~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=9640&refresh_token=76033888&x-expires=1761112800&x-signature=8lstO1UF%2FzSvUg0SAgEqRv5qlWI%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "coverMedium": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/78ca93c242c05024cc27d0b27b3845c2~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=b696e06c&x-expires=1761112800&x-signature=CIbHhUPbzfuuhe%2BFiZh%2FvIuqPE4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "coverThumb": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/78ca93c242c05024cc27d0b27b3845c2~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=0fef9028&x-expires=1761112800&x-signature=nC86bk2zfeaqJEsv7sgoxwKkRZo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
//           "duration": 35,
//           "id": "7492313461236632326",
//           "isCopyrighted": true,
//           "original": true,
//           "playUrl": "https://v16m.tiktokcdn-us.com/fd8118eee175d5c04f4220a94a39b877/68f62547/video/tos/useast5/tos-useast5-v-27dcd7c799-tx/os77UA6iJJTfxWDzCQAQ9EAfEChnI5ByD32BiB/?a=1233&bti=ODszNWYuMDE6&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=250&bt=125&ds=5&ft=GSDrKInz7ThjKh3KXq8Zmo&mime_type=audio_mpeg&qs=13&rc=anU2bnM5cnUzeTMzNzU8M0BpanU2bnM5cnUzeTMzNzU8M0BtMG1kMmRzanFgLS1kMTZzYSNtMG1kMmRzanFgLS1kMTZzcw%3D%3D&vvpl=1&l=20251020060348F6BEBE596C306A9A5DA6&btag=e00048000",
//           "private": false,
//           "title": "原创音乐",
//           "tt2dsp": {
//             "tt_to_dsp_song_infos": [
//               {
//                 "meta_song_id": "6732712053003257858",
//                 "platform": 1,
//                 "song_id": "1440775946",
//                 "token": {
//                   "apple_music_token": {
//                     "developer_token": "eyJhbGciOiJFUzI1NiIsImtpZCI6Ikc2Q0dLMjdWQzMifQ.eyJleHAiOjE3NjEwNTY4NTcsImlhdCI6MTc2MDc5NzY1NywiaXNzIjoiTUo3OTdEOFU2RiJ9.EqiYWlglAxX0Z1D9reD0d06vtB1C6T1pN6fWPi0jbJsTa9wUJJC3BvAB23c7t15nW69IqjKyaCAUd2mqgf3uZw"
//                   }
//                 }
//               },
//               {
//                 "meta_song_id": "6732712053003257858",
//                 "platform": 3,
//                 "song_id": "2raz2ZPGIFOYUv9ceoZp9K"
//               }
//             ]
//           }
//         },
//         "officalItem": false,
//         "originalItem": false,
//         "privateItem": false,
//         "secret": false,
//         "shareEnabled": true,
//         "stats": {
//           "collectCount": 59100,
//           "commentCount": 18900,
//           "diggCount": 866000,
//           "playCount": 14200000,
//           "shareCount": 34700
//         },
//         "statsV2": {
//           "collectCount": "59149",
//           "commentCount": "18900",
//           "diggCount": "866000",
//           "playCount": "14200000",
//           "repostCount": "0",
//           "shareCount": "34700"
//         },
//         "stitchDisplay": 0,
//         "stitchEnabled": true,
//         "textExtra": [
//           {
//             "awemeId": "",
//             "end": 18,
//             "hashtagName": "china",
//             "isCommerce": false,
//             "start": 12,
//             "subType": 0,
//             "type": 1
//           },
//           {
//             "awemeId": "",
//             "end": 24,
//             "hashtagName": "大国基建",
//             "isCommerce": false,
//             "start": 19,
//             "subType": 0,
//             "type": 1
//           }
//         ],
//         "textLanguage": "zh-Hans",
//         "textTranslatable": true,
//         "video": {
//           "PlayAddrStruct": {
//             "DataSize": 8260417,
//             "FileCs": "c:0-27081-3440",
//             "FileHash": "b49e9db5f529360bc544345a3441ccc6",
//             "Height": 1024,
//             "Uri": "v14044g50000d07n547og65jg29s91kg",
//             "UrlKey": "v14044g50000d07n547og65jg29s91kg_h264_540p_2134957",
//             "UrlList": [
//               "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oIf5iJojgIRuBgMkDfAWNHVTA854QhQCJAUceA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=4168&bt=2084&cs=0&ds=6&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=0&rc=ZTk8ODZkNGgzOjdpZDY4ZEBpajR2NW05cjdxMzMzODczNEBfYzViX2MyNmMxMS82YmBjYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=08d5984bd8522098b67d926ee4ffd9a0&tk=tt_chain_token",
//               "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oIf5iJojgIRuBgMkDfAWNHVTA854QhQCJAUceA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=4168&bt=2084&cs=0&ds=6&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=0&rc=ZTk8ODZkNGgzOjdpZDY4ZEBpajR2NW05cjdxMzMzODczNEBfYzViX2MyNmMxMS82YmBjYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=08d5984bd8522098b67d926ee4ffd9a0&tk=tt_chain_token",
//               "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=fac5e39a2f4447f09e51fab3e589f6bb&is_play_url=1&item_id=7498337886933191943&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjlhNjg1NWNjM2Q5OTI5ZmE5YmFiMjliNzMzNGM5ZmZm&tk=tt_chain_token&video_id=v14044g50000d07n547og65jg29s91kg"
//             ],
//             "Width": 576
//           },
//           "VQScore": "63.4",
//           "bitrate": 2134957,
//           "bitrateInfo": [
//             {
//               "Bitrate": 2134957,
//               "BitrateFPS": 30,
//               "CodecType": "h264",
//               "Format": "mp4",
//               "GearName": "normal_540_0",
//               "MVMAF": "\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 91.839, \\\"v960\\\": 95.449, \\\"v864\\\": 96.168, \\\"v720\\\": 98.677}, \\\"ori\\\": {\\\"v1080\\\": 81.625, \\\"v960\\\": 86.444, \\\"v864\\\": 87.71, \\\"v720\\\": 90.827}}}\"",
//               "PlayAddr": {
//                 "DataSize": 8260417,
//                 "FileCs": "c:0-27081-3440",
//                 "FileHash": "b49e9db5f529360bc544345a3441ccc6",
//                 "Height": 1024,
//                 "Uri": "v14044g50000d07n547og65jg29s91kg",
//                 "UrlKey": "v14044g50000d07n547og65jg29s91kg_h264_540p_2134957",
//                 "UrlList": [
//                   "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oIf5iJojgIRuBgMkDfAWNHVTA854QhQCJAUceA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=4168&bt=2084&cs=0&ds=6&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=0&rc=ZTk8ODZkNGgzOjdpZDY4ZEBpajR2NW05cjdxMzMzODczNEBfYzViX2MyNmMxMS82YmBjYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=08d5984bd8522098b67d926ee4ffd9a0&tk=tt_chain_token",
//                   "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oIf5iJojgIRuBgMkDfAWNHVTA854QhQCJAUceA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=4168&bt=2084&cs=0&ds=6&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=0&rc=ZTk8ODZkNGgzOjdpZDY4ZEBpajR2NW05cjdxMzMzODczNEBfYzViX2MyNmMxMS82YmBjYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=08d5984bd8522098b67d926ee4ffd9a0&tk=tt_chain_token",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=fac5e39a2f4447f09e51fab3e589f6bb&is_play_url=1&item_id=7498337886933191943&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjlhNjg1NWNjM2Q5OTI5ZmE5YmFiMjliNzMzNGM5ZmZm&tk=tt_chain_token&video_id=v14044g50000d07n547og65jg29s91kg"
//                 ],
//                 "Width": 576
//               },
//               "QualityType": 20,
//               "VideoExtra": "{\"PktOffsetMap\":\"[{\\\"time\\\": 1, \\\"offset\\\": 344796}, {\\\"time\\\": 2, \\\"offset\\\": 587676}, {\\\"time\\\": 3, \\\"offset\\\": 843658}, {\\\"time\\\": 4, \\\"offset\\\": 1083560}, {\\\"time\\\": 5, \\\"offset\\\": 1372586}, {\\\"time\\\": 10, \\\"offset\\\": 2849393}]\",\"mvmaf\":\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 91.839, \\\"v960\\\": 95.449, \\\"v864\\\": 96.168, \\\"v720\\\": 98.677}, \\\"ori\\\": {\\\"v1080\\\": 81.625, \\\"v960\\\": 86.444, \\\"v864\\\": 87.71, \\\"v720\\\": 90.827}}}\",\"ufq\":\"{\\\"enh\\\":76.965,\\\"playback\\\":{\\\"ori\\\":63.434,\\\"srv1\\\":72.681},\\\"src\\\":76.965,\\\"trans\\\":63.434,\\\"version\\\":\\\"v1.1\\\"}\",\"volume_info_json\":\"\",\"transcode_feature_id\":\"1834aab9e1b0caae9362706a00ff9f52\",\"dec_info\":\"\",\"gearvqm\":\"\",\"audio_bit_rate\":32212}"
//             },
//             {
//               "Bitrate": 1339408,
//               "BitrateFPS": 30,
//               "CodecType": "h265_hvc1",
//               "Format": "mp4",
//               "GearName": "adapt_lower_720_1",
//               "MVMAF": "\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 93.972, \\\"v960\\\": 96.478, \\\"v864\\\": 97.047, \\\"v720\\\": 98.966}, \\\"ori\\\": {\\\"v1080\\\": 82.559, \\\"v960\\\": 86.105, \\\"v864\\\": 88.72, \\\"v720\\\": 92.33}}}\"",
//               "PlayAddr": {
//                 "DataSize": 5182340,
//                 "FileCs": "c:0-27229-2aab",
//                 "FileHash": "cd5ee422bc4a8164fe5c4468bd3ea134",
//                 "Height": 1280,
//                 "Uri": "v14044g50000d07n547og65jg29s91kg",
//                 "UrlKey": "v14044g50000d07n547og65jg29s91kg_bytevc1_720p_1339408",
//                 "UrlList": [
//                   "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oU8PagQC8I9EVyiAPAEiJhEuPM3QkAzpBBYdE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2616&bt=1308&cs=2&ds=3&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=14&rc=NDNlN2doaDtoPGU3Omk0aUBpajR2NW05cjdxMzMzODczNEBfNl8wMV4vNjExXzU2Ni0wYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=fa13b794b3cc266bf4a5c5921afdda6a&tk=tt_chain_token",
//                   "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oU8PagQC8I9EVyiAPAEiJhEuPM3QkAzpBBYdE/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2616&bt=1308&cs=2&ds=3&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=14&rc=NDNlN2doaDtoPGU3Omk0aUBpajR2NW05cjdxMzMzODczNEBfNl8wMV4vNjExXzU2Ni0wYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=fa13b794b3cc266bf4a5c5921afdda6a&tk=tt_chain_token",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=3f019f9784bb494e982eae4d34bb90b1&is_play_url=1&item_id=7498337886933191943&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjI2MDNjZGFjMzJiMjlkMzI5YTVmZTgwYzU4MTBkZmJh&tk=tt_chain_token&video_id=v14044g50000d07n547og65jg29s91kg"
//                 ],
//                 "Width": 720
//               },
//               "QualityType": 14,
//               "VideoExtra": "{\"PktOffsetMap\":\"[{\\\"time\\\": 1, \\\"offset\\\": 226030}, {\\\"time\\\": 2, \\\"offset\\\": 305426}, {\\\"time\\\": 3, \\\"offset\\\": 421658}, {\\\"time\\\": 4, \\\"offset\\\": 540375}, {\\\"time\\\": 5, \\\"offset\\\": 665886}, {\\\"time\\\": 10, \\\"offset\\\": 1447047}]\",\"mvmaf\":\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 93.972, \\\"v960\\\": 96.478, \\\"v864\\\": 97.047, \\\"v720\\\": 98.966}, \\\"ori\\\": {\\\"v1080\\\": 82.559, \\\"v960\\\": 86.105, \\\"v864\\\": 88.72, \\\"v720\\\": 92.33}}}\",\"ufq\":\"{\\\"enh\\\":76.965,\\\"playback\\\":{\\\"ori\\\":64.135,\\\"srv1\\\":74.814},\\\"src\\\":76.965,\\\"trans\\\":64.135,\\\"version\\\":\\\"v1.2\\\"}\",\"volume_info_json\":\"\",\"transcode_feature_id\":\"bb26e1d5b5c83ad8598026b235791c7c\",\"dec_info\":\"\",\"gearvqm\":\"\",\"audio_bit_rate\":96410}"
//             },
//             {
//               "Bitrate": 1009951,
//               "BitrateFPS": 30,
//               "CodecType": "h265_hvc1",
//               "Format": "mp4",
//               "GearName": "adapt_540_1",
//               "MVMAF": "\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 89.758, \\\"v960\\\": 92.922, \\\"v864\\\": 94.948, \\\"v720\\\": 96.631}, \\\"ori\\\": {\\\"v1080\\\": 77.535, \\\"v960\\\": 81.54, \\\"v864\\\": 84.143, \\\"v720\\\": 88.833}}}\"",
//               "PlayAddr": {
//                 "DataSize": 3907629,
//                 "FileCs": "c:0-27229-5c51",
//                 "FileHash": "771cb0228763364989c7e5251f8e10dc",
//                 "Height": 1024,
//                 "Uri": "v14044g50000d07n547og65jg29s91kg",
//                 "UrlKey": "v14044g50000d07n547og65jg29s91kg_bytevc1_540p_1009951",
//                 "UrlList": [
//                   "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/okkaBY9ngPyVu8QgiiJPAEIazPcJDEBBhAEpA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1972&bt=986&cs=2&ds=6&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=11&rc=NWQ1OztmZTxkaTloNzQ8aUBpajR2NW05cjdxMzMzODczNEA0LS1iYWI1NWExNjIxYzZhYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=be93df44ec72ca14e0199eb52fc85f86&tk=tt_chain_token",
//                   "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/okkaBY9ngPyVu8QgiiJPAEIazPcJDEBBhAEpA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1972&bt=986&cs=2&ds=6&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=11&rc=NWQ1OztmZTxkaTloNzQ8aUBpajR2NW05cjdxMzMzODczNEA0LS1iYWI1NWExNjIxYzZhYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=be93df44ec72ca14e0199eb52fc85f86&tk=tt_chain_token",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=df99f1445e964fda898becd8e8020a72&is_play_url=1&item_id=7498337886933191943&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjEzYTUzY2U3NjJiMTFmYjFjN2U1MDlhNmRkOTQwNjQw&tk=tt_chain_token&video_id=v14044g50000d07n547og65jg29s91kg"
//                 ],
//                 "Width": 576
//               },
//               "QualityType": 28,
//               "VideoExtra": "{\"PktOffsetMap\":\"[{\\\"time\\\": 1, \\\"offset\\\": 187873}, {\\\"time\\\": 2, \\\"offset\\\": 251649}, {\\\"time\\\": 3, \\\"offset\\\": 346058}, {\\\"time\\\": 4, \\\"offset\\\": 444367}, {\\\"time\\\": 5, \\\"offset\\\": 547315}, {\\\"time\\\": 10, \\\"offset\\\": 1149837}]\",\"mvmaf\":\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 89.758, \\\"v960\\\": 92.922, \\\"v864\\\": 94.948, \\\"v720\\\": 96.631}, \\\"ori\\\": {\\\"v1080\\\": 77.535, \\\"v960\\\": 81.54, \\\"v864\\\": 84.143, \\\"v720\\\": 88.833}}}\",\"ufq\":\"{\\\"enh\\\":76.965,\\\"playback\\\":{\\\"ori\\\":60.367,\\\"srv1\\\":70.6},\\\"src\\\":76.965,\\\"trans\\\":60.367,\\\"version\\\":\\\"v1.2\\\"}\",\"volume_info_json\":\"\",\"transcode_feature_id\":\"8d66b9a54d19950e620b0074f5d11392\",\"dec_info\":\"\",\"gearvqm\":\"\",\"audio_bit_rate\":64322}"
//             },
//             {
//               "Bitrate": 734416,
//               "BitrateFPS": 30,
//               "CodecType": "h264",
//               "Format": "mp4",
//               "GearName": "lowest_540_0",
//               "MVMAF": "\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 79.676, \\\"v960\\\": 82.237, \\\"v864\\\": 84.367, \\\"v720\\\": 90.515}, \\\"ori\\\": {\\\"v1080\\\": 67.46, \\\"v960\\\": 72.658, \\\"v864\\\": 77.233, \\\"v720\\\": 80.539}}}\"",
//               "PlayAddr": {
//                 "DataSize": 2841551,
//                 "FileCs": "c:0-27081-695d",
//                 "FileHash": "3f702272f725b8f6f48538d3d03fec08",
//                 "Height": 1024,
//                 "Uri": "v14044g50000d07n547og65jg29s91kg",
//                 "UrlKey": "v14044g50000d07n547og65jg29s91kg_h264_540p_734416",
//                 "UrlList": [
//                   "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ooYABcEatgEAAIiPhoPpyPaYEQiDkBJC9EVzq/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1434&bt=717&cs=0&ds=6&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=5&rc=NzM0ZWg0OzM1Ozo7ZGc4O0BpajR2NW05cjdxMzMzODczNEA2Y14yNV9jX18xXjUwNC5hYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=ae6e456c982fe5eed0061c457f430c8c&tk=tt_chain_token",
//                   "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ooYABcEatgEAAIiPhoPpyPaYEQiDkBJC9EVzq/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1434&bt=717&cs=0&ds=6&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=5&rc=NzM0ZWg0OzM1Ozo7ZGc4O0BpajR2NW05cjdxMzMzODczNEA2Y14yNV9jX18xXjUwNC5hYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=ae6e456c982fe5eed0061c457f430c8c&tk=tt_chain_token",
//                   "https://www.tiktok.com/aweme/v1/play/?faid=1988&file_id=d8157d3a88a748b2b0f8b18e5ba1f094&is_play_url=1&item_id=7498337886933191943&line=0&ply_type=2&signaturev3=dmlkZW9faWQ7ZmlsZV9pZDtpdGVtX2lkLjVlMTlkMjU0MDRiNTE1Mjc3YmZhNTMzNjFhNzcxZjVh&tk=tt_chain_token&video_id=v14044g50000d07n547og65jg29s91kg"
//                 ],
//                 "Width": 576
//               },
//               "QualityType": 25,
//               "VideoExtra": "{\"PktOffsetMap\":\"[{\\\"time\\\": 1, \\\"offset\\\": 146848}, {\\\"time\\\": 2, \\\"offset\\\": 237089}, {\\\"time\\\": 3, \\\"offset\\\": 332714}, {\\\"time\\\": 4, \\\"offset\\\": 421094}, {\\\"time\\\": 5, \\\"offset\\\": 527449}, {\\\"time\\\": 10, \\\"offset\\\": 1045919}]\",\"mvmaf\":\"{\\\"v2.0\\\": {\\\"srv1\\\": {\\\"v1080\\\": 79.676, \\\"v960\\\": 82.237, \\\"v864\\\": 84.367, \\\"v720\\\": 90.515}, \\\"ori\\\": {\\\"v1080\\\": 67.46, \\\"v960\\\": 72.658, \\\"v864\\\": 77.233, \\\"v720\\\": 80.539}}}\",\"ufq\":\"{\\\"enh\\\":76.965,\\\"playback\\\":{\\\"ori\\\":52.81,\\\"srv1\\\":61.849},\\\"src\\\":76.965,\\\"trans\\\":52.81,\\\"version\\\":\\\"v1.1\\\"}\",\"volume_info_json\":\"\",\"transcode_feature_id\":\"1834aab9e1b0caae9362706a00ff9f52\",\"dec_info\":\"\",\"gearvqm\":\"\",\"audio_bit_rate\":32211}"
//             }
//           ],
//           "claInfo": {
//             "enableAutoCaption": true,
//             "hasOriginalAudio": false,
//             "noCaptionReason": 3
//           },
//           "codecType": "h264",
//           "cover": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o8pEBDQUFIA3LABIfLcKPfAC9gE8SCDAoENRAF~tplv-tiktokx-origin.image?dr=9636&x-expires=1761112800&x-signature=ewxEGymY7JIb%2BelGA5yT%2ByaTpOM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8",
//           "definition": "540p",
//           "downloadAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oQIiAVEhzGBEydYAQIAGkJknPPqJ9UgBpPaEi/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=4288&bt=2144&cs=0&ds=3&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=0&rc=M2gzOWY1OjplaTtpZWRmOEBpajR2NW05cjdxMzMzODczNEAyLl8zL2FfXzQxYTM2NDQwYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=ff4e597da76567b3bf9ec1759476fe1b&tk=tt_chain_token",
//           "duration": 30,
//           "dynamicCover": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o8pEBDQUFIA3LABIfLcKPfAC9gE8SCDAoENRAF~tplv-tiktokx-origin.image?dr=9636&x-expires=1761112800&x-signature=ewxEGymY7JIb%2BelGA5yT%2ByaTpOM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8",
//           "encodeUserTag": "",
//           "encodedType": "normal",
//           "format": "mp4",
//           "height": 1024,
//           "id": "7498337886933191943",
//           "originCover": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o0kQHDGJQDCIeIOveIAAQwPLeuPhpSDUpvAjoc~tplv-tiktokx-origin.image?dr=9636&x-expires=1761112800&x-signature=cAj16LHiuq7LAW0IeGlDj5IUWGU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8",
//           "playAddr": "https://v16-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oIf5iJojgIRuBgMkDfAWNHVTA854QhQCJAUceA/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=4168&bt=2084&cs=0&ds=6&ft=4KJMyMZj8Zmo0.I0MI4jVvMbQpWrKsd.&mime_type=video_mp4&qs=0&rc=ZTk8ODZkNGgzOjdpZDY4ZEBpajR2NW05cjdxMzMzODczNEBfYzViX2MyNmMxMS82YmBjYSNoNjZkMmQ0MjRhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761113058&l=20251020060348F6BEBE596C306A9A5DA6&ply_type=2&policy=2&signature=08d5984bd8522098b67d926ee4ffd9a0&tk=tt_chain_token",
//           "ratio": "540p",
//           "size": 8260417,
//           "videoID": "v14044g50000d07n547og65jg29s91kg",
//           "videoQuality": "normal",
//           "volumeInfo": {
//             "Loudness": -20.1,
//             "Peak": 0.2851
//           },
//           "width": 576,
//           "zoomCover": {
//             "240": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o8pEBDQUFIA3LABIfLcKPfAC9gE8SCDAoENRAF~tplv-photomode-zoomcover:240:240.avif?dr=9616&x-expires=1761112800&x-signature=pZFA4C75iF06frqQ%2BIxkmyzVP5U%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8&ftpl=1",
//             "480": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o8pEBDQUFIA3LABIfLcKPfAC9gE8SCDAoENRAF~tplv-photomode-zoomcover:480:480.avif?dr=9616&x-expires=1761112800&x-signature=ZqpM93jIF7qwOSXKSfrjXsTlgqg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8&ftpl=1",
//             "720": "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o8pEBDQUFIA3LABIfLcKPfAC9gE8SCDAoENRAF~tplv-photomode-zoomcover:720:720.avif?dr=9616&x-expires=1761112800&x-signature=kXx81%2FpHVoTHsYN6N1kaUXnHSdc%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8&ftpl=1",
//             "960": "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o8pEBDQUFIA3LABIfLcKPfAC9gE8SCDAoENRAF~tplv-photomode-zoomcover:960:960.avif?dr=9616&x-expires=1761112800&x-signature=dJXs5evCk9CKvxCMky%2FH6gA4It0%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast8&ftpl=1"
//           }
//         }
//       }
//     ],
//     "log_pb": {
//       "impr_id": "20251020060348F6BEBE596C306A9A5DA6"
//     },
//     "statusCode": 0,
//     "status_code": 0,
//     "status_msg": ""
//   }
// }
