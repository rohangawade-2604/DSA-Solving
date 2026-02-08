// 6️⃣ Check if an element exists in an array

let arr = [10, 20, 30]  //Search: 20 → Found

let found = false
let output = 20;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === output){
        console.log("true")
        found = arr[i]
        break
    }
}

if(found){
    console.log("array exist")
}
else{
    console.log("array doesnt exist")
}

  

