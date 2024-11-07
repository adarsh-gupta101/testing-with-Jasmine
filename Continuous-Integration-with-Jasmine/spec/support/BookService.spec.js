const BookService = require('../../services/BookService');

describe('BookService', () => {
  let bookService;

  beforeEach(() => {
    bookService = new BookService();
  });

  describe('addBook', () => {
    const validBookData = {
      title: 'Test Book',
      author: 'Test Author',
      isbn: '1234567890123',
      publishDate: '2024-01-01'
    };

    it('should add a valid book', () => {
      const book = bookService.addBook(validBookData);
      expect(book.title).toBe(validBookData.title);
      expect(book.author).toBe(validBookData.author);
    });

    it('should reject invalid ISBN', () => {
      const invalidData = { ...validBookData, isbn: '123' };
      expect(() => bookService.addBook(invalidData)).toThrowError('Invalid ISBN format');
    });

    it('should reject duplicate ISBN', () => {
      bookService.addBook(validBookData);
      expect(() => bookService.addBook(validBookData)).toThrowError('Book with this ISBN already exists');
    });
  });

  describe('searchBooks', () => {
    beforeEach(() => {
      bookService.addBook({
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        isbn: '1234567890123',
        publishDate: '1925-04-10'
      });
      bookService.addBook({
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        isbn: '1234567890124',
        publishDate: '1960-07-11'
      });
    });

    it('should find books by title', () => {
      const results = bookService.searchBooks('gatsby');
      expect(results.length).toBe(1);
      expect(results[0].title).toBe('The Great Gatsby');
    });

    it('should find books by author', () => {
      const results = bookService.searchBooks('Lee');
      expect(results.length).toBe(1);
      expect(results[0].author).toBe('Harper Lee');
    });
  });

  describe('getRecommendations', () => {
    beforeEach(() => {
      const books = [
        {
          title: 'Book 1',
          author: 'Author A',
          isbn: '1234567890123',
          publishDate: '2024-01-01'
        },
        {
          title: 'Book 2',
          author: 'Author A',
          isbn: '1234567890124',
          publishDate: '2024-01-01'
        },
        {
          title: 'Book 3',
          author: 'Author B',
          isbn: '1234567890125',
          publishDate: '2024-01-01'
        }
      ];

      books.forEach(book => {
        const addedBook = bookService.addBook(book);
        if (book.title === 'Book 2') {
          addedBook.addReview({ rating: 5, comment: 'Great!' });
        }
      });
    });

    it('should recommend books by same author with high ratings', () => {
      const recommendations = bookService.getRecommendations('1234567890123');
      expect(recommendations.length).toBe(1);
      expect(recommendations[0].title).toBe('Book 2');
    });
  });
});
