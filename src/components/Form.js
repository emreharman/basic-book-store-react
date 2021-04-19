import React, { useState } from "react";

const Form = ({ books, setBooks, isDeleted }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: books.length + 1,
      name,
      author,
      isbn,
    };
    const newBooks = [...books, book];
    window.localStorage.clear();
    window.localStorage.setItem("books", JSON.stringify(newBooks));
    setBooks(newBooks);
    setIsSubmit(true);
    setName("");
    setAuthor("");
    setIsbn("");
    setTimeout(() => {
      setIsSubmit(false);
    }, 1000);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {isSubmit && (
        <div
          className="alert alert-success"
          role="alert"
          style={{ width: "50%" }}
        >
          Book has been added succesfully.
        </div>
      )}
      {isDeleted && (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ width: "50%" }}
        >
          Book has been deleted.
        </div>
      )}
      <form style={{ width: "50%", marginTop: "2rem" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ISBN</label>
          <input
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
