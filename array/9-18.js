// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
// 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分



function isEvenNum(num){
    return num % 2 === 0
}

function bar(arr) {
    let evenArr = [];
    let oddArr = [];

    arr.forEach(i => {
        isEvenNum(i) 
            ? evenArr.push(i)
            : oddArr.push(i)
    });

    return oddArr.concat(evenArr)
}