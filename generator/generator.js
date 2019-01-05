Generator = function(genFunction){
    let generatorFn = genFunction; 
    this.next = (args)=>{
        if(args==undefined){
            args = [];
        }
        return generatorFn.apply(null,args);
    }
}

module.exports = Generator