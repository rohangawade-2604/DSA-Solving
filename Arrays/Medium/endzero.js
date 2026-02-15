// 🟡 Medium 1️⃣ – Move all zeros to the end

// (LeetCode classic)

let arr = [0, 1, 0, 3, 12]              // 👉 Output: [1, 3, 12, 0, 0]

let num = 0;

let arr1 = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
        arr1.push(arr[i])
    }

}
    let ans = arr.length - arr1.length;
    console.log(ans)

    for(let i=0; i<ans; i++){
        arr1.push(0)
    }

console.log(arr)
console.log(arr1)

