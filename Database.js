import Realm from 'realm';

// Declare Book Schema
const BookSchema = {
  name: 'Book',
  properties: {
    title: 'string',
    pages: 'int',
    edition: 'int?',
    author: 'Author?',
  },
};

// Author schema
const AuthorSchema = {
  name: 'Author',
  primaryKey: 'id',
  properties: {
    id: 'int',
    firstName: 'string',
    lastName: 'string',
  },
};

// Create realm
const realm = new Realm({
  schema: [BookSchema, AuthorSchema],
  path: 'book.realm',
  schemaVersion: 4,
});

// Functions
// Return all books
const getAllBooks = () => {
  return realm.objects('Book');
};

// Add a single book using parameters
const addBook = (_title, _pages, _edition = null, _author) => {
  realm.write(() => {
    const Yo = realm.create('Book', {
      title: _title,
      pages: _pages,
      edition: _edition,
      author: _author,
    });
  });
};

// Remove all books from Realm database
const deleteAllBooks = () => {
  realm.write(() => {
    realm.delete(getAllBooks());
  });
};

// Update all books that have a null value as edition and update it to 1
const updateAllBookEditions = () => {
  realm.write(() => {
    const books = getAllBooks();
    books.map((item, index) => {
      if (item.edition === null) {
        item.edition = 1;
      }
    });
  });
};

// Get all books with more than 400 pages using .filtered()
const getBigBooks = () => {
  return realm.objects('Book').filtered('pages > 400');
};

// Get all authors
const getAllAuthors = () => {
  return realm.objects('Author');
};

// Add a single author using parameters (With a auto increment ID. Read the Tips chapter in the blog post)
const addAuthor = (_firstName, _lastName) => {
  realm.write(() => {
    const book = realm.create('Author', {
      id: realm.objects('Author').max('id') + 1,
      firstName: _firstName,
      lastName: _lastName,
    });
  });
};

// Remove all authors from Realm database
const deleteAllAuthors = () => {
  realm.write(() => {
    realm.delete(getAllAuthors());
  });
};

// Get author by index in the array
const getAuthorById = (_id) => {
  return realm.objects('Author').filtered(`id = ${_id}`);
};

const closeRealm = () => {
  realm.close();
};
// Exports
// Export the realm so other files can access it
export default realm;

// Export other functions so other files can access it
export {
  getAllBooks,
  addBook,
  deleteAllBooks,
  updateAllBookEditions,
  getBigBooks,
  getAllAuthors,
  closeRealm,
  addAuthor,
  getAuthorById,
};
