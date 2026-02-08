// 7️⃣ Find the index of a given element (manually)


let arr = [10, 20, 30]   // Element: 30 → Index 2

let num = 50;
let found = false

for(let i=0; i<arr.length; i++){
    if(num === arr[i]){
        console.log( "array of length is ", i)
        found = true
        console.log(found)
        break
    }
}

if(found){
    console.log("founded value")
}
else{
    console.log("not founded value")
}