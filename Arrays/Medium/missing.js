// 🟡 Medium 2️⃣ – Find missing number
// (LeetCode 268 – simplified)

let arr = [3, 0, 1]             // 👉 Output: 2

let n = arr.length;

for(let i = 0; i<n-1; i++){
    for(j= i+1; j<n; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
        }
    }
}
console.log(arr, "sorted array")

// for(let i=1; i<=n-1; i++){
//     // console.log(arr[i],"no answer")
//     if(arr[i] - arr[i-1] > 1){
//         console.log(i,"answer is printed")
//     }
// }

// for(let i=0; i<=n-1; i++){
//     // console.log(arr[i],"no answer")
//     console.log(i,"dummy answer")
//     if(arr[i] !== i){
//         console.log(i,"answer is printed")
//         break;
//     }
// }


for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[j] - arr[i] > 1){
            console.log(arr[i])
        }
    }
}
// console.log("helloe")

