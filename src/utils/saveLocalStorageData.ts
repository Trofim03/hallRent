export const saveLocalStorageData = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data))
}