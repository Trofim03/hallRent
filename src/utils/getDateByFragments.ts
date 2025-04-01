export const getDateByFragments = (date: Date) => {
    const valueYear = date.getFullYear()
    const valueMonth = date.getMonth()
    const valueDate = date.getDate()
    const valueHours = date.getHours()
    const valueMinutes = date.getMinutes()
    const valueSeconds = date.getSeconds()

    return [
        valueYear, 
        valueMonth, 
        valueDate, 
        valueHours,
        valueMinutes, 
        valueSeconds
    ]
}