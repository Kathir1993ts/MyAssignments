let s = "Hello World"
let word = s.trim().split (" ")
let lastword = word[word.length-1]
console.log ("The last word is "+lastword+" with length " +lastword.length)

let s1 = "fly me to the moon "
let word1 = s1.trim().split (" ")
let lastword1 = word1[word1.length-1]
console.log ("The last word is "+lastword1+" with length " +lastword1.length)

isAnagram('listen', 'silent')
isAnagram('hello', 'world')

function isAnagram(s2, s3) {
    let word2 = s2
    let word3 = s3
    s2 = s2.toLowerCase().split('').sort().join('')
    s3 = s3.toLowerCase().split('').sort().join('')
    if(s2 === s3)
    {
      console.log("The words "+word2+" and "+word3+" is a Anagram");
    }else{
        console.log("The words "+word2+" and "+word3+" is not a Anagram");
          }
    }

