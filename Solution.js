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

//int to roman converted from Java, 6 kyu
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
    while (num !== 0) {
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

//6 kyu
function breakCamelCase(string) {
    return string.replaceAll(/[A-Z]/g, x => " " + x);
}

//6 kyu
function countBits(n) {
    // Program Me
    return n.toString(2).replaceAll('0', "").length;
};


function humanReadable(seconds) {
    return (10 > Math.floor(seconds / 3600) ? "0" + Math.floor(seconds / 3600) : Math.floor(seconds / 3600)) + ":"
        + (10 > Math.floor((seconds % 3600) / 60) ? "0" + Math.floor((seconds % 3600) / 60) : Math.floor((seconds % 3600) / 60)) + ":"
        + (10 > seconds % 60 ? "0" + seconds % 60 : seconds % 60);
}

//4 kyu
function sumIntervals(intervals) {
    if (intervals.length === 0) {
        return 0;
    }
    let sum = 0;
    intervals = intervals.sort(function (a, b) {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });
    let max = intervals[0][1];
    sum += intervals[0][1] - intervals[0][0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][1] > max) {
            sum += intervals[i][0] < max ? intervals[i][1] - max : intervals[i][1] - intervals[i][0];
            max = intervals[i][1];
        }
    }
    return sum;
}

function lastDigit(str1, str2) {
    if (parseInt(str1) == 0 || parseInt(str2) == 0) {
        return parseInt(str1) == 0 ? 0 : 1;
    }
    let pow = 0;
    let x = parseInt(str1.charAt(str1.length - 1));
    for (let i = 0; i < str2.length; i++) {
        pow = (pow * 10 + parseInt(str2[i])) % 4;
    }
    let cycle2 = [6, 2, 4, 8];
    let cycle3 = [1, 3, 9, 7];
    let cycle4 = [6, 4, 6, 4];
    let cycle7 = [1, 7, 9, 3];
    let cycle8 = [6, 8, 4, 2];
    let cycle9 = [1, 9, 1, 9];
    switch (x) {
        case 1 :
            return 1;
        case 2 :
            return cycle2[pow];
        case 3 :
            return cycle3[pow];
        case 4 :
            return cycle4[pow];
        case 5 :
            return 5;
        case 6 :
            return 6;
        case 7 :
            return cycle7[pow];
        case 8 :
            return cycle8[pow];
        case 9 :
            return cycle9[pow];
        default :
            return 0;
    }
    return 0; // fix me
}

/*  Literally ineffective
function slideMax (pyramid, id){

    if (pyramid.length > 1) {
        if (id == 0) {
            return pyramid.pop()[0] + slideMax(pyramid,0);
        } else {
            val + id == pyramid.pop().length-1 ? slideMax(pyramid, id-1) : Math.max(slideMax(pyramid, id), slideMax(pyramid, id-1));
        }
    } else return pyramid[0][0];
}
function longestSlideDown (pyramid) {
    let row = pyramid.pop;
    Math.max(...row.map(mapping));
    function mapping(val, id){
        return val + id == row.length-1 ? slideMax(pyramid, id-1) :
            id == 0 ? slideMax(pyramid, id) : Math.max(slideMax(pyramid, id), slideMax(pyramid, id-1));
    }
}
*/

//4 kyu
function longestSlideDown (pyramid) {
    let maxSoFar = [];
    maxSoFar.push(pyramid[0]);
    for (let i = 1; i < pyramid.length; i++) {
        let row = [];
        row.push(pyramid[i][0]+maxSoFar[i-1][0]);
        for (let j = 1; j < pyramid[i].length-1; j++) {
            row.push(pyramid[i][j]+Math.max(maxSoFar[i-1][j],maxSoFar[i-1][j-1]));
        }
        row.push(pyramid[i][pyramid[i].length-1] + maxSoFar[i-1][maxSoFar[i-1].length-1]);
        maxSoFar.push(row);
    }
    return Math.max(...maxSoFar[maxSoFar.length-1]);
}
