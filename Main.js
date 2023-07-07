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

