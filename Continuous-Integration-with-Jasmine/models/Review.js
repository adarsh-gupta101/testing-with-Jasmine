class Review {
    constructor(userId, bookId, rating, comment) {
      if (rating < 1 || rating > 5) {
        throw new Error('Rating must be between 1 and 5');
      }
      this.userId = userId;
      this.bookId = bookId;
      this.rating = rating;
      this.comment = comment;
      this.createdAt = new Date();
    }
  }

    module.exports = Review;