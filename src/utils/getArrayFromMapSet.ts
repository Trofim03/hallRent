export const getArrayFromMapSet = (obj: Map<any, any> | Set<any>, isMap = false): string[] => {
    if (isMap) {
        return Array.from(obj, ([name]) => name)
    }
    
    return Array.from(obj, (name) => name)
}