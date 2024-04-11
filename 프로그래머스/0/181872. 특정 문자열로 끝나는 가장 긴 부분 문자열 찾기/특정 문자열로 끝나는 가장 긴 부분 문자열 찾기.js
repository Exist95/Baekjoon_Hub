function solution(myString, pat) {
    const s = myString.lastIndexOf(pat)
    return myString.slice(0,s+pat.length)
}