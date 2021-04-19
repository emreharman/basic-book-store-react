import React from "react";

const ListBooks = ({ books, setBooks, setIsDeleted }) => {
  const handleDelete = (id, name) => {
    const filteredBooks = books.filter((book) => {
      if (book.id != id && book.name != name) {
        return true;
      }
    });
    window.localStorage.clear();
    window.localStorage.setItem("books", JSON.stringify(filteredBooks));
    setBooks(filteredBooks);
    setIsDeleted(true);
    setTimeout(() => {
      setIsDeleted(false);
    }, 1000);
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <table className="table" style={{ width: "50%" }}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            <>
              {books.map((book, index) => (
                <tr key={index}>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td
                    className="text-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(book.id, book.name)}
                  >
                    <i className="fas fa-times"></i>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No books yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListBooks;
