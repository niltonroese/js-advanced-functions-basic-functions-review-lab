// Your code here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun()

let mondayWork = function(action = "go to the office") {
    return `This Monday, I will ${action}.`
}
mondayWork() 

function wrapAdjective(style="*"){
    return function(quality = "special") {
    return `You are ${style}${quality}${style}!`
    }
}

const Calculator = {
    add:function(a,b) {
        return a+b;
    },
    subtract:function(a,b) {
        return a-b;
    },
    multiply:function(a,b) {
        return a*b;
    },
    divide:function(a,b) {
        return a/b;
    },
}

function actionApplyer(start, arr) {
for(let i = 0; i <arr.length; i++) {
    start=arr[i](start);
}
return start
}