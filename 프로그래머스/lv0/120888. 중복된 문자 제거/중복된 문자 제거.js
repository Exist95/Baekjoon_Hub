function solution(my_string) {
    let splitString = my_string.split(''); 
    const setString = new Set(splitString)
    return [...setString].join('')
}