export const app_logo = require("../assets/images/Netflix_Logo_PMS.png");

export const login_bg_image = require('../assets/images/background_image.jpg');

export const like_btn_img = require("../assets/images/like.png")
export const dilike_btn_img = require("../assets/images/dislike_img.png")
export const star_img = require("../assets/images/star.png")
export const add_btn = require("../assets/images/add_btn.png")
export const remove_btn = require("../assets/images/remove.png")
export const left_arrow = require("../assets/images/left_arrow_img_white.png")
export const play_btn = require("../assets/images/play_button_img.png")
export const hamburger_icon = require("../assets/images/hamburger_icon.png")

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const languagesArray = [
    {
      identifier : "en",
      name : "English",
    },
    {
      identifier : "hindi",
      name : "Hindi",
    },
    {
      identifier : "marathi",
      name : "Marathi",
    }
  ];

export const OPENAI_KEY =  process.env.REACT_APP_OPENAI_KEY

export const langaugeWiseMovies = {
  hindi : "hi",
  kanada : "kn",
  malyalam : "ml",
  tamil : "ta"
}

export const TMDB_API_CONFIG = {
  headers: { 
    accept: 'application/json',
    'content-type': 'application/json', 
    Authorization : `Bearer ${process.env.REACT_APP_TMDB_KEY}`
  },
}
