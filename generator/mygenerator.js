let state= [];

function factorialSeq () {
    var factState = state["factorial"];
    var newState = 1;
    if(factState!=undefined){
        newState = parseInt(factState)+1;
    }else{
        factState = 1;
    }
    state["factorial"] = newState;
    return parseInt(newState)*parseInt(factState);
} // 1, 1, 2, 6, 24, ...
function fibonacciSeq () {
    var fibonacciState = [0,1];
    if(state["fibonacci"]!=undefined){
        fibonacciState = state["fibonacci"];
    }
    var nextNumber = fibonacciState[0]+fibonacciState[1];
    var nextState = [0,1];
    nextState[0] = fibonacciState[1];
    nextState[1] = nextNumber;
    state["fibonacci"]= nextState;
    return fibonacciState[1];
    
} // 1,	1, 2, 3, 5, 8, 13, ... 
function rangeSeq (start, step) {
    if(state["rangestart"]!=undefined){
        start = parseInt(state["rangestart"]);
        state["rangestart"] = start + step;
    }else{
        state["rangestart"] = start;
    }
    return state["rangestart"];
} // rangeSeq(1, 2) -> 1, 3, 5, 7, ...
function primeSeq () {

} // 2,	3, 5, 7, 11, 13, ...
function partialSumSeq (numbers) {
    var lastSum = state["lastSumSeq"]!=undefined?state["lastSumSeq"]:0;
    var nextNum = state["nextNumIndex"]!=undefined?state["nextNum"]:0;
    lastSum += numbers[nextNum];
    nextNum++;
    state["nextNumIndex"]= nextNum;
    return lastSum;
} // 1, 4, 11, 13, 13, end

module.exports = {factorialSeq, fibonacciSeq, rangeSeq, primeSeq,partialSumSeq}