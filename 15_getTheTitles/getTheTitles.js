const getTheTitles = function(book) {
    // let tempList = []
    // books.forEach((item) => {
    //     tempList.push(item['title']);
    // })
    // return tempList
    return book.map((book) => book.title);

};

// Do not edit below this line
module.exports = getTheTitles;
