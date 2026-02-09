// Medium 4️⃣ – Sort an array in ascending order 

let arr = [20 , 10 , 30, 40]

for(i=0; i<arr.length-1; i++){
    console.log(arr[i])
    for(j=i+1; j<arr.length; j++){
        
        if(arr[i] >= arr[j]){
           let temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp
        }
    }
}

console.log("array is sorted",arr)


