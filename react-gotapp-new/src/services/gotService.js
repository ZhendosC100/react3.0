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

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllBooks = async () => {
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

    _itemId = (item) => {
        const idres = item.url.match(/\d+/)[0];
        return  idres;
    }

    _transformCharacter = (char) => { 
        return {
          name: char.name || "no data..",
          gender: char.gender || "no data..",
          born: char.born || "no data..",
          died: char.died || "no data..",
          culture: char.culture || "no data..",
          url: char.url || "no data..",
          id: this._itemId(char)
        }
    }

    _transformHouse = (house) => {
      return {
        name: house.name || "no data..((",
        region: house.region || "no data..((",
        words: house.words || "no data..((",
        titles: house.titles || "no data..((",
        overlord: house.overlord || "no data..((",
        ancestralWeapons: house.ancestralWeapons || "no data..((",
        id: this._itemId(house)
      }
    }

    _transformBook = (book) => {
      return {
        name: book.name || "no data..",
        numberOfPages: book.numberOfPages || "no data..",
        publisher: book.publisher || "no data..",
        released: book.released || "no data..",
        authors: book.authors || "no data..",
        id: this._itemId(book)
      }
    }
}
