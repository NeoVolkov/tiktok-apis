# TikTok API (via RapidAPI)

Easily connect to TikTok's public data using the **TikTok API** on RapidAPI.  
Fetch profiles, trending videos, hashtags, and download videos without watermark in seconds.

Integrate TikTok seamlessly using our **TikTok API** on RapidAPI. Access public TikTok data, download videos without watermark, get user profiles, trending posts, and hashtags in real time.

> 🔗 Try it now on [RapidAPI TikTok API](https://rapidapi.com/datahubapis1-datahubapis-default/api/tiktok-api45)

---

## 🌐 Live Demo

## 👉 [TikTok API Playground – Try It Online](https://neovolkov.github.io/tiktok-apis/)

## 🚀 Features

- Get **TikTok user info**, stats, and posts
- Fetch **trending videos** and explore hashtags
- **Download TikTok videos** without watermark
- Search by **username, hashtag, or sound**
- Retrieve **video analytics and engagement data**

---

## 🔑 Get Your API Key

Before running the examples, you’ll need your RapidAPI key.

1. Go to [TikTok API on RapidAPI](https://rapidapi.com/datahubapis1-datahubapis-default/api/tiktok-api45)
2. Click **Subscribe to Test** (free or paid plan)
3. Copy your key from the **Code Snippet** section:
   ```bash
   --header 'x-rapidapi-key: YOUR_API_KEY'
   ```

---

## 💻 Example Get User Profile

### ⚙️ Request (cURL)

```bash
curl --request GET \
  --url 'https://tiktok-api45.p.rapidapi.com/api/v1/user/detail?unique_id=zg.520' \
  --header 'x-rapidapi-host: tiktok-api45.p.rapidapi.com' \
  --header 'x-rapidapi-key: YOUR_API_KEY'
```

### 📦 Response

```json
{
  "data": {
    "extra": {
      "fatal_item_ids": [],
      "logid": "202510200557048273E7C6782628975A0F",
      "now": 1760939824000
    },
    "log_pb": {
      "impr_id": "202510200557048273E7C6782628975A0F"
    },
    "shareMeta": {
      "desc": "@zg.520 — 427.7k followers, 176 following, 6.8M likes — Watch amazing short videos created by Xiao Zou Travel 🇨🇳.",
      "title": "小邹旅行🇨🇳 on TikTok"
    },
    "statusCode": 0,
    "status_code": 0,
    "status_msg": "",
    "userInfo": {
      "stats": {
        "diggCount": 0,
        "followerCount": 427700,
        "followingCount": 176,
        "friendCount": 53,
        "heart": 6800000,
        "heartCount": 6800000,
        "videoCount": 1605
      },
      "statsV2": {
        "diggCount": "0",
        "followerCount": "427682",
        "followingCount": "176",
        "friendCount": "53",
        "heart": "6764096",
        "heartCount": "6764096",
        "videoCount": "1605"
      },
      "user": {
        "UserStoryStatus": 0,
        "avatarLarger": "https:..///",
        "avatarThumb": "https:..///",
        "canExpPlaylist": true,
        "commentSetting": 0,
        "commerceUserInfo": {
          "category": "Travel & Tourism",
          "categoryButton": false,
          "commerceUser": true
        },
        "downloadSetting": 0,
        "duetSetting": 0,
        "followingVisibility": 1,
        "ftc": false,
        "id": "6799838955094836230",
        "isADVirtual": false,
        "isEmbedBanned": false,
        "nickNameModifyTime": 1752997307,
        "nickname": "小邹旅行🇨🇳",
        "openFavorite": false,
        "privateAccount": false,
        "profileEmbedPermission": 1,
        "profileTab": {
          "showPlayListTab": false
        },
        "relation": 0,
        "secUid": "MS4wLjABAAAAkagks5n_8XDIMWf94LZDUYs54FG5bJmEFJkWtjA__uRUN8QWaavHhzSyEO6WBPQj",
        "secret": false,
        "signature": "账号出售，需要的联系VX:zmk1086",
        "stitchSetting": 0,
        "ttSeller": false,
        "uniqueId": "zg.520",
        "verified": false
      }
    }
  }
}
```

---

## 💻 Example Download Video (No Watermark)

### ⚙️ Request (cURL)

```bash
curl --request GET \
	--url 'https://tiktok-api45.p.rapidapi.com/api/v1/download/video?url=https%3A%2F%2Fwww.tiktok.com%2F%40zg.            520%2Fvideo%2F7556699581464038664' \
	--header 'x-rapidapi-host: tiktok-api45.p.rapidapi.com' \
	--header 'x-rapidapi-key: YOUR_API_KEY'
```

### 📦 Response

```json
{
  "data": {
    "link": "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ogULeIClQEjomKIzYeLZeIZhRklydGlgvgIAAD/?     a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2262&bt=1131&cs=0&ds=6&ft=4KJMyMZj8Zmo0-6bMI4jVo6eQpWrKsd.&mime_type=video_mp4&qs=0&rc=NGczODlmNjM7NDY4N2U7M0Bpam80OGw5cnBmNjMzODczNEAvMDY2LTZhXy8xMjQwMl4yYSM0Zm9vMmRjZmNhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761239650&l=20251021171339063F26685D8E74098461&ply_type=2&policy=2&signature=6bc830d4c7f28f52aa833e53e7e41ab1&tk=tt_chain_token",
    "description": "湖北四渡河特大桥，桥面距离谷底560米#中國 #大陸 #基建狂魔 "
  }
}
```

---

🧠 Use Cases

- Build TikTok analytics dashboards
- Create automation tools for influencer tracking
- Develop TikTok video downloader apps
- Monitor trending hashtags or challenges
- Enrich marketing tools with real-time TikTok data

---

## 🔑 Keywords

TikTok API, TikTok Downloader API, TikTok Data API, RapidAPI TikTok, TikTok Trending API

---

🔗 Explore more on [RapidAPI](https://rapidapi.com/datahubapis1-datahubapis-default/api/tiktok-api45)
