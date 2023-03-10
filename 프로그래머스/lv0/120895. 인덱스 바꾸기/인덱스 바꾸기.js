function solution(my_string, num1, num2) {
    let answer = ''
    let num1_string = my_string[num1]
    let num2_string = my_string[num2]
    let split_string = my_string.split('')
    
    split_string[num1] = num2_string;
    split_string[num2] = num1_string;
    
    return split_string.join('');
}