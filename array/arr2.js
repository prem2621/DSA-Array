//FIND THE MISSING NUMBER   ⏱️ Time Complexity:  O(n*n)    📦 Space Complexity: O(1) 

//BRUTE FORCE METHOD :
// let arr = [1,2,3,5,6,7]
// function missing(arr){
//     for (let i = 1; i <= arr.length; i++) {
//       let find = 0;
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[j] === i) {
//           find = 1;
//           break;
//         }
//       }
//       if (find === 0) {
//         return i;
//       }
//     }
// }
// console.log(missing(arr));

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Example 1: Sum
// [1, 2, 3].reduce((acc, num) => acc + num, 0); // ✅ 0 is identity for sum

// Example 2: Product
// [1, 2, 3].reduce((acc, num) => acc * num, 1); // ✅ 1 is identity for multiplication

// Example 3: Empty array handling
// [].reduce((acc, num) => acc + num, 0); // ✅ safe with initial value

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//OPTIMAL APPROACH : ⏱️ Time Complexity:  O(n)    📦 Space Complexity: O(1) 
// let arr = [1,2,3,4,6,7,8]

// function missing(arr){
//     let n = arr.length+1
//     let expectedSum = (n*(n+1))/2
//     let actualSum = arr.reduce((a,b)=>a+b,0)
//     return expectedSum-actualSum
// }
// console.log(missing(arr));

//without reduce
// function missing(arr){
//     let n = arr.length+1
//     let expectedSum = (n*(n+1))/2
//     let actualSum = 0
//     for(let i=0; i<arr.length; i++){
//         actualSum += arr[i]
//     }
//     return expectedSum-actualSum
// }
// console.log(missing(arr));


//OPTIMAL APPROACH : ⏱️ Time Complexity:  O(n)    📦 Space Complexity: O(1) 
// (XOR) METHOD :
// let arr = [1, 2, 4, 5, 6];

// function missing(arr) {
//   let n = arr.length + 1;
//   let xor1 = 0;
//   let xor2 = 0;
//   for (let i = 1; i <= n; i++) {
//     xor1 = xor1 ^ i;
//   }
//   for (let j = 0; j < arr.length; j++) {
//     xor2 = xor2 ^ arr[j];
//   }
//   return xor1 ^ xor2;
// }
// console.log(missing(arr));



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//FOR MULTIPLE MISSING NUMBER   ✅ Works for multiple missing ✅ O(n) time, O(n) space

// let arr = [1,2,4,6,7,8]
// function findMissing(arr,n){
//     let present = new Set(arr)
//     let missing = []
//     for(let i=1; i<=n; i++){
//         if(!present.has(i)){
//             missing.push(i)
//         }
//     }
//     return missing

// console.log(findMissing(arr,8));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//MAXIMUM CONSECUTIVE ONES

// let arr = [1,0,1,1,1,1,0,0,1,1,1]

// function maxConsecutiveOnes(arr){
//     let max = 0
//     let count = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === 1){
//             count++
//         }
//         else{
//             max = Math.max(max,count)
//             count = 0
//         }
//     }
//     return max
// }
// console.log(maxConsecutiveOnes(arr)); //output : 4


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//MAXIMUM CONSECUTIVE ONES WITH NEGATIVE NUMBERS

// let arr = [1, 1, -1, 1, 1, 1, 0, 1];

// function maxConsecutiveOnes(arr){
//     let max = 0
//     let count = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === 1){
//             count++
//         }
//         else{
//             max = Math.max(max,count)
//             count = 0
//         }
//     }
//     return max
// }
// console.log(maxConsecutiveOnes(arr));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//FIND THE NUMBER WITHOUT TWICE

// let arr = [1,1,2,2,2,2,7,3,3,4,4,5,5]
// //BRUTE FORCE APPROACH METHOD : ⏱️ Time Complexity:  O(n*n)    📦 Space Complexity: O(n) 
// function twice(arr){
//     for(let i=0; i<arr.length; i++){
//         let num = arr[i]
//         let count = 0
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] === num){
//                 count++
//             }
//         }
//         if(count === 1){
//             return arr[i]
//         }
//     }
// }
// console.log(twice(arr));



// let arr = [1, 1, 2, 2, 2, 2, 7, 3, 3, 4, 4, 5, 5];
// //OPTIMAL APPROACH METHOD : ⏱️ Time Complexity:  O(n)    📦 Space Complexity(1):
// function findSingle(arr){
//     let hash = {}
//     for(let num of arr){
//         if(hash[num]){
//             hash[num]++
//         }
//         else{
//             hash[num] = 1
//         }
//     }
//     for(let num in hash){
//         if(hash[num] === 1){
//             return Number(num)
//         }
//     }
// }
// console.log(findSingle(arr));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//LONGEST SUBARRAY WITH SUM K

// let arr = [1,2,3,1,1,1,1,4,2,2,1]

//BRUTE FORCE APPROACH METHOD : ⏱️ Time Complexity:  O(n*n)    📦 Space Complexity = 1
// function longestSubarray(arr,k){
//     let maxLen = 0
//       for(let i=0; i<arr.length; i++){
//         let sum = 0
//         for(let j=i; j<arr.length; j++){
//             sum += arr[j]
//             if(sum === k){
//                 maxLen = Math.max(maxLen,j-i+1)
//             }
//             if(sum > k){     //Inime unga brain la oru concept fixed:"Break optimization = Only for positive arrays!" ✅
//                 break
//             }
//         }
//       }
//       return maxLen
// }
// console.log(longestSubarray(arr,5));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//TWO SUM PROBLEM :
// let arr = [2,6,5,8,11]
// target = 14
//BRUTE FORCE METHOD :  ⏱️ Time Complexity:  O(n*n)
// function twoSum(arr,target){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i; j<arr.length; j++){
//            if(i === j) continue
//             if(arr[i] + arr[j] === target){
//                 return [i,j]
//             }
//             else if(arr[i]+arr[j] > target){
//                 break
//             }
//         }
//     }
//     return "No solution"
// }
// console.log(twoSum(arr,target));



// let arr = [2,6,5,8,11]
// target = 14
// //BETTER SOLUTION :⏱️ Time Complexity:  O(n)  📦 Space Complexity = N
// function twoSum(arr,target){  
//     let map = {}
//     for(let i=0; i<arr.length; i++){
//         let complement = target - arr[i]

//      if(map.hasOwnProperty(complement)){
//         return [map[complement],i]
//      }   
//      map[arr[i]] = i
//     }
//     return "no solution"
// }
// console.log(twoSum(arr,14));



//  let arr = [2, 6, 8, 5, 11];  //SORTED ARRAY
//  target = 14;
// function twoSum(arr,target){  //⏱️ Time Complexity:  O(n)  📦 Space Complexity = n
//     let n = arr.length
//     let i = 0
//     let j = n-1
//     while(i < j){
//         if(arr[i] + arr[j] === target){
//             return [i,j]
//         }
//         if(arr[i] + arr[j] < target){
//             i++
//         }
//         if(arr[i] + arr[j] > target){
//             j--
//         }
//     }
// }
// console.log(twoSum(arr,14));

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let obj = {};
// obj[1] = "one";
// obj[{}] = "empty object";
// console.log(obj); 
// // Output: { '1': 'one', '[object Object]': 'empty object' } ❌

// let map = new Map();
// map.set(1, "one");
// map.set({}, "empty object");
// console.log(map);
// // Output: Map(2) { 1 => 'one', {} => 'empty object' } ✅

// → In object, everything becomes string.
// → In Map, key can be real object also!


// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);

// for (let [key, value] of map) {
//     console.log(key, value);
// }
// Output:
// a 1
// b 2


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//  let arr = [2, 6, 8, 5, 11]; 
//  target = 14;

// function twoSum(arr,target){
//     let map = new Map()
//     let n = arr.length
//     for(let i=0; i<n; i++){
//         map.set(arr[i],i)
//     }
//     arr.sort((a,b)=>a-b)
//     let i = 0
//     let j = n-1 
//     while(i < j){
//         if(arr[i] + arr[j] === target){
//             return [map.get(arr[i],i),map.get(arr[j],j)]
//         }
//         if(arr[i] + arr[j] > target){
//             j--
//         }
//         if(arr[i] + arr[j] < target){
//             i++
//         }
//     }
//     return "No solution"
// }
// console.log(twoSum(arr,14));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Situation                                        |           Correct Usage

// Conditions are exclusive (only one true)         |       ✅ Must use else if
// Conditions are independent (multiple true)       |       ✅ Use separate if
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Question               |         Answer

// Inventor               |         Edsger W. Dijkstra (Dutch Scientist 🇳🇱)
// Purpose                |         Sorting 3 types of things efficiently
// Real-world example     |         Netherlands national flag colors sorting: (Red, White, Blue)
// Use Case               |         Partition arrays, solve 3-type classification problems (e.g., 0,1,2)
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//SORT AN ARRAY OF 0,1 AND 2

// let arr = [0,1,2,0,1,2,1,2,0,0,0,1]

// function sortArray(arr){       //  ⏱️ Time Complexity:  O(n*n)  
//     let count_0 = 0
//     let count_1 = 0
//     let count_2 = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === 0){
//             count_0++
//         }
//         else if(arr[i] === 1){
//             count_1++
//         }
//         else{
//             count_2++
//         }
//     }
//     for(let i=0; i<count_0; i++){
//         arr[i] = 0
//     }
//     for(let i=count_0; i<count_0+count_1; i++){
//         arr[i] = 1
//     }
//     for(let i=count_0+count_1; i<arr.length; i++){
//         arr[i] = 2
//     }
//     return arr
// }
// console.log(sortArray(arr));



//  let arr = [0,1,2,0,1,2,1,2,0,0,0,1]
// //                                            Dutch National Flag Algorithm 🇳🇱
// function sortArray(arr){       //  ⏱️ Time Complexity:  O(n)            📦 Space Complexity = 1
//        let low = 0
//        let mid = 0
//        let high = arr.length-1
//     while(mid <= high){
//            if(arr[mid] === 0){
//         [arr[low],arr[mid]] = [arr[mid],arr[low]]
//         mid++
//         low++
//        }
//        else if(arr[mid] === 1){
//         mid++
//        }
//        else{
//         [arr[mid],arr[high]] = [arr[high],arr[mid]]
//         high--
//        }
//     }
//     return arr
// }
// console.log(sortArray(arr));


// let arr = [1,2,1,0,3,3,1,0,2,1,3,1]
// function sortArray(arr){
//     let low = 0
//     let mid = 0
//     let high = arr.length-1
//     while(mid <= high){
//         if(arr[mid] === 0){
//             [arr[low],arr[mid]] = [arr[mid],arr[low]]
//             low++
//             mid++
//         }
//         else if(arr[mid] === 1){
//             mid++
//         }
//         else if(arr[mid] === 2){
//             mid++
//         }
//         else{
//             [arr[mid],arr[high]] = [arr[high],arr[mid]]
//             high--
//         }
//     }
//     return arr
// }
// console.log(sortArray(arr));


// let arr = [0, 1, 2, 4, 3, 2, 1, 4, 0, 3, 2, 1];
// function sortedArray(arr){
//     let low0 = 0
//     let low1 = 0
//     let mid  = 0
//     let high1 = arr.length-1
//     let high2 = arr.length-1
//     while(mid <= high2){
//         if(arr[mid] === 0){
//             [arr[mid],arr[low0]] = [arr[low0],arr[mid]]
//             if(low0 < low1){
//                 [arr[mid],arr[low1]] = [arr[low1],arr[mid]]
//             }
//             low0++
//             low1++
//             mid++
//         }
//         else if(arr[mid] === 1){
//             [arr[mid],arr[low1]] = [arr[low1],arr[mid]]
//             low1++
//             mid++
//         }
//         else if(arr[mid] === 2){
//             mid++
//         }
//         else if(arr[mid] === 3){
//             [arr[mid],arr[high1]] = [arr[high1],arr[mid]]
//             high1--
//             if(mid > high1) mid++
//         }
//         else if(arr[mid] === 4){
//             [arr[mid],arr[high2]] = [arr[high2],arr[mid]]
//            high2--
//             if(mid > high2) break
//         }
//     } 
//     return arr
// }
// console.log(sortedArray(arr));
// output : [0, 0, 1, 1, 1, 2, 2, 2, 4, 4, 3, 3];


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&























//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&





