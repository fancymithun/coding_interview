const isAnagram = (s,t) => {
    if(s.length != t.length) return false

    let map = checkFrequency(s,new Map())
    let result = subtractFrequency(t,map)

    if(typeof result === "object"){
        for(let [char,count] of map){
            const isEmpty = count === 0
            if(!isEmpty) return false
        }
        return true
    }else{
        return false
    }
} // Time O(n) Space O(n)

const subtractFrequency = (t,map) => {
    for(let char of t){
        if(map.has(char)){
            map.set(char,map.get(char) - 1)
        }else{
            return false
        }
    }
    return map
} // Time O(n) Space O(n)


const checkFrequency = (s,map) => {
    for(let char of s){
        if(map.has(char)){
            map.set(char,map.get(char) + 1)
        }else{
            map.set(char,1)
        }
    }
    return map
} // Time O(n) space O(n)

let result = isAnagram("hellk","olleh")
console.log(result)

//Here first apporoach could be sorting whole thing and check whether anagram or not this n logn approach first we need to talk about this
// approach later we need to explain above appoach and write code