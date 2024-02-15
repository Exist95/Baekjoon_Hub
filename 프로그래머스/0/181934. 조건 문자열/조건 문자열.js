function solution(ineq, eq, n, m) {
switch (ineq + eq) {
        case '>=':
            return n >= m ? 1 : 0;
        case '<=':
            return n <= m ? 1 : 0;
        case '>!':
            return n > m ? 1 : 0;
        default:
            return n < m ? 1 : 0;
    }
}