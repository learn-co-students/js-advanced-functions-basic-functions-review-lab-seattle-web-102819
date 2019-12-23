
// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(param1="*") {
    return function (param2="special") {
        return `You are ${param1}${param2}${param1}!`
    }
}

// let wrapAdjective = function(style="*") {
//     return function(adjective="special") {
//       return `You are ${style}${adjective}${style}!`
//     }
//   }

const Calculator = {
    add: function(a,b){
    return a+b;
    },

    subtract: function(a,b){
        return a-b;
    },

    multiply: function(a,b){
        return a*b;
    },

    divide: function(a,b){
        return a/b;
    }
}

    function actionApplyer(num,arr) {
        for (let i = 0; i < arr.length; i++){
            num = arr[i](num)
        }
        return num
    }

    // let actionApplyer = function(start, ray) {
    //     let a = start
      
    //     for (let i = 0; i < ray.length; i++ ){
    //       a = ray[i](a)
    //     }
      
    //     return a
    //   }