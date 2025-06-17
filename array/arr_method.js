//INCLUDES
// arr.includes(x)

// function includes(arr,x){
//     let n = arr.length
//     for(let i=0; i<n; i++){
//         if(arr[i] === x){
//             return true
//         }
//     }
//     return false
// }


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//MAX
// function max(arr){
//     let max = -Infinity
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//MIN
// function minimum(arr){
//     let min = Infinity
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min
// }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//REVERSE

// function reverse(arr){
//     let start = 0
//     let end = arr.length-1
//     while(start < end){
//         [arr[start],arr[end]] = [arr[end],arr[start]]
//         start++
//         end--
//     }
//     return arr
// }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//PUSH

// function push(arr,x){
//      arr[arr.length] = x
//      return arr
// }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// //POP
// let arr = [3,5,7,8,64,2]
// function pop(arr){
//     if(arr.length === 0) return undefined
//     let last = arr[arr.length-1]
//     arr.length = arr.length-1
//     return [arr,last]
// }
// console.log(pop(arr));
// console.log(pop(arr));

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//SHIFT

// let arr = [23,5,7,8,5]

// function shift(arr){
//     if(arr.length === 0) return undefined
//     let first = arr[0]
//     for(let i=0; i<arr.length; i++){
//         arr[i] = arr[i+1]
//     }
//     arr.length = arr.length-1
//     return [first,arr]
// }
// console.log(shift(arr));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//UNSHIFT

// let arr = [23,5,7,8,5]

// function unshift(arr,x){
//     for(let i=arr.length; i>0; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0] = x
//     return arr
// }
// console.log(unshift(arr,100));


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



