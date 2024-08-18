export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.RECAT_APP_TMCB_KEY,
  },
};

export const image_cdn = "https://image.tmdb.org/t/p/w500/";

export const openAPI = process.env.REACT_APP_OPENAI_KEY;
