// 🟡 Medium 1️⃣ – Move all zeros to the end

// (LeetCode classic)

let arr = [0, 1, 0, 3, 12]              // 👉 Output: [1, 3, 12, 0, 0]

let num = 0;

let arr1 = []

for(let i=0; i<arr.length-1; i++){
    for(j=i+1; j<arr.length; j++){

        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
        }
    }

    if(arr[i] !== num){
        arr1.push(arr[i])
        
    }
}

// console.log(arr)
console.log(arr1)

