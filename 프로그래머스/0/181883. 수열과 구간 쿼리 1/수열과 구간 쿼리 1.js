function solution(arr, queries) {
    queries.map(x => {
        for(i=x[0]; i<=x[1]; i++){
            arr[i]++;
        }
    })
    return arr;
}