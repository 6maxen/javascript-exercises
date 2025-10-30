const fibonacci = function(num) {
    let fiboSeq = [1, 1]
    if (num == 0) { return 0 }
    if (num < 0) { return 'OOPS' }
    for (let i=2; i < num; i++) {
        let newNum = fiboSeq[fiboSeq.length-1] + fiboSeq[fiboSeq.length-2];
        fiboSeq.push(newNum);
    }
    return fiboSeq[fiboSeq.length-1]

    };

// Do not edit below this line
module.exports = fibonacci;
