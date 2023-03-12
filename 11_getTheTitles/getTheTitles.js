const getTheTitles = function(objarray) {
    bookTitles = objarray.map(function(book){
        return book.title
    })
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
