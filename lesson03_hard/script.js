let num = 266219,
    sNum = num.toString(),
    numArr = [];

for (let i=0; i<sNum.length; i++) {
    numArr.push(sNum[i]);
}

for (let i=0; i<numArr.length; i++) {
    numArr[i] = +numArr[i]
}

let result = eval(numArr.join('*'))

console.log(result);

result = result ** 3;
result = result.toString();

console.log(result.substr(0, 2));
