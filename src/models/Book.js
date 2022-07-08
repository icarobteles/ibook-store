import { randomUUID } from "crypto"
export class Book {

    constructor(title, author, genre, price, promotionalPrice, rating, image, synopsis){
        this._title = title,
        this._author = author,
        this._genre = genre,
        this._price = price,
        this._promotionalPrice = promotionalPrice,
        this._rating = rating,
        this._image = image,
        this._synopsis = synopsis,

        this._id = randomUUID()
    }

    //GETTERS

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get genre() {
        return this._genre;
    }

    get price() {
        return this._price;
    }

    get promotionalPrice() {
        return this._promotionalPrice;
    }

    get rating() {
        return this._rating;
    }

    get image() {
        return this._image;
    }

    get synopsis() {
        return this._synopsis;
    }

    get id(){
        return this._id;
    }

    // SETTERS 
    
    set title(newTitle) {
        this._title = newTitle;
    }

    set author(newAuthor) {
        this._author = newAuthor;
    }

    set genre(newGenre) {
        this._genre = newGenre;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    set promotionalPrice(newPromotionalPrice) {
        this._promotionalPrice = newPromotionalPrice;
    }

    set rating(newRating) {
        this._rating = newRating;
    }

    set image(newImage) {
        this._image = newImage;
    }

    set synopsis(newSynopsis) {
        this._synopsis = newSynopsis;
    }

}