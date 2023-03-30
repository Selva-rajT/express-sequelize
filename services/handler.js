const {ReS,ReE} = require('../global_functions');

const handleErr=(err,value,res)=>{
    // console.log('employee data',value);
    if(err) return ReE(res,err,422);
    if(value) return ReS(res,value,200);
}

module.exports=handleErr;