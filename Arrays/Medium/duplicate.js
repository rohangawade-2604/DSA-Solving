// 🟡 Medium 5️⃣ – Find duplicate elements

let arr = [1, 2, 3, 2, 4, 1]            // 👉 Output: 1, 2


for(let i = 0; i<arr.length-1; i++){

    for(j=i+1; j<arr.length; j++){

        if(arr[i] === arr[j]){
            // arr[i] = arr[1]
            console.log("print duplicate number", arr[i])
        }
    }
}

