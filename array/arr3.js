//MAJORITY ELEMENT  (N/2) TIMES

// let arr = [2,2,3,3,1,2,2]
 //              BRUTE FORCE METHOD    ⏱️ Time Complexity:  O(n*n)    📦 Space Complexity: O(1) 
// function findMajority(arr){
//     let n = arr.length
//     let half = Math.floor(n/2)
//     for(let i=0; i<n; i++){
//         let count = 0
//       for(let j=0; j<n; j++){
//         if(arr[i] === arr[j]){
//             count++
//         }
//       }  
//       if(count > half){
//         return arr[i]
//       }
//     }
//     return "No majority"
// }
// console.log(findMajority(arr));



// let arr = [2, 2, 3, 3, 1, 2, 2];
// function findMajority(arr) {
//   let map = new Map();
//   let n = arr.length;
//   let half = Math.floor(n / 2);

//   for (let i = 0; i < n; i++) {
//     if (map.has(arr[i])) {
//       map.set(arr[i], map.get(arr[i]) + 1);
//     } else {
//       map.set(arr[i], 1);
//     }

//     if (map.get(arr[i]) > half) {
//       return arr[i];
//     }
//   }
//   return "No Majority Element";
// }
// console.log(findMajority(arr));


//Boyer-Moore algorithm



//MOST VOTING ALGORITHM
// 👉 Most Voting Algo = Boyer-Moore Majority Vote Algo = Same!
// let arr = [7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5]

// function findMajority(arr){
//   let n = arr.length
//   let count = 0
//   let element = 0
//   for(let i=0; i<n; i++){
//     if(count === 0){
//       element = arr[i]
//       count = 1
//     }
//     else if(arr[i] === element){
//       count++
//     }
//     else{
//       count--
//     }
//   }
//   let occur = 0
//   for(let i=0; i<n; i++){
//     if(arr[i] === element){
//       occur++
//     }
//     if(occur > Math.floor(n/2)){
//       return element
//     }
//   }
//   return "No Majority Element"
// }

// console.log(findMajority(arr));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//MAXIMUM SUBARRAY SUM  
// let arr = [-2,-3,4,-1,-2,1,5,-3]

// function maxSubArray(arr){  //BRUTE FORCE METHOD   ⏱️ Time Complexity:  O(n*n)
//     let n = arr.length
//     let maxSum = -Infinity
//     for(let i=0; i<n; i++){
//         let count = 0
//         for(let j=i; j<n; j++){
//             count += arr[j]
//             maxSum = Math.max(count,maxSum)
//         }
//     }
//     return maxSum
// }
// console.log(maxSubArray(arr));



// let arr = [-2,-3,4,-1,-2,1,5,-3]  //[KADANE'S ALGORITHM]  //⏱️ Time Complexity:  O(n)  📦 Space Complexity = 1

// function maxSubArrSum(arr){
//     let n =arr.length
//     let sum = arr[0]
//     let maxSum = arr[0]
//     for(let i=1; i<n; i++){
//         sum += arr[i]
//         if(sum < 0){
//             sum = 0
//         }
//         if(sum > maxSum){
//             maxSum = sum
//         }
//     }
//     return maxSum
// }
// console.log(maxSubArrSum(arr));



// let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

// function maxSumArrSum(arr){
//     let n = arr.length
//     let sum = 0
//     let maxSum = 0
//     for(let i=1; i<n; i++){
//         sum = Math.max(arr[i],sum+arr[i])
//         maxSum = Math.max(maxSum,sum)
//     }
//     return maxSum
// }
// console.log(maxSumArrSum(arr));


// let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

// function maxSubArraySum(arr) {
//   let n = arr.length;
//   let maxSum = arr[0];
//   let sum = arr[0];
//   let start = 0; // subarray start index
//   let end = 0; // subarray end index
//   let tempStart = 0; // temp start when resetting

//   for (let i = 1; i < n; i++) {
//     if (arr[i] > sum + arr[i]) {
//       sum = arr[i];
//       tempStart = i; // new subarray start
//     } else {
//       sum += arr[i];
//     }

//     if (sum > maxSum) {
//       maxSum = sum;
//       start = tempStart;
//       end = i;
//     }
//   }

//   console.log("Maximum Sum:", maxSum);
//   console.log("Subarray:", arr.slice(start, end + 1));
// }

// maxSubArraySum(arr);



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//REARRANGE ARRAY ELEMENTS BY SIGN

// let arr = [3,2,-2,-7,-5,5,8,-2,7,8]

// function reArrange(arr){   //BRUTE FORCE METHOD
//   let pos = []
//   let neg = []
//   for(let num of arr){
//     if(num >=0){
//       pos.push(num)
//     }
//     else{
//       neg.push(num)
//     }
//   }
//   let ans = []
//   let i = 0
//   while(i < pos.length && i< neg.length){
//     ans.push(pos[i])
//     ans.push(neg[i])
//     i++
//   }
//   while(i < pos.length){
//     ans.push(pos[i])
//     i++
//   }
//   while(i < neg.length){
//     ans.push(pos[i])
//     i++
//   }
//   return ans
// }
// console.log(reArrange(arr));



// let arr = [3,5,-1,-3,7,4,-3,-1]

// function reArrange(arr){
//   let n = arr.length
//   let ans = new Array(n)
//   let posIndex = 0
//   let negIndex = 1
//   for(let num of arr){
//     if(num >= 0){
//       ans[posIndex] = num
//       posIndex += 2
//     }
//     else{
//       ans[negIndex] = num
//       negIndex += 2
//     }
//   }
//   return ans
// }
// console.log(reArrange(arr));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//NEXT PERMUTATION   //⏱️ Time Complexity:  O(n)  📦 Space Complexity = 1

// let arr = [2,1,5,4,3,0,0]

// function permutation(arr){
//     let n = arr.length
//     let index = -1
//     for(let i=n-2; i>=0; i--){
//         if(arr[i] < arr[i+1]){
//             index = i
//             break
//         }
//     }
//     if(index === -1){
//         return arr.reverse()    
//     }
//     for(let i=n-1; i>index; i--){
//         if(arr[index]< arr[i]){
//             [arr[index],arr[i]] = [arr[i],arr[index]]
//             break
//         }
//     }
//     let start = index+1
//     let end = n-1
//     while(start < end){
//         [arr[start],arr[end]] = [arr[end],arr[start]]
//         start++
//         end--
//     }
//     return arr
// }
// console.log(permutation(arr));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//LEADERS OF THE ARRAY

//INPUT : [10,22,12,3,0,6]          OUTPUT : [22,12,6]

// let arr = [10,22,12,3,0,6]

// function leaders(arr){   // BRUTE FORCE METHOD   ⏱️ Time Complexity:  O(n)  📦 Space Complexity = 1
//        let n = arr.length
//        let ans = []
//     for(let i=0; i<n; i++){
//         let lead = true
//         for(let j=i+1; j<n; j++){
//             if(arr[i] < arr[j]){
//                 lead = false
//                 break
//             }
//         }
//         if(lead === true){
//             ans.push(arr[i])
//         }
//     }
//     return ans
// } 
// console.log(leaders(arr));



// let arr = [10, 22, 12, 3, 0, 6];

// function leaders(arr){
//     let n = arr.length
//     let max = -Infinity
//     let ans = []
//     for(let i=n-1; i>=0; i--){
//          if(arr[i] >= max){
//             ans.push(arr[i])
//             max = arr[i]
//          }
//     }
//     return ans
// }
// console.log(leaders(arr));



// let arr = [10, 22, 12, 3, 0, 6];   //OPTIMAL APPROACH

// function leader(arr){
//     let n = arr.length
//     let max = -Infinity
//     let ans = []
//     for(let i=n-1; i>=0; i--){
//         if(arr[i] > max){
//             ans.push(max)
//             max = arr[i]
//         }
//     }
//     return ans
// }
// console.log(leader(arr));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//SET MATRIX ZEROES - 0

// let arr=[ [1,1,1,1],
//           [1,1,0,1],
//           [1,0,0,1],
//           [1,1,1,1]   ]
//output  arr = [
//   [1, 0, 0, 1],   //⏱️ Time Complexity:  O((n*m)*(n+m)+(n*m))  📦 Space Complexity = n
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [1, 0, 0, 1],
// ];

// function matrix(arr){
//     let n = arr.length
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             if(arr[i][j] === 0){
//                 matrixRow(arr,i)      //--------> n
//                 matrixColoum(arr,j)   //--------> m
//             }
//         }
//     }
//     for(let i=0; i<n; i++){           //--------> n*m
//         for(let j=0;  j<n; j++){
//             if(arr[i][j] === -1){
//                 arr[i][j] = 0
//             }
//         }
//     }
//     return arr
// }
// function matrixRow(arr,i){          //-------------> n
//      let n= arr.length
//      for(let j=0; j<n; j++){
//         if(arr[i][j] !== 0){
//             arr[i][j] = -1
//         }
//      }
// }
// function matrixColoum(arr,j){      //-------------->m
//     let n = arr.length
//     for(let i=0; i<n; i++){
//         if(arr[i][j] !== 0){
//             arr[i][j] = -1
//         }
//     }
// }
// console.log(matrix(arr));



//OPTIMAL     //  //⏱️ Time Complexity:  O(2*(n*m))  📦 Space Complexity = o(n) + o(m)

// function matrix(arr){
//     let n = arr.length
//     let m = arr[0].length
//     let zeroRow = new Array(n).fill(0)
//     let zeroColoum = new Array(m).fill(0)
//     for(let i=0; i<n; i++){
//        for(let j=0; j<m; j++){
//          if(arr[i][j] === 0){
//             zeroRow[i] = 1
//             zeroColoum[j] = 1
//          }
//     }
// }

//     for(let i=0; i<n; i++){
//         for(let j=0; j<m; j++){
//             if(zeroRow[i] === 1 || zeroColoum[j] === 1){
//                 arr[i][j] = 0
//             }
//         }
//     }
//     return arr
// }
// console.log(matrix(arr));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//ROTATE MATRIX IMAGE BY 90 DEGREES


// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10, 11,12],
//     [13,14,15,16]
// ]
// OUTPUT  :   let arr = [
//             [13,9,5,1]
//             [14,10,6,2]
//             [15,11,7,3]
//             [16,12,8,4]
// ]

//BRUTE FORCE METHOD       ⏱️ Time Complexity:  O(n*n)    📦 Space Complexity: O(n*n) 
// function rotateMatrix(arr){
//      let n = arr.length
//      let ans = new Array(n).fill(0).map(()=>new Array(n).fill(0))
//      for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             ans[j][n-1-i] = arr[i][j]
//         }
//      }
//      return ans
// }
// console.log(rotateMatrix(arr));


// function rotateMatrix(arr){
//     let n = arr.length
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
//             [arr[i][j],arr[j][i]] = [arr[j][i],arr[i][j]]
//         }
//     }
//     for(let i=0; i<n; i++){
//         arr[i].reverse()
//     }
//     return arr
// }
// console.log(rotateMatrix(arr));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//SPIRAL TRAVERSAL MATRIX ARRAY

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10, 11,12],
//     [13,14,15,16]
// ]

// function spiral(arr){
//     let n = arr.length      //row
//     let m = arr[0].length   //colunm
//     let top = 0
//     let left = 0
//     let bottom = n-1
//     let right = m-1
//     let ans = []
//     while(top <= bottom && left <= right){
//     for(let i=left; i<=right; i++){
//         ans.push(arr[top][i])
//     }
//     top++
//     for(let i=top; i<=bottom; i++){
//         ans.push(arr[i][right])
//     }
//     right--
//     for(let i=right; i>=left; i--){
//         ans.push(arr[bottom][i])
//     }
//     bottom--
//     for(let i=bottom; i>=top; i--){
//         ans.push(arr[i][left])
//     }
//     left++
// }
//     return ans
// }
// console.log(spiral(arr));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//COUNT SUBARRAY SUM EQUALS K

// let arr = [1,2,3,-3,1,1,1,4,2,-3]
// POSSIBILITY [[1,2], [1,2,3,-3], [3], [2,3,-3,1], [3,-3,1,1,1], [1,1,1], [4,2,-3], [-3,1,1,1,4,2,-3]]
// let k = 3

// function countSubArray(arr,k){
//     let n = arr.length
//     let count = 0
//     for(let i=0; i<n; i++){
//         let sum = 0
//        for(let j=i; j<n; j++){
//             sum += arr[j]
//             if(sum === k){
//                 count++
//             }
//        }
//     }
//     return count
// }
// console.log(countSubArray(arr,3));





