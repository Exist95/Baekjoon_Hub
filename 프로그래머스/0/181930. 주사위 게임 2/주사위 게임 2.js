function solution(a, b, c) {
    if(a === b && b === c && a === c) return (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3)
    if(a === b || b === c || a=== c) return (a + b + c) * (a**2 + b**2 + c**2)
    return a+b+c
}

