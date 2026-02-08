let arr = [ 1,2,3,4,5 ]; //-> 2 even and 3 odd

let evennum = 0;
let oddnum = 0;

for(let i=0; i< arr.length; i++){
    if(arr[i] % 2 === 0){
        evennum++
    }
    else{
        oddnum++
    }
}

console.log("even number from the array is ", evennum)
console.log("odd number from the array is ", oddnum)
