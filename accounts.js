function findAccountById(accounts, id) {
  const account = accounts.find((account) =>  account.id === id);
  return account;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const id = account.id;

  return books.reduce((count, book) => {
      book.borrows.forEach((borrow) => {
        if (borrow.id === id) {
          count ++;
        }
      });
      return count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const id = account.id;

  return books.filter((book) => {
    return book.borrows.some((borrow) => {
      book.author = authors.find((author) => book.authorId === author.id);
      return borrow.id === id && !borrow.returned;
    });
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
