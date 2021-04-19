import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ListBooks from "./components/ListBooks";

function App() {
  if (window.localStorage.getItem("books") == null) {
    window.localStorage.setItem("books", JSON.stringify([]));
  }
  const [books, setBooks] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    setBooks(JSON.parse(window.localStorage.getItem("books")));
  }, []);
  return (
    <div>
      <h1 className="text-center mt-5">Add Book</h1>
      <Form books={books} setBooks={setBooks} isDeleted={isDeleted} />
      <ListBooks
        books={books}
        setBooks={setBooks}
        setIsDeleted={setIsDeleted}
      />
    </div>
  );
}

export default App;
