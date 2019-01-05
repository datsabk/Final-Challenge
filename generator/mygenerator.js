Mygenerator = function(){
    let state = [];

    this.factorialSeq = () => {
        var factState = state["factorial"];
        var lastNum = state["lastFactNum"];
        if(lastNum!=undefined){
            factState = factState*(++lastNum);
        }else{
            factState = 1;
            lastNum = 0;
        }
        state["factorial"] = factState;
        state["lastFactNum"] = lastNum;
        return factState;    
    } // 1, 1, 2, 6, 24, ...
    this.fibonacciSeq = () => {
        var fibonacciState = [0, 1];
        if (state["fibonacci"] != undefined) {
            fibonacciState = state["fibonacci"];
        }
        var nextNumber = fibonacciState[0] + fibonacciState[1];
        var nextState = [0, 1];
        nextState[0] = fibonacciState[1];
        nextState[1] = nextNumber;
        state["fibonacci"] = nextState;
        return fibonacciState[1];

    } // 1,	1, 2, 3, 5, 8, 13, ... 
    this.rangeSeq = (start, step) => {
        if (state["rangestart"] != undefined) {
            start = parseInt(state["rangestart"]);
            console.log('Starting at:'+start+" to step "+step);
            state["rangestart"] = start + step;
        } else {
            state["rangestart"] = start;
        }
        return state["rangestart"];
    } // rangeSeq(1, 2) -> 1, 3, 5, 7, ...
    this.primeSeq = () => {
        var lastPrime = state["lastPrime"];
        if(lastPrime == undefined){
            state["lastPrime"]=2;
            return 2;
        }else if(lastPrime == 2){
            state["lastPrime"] = 3;
            return 3;
        }else if(lastPrime == 3){
            state["lastPrime"] = 5;
            return 5;
        }else if(lastPrime == 5){
            state["lastPrime"] = 7;
            return 7;
        }else{
            var numToAdd = state["nextToAdd"];
            if(numToAdd == undefined)
                numToAdd = 4;
            
            var isPrime = false;
            do{
                lastPrime +=numToAdd;
                numToAdd = numToAdd==4?2:4;
                state["nextToAdd"] = numToAdd;
                isPrime = checkIsPrime(lastPrime);
            }while(!isPrime)
            state["lastPrime"] = lastPrime;
            return lastPrime;
        }
    } // 2,	3, 5, 7, 11, 13, ...
    this.partialSumSeq = function(numbers){
        var lastSum = state["lastSumSeq"] != undefined ? state["lastSumSeq"] : 0;
        var nextNum = state["nextNumIndex"] != undefined ? state["nextNumIndex"] : 0;
        lastSum += parseInt(numbers[nextNum]);
        nextNum++;
        state["nextNumIndex"] = nextNum;
        state["lastSumSeq"] = lastSum;
        return lastSum;
    } // 1, 4, 11, 13, 13, end
    function checkIsPrime(number){
        for(var i=2;i<number/2;i++){
            if(number%i==0){
                return false;
            }
        }
        return true;
    }
}
module.exports = Mygenerator;