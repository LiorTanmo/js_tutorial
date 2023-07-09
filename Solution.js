// 7 kyu Is this a triangle?
function isTriangle(a,b,c)
{
    return (a + b > c && a + c > b && b+c > a) ? true : false;
}

//6 kyu
function towerBuilder(nFloors) {
    // build here
    let res = [];
    for (let i = 1; i <= nFloors; i++){
        let tmp = "";

        for (let j = 0; j < nFloors-i; j++){
            tmp+=" ";
        }
        for (let j = 0; j < 2*(i-1)+1; j++){
            tmp+="*";
        }
        for (let j = 0; j < nFloors-i; j++){
            tmp+=" ";
        }
        res.push(tmp);
    }
    return res;
}

//7 kyu
function isPalindrome(x) {
    // your code here
    return x.toUpperCase() == [...x.toUpperCase()].reverse().join("") ? true : false;
}

//6 kyu
function arrayDiff(a, b) {
    return a.filter(fv => b.indexOf(fv) === -1);
}


let a = [1,2];
let b = [1];
console.log(arrayDiff(a,b))