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
let t = "123456asdasdasd";
 console.log(maskify(t));