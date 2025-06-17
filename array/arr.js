//FINDING THE LARGEST ELEMENT OF THE ARRAY

// let arr = [3,2,1,5,2]
// arr.sort((a,b)=>a-b)
// let n = arr.length-1    //Brute force method
// console.log(n);


// let max = arr[0]
// for(let i=1; i<arr.length-1; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max);


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//FINDING THE SECOND LARGEST ELEMENT


// let arr = [3,2,9,9,4,6,1]
// arr.sort((a,b)=>a-b)
// let n = arr.length-1
                                              //BRUTE FORCE METHOD
// for(let i=n-2; i>=0; i--){
//     if(arr[i] !== arr[n]){
//       let  second = arr[i]
//         console.log(second);    
//         break
//     }
// }


// let arr = [3, 2, 9, 9, 4, 6, 1];
// let fMax = arr[0]
// for(let i=1; i<arr.length-1; i++){
//     if(arr[i] > fMax){
//         fMax = arr[i]
//     }
// }
                                                     //better solution O(2n)
// let sMax = -1
// for(let i=0; i<arr.length-1; i++){
//     if(arr[i] > sMax && arr[i] !== fMax){
//         sMax = arr[i]
//     }
// }
// console.log(sMax);



// let arr = [3, 2, 9, 9, 4, 6, 1];
// let max = -Infinity
// let secondMax = -Infinity

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//         secondMax = max
//         max = arr[i]                     //OPTIMAL SOLUTION  O(n)
//     }
//     else if(arr[i]< max && arr[i]>secondMax){
//         secondMax = arr[i]
//     }
// }
// console.log("second Max :",secondMax);


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//CHECK IF THE ARRAY IS SORTED


// let arr = [3, 2, 9, 9, 4, 6, 1];

// let arr = [1,2,3,4,5,6]
// function isSorted(arr){
//     isAsending = true
//     isDesending = true
//     for(let i=1; i<arr.length; i++){         
//         if(arr[i] > arr[i-1]){
//             isDesending = false
//         }
//         if(arr[i] < arr[i-1]){
//             isAsending = false
//         }
//     }
//     isAsending || isDesending? console.log("The array is sorted") : console.log("the array is not sorted");
// }
// isSorted(arr)

// Time: O(n) – one loop
// Space: O(1) – only 2 flags


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//REMOVE DUPICATE FROM AN ARRAY

//BRUTE FORCE METHOD : 
// includes() has O(n) time, so this becomes O(n²) total. S(n)
// let arr = [1,1,1,2,2,2,3,3,3]
// let unique = []

// for(let i=0; i<arr.length; i++){
//     if(!unique.includes(arr[i])){
//         unique.push(arr[i])
//     }
// }
// console.log(unique);


//OPTIMAL SOLUTION (USING SET - O(n)) S(n)

//  let arr = [1,1,1,2,2,2,3,3,3]

// let unique =[...new Set(arr)]
// console.log(unique);



//EXTRIME OPTIMAL SOLUTION (USING TWO POINTER)=>O(n),S(1)

//  let arr = [1,1,1,2,2,2,3,3,3]
// let i = 0

// for(let j=1; j<arr.length; j++){
//     if(arr[i] !== arr[j]){
//         i++
//         arr[i] = arr[j]
//     }
// }
// arr.length = i+1
// console.log(arr);

// without Array.length = i+1 so we cutt the dublicate
// Original: [1,1,1,2,2,2,3,3,3]
// After loop: [1,2,3,2,2,2,3,3,3]  


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//LEFT ROTATE THE ARRAY BY ONE PLACE  T(n), S(1)=extra space ,S(1)=order to solve the problem I using the same array itself 

// let arr = [2,4,8,5,3,6]
// let temp = arr[0]
// let n = arr.length               //OPTIMAL APPROACH
// for(let i=1; i<n; i++){
//    arr[i-1] = arr[i]
// }
// arr[n-1] = temp
// console.log(arr);


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//LEFT ROTATE THE ARRAY BY D PLACE

// let  arr = [1,2,3,4,5,6,7]
// d = 6 then the arr will be [7,1,2,3,4,5,6]
// d = 7 then the arr will be [1,2,3,4,5,6,7]
// d = 18 then the arr will be [5,6,7,1,2,3,4] because 18 % 7 = 4 so it will be same as d = 4
// d = 3 then the arr will be [4,5,6,7,1,2,3]


// function isRotateBrute(arr,d){    ⏱️ Time: O(n * d)   ⏱ space: O(1) Simple, not scalable
//     let n = arr.length
//     d = d % n
//     for(let i=0; i<d; i++){
//         let first = arr.shift()   // O(n)
//         arr.push(first)
//     }
//     return arr
// }
// console.log(isRotateBrute(arr,45));
// console.log(isRotateBrute(arr,2));


// // SUPER FAST APPROACH
// function revere(arr,start,end){    // ⏱️ Time: O(n)
//     while(start < end){
//         [arr[start],arr[end]] = [arr[end],arr[start]]
//         start++
//         end--
//     }
// }

// function isLeftRotated(arr,d){
//    let n = arr.length
//    d = d % n
//    revere(arr,0,d-1)
//    revere(arr,d,n-1)
//    revere(arr,0,n-1)
//    return arr
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(isLeftRotated(arr, 3));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//RIGHT ROTATE THE ARRAY BY D PLACE

// let arr = [1,2,3,4,5,6,7]

// function isRightRotateBrute(arr,d){    // ⏱️ Time: O(n * d
//        let n = arr.length
//        d = d % n
//        for(let i=0; i<d; i++){
//         let last = arr.pop()          // removes from end
//         arr.unshift(last)             // inserts at front
//        }
//        return arr
// }
// console.log(isRightRotateBrute(arr,3));



// // SUPER FAST APPROACH
// let arr = [1,2,3,4,5,6,7]
// function reverse(arr,start,end){
//     while(start < end){
//         [arr[start],arr[end]] = [arr[end],arr[start]]
//         start++
//         end--
//     }
// }
// function isRightRotate(arr,d){
//     let n = arr.length
//     d = d % n
//     reverse(arr,n-d,n-1)
//     reverse(arr,0,n-d-1)
//     reverse(arr,0,n-1)
//     return arr
// }
// console.log(isRightRotate(arr,3));




//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// //MOVE ALL ZERO TO BE THE END OF ARRAY :

// let arr = [1,0,2,3,0,0,4,6,1,3,0,4,3]   ⏱️ Time Complexity:  O(n)
// let n = arr.length                       📦 Space Complexity: O(n)  You created two new arrays: temp and zero

// function moveZeroToEnd(arr){  
//     let temp = []              //FOR NON ZERO VALUES
//     let zero = []             // FOR ZERO VALUES
//     for(let i=0; i<n; i++){
//         if(arr[i] !== 0){
//             temp.push(arr[i])
//         }
//         else {
//             zero.push(arr[i])
//         }
//     }
//     return [...temp,...zero]
// }
// console.log(moveZeroToEnd(arr));



// function moveZeroToEndOptimal(arr) {     ⏱️ Time Complexity:  O(n)
//   let nonZeroIndex = 0;                  📦 Space Complexity: O(1)

//   // Step 1: Move all non-zero elements to front
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
        //(console.log("Step", i, ":", arr);) it a optional to display the step code approach
//       nonZeroIndex++;
//     }
//   }

//   return arr;
// }
// let arr = [1,0,2,3,0,4];
// console.log(moveZeroToEndOptimal(arr));
// // Output: [1, 2, 3, 4, 0, 0,]


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  
//    Method                      	Time Complexity	       When to use
//    .includes(val)             	O(n)	               For small arrays
//    arr[arr.length - 1] !== val	O(1)	               Best when sorted
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  





// UNION OF TWO SORTED ARRAY


// let arr1 = [1,1,2,4,5,6]
// let arr2 = [2,2,3,4,5,6,7]
// let union = [...new Set([...arr1,...arr2])]

// console.log(union);



// let arr1 = [1, 1, 2, 4, 5, 6];
// let arr2 = [2, 2, 3, 4, 5, 6, 7];
// let union = []

//BRUTE FORCE METHOD : TIME COMPLEXITY O(n*n) SPACE COMPLEXITY O(n+m)
// function unionForTwoSorted(arr1,arr2){
//   for(let i=0; i<arr1.length; i++){
//     if(!union.includes(arr1[i])){
//       union.push(arr1[i])
//     }
//   }
//   for(let i=0; i<arr2.length; i++){
//     if(!union.includes(arr2[i])){
//       union.push(arr2[i])
//     }
//   }
//   return union
// }
// console.log(unionForTwoSorted(arr1,arr2));


// OPTIMAL APPROACH : TIME COMPLEXITY O(n+m) SPACE COMPLEXITY O(n+m)
//  let arr1 = [1, 1, 2, 4, 5, 6];
//  let arr2 = [2, 2, 3, 4, 5, 6, 7];
// let union = []

// function unionForSorted(arr1,arr2){
//   let i = 0
//   let j = 0
//   while(i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//       if(union[union.length-1] !== arr1[i]){
//         union.push(arr1[i])
//       }
//       i++
//     }
//     else if(arr1[i] > arr2[j]){
//       if(union[union.length-1] !== arr2[j]){
//         union.push(arr2[j])
//       }
//       j++
//     }
//     else{
//       if(union[union.length-1] !== arr1[i]){
//         union.push(arr1[i])
//       }
//       i++
//       j++
//     }
//   }
//      while(i < arr1.length){
//       if(union[union.length-1] !== arr1[i]){
//         union.push(arr1[i])
//       }
//       i++
//      }
//     while(j < arr2.length){
//       if(union[union.length-1] !== arr2[j]){
//         union.push(arr2[j])
//       }
//       j++
//     }
//   return union
// }
// console.log(unionForSorted(arr1,arr2));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//INTERSECTION FOR TWO SORTED ARRAYS

// let arr1 = [1,2,2,3,3,4,5,6,8]
// let arr2 = [2,3,3,5,6,7,7]
// let union = []
//ouput = [2,3,5,6]

//BRUTE FORCE SOLUTION  TIME-COMPLEXITY = O(n*m) USING UNSORTED ARRAY
// function unionForSorted(arr1,arr2){
//         for(let i=0; i<arr1.length; i++){
//                 for(let j=0; j<arr2.length; j++){
//                         if(arr1[i] === arr2[j]){
//                                 if(!union.includes(arr1[i])){
//                                         union.push(arr1[i])
//                                 }
//                                 break
//                         }
//                 }
//         }
//         return union
// }
// console.log(unionForSorted(arr1,arr2));


//OPTIMAL SOLUTION     TIME-COMPLEXITY = O(n+M) USING SORTED ARRAY
// function unionForSorted(arr1,arr2){
//         let i = 0
//         let j = 0
//         while(i<arr1.length && j<arr2.length){
//                 if(arr1[i] === arr2[j]){
//                         if(union[union.length] !== arr1[i]){
//                                 union.push(arr1[i])
//                         }
//                         i++
//                         j++
//                 }
//                 else if(arr1[i] < arr2[j]){
//                         i++
//                 }
//                 else{
//                         j++
//                 }
//         }
//         return union
// }

// console.log(unionForSorted(arr1,arr2));





















// function isAmstrong(num) {
//   let numStr = String(num);
//   let power = numStr.length;
//   let sum = 0;
//   for (let ch of numStr) {
//     let digit = parseInt(ch);
//     sum += digit ** power;
//   }
//   return sum === num;
// }
// console.log(isAmstrong(45));
    
    
    
    
    