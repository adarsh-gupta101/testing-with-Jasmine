const Book = require('../../models/Book');
const Review = require('../../models/Review');

describe('Book', () => {
  let book;

  beforeEach(() => {
    book = new Book(
      '123',
      'The Test Book',
      'Test Author',
      '1234567890123',
      '2024-01-01'
    );
  });

  describe('addReview', () => {
    it('should add a review and update rating', () => {
      const review = new Review('user1', book.id, 4, 'Great book!');
      book.addReview(review);
      
      expect(book.reviews.length).toBe(1);
      expect(book.rating).toBe(4);
    });

    it('should calculate average rating correctly', () => {
      book.addReview(new Review('user1', book.id, 5, 'Excellent!'));
      book.addReview(new Review('user2', book.id, 3, 'Good'));
      
      expect(book.rating).toBe(4);
    });
  });

  describe('updateInventory', () => {
    it('should update inventory correctly', () => {
      expect(book.updateInventory(5)).toBe(5);
      expect(book.updateInventory(-2)).toBe(3);
    });

    it('should throw error for insufficient inventory', () => {
      expect(() => book.updateInventory(-1)).toThrowError('Insufficient inventory');
    });
  });
});


