// 7 kyu Is this a triangle?
function isTriangle(a, b, c) {
    return (a + b > c && a + c > b && b + c > a);
}

//6 kyu
function towerBuilder(nFloors) {
    // build here
    let res = [];
    for (let i = 1; i <= nFloors; i++) {
        let tmp = "";

        for (let j = 0; j < nFloors - i; j++) {
            tmp += " ";
        }
        for (let j = 0; j < 2 * (i - 1) + 1; j++) {
            tmp += "*";
        }
        for (let j = 0; j < nFloors - i; j++) {
            tmp += " ";
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
    if (Math.abs(num) < 2) {
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
function isPangram(string) {
    if (string.length < 26) {
        return false;
    }
    let alphabet = [];
    string = string.toLowerCase().replaceAll(/[^a-z]/g, "").split("");
    while (alphabet.length < 26 && string.length !== 0) {
        if (alphabet.indexOf(string[0]) === -1) {
            alphabet.push(string.shift());
            console.log(typeof string[0]);
            console.log(typeof alphabet[0]);
        } else {
            string.shift();
        }
    }
    return alphabet.length === 26;
}

//queue simulator (The Supermarket Queue, 6 kyu)
function queueTime(customers, n) {
    if (customers.length === 0) {
        return 0;
    }
    let time = 0;
    let check = [];
    //fill all checkouts
    while (customers.length > 0 && check.length < n) {
        check.push(customers.shift());
    }
    while (customers.length !== 0) {
        for (let i = 0; i < n; i++) {
            check[i]--;
            if (check[i] === 0 && customers.length !== 0) {
                check[i] += customers.shift();
            }
        }
        time++;
    }
    return time + check.reduce((a, b) => Math.max(a, b), -Infinity);
}

function inttorom(num) {
    let volc = new Map;
    volc.set(0, "");
    volc.set(1, "I");
    volc.set(5, "V");
    volc.set(10, "X");
    volc.set(50, "L");
    volc.set(100, "C");
    volc.set(500, "D");
    volc.set(1000, "M");
    let order = 1000;
    let romnum = "";
    while (num != 0) {
        //handles numbers that satisfy the condition x % (5 * 10^n) = 4 * 10^n + eps, eps<10^n. It adds 10^n
        //to input number to write numbers like 900 or 40
        if (num % (5 * order) >= 4 * order) {
            romnum += volc.get(order);
            num += order;
        }
        romnum += volc.get(5 * order * Math.floor(num / (5 * order)));
        num -= 5 * order * Math.floor(num / (5 * order));
        //writes either 5*10^n or 10*10^n and subtracts numbers accordingly
        //num %=order;
        //counts and writes numerals that can be written as 10^n, where n - positive int
        for (let i = 0; i < Math.floor(num / order); i++) {
            romnum += volc.get(order);
        }
        num %= order;
        order /= 10;
    }
    return romnum;
}

let i = inttorom(1213);