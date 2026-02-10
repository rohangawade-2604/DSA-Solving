// 🟡 Medium 4️⃣ – Check if array is sorted (ascending)
 let arr = [2, 10, 13, 15] 
//  👉 Output: Sorted let arr = [3, 5, 2, 8] 
//  👉 Output: Not Sorted

let sorted = true

for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length; j++){
        
        if(arr[i] >= arr[j]){
            // console.log(arr[i], "is sorted array" )
            sorted = false
            break
        }
    }
  
}

if(sorted){
    console.log(arr,"is sorted")
}
else{
    console.log(arr,"is not sorted")
}