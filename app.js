
// 26-masala

// function commonElements(a,b) {
//    let result = []
//     for (let i = 0; i < a.length; i++) {
//         for(let j = 0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 result.push(a[i])
//             }
//         }
//     }
//     console.log(result)
// }
//
// commonElements([1, 2, 3, 4], [3, 4, 5, 6])




// 27-masala
// commonCharacters("hello", "world");
// function commonCharacters(str1, str2) {
//    let result = '';
//    for (let i = 0; i < str1.length; i++) {
//        for (let j = 0; j < str2.length; j++) {
//            if(str1[i] === str2[j] && !result.includes(str1[i])) {
//                result += str1[i];
//            }
//        }
//    }
//     console.log(result)
// }
//
// commonCharacters("hello", "world");




// 28-masala
// function symmetricDifference(arr1, arr2) {
//    return arr1
//        .concat(arr2)
//        .filter(item => !arr1.includes(item) || !arr2.includes(item))
// }
//
// console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]






// 29-masala
// function calculatePercentages(arr) {
//
// }
//
// console.log(calculatePercentages([1, -2, 0, 4, -5, 6, 0]));
// // {positive: 42.86, negative: 28.57, zero: 28.57}



// 30-masala
// function uniqueCharacters(str) {
//         let res = '';
//         let obj = {};
//         for(let item of str) {
//             if(!obj[item]){
//                 obj[item] = true;
//                 res += item;
//             }
//         }
//         return res;
// }
//
// console.log(uniqueCharacters("hello world")); // "helo wrd"




// 31-masala
// function findPairs(arr, target) {
//     let sum = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if(target == arr[i] + arr[j]) sum.push([arr[i],arr[j]]);
//         }
//     }
//     return sum;
// }
//
// console.log(findPairs([1, 2, 3, 4, 5], 6));



// 32-masala
// function squareNumbers(arr) {
//   return arr.map(item => Math.pow(item,2));
// }
//
// console.log(squareNumbers([1, 2, 3, 4, 5]));




// 33-masala

// function Palindrome(num) {
//     let str = num.toString();
//     let rever = str.split('').reverse().join('');
//     return str === rever;
// }
// function countPalindromNumbers(start, end) {
//    let palidroms =  [];
//    for(let i = start; i < end; i++) {
//        if(Palindrome(i)){
//            palidroms.push(i);
//        }
//    }
//    return palidroms;
// }
//
// let result = countPalindromNumbers(1, 100);
// console.log("Palindrom sonlar", result);
// console.log("Palindrom sonlar soni:", result.length, "ta")




// 34-masala
// function joinWithCommas(arr) {
//     let res = arr.join(", ");
//     return res;
// }
//
// console.log(joinWithCommas([1, 2, 3, 4, 5])); // "1, 2, 3, 4, 5"