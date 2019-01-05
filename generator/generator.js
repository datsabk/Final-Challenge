class Generator { 
    constructor(genFunction,arg1,arg2){
        this.args = [];
        this.generatorFn = genFunction; 
        if(arg1!=undefined){
            this.args[0]= arg1;
            if(arg2!=undefined){
                this.args[1] = arg2;
            }
        }
    }
    next(){
        return this.generatorFn.apply(null,this.args);
    }
}
module.exports = Generator