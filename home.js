
const getTotalBooksCount = books => books.length;

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0;

  books.forEach((book) => {
    let borrowsArr = book.borrows;
    if (borrowsArr[0].returned === false) {
      count ++;
    }
  })
  return count;
}

//helper function
function sliceArr(outputArr) {
  return outputArr.slice(0, 5);
}

function getMostCommonGenres(books) {
  let genreMap = {};
  
  books.forEach((book) => {
    if (genreMap[book.genre]) {
      //update
      genreMap[book.genre]++;
    } else {
      //initialize
      genreMap[book.genre] = 1;
    }
  });

  let outputArr = Object.entries(genreMap)
  .map(([name, count]) => ({name, count}))
  .sort((genreA, genreB) => genreB.count - genreA.count)

  let finalArr = sliceArr(outputArr);
  return finalArr;
}

function getMostPopularBooks(books) {
  let bookMap = {};

  books.forEach((book) => {
    bookMap[book.title] = book.borrows.length;
  });

  let outputArr = Object.entries(bookMap)
  .map(([name, count]) => ({name, count}))
  .sort((bookA, bookB) => bookB.count - bookA.count)
  
  let finalArr = sliceArr(outputArr);
  return finalArr;
}

function getMostPopularAuthors(books, authors) {
  let booksMap = books.map((book) => {
     const author = authors.find((author) => { 
      return book.authorId === author.id   
    });
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length,
    }
  })
  .sort((bookA, bookB) => bookB.count - bookA.count)
  
  let finalArr = sliceArr(booksMap);
  return finalArr;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
