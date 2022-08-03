class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = "apikey=4940e9cbf92c4bbc34109f7eaa55c672";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(
      "https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=4940e9cbf92c4bbc34109f7eaa55c672"
    );
  };

  getCharacter = (id) => {
    return this.getResource(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=4940e9cbf92c4bbc34109f7eaa55c672`
    );
  };
}

export default MarvelService;
