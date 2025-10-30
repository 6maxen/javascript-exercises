

const sumAll = function(startNum, endNum) {
    let result = 0
    if (startNum > endNum) {
        let temp = startNum;
        startNum = endNum;
        endNum = temp;
    }
    if (Number.isInteger(startNum) && Number.isInteger(endNum) && startNum > 0 && endNum > 0) {

        for (num=startNum; num <= endNum; num++) {
            result += num;
        }
        return result
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
