Generator = function(genFunction){
    let generatorFn = genFunction; 
    this.next = ()=>{
        return generatorFn();
    }
}

module.exports = Generator