export default class GotService {
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}`+
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async (pageId) => {
        const res = await this.getResource(`/characters?page=${pageId}&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllbooks = async () => {
        const resBooks = await this.getResource(`/books/`);
        return resBooks.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    getAllHouses = async () => {
        const resHouse = await this.getResource(`/houses/`);
        return resHouse.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    _transformCharacter = (char) => {
        return {
          name: char.name,
          gender: char.gender,
          born: char.born,
          died: char.died,
          culture: char.culture,
          url: char.url
        }
    }

    _transformHouse = (house) => {
      return {
        name: house.name,
        region: house.region,
        words: house.words,
        titles: house.titles,
        overlord: house.overlord,
        ancestralWeapons: house.ancestralWeapons
      }
    }

    _transformBook = (book) => {
      return {
        name: book.name,
        numberOfPages: book.numberOfPages,
        publiser: book.publiser,
        relesead: book.relesead
      }
    }
}
