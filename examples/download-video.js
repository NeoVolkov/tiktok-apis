import axios from "axios";

const RAPID_API_KEY = "";

// get yours rapidapi key from https://rapidapi.com/datahubapis1-datahubapis-default/api/tiktok-api45

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://tiktok-api45.p.rapidapi.com/api/v1/download/video?url=https%3A%2F%2Fwww.tiktok.com%2F%40zg.520%2Fvideo%2F7556699581464038664",
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
//     "link": "https://v19-webapp-prime.us.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/ogULeIClQEjomKIzYeLZeIZhRklydGlgvgIAAD/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=2262&bt=1131&cs=0&ds=6&ft=4KJMyMZj8Zmo0-6bMI4jVo6eQpWrKsd.&mime_type=video_mp4&qs=0&rc=NGczODlmNjM7NDY4N2U7M0Bpam80OGw5cnBmNjMzODczNEAvMDY2LTZhXy8xMjQwMl4yYSM0Zm9vMmRjZmNhLS1kMTFzcw%3D%3D&btag=e00088000&expire=1761239650&l=20251021171339063F26685D8E74098461&ply_type=2&policy=2&signature=6bc830d4c7f28f52aa833e53e7e41ab1&tk=tt_chain_token",
//     "description": "湖北四渡河特大桥，桥面距离谷底560米#中國 #大陸 #基建狂魔 "
//   }
// }
