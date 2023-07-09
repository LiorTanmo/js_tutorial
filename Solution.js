// 7 kyu Is this a triangle?
function isTriangle(a,b,c)
{
    return (a + b > c && a + c > b && b+c > a);
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
    return x.toUpperCase() === [...x.toUpperCase()].reverse().join("");
}

//6 kyu
function arrayDiff(a, b) {
    return a.filter(fv => b.indexOf(fv) === -1);
}

//6 kyu
function isPrime(num) {
    if (Math.abs(num) < 2){
        return false;
    }
    let max = Math.sqrt(Math.abs(num));
    for (let i = 2; i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


//6kyu
function isPangram(string){
    if (string.length < 26){
        return false;
    }
    let alphabet = [];
    string = string.toLowerCase().replaceAll(/[^a-z]/g, "").split("");
    while(alphabet.length < 26 && string.length !== 0){
        if (alphabet.indexOf(string[0]) === -1){
            alphabet.push(string.shift());
            console.log(typeof string[0]);
            console.log(typeof alphabet[0]);
        } else {
            string.shift();
        }
    }
    return alphabet.length === 26;
}

