// const EventEmitter = require('events')
// let event = new EventEmitter();
// let count = 0;
// event.addListener("custEvent",function(){
//     console.log("custom happened")
// })

// let si = setInterval(function(){
//    if(count <5){
//        count++
//      event.emit("custEvent");
//    }else{
//     clearInterval(si)
//    }
// },5000)

const EventEmitter = require("events")
let event = new EventEmitter();

event.on('click',() => console.log("customer logged"))

console.log("some code");

event.emit("click")

