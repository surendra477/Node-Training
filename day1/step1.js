// var user = 'vijay'
// console.log(user);

// console.log(user === 'vijay');
require("./step3-globals");
// module.exports.user = user;
//exporting 
//module.exports.uname = user;

var heroname = "batman"
var herocity = "gotham"
console.log(global.company);
//module.exports = {herocity,heroname};
module.exports.fullname = function(){
    return heroname + " "+ herocity
}
