const Book = require('../models/Book');
const Review = require('../models/Review');

class BookService {
    constructor() {
      this.books = new Map();
    }
  
    addBook(bookData) {
      if (!this.isValidISBN(bookData.isbn)) {
        throw new Error('Invalid ISBN format');
      }
      
      if (this.books.has(bookData.isbn)) {
        throw new Error('Book with this ISBN already exists');
      }
  
      const book = new Book(
        this.generateId(),
        bookData.title,
        bookData.author,
        bookData.isbn,
        bookData.publishDate
      );
      
      this.books.set(book.isbn, book);
      return book;
    }
  
    getBook(isbn) {
      const book = this.books.get(isbn);
      if (!book) {
        throw new Error('Book not found');
      }
      return book;
    }
  
    addReview(isbn, userId, rating, comment) {
      const book = this.getBook(isbn);
      const review = new Review(userId, isbn, rating, comment);
      book.addReview(review);
      return review;
    }
  
    updateInventory(isbn, quantity) {
      const book = this.getBook(isbn);
      return book.updateInventory(quantity);
    }
  
    searchBooks(query) {
      const results = [];
      for (const book of this.books.values()) {
        if (
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
        ) {
          results.push(book);
        }
      }
      return results;
    }
  
    getRecommendations(isbn) {
      const book = this.getBook(isbn);
      const recommendations = [];
      
      for (const otherBook of this.books.values()) {
        if (
          otherBook.isbn !== isbn &&
          otherBook.author === book.author &&
          otherBook.rating >= 4
        ) {
          recommendations.push(otherBook);
        }
      }
      
      return recommendations.sort((a, b) => b.rating - a.rating).slice(0, 5);
    }
  
    isValidISBN(isbn) {
      return /^\d{13}$/.test(isbn);
    }
  
    generateId() {
      return Math.random().toString(36).substr(2, 9);
    }
  }

  module.exports = BookService;