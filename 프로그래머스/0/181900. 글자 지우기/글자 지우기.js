function solution(my_string, indices) {
    return [...my_string].map((a,i) => indices.includes(i) ? 0 : a).filter(a => a !== 0 ).join("")
}