export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png";
// https://occ-0-386-2430.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTRIX4TzkcCo0x0kZeKp8-E8pte_pi6_bkr_OJur1z9c9q6Ina-LUlxvuwD90D6x9ahjopjPm_zu1a77irxY4MO6Yn-agZzdOgRo.png

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
  };
  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/53529d7d-a14c-4416-8478-fd7d29361c0d/US-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg";

  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
  ];

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;