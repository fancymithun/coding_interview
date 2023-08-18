// var groupAnagrams = (words) => {
//     let map = new Map()

//     map = filterWords(words,map) /* Time O(N * (K * log(K)) | Space O(N * K) */

//     return [...map.values()] // Time O(n) | Space O(n * k)
// }

// var filterWords = (words,map) => {
//     for(let word of words){
//         let sorted = reorder(word)
//         var array = map.get(sorted) || []
//         array.push(word)
//         map.set(sorted,array)
//     }

//     return map
// } // O(N * (K * log(K))) | Space O(K)

// var reorder = (word) => {
//     let sorted = word
//     .split("")  // O(K) | space O(K)
//     .sort()     // O(K * log(K)) | space O(logK)
//     .join("")   // O(K) | space O(k)
//     return sorted
// }



// Optimized version of above version

/* Time O(N * K) | Space O(N * K) */

var groupAnagrams = (words) => {
    let map = putInProperBucket(words,new Map())
    return [...map.values()]
}

var putInProperBucket = (words,map) => {
    for(let word of words){
        let hash = createHash(word)
        array = map.get(hash) || []
        array.push(word)
        map.set(hash,array)
    }

    return map
    
}

var createHash = (word) => {
    let frequencyArray = new Array(26).fill(0)
    for(let char of word){
        let fill = getDifference(char)
        frequencyArray[fill]++
    }
    return frequencyArray.toString()
}

var getDifference = (char) => {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
}

let result = groupAnagrams(["eat","tea","tan","ate","nat","bat"])
console.log(result);  /* Time O(N * (K * log(K)) | Space O(N * K) */