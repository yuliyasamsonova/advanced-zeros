module.exports = function getZerosCount(number, base) {
    var objFactRepeat = count(fuctorization(base));
    var params = getParams(objFactRepeat);
    var arrOfDigitCounter = getArrOfDigitCounter(params.p,number);

    return countZeros(arrOfDigitCounter,params.q);
};

function countZeros(arrOfDigitCounter,q) {
    var numberOfZeros = [];
    for(i=0;i<arrOfDigitCounter.length;i++){
        numberOfZeros.push(arrOfDigitCounter[i]/q[i]);
    }
    return result = Math.floor(Math.min(...numberOfZeros));
}
//count the same numbers in fuctorization
function count(arrFuctor) {
    return arrFuctor.reduce((a, b) =>Object.assign(a, {[b]: (a[b] || 0) + 1}), {});
}
//fuctorization of base
function fuctorization(base) {
    var arrFuctor =[];
    for (var i=2; i <= base/i; i++){
        while(base %i === 0){
            base = base/i;
            arrFuctor.push(i);
        }
    }
    if(base > 1){
        arrFuctor.push(base);
    }
    return arrFuctor;
};
//return obj with two array (q-amount of the same p,p-numbers)
function getParams(objFactRepeat) {
    var p = [];
    var q = [];
    for (var key in objFactRepeat) {
        q.push(objFactRepeat[key]);
        p.push(+key);

    }
    return({q,p})
}
//count how many times number includes p
function getArrOfDigitCounter(p,number){
    var power = 1;
    var mediateResult = 1;
    var digitCounter = 0;
    var arrOfDigitCounter = [];
    for(i=0;i<p.length;i++){
        digitCounter = 0;
        power = 1;
        mediateResult = 1;
        while (mediateResult > 0) {
            mediateResult = Math.floor(number / Math.pow(p[i], power));
            power++;
            digitCounter += mediateResult;
        }
        if(digitCounter){
            arrOfDigitCounter.push(digitCounter);
        }
    }
    return arrOfDigitCounter;
}
