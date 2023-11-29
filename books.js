function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let returned = [];

  books.forEach((book) => {
    let borrowsArr = book.borrows;
    if (borrowsArr[0].returned === false) {
      checkedOut.push(book);
    } else {
      returned.push(book);
    }
  });
  return [checkedOut, returned];
}

function getBorrowersForBook(book, accounts) {
  let borrowedArr = book.borrows;

    return borrowedArr.map((borrow) => {
      const account = accounts.find((account) => borrow.id === account.id);
        account.returned = borrow.returned;
        return account;
    }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
