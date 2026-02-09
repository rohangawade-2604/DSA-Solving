// 🟡 Medium 2️⃣ – Find second largest element

let arr = [10, 20, 30, 40]  

// 👉 Output: 30

let biggest = 10;

let second = 0;

for(let i = 0; i<arr.length; i++){
    if(arr[i] > biggest){
         second = biggest
        biggest = arr[i];
    }
   else if(arr[i] > second && arr[i] < biggest){     //else if part is chatgpt , just for specifications nothing else , it can run the code without the else if
        second = arr[i]
   }
}

console.log(second, "is the second largest number in an array")
// console.log(biggest)

