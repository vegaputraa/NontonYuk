class DataSource {
  static searchClub(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=555c38927cbfc7665dead6206d7dc89a&query=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
