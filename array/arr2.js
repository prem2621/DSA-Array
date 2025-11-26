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



// let arr = [56, 53, 49, 45, 59];
// let union = [];
// function print(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   for (let i = min; i <= max; i++) {
//     if (!arr.includes(i)) {
//       union.push(i);
//     }
//   }
//   return union;
// }
// console.log(print(arr));



// let arr = [56, 53, 49, 45, 59];

// function print(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) min = arr[i];
//     else if (max < arr[i]) max = arr[i];
//   }
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     map.set(arr[i], true);
//   }
//   let union = [];
//   for (let i = min; i <= max; i++) {
//     if (!map.has(i)) {
//       union.push(i);
//     }
//   }
//   return union;
// }
// console.log(print(arr));



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



// function print(arr) {
//   let count = 0,
//     max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       count++;
//       if (count > max) {
//         max = count;
//       }
//     } else {
//       count = 0;
//     }
//   }
//   return max;
// }
//ok but confusing the structure

// ⭐ 1️⃣ IF / IF (independent conditions)
// if(condition1){
//     ...
// }
// if(condition2){
//     ...
// }
// ✔ Both conditions will be checked.
// ✔ Both blocks can execute.
// ✔ They do NOT depend on each other.

// Meaning: two separate questions.

// Example:
// if (rain) console.log("Take umbrella");
// if (cold) console.log("Wear jacket");
// Rain + cold → both messages appear.

// In your code:

// First if checks: arr[i] === 1 
// Second if checks max logic independently. 
// So BOTH can execute in the same iteration.



// ⭐ 2️⃣ IF / ELSE IF (mutually exclusive conditions)
// if(condition1){
//     ...
// }
// else if(condition2){
//     ...
// }
// ✔ Only one block executes
// ✔ If the first if is true → else if is ignored
// ✔ If first is false → second is checked

// Meaning: choose ONE option (not multiple).


// ⭐ 3️⃣ IF / ELSE (binary choice)
// ✔ Exactly ONE will run
// ✔ Either if OR else (never both)

// function print(arr) {
//   let count = 0,
//     max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       count++;
//       if (count > max) {
//         max = count;
//       }
//     } else {
//       count = 0;
//     }
//   }
//   return max;
// }


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



// 1️⃣ for...of vs for...in
// 2️⃣ Hash object la key/value work aagura logic
// 3️⃣ hash[num]++ in depth meaning

// Na full breakdown panni romba clear-aa solren.

// ⭐ 1. Why for (let num of arr) works?

// Because:

// 👉 arr is an array
// 👉 for...of works only on iterables (arrays, strings, maps, sets)

// So:

// for (let num of arr)


// Meaning (in-depth):

// “Go through each VALUE inside arr, and assign that VALUE to num in each loop iteration.”

// Example:

// arr = [10, 20, 30]

// Iteration 1 → num = 10  
// Iteration 2 → num = 20  
// Iteration 3 → num = 30


// ⚠️ IMPORTANT
// num variable name is not special, it's just a name you choose.

// You can write:

// for (let x of arr)
// for (let element of arr)
// for (let banana of arr)


// Reason:
// arr contains values → so we store each value into a variable.

// ⭐ 2. Why not for (let num of hash)?

// Because hash is an object, not an array.

// Objects are NOT iterable, so you CANNOT do:

// for (let x of hash) ❌


// For objects, we must use:

// for (let key in hash)  // correct


// for...in works on keys of object.

// ⭐ 3. Deep explanation of hash[num]

// The moment you do:

// hash[num] = 1;


// something like this is created:

// hash = {
//    "1": 1,
//    "2": 4,
//    "7": 1,
//    "3": 2,
//    "4": 2,
//    "5": 2
// }


// ⚠️ Don’t forget:

// Object keys are always strings

// So hash[7] actually becomes hash["7"]

// ⭐ 4. What exactly happens in:
// 🔥 if (hash[num]) hash[num]++

// Let's do a dry run.

// arr = [1,1,2]

// ➤ Iteration 1: num = 1
// hash[1] → undefined  
// undefined → false  
// hash[1] = 1


// Now:

// hash = {
//    "1": 1
// }

// ➤ Iteration 2: num = 1
// hash[1] → 1 (true)
// hash[1]++ → 2


// Now:

// hash = {
//    "1": 2
// }

// ➤ Iteration 3: num = 2
// hash[2] → undefined (false)
// hash[2] = 1


// Now:

// hash = {
//    "1": 2,
//    "2": 1
// }

// ⭐ 5. "hash[num]++" — what is increasing?

// VERY IMPORTANT 👇

// 👉 hash[num]++ increments the VALUE, not the key.

// Example:

// Before: hash = { "2": 1 }
// hash[2]++  
// After: hash = { "2": 2 }


// Key stays "2"

// Value changes → 1 → 2

// ⭐ 6. Why not hash[num++]?

// Big mistake ❌

// num++ means:

// Increase the variable num

// Change the key

// NOT the count

// Example:
// num = 2

// hash[num++] = hash[2], but then num becomes 3
// This breaks everything.

// So we ONLY increase the frequency, not the number itself.

// Correct:

// hash[num]++


// Wrong:

// hash[num++] // ❌
















// let arr = [1, 1, 2, 2, 2, 2, 7, 3, 3, 4, 4, 5, 5];

// function print(arr) {
//   let map = new Map();
//   for (let num of arr) {
//     map.set(num, (map.get(num) || 0) + 1);
//   }
//   for (let [key, value] of map) {
//     if (value === 1) {
//       return key;
//     }
//   }
// }
// console.log(print(arr));

// ⭐ 3. Maps are built for iteration using for...of (iterables), not for...in

// Map is an iterable object.

// Meaning:

// for (let [key, value] of map)


// works, because Map implements:

// Symbol.iterator

// entries()

// So Map values can be iterated like an array, not like object properties.

// ⭐ 4. Technical difference (very important)
// Objects use → property enumeration

// keys stored as strings

// for...in scans those keys

// Maps use → internal ordered list

// key can be ANY type (number, object, function)

// keys are stored separately inside Map structure

// NOT part of object properties

// Therefore for...in doesn't know those keys exist.



// ChatGPT said:

// Prem brooo 🔥🔥
// Ithu un strongest question.
// Maps, objects, keys, values, prototypes — ellame in-depth ah touching.
// Na super clear-aa break panni solren.
// After this → Map fully master ayiduva! 😎

// 🌟 1. When you write:
// let map = new Map();

// Is it empty?

// YES bro — completely empty.

// BUT…

// Does it still have prototype?

// YES — every Map has a prototype (like: get, set, has, delete, etc.)

// ❗ BUT that prototype is NOT visible when iterating,
// NOT treated as keys,
// NOT conflicting with your data.

// So Map is 100% clean.

// 🌟 2. What does map.set(num, value) really do?
// Map stores values as key-value pairs:
// map.set(key, value)


// Your case:

// map.set(num, count)


// So if num = 7:

// map = {
//    7 → 1
// }


// Map automatically stores numbers as numbers (not string like object).

// 🌟 3. What does map.get(num) do?
// get() looks for the key, not the value.

// Example:

// map.get(7) → 1  
// map.get(99) → undefined  


// So when you write:

// (map.get(num) || 0) + 1


// Meaning:

// ✔ If key exists → get its value → increment
// ✔ If key doesn’t exist → treat as 0 → +1

// Example dry run:

// arr = [2,2,7]

// Iteration 1: num = 2
// map.get(2) → undefined  
// (undefined || 0) → 0  
// 0 + 1 = 1  
// map.set(2, 1)


// map = { 2 → 1 }

// Iteration 2: num = 2
// map.get(2) → 1  
// (1 || 0) → 1  
// 1 + 1 = 2  
// map.set(2, 2)


// map = { 2 → 2 }

// Iteration 3: num = 7
// map.get(7) → undefined  
// 0 + 1 = 1  
// map.set(7, 1)


// map = { 2 → 2, 7 → 1 }

// 🌟 4. Bro, your main doubt:

// “Why arr element (num) becomes the key?
// Key eppavum change aakakoodathu, right?
// Once key change aayita, we can’t track counts!”

// Correct thinking. Perfect logic.

// And yes, Map NEVER changes the key.

// When you call:

// map.set(num, something)


// num becomes the key.

// Then value (count) only changes, using:

// map.set(num, newValue)


// Key never changes.
// Values only update.

// 🌟 5. Why Map is better than object for this?
// Feature	Object	Map
// Key type	Always string	Any type (number, string, object, etc.)
// Value updates	Manually	Same
// Maintains insertion order	❌ No guarantee	✔ Yes
// Built-in functions	❌ Very few	✔ set(), get(), has(), keys(), values()
// Iteration	Hard	Easy

// So Map is more powerful.

// 🌟 6. Final mental model (IMPORTANT)

// When you do:

// map.set(num, (map.get(num) || 0) + 1)


// Think like this:

// STEP 1 → Does the number already exist as key?

// YES → Take its count

// NO → Use 0

// STEP 2 → Add 1
// STEP 3 → Store back with same key
// 🌟 7. Crystal clear summary

// map = new Map() → fully empty map with prototype methods.

// map.set(num, value) → store num as key and count as value.

// map.get(num) → retrieve count.

// (map.get(num) || 0) → if missing, default to 0.

// map.set(num, newValue) → only value updates; key never changes.

// That’s why this method is perfect for counting frequencies.

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



// ❓ MAIN DOUBT 1:
// "map-la namma value store panna male illa, eppadi complement check panrathu work aguthu?"

// Bro, first iteration la yes, map empty.
// But after every iteration, we store the element → index pair.

// Let’s dry run 💥

// Array: [2, 6, 5, 8, 11]
// Target: 14

// 🔁 ITERATION 1:

// i = 0
// arr[i] = 2
// complement = 14 - 2 = 12

// map = {}


// Check:

// map.hasOwnProperty(12) → false


// So we store:

// map[2] = 0


// Now:

// map = { 2: 0 }

// 🔁 ITERATION 2:

// i = 1
// arr[i] = 6
// complement = 14 - 6 = 8

// map is:

// { 2: 0 }


// Check:

// map.hasOwnProperty(8) → false


// Store:

// map[6] = 1


// map becomes:

// { 2:0, 6:1 }

// 🔁 ITERATION 3:

// i = 2
// arr[i] = 5
// complement = 14 - 5 = 9

// Check map.hasOwnProperty(9) → false

// Store:

// map[5] = 2


// map:

// { 2:0, 6:1, 5:2 }

// 🔁 ITERATION 4:

// i = 3
// arr[i] = 8
// complement = 14 - 8 = 6

// Check:

// map.hasOwnProperty(6) → true


// 🎉 Found a match!

// Because:

// map[6] = 1


// So we return:

// [ map[6], i ]
// [ 1, 3 ]


// ✔ Perfect answer

// ⭐ DOUBT 2:
// "map[arr[i]] = i — why arr[i] becomes KEY and i becomes VALUE?"

// This is the most important line:

// map[arr[i]] = i


// ➡ arr[i] is the element value
// ➡ i is the index

// Object literal in JS stores keys as strings, so:

// map[2] = 0
// map[6] = 1
// map[5] = 2
// map[8] = 3


// Means:

// | Key (element) | Value (index) |
// | ------------- | ------------- |
// | 2             | 0             |
// | 6             | 1             |
// | 5             | 2             |
// | 8             | 3             |


// Because we want to check complements FAST (O(1)).

// ⭐ DOUBT 3:
// "map.hasOwnProperty(complement) — how complement check works?"

// Example:

// When we are at 8, complement = 6

// map is:

// {2:0, 6:1, 5:2}


// So:

// map.hasOwnProperty(6) → TRUE


// That’s because element 6 exists earlier, with index 1.

// That's how we know:

// 6 + 8 = 14

// ⭐ DOUBT 4:
// "return [map[complement], i] — what are these?"

// 🟦 map[complement] = first element’s index
// 🟩 i = second element’s index

// Example:

// complement = 6
// map[6] = 1
// i = 3


// So:

// [1, 3]

// ⭐ EASY MEMORIZE VERSION
// 🔹 map key → element
// 🔹 map value → index
// 🔹 check complement in map
// 🔹 if found → answer
// 🔹 else store current element & index
// 🎉 Final Notes (your doubt result)

// ✔ Map will be empty only first iteration
// ✔ After that, you store values inside map
// ✔ Complement checking works because you update map on each step
// ✔ map[arr[i]] = i means
// element becomes key, index becomes value



 
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




// Great question Prem! 🔥 This is an important JavaScript concept that many people get confused about — especially when comparing Object literals {} and Map().

// Let’s break everything clean + deeply so you understand 100% 👇

// ✅ Your Example
// let obj = {} 
// obj[ {}] = "one"
// obj[2] = "two"
// console.log(obj);

// Output
// { '2': 'two', '[object Object]': 'one' }

// ✅ 1. Why object keys become strings automatically?

// In JavaScript:

// Object literal keys are ALWAYS converted to strings.

// Even if you write:

// obj[1]

// obj["1"]

// obj[{a:1}]

// obj[new Date()]

// ALL become string keys internally.

// So:

// obj[ {} ] = "one"


// The key {} becomes:

// "[object Object]"


// Because JavaScript converts it using .toString().

// That's why you get:

// '[object Object]': 'one'

// ✅ 2. Why does this also look like “insertion order is maintained”?

// You asked:

// “intha output la insertion order maintain panradhu pola iruku?”

// Yes — modern JS Objects DO preserve insertion order, but ONLY for string keys.

// But the problem is:

// ❗ Different objects become the SAME string key

// Example:

// obj[{}] = "one"
// obj[{}] = "two"
// console.log(obj)


// Output:

// { '[object Object]': 'two' }


// Because both {} become same key → "[object Object]".

// So object cannot be used when keys should be unique objects.

// ❌ This is why we do NOT use object literal as a Map

// Because:

// Keys must be strings only

// All objects → same string → collision 🔥

// You cannot store real object keys

// ✅ 3. Now compare with Map()

// In Map():

// ✔ Keys can be:

// numbers

// strings

// arrays

// objects

// functions

// symbols

// And they maintain insertion order perfectly.

// Example:

// let map = new Map();
// map.set({}, "one");
// map.set({}, "two");
// console.log(map);

// Output:
// Map(2) {
//     {} => "one",
//     {} => "two"
// }


// 💥 BOTH objects stored separately—because each object has a unique reference.




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























 




