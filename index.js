function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`)
}

function wrapAdjective(flair = "*") {

    return function(x = "special") {
        return(`You are ${flair}${x}${flair}!`)
    }
}

const Calculator = {
    add: function(x,y) {
        return x+y
    },
    subtract: function(x,y) {
        return x-y
    },
    multiply: function(x,y) {
        return x*y
    },
    divide: function(x,y) {
        return x/y
    }
}

function actionApplyer(x, arr) {
    let initial = x
    for(let i=0; i<arr.length; i++) {
        initial = arr[i](initial)
    }

    return initial
}