function solution(date1, date2) {
    const [year1, month1, day1] = date1
    const [year2, month2, day2] = date2
    
    if(year1 !== year2) return year1 < year2 ? 1 : 0
    if(month1 !== month2) return month1 < month2 ? 1 : 0
    if(day1 !== day2) return day1 < day2 ? 1 : 0
    return 0
}