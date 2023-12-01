import axios from "axios";
import { useState } from "react";

const generateRandomAlias = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  while (result.length < 8) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

function useShortURL() {
  const [shortenedURLs, setShortenedURLs] = useState({});
  const shortenUrl = async (inputUrl) => {
    if (shortenedURLs[inputUrl]) {
      return shortenedURLs[inputUrl];
    }

    const options = {
      method: "POST",
      url: "https://url-shortener23.p.rapidapi.com/shorten",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "url-shortener23.p.rapidapi.com",
      },
      data: {
        url: inputUrl,
        alias: generateRandomAlias(),
      },
    };

    try {
      const response = await axios.request(options);
      setShortenedURLs({
        [inputUrl]: response.data.short_url,
        ...shortenedURLs,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  return [shortenedURLs, shortenUrl];
}

export default useShortURL;
