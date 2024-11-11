import React from 'react';

function BookCard({ book, onBookmark }) {
  const { title, author_name, cover_i, publish_year,publish_place, key } = book;
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center relative">
      <img src={coverUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-semibold text-center">{title}</h2>
      <p className="text-gray-600 text-center">{author_name?.[0]}</p>
      <p className="text-gray-600 text-center">{publish_year?.[0]}</p>
      <p className="text-gray-600 text-center">{publish_place?.[0]}</p>
      <button
        onClick={() => onBookmark(book)}
        className="absolute top-2 right-2 text-blue-500 hover:text-blue-600 "
        title="Bookmark"
      >
        <span className="material-icons font-size: 64px" >bookmark</span>
      </button>
    </div>
  );
}

export default BookCard;
