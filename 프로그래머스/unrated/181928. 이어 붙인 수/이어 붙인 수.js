function solution(num_list) {
    let even='', odd='';
    num_list.map(x => x%2===1 ? odd+=x : even+=x)
    return Number(odd)+Number(even);
}