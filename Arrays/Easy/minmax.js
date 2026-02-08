let arr = [10, 20, 30, 40]

let arr1 = []

let maximum = arr[0]

for(let i=1; i< arr.length; i++){
    
    if(arr[i] > maximum){               // create the same logic for minimum number arr[i] < minimum and the answer will get in it
       maximum = arr[i]
    }
}

arr1.push(maximum)

console.log( "maximum number is ",arr1 )