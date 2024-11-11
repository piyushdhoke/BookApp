import React from 'react';
import BookCard from './BookCard';

function BookmarksPage({ bookmarks, onRemoveBookmark }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">My Bookmarks</h2>
      {bookmarks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bookmarks.map((book) => (
            <div key={book.key} className="relative">
              <BookCard book={book} />
              <button
                onClick={() => onRemoveBookmark(book.key)}
                className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No bookmarks yet</p>
      )}
    </div>
  );
}

export default BookmarksPage;
