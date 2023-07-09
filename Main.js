//My source code with solutions to CodeWars problems

//Credit Card Mask 7 kyu
function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    }
    let res = "";
    for (let i = 0; i < cc.length-4; i++){
        res+="#";
    }
    for (let i = cc.length-4; i < cc.length;i++){
        res+=cc[i];
    }
    return res;
}


//likes 6 kyu
function likes(names) {
    if (names.length == 0){
        return "no one likes this";
    }
    if (names.length == 1){
        return names[0] + " likes this";
    }
    if (names.length == 2){
        return names[0] + " and "+ names[1] + " like this";
    }
    if (names.length == 3){
        return names[0] + ", " + names[1] + " and " + names[2] +" like this";
    }
    return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
}

/*
t = ["Alex", "Jacob", "Mark", "Max"];
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
*/

function friend(friends){
    let tmp = [];
    for (let i = 0; i < friends.length; i++){
        if (friends[i].length == 4){
            tmp.push(friends[i]);
        }
    }
    return tmp;
}

//Codewars Highest and Lowest 7 kyu solution
function highAndLow(numbers){
    let high = parseInt(numbers);
    numbers = numbers.replace(high.toString(), '').trim();
    let low = high;
    if (numbers.length == 0){
        return high + " " + low;
    }
    while (numbers.length != 0) {
        let tmp = parseInt(numbers);
        numbers = numbers.replace(tmp.toString(), '').trim();
        if (tmp > high){
            high = tmp;
        }else if (tmp < low){
            low = tmp;
        }
    }
    return high + " " + low;
}


// fcc problem function
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// fcc problem test
function updateRecords(records, id, prop, value) {
    if (value == "") {
        delete records[id][prop];
        return records;
    }
    if (prop != "tracks") {
        records[id][prop] = value;
        return records;
    }
    if (!(records[id].hasOwnProperty("tracks"))){
        records[id].tracks = [];
    }
    records[id][prop].push(value);
    return records;
}
/*
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
console.log('lol');
*/

//fcc problem test
function countdown(n){
    if (n < 1){
        return []
    }
    let tmp = countdown(n-1);
    tmp.unshift(n);
    return tmp;
}

//"Convert string to camel case" 6 kyu solution
function toCamelCase(str){
    return str.replace(/-\w|_\w/gi, function (x) {
        return x.charAt(1).toUpperCase();
    });
}

//example of "very clear solution"

function uniqueInOrder(iterable){
    return typeof iterable[0] == "string" ?
        iterable.toString().replaceAll(",", "").replaceAll(/(.)\1+/g, function (x){return x.charAt(0);}).split("")
       : iterable.toString().replaceAll(",", "").replaceAll(/(.)\1+/g, function (x){return x.charAt(0);}).split("").map(Number);
}



