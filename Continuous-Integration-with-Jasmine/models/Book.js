class Book {
    constructor(id, title, author, isbn, publishDate) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.publishDate = new Date(publishDate);
      this.reviews = [];
      this.rating = 0;
      this.inventory = 0;
    }
  
    addReview(review) {
      this.reviews.push(review);
      this.updateRating();
    }
  
    updateRating() {
      if (this.reviews.length === 0) return;
      const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
      this.rating = Number((sum / this.reviews.length).toFixed(1));
    }
  
    updateInventory(quantity) {
      if (this.inventory + quantity < 0) {
        throw new Error('Insufficient inventory');
      }
      this.inventory += quantity;
      return this.inventory;
    }
  }

module.exports = Book;