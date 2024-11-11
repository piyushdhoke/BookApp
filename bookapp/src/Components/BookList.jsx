import React from 'react';
import BookCard from './BookCard';

function BookList({ books, onBookmark }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.length > 0 ? (
        books.map((book) => (
          <BookCard key={book.key} book={book} onBookmark={onBookmark} />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-600">No results found</p>
      )}
    </div>
  );
}

export default BookList;
