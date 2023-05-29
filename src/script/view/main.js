import { async } from "regenerator-runtime";
import "../component/movie-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieListElement = document.querySelector("movie-list");

  const baseUrl = "https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=555c38927cbfc7665dead6206d7dc89a";

  const getMovie = async () => {
    try {
      const response = await fetch(`${baseUrl}`);
      const responseJson = await response.json();

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderResult(responseJson.results);
      }
    } catch (error) {
      fallbackResult(error);
    }
  };

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

  document.addEventListener("DOMContentLoaded", async () => {
    getMovie();
  });
};

export default main;
