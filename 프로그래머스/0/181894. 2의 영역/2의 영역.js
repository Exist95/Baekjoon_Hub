function solution(arr) {
    let first = arr.indexOf(2)
    let last = arr.lastIndexOf(2)
    return arr.slice(first, last+1).length < 1 ? [-1] : arr.slice(first, last+1)
}