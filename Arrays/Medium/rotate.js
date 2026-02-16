// 🟡 Medium 3️⃣ – Rotate array by K steps (right rotation)
let arr = [1, 2, 3, 4, 5]
let k = 2           // 👉 Output:      [4, 5, 1, 2, 3]

let arr1 = []
// ------ reverse the whole array -------
for(let i= arr.length-1; i>=0; i--){
    // console.log(arr[i])
    arr1.push(arr[i])
   
}
console.log(arr1)

// ------ swap the element 1, 2, 3 ------
for(let i=2; i<arr1.length-1; i++){
    // console.log(arr1[i], "i value")
    for(j=i+1; j<arr1.length; j++){
        // console.log(arr1[j], "j value")
        if(arr1[i] >= arr1[j]){
            let temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp
        }
    }
}
console.log(arr1)


// ------- swap the first and second element only  ----------
if(arr1[0] >= arr1[1]){
    let temp1 = arr1[0]
    arr1[0] = arr1[1]
    arr1[1] = temp1
}

// final answer with it we got
console.log(arr1)


