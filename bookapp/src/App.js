import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import BookList from './Components/BookList';
import BookmarksPage from './Components/BookMark';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBooks = async (query) => {
    setLoading(true);
    const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
    const data = await response.json();
    setBooks(data.docs);
    setLoading(false);
  };

  const addBookmark = (book) => {
    if (!bookmarks.some((b) => b.key === book.key)) {
      setBookmarks((prev) => [...prev, book]);
    }
  };

  const removeBookmark = (bookKey) => {
    setBookmarks((prev) => prev.filter((book) => book.key !== bookKey));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4 bg-emerald-50">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Book Finder for Alex</h1>
          <Link to="/bookmarks" className="text-blue-600 hover:text-blue-800">
            <span className="material-icons">bookmark</span> Bookmarks
          </Link>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={fetchBooks} />
                {loading ? (
                  <p className="text-center text-gray-600 mt-4">Loading...</p>
                ) : (
                  <BookList books={books} onBookmark={addBookmark} />
                )}
              </>
            }
          />
          <Route
            path="/bookmarks"
            element={<BookmarksPage bookmarks={bookmarks} onRemoveBookmark={removeBookmark} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
